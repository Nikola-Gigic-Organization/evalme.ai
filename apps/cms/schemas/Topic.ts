import { ListConfig, graphql, list } from "@keystone-6/core";
import { type Lists, type Context } from ".keystone/types";
import { allowAll } from "@keystone-6/core/access";
import {
  relationship,
  text,
  timestamp,
  virtual,
} from "@keystone-6/core/fields";

const Topic: ListConfig<Lists.Topic.TypeInfo> = list({
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
    tags: relationship({ ref: "Tag", many: true }),
    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
    updatedAt: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
});

export default Topic;
