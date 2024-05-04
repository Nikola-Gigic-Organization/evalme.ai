import { ListConfig, list } from "@keystone-6/core";
import { type Lists, type Context } from ".keystone/types";
import { allowAll } from "@keystone-6/core/access";
import {
  text,
  password,
  timestamp,
  relationship,
} from "@keystone-6/core/fields";

const User: ListConfig<Lists.User.TypeInfo> = list({
  access: allowAll,
  fields: {
    oAuthId: text({
      db: {
        isNullable: true,
      },
      ui: {
        description: "The ID of the user in the OAuth provider",
        createView: { fieldMode: "hidden" },
        itemView: { fieldMode: "read" },
        listView: { fieldMode: "read" },
      },
    }),
    name: text({ validation: { isRequired: true } }),
    email: text({
      validation: { isRequired: true },
      isIndexed: "unique",
    }),

    password: password({ validation: { isRequired: true } }),
    topicAnswers: relationship({ ref: "UserAnswer.user", many: true }),
    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
    updatedAt: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
});

export default User;
