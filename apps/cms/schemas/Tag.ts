import { ListConfig, graphql, list } from "@keystone-6/core";
import { type Lists, type Context } from ".keystone/types";
import { allowAll } from "@keystone-6/core/access";
import {
  relationship,
  text,
  timestamp,
  virtual,
} from "@keystone-6/core/fields";

const Tag: ListConfig<Lists.Tag.TypeInfo> = list({
  access: allowAll,
  fields: {
    name: text({ validation: { isRequired: true }, isIndexed: "unique" }),
    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
    updatedAt: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
});

export default Tag;
