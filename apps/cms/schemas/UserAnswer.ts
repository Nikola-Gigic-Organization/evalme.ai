import { ListConfig, graphql, list } from "@keystone-6/core";
import { type Lists, type Context } from ".keystone/types";
import { allowAll } from "@keystone-6/core/access";
import {
  relationship,
  text,
  timestamp,
  virtual,
} from "@keystone-6/core/fields";

const UserAnswer: ListConfig<Lists.UserAnswer.TypeInfo> = list({
  access: allowAll,
  fields: {
    user: relationship({ ref: "User.topicAnswers", many: false }),
    question: relationship({ ref: "TopicQuestion", many: false }),
    userAnswer: text({}),
    openAIAnswer: text({}),
    createdAt: timestamp({
      defaultValue: { kind: "now" },
    }),
    updatedAt: timestamp({
      defaultValue: { kind: "now" },
    }),
  },
});

export default UserAnswer;
