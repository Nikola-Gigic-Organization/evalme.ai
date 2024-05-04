import { ListConfig, graphql, list } from "@keystone-6/core";
import { type Lists, type Context } from ".keystone/types";
import { allowAll } from "@keystone-6/core/access";
import {
  relationship,
  text,
  timestamp,
  virtual,
} from "@keystone-6/core/fields";
import { getSessionOrFail } from "../lib";

enum TopicProgressStatus {
  NotStarted = "NotStarted",
  InProgress = "InProgress",
  Completed = "Completed",
}

export const Topic: ListConfig<Lists.Topic.TypeInfo> = list({
  access: allowAll,
  fields: {
    slug: text({ validation: { isRequired: true }, isIndexed: "unique" }),
    title: text({ validation: { isRequired: true } }),
    description: text({}),
    questions: relationship({
      ref: "TopicQuestion.topic",
      many: true,
      ui: {
        createView: { fieldMode: "edit" },
        itemView: { fieldMode: "edit" },
      },
    }),
    viewerAnsweredQuestions: virtual({
      field: (lists) =>
        graphql.field({
          type: graphql.list(lists.UserAnswer.types.output),
          resolve: async (item, args, context) => {
            const userId = getSessionOrFail(context);
            const userAnswers = await context.prisma.userAnswer.findMany({
              where: {
                OR: [
                  {
                    userId,
                  },
                  {
                    user: {
                      oAuthId: userId,
                    },
                  },
                ],
                question: {
                  topicId: item.id,
                },
              },
            });

            return userAnswers;
          },
        }),
      ui: {
        listView: {
          fieldMode: "hidden",
        },
        itemView: {
          fieldMode: "hidden",
        },
      },
    }),
    viewerAnsweredQuestionsCount: virtual({
      field: (lists) =>
        graphql.field({
          type: graphql.Int,
          resolve: async (item, args, context) => {
            const userId = getSessionOrFail(context);
            const userAnswers = await context.prisma.userAnswer.count({
              where: {
                OR: [
                  {
                    userId,
                  },
                  {
                    user: {
                      oAuthId: userId,
                    },
                  },
                ],
                question: {
                  topicId: item.id,
                },
              },
            });

            return userAnswers;
          },
        }),
      ui: {
        listView: {
          fieldMode: "hidden",
        },
        itemView: {
          fieldMode: "hidden",
        },
      },
    }),
    viewerAnsweredAllQuestions: virtual({
      field: (lists) =>
        graphql.field({
          type: graphql.Boolean,
          resolve: async (item, args, context) => {
            const userId = getSessionOrFail(context);
            const userAnswers = await context.prisma.userAnswer.findMany({
              where: {
                OR: [
                  {
                    userId,
                  },
                  {
                    user: {
                      oAuthId: userId,
                    },
                  },
                ],
                question: {
                  topicId: item.id,
                },
              },
            });
            const questionsCount = await context.prisma.topicQuestion.count({
              where: {
                topicId: item.id,
              },
            });

            return userAnswers.length === questionsCount;
          },
        }),
      ui: {
        listView: {
          fieldMode: "hidden",
        },
        itemView: {
          fieldMode: "hidden",
        },
      },
    }),
    viewerTopicProgressStatus: virtual({
      field: (lists) =>
        graphql.field({
          type: graphql.String,
          resolve: async (item, args, context) => {
            const userId = getSessionOrFail(context);
            const userAnswers = await context.prisma.userAnswer.findMany({
              where: {
                OR: [
                  {
                    userId,
                  },
                  {
                    user: {
                      oAuthId: userId,
                    },
                  },
                ],
                question: {
                  topicId: item.id,
                },
              },
            });
            const questionsCount = await context.prisma.topicQuestion.count({
              where: {
                topicId: item.id,
              },
            });

            if (userAnswers.length === 0) {
              return TopicProgressStatus.NotStarted;
            }

            if (userAnswers.length < questionsCount) {
              return TopicProgressStatus.InProgress;
            }

            return TopicProgressStatus.Completed;
          },
        }),
      ui: {
        listView: {
          fieldMode: "hidden",
        },
        itemView: {
          fieldMode: "hidden",
        },
      },
    }),
    tags: relationship({ ref: "Tag", many: true }),
    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
    updatedAt: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
});

export const TopicTypeDefs = `
  enum TopicProgressStatus {
    NotStarted
    InProgress
    Completed
  }

  type Query {
    getViewerInProgressTopics: [Topic!]!
    getViewerCompletedTopics: [Topic]
  }
`;

export const TopicResolvers = {
  Query: {
    getViewerInProgressTopics: async (
      root: any,
      args: any,
      context: Context,
    ) => {
      const userId = getSessionOrFail(context);
      const topics = await context.prisma.topic.findMany({
        where: {
          questions: {
            some: {
              from_UserAnswer_question: {
                some: {
                  userId,
                },
              },
            },
          },
        },
        select: {
          questions: {
            select: {
              id: true,
              from_UserAnswer_question: true,
            },
          },
        },
      });
      const inProgressTopics = topics.filter((topic) => {
        const answeredQuestions = topic.questions.filter(
          (question) => question.from_UserAnswer_question.length > 0,
        );

        return answeredQuestions.length < topic.questions.length;
      });

      return inProgressTopics;
    },
    getViewerCompletedTopics: async (
      root: any,
      args: any,
      context: Context,
    ) => {
      const userId = getSessionOrFail(context);
      const topics = await context.prisma.topic.findMany({});
      const completedTopics = await Promise.all(
        topics.map(async (topic) => {
          const questionsCount = await context.prisma.topicQuestion.count({
            where: {
              topicId: topic.id,
            },
          });

          if (questionsCount === 0) {
            return;
          }

          const userAnswers = await context.prisma.userAnswer.findMany({
            where: {
              OR: [
                {
                  userId,
                },
                {
                  user: {
                    oAuthId: userId,
                  },
                },
              ],
              question: {
                topicId: topic.id,
              },
            },
          });

          if (userAnswers.length === questionsCount) {
            return topic;
          }
        }),
      ).then((topics) => topics.filter((topic) => topic !== undefined));

      return completedTopics ?? [];
    },
  },
};
