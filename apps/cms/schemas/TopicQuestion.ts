import { ListConfig, graphql, list } from "@keystone-6/core";
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
      field: graphql.field({
        type: graphql.String,
        resolve: (item, args, context) => {
          const userId = getSessionOrFail(context);
          return "Not implemented";
        },
      }),
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
