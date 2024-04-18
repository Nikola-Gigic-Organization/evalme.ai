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
                userId,
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
                userId,
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
    tags: relationship({ ref: "Tag", many: true }),
    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
    updatedAt: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
});
