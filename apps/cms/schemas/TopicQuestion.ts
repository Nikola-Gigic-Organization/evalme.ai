import { ListConfig, graphql, list } from "@keystone-6/core";
import { type UserAnswer } from "../node_modules/.prisma/client/index";
import { type Lists, type Context } from ".keystone/types";
import { allowAll } from "@keystone-6/core/access";
import {
  integer,
  relationship,
  text,
  timestamp,
  virtual,
} from "@keystone-6/core/fields";
import { getSessionOrFail } from "../lib";

const TopicQuestion: ListConfig<Lists.TopicQuestion.TypeInfo> = list({
  access: allowAll,
  fields: {
    topic: relationship({ ref: "Topic.questions", many: false }),
    title: text({ validation: { isRequired: true } }),
    text: text({ validation: { isRequired: true } }),
    order: integer({ defaultValue: 1 }),
    viewerAnswer: virtual({
      field: (lists) =>
        graphql.field({
          type: lists.UserAnswer.types.output,
          resolve: async (item, args, context) => {
            const userId = getSessionOrFail(context);
            const viewerAnswer = await context.prisma.userAnswer.findFirst({
              where: {
                userId: userId,
                questionId: item.id,
              },
            });

            return viewerAnswer;
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
    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
    updatedAt: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
});

export default TopicQuestion;
