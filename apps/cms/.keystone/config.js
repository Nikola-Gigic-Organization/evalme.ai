"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core6 = require("@keystone-6/core");

// schemas/User.ts
var import_core = require("@keystone-6/core");
var import_access = require("@keystone-6/core/access");
var import_fields = require("@keystone-6/core/fields");
var User = (0, import_core.list)({
  access: import_access.allowAll,
  fields: {
    name: (0, import_fields.text)({ validation: { isRequired: true } }),
    email: (0, import_fields.text)({
      validation: { isRequired: true },
      isIndexed: "unique"
    }),
    password: (0, import_fields.password)({ validation: { isRequired: true } }),
    topicAnswers: (0, import_fields.relationship)({ ref: "UserAnswer.user", many: true }),
    createdAt: (0, import_fields.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});
var User_default = User;

// schemas/Topic.ts
var import_core2 = require("@keystone-6/core");
var import_access2 = require("@keystone-6/core/access");
var import_fields2 = require("@keystone-6/core/fields");

// lib/getSessionOrFail.ts
var getSessionOrFail = (context) => {
  const authorizationHeader = context.req?.headers.authorization;
  const userId = authorizationHeader?.split("JWT ").at(-1);
  if (!userId) {
    throw new Error("No user ID found in session");
  }
  return userId;
};
var getSessionOrFail_default = getSessionOrFail;

// schemas/Topic.ts
var Topic = (0, import_core2.list)({
  access: import_access2.allowAll,
  fields: {
    slug: (0, import_fields2.text)({ validation: { isRequired: true }, isIndexed: "unique" }),
    title: (0, import_fields2.text)({ validation: { isRequired: true } }),
    description: (0, import_fields2.text)({}),
    questions: (0, import_fields2.relationship)({
      ref: "TopicQuestion.topic",
      many: true,
      ui: {
        createView: { fieldMode: "edit" },
        itemView: { fieldMode: "edit" }
      }
    }),
    viewerAnsweredQuestionsCount: (0, import_fields2.virtual)({
      field: (lists2) => import_core2.graphql.field({
        type: import_core2.graphql.Int,
        resolve: async (item, args, context) => {
          const userId = getSessionOrFail_default(context);
          const userAnswers = await context.prisma.userAnswer.count({
            where: {
              userId,
              question: {
                topicId: item.id
              }
            }
          });
          return userAnswers;
        }
      }),
      ui: {
        listView: {
          fieldMode: "hidden"
        },
        itemView: {
          fieldMode: "hidden"
        }
      }
    }),
    tags: (0, import_fields2.relationship)({ ref: "Tag", many: true }),
    createdAt: (0, import_fields2.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields2.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});
var Topic_default = Topic;

// schemas/TopicQuestion.ts
var import_core3 = require("@keystone-6/core");
var import_access3 = require("@keystone-6/core/access");
var import_fields3 = require("@keystone-6/core/fields");
var TopicQuestion = (0, import_core3.list)({
  access: import_access3.allowAll,
  fields: {
    topic: (0, import_fields3.relationship)({ ref: "Topic.questions", many: false }),
    title: (0, import_fields3.text)({ validation: { isRequired: true } }),
    text: (0, import_fields3.text)({ validation: { isRequired: true } }),
    order: (0, import_fields3.integer)({ defaultValue: 1 }),
    viewerAnswer: (0, import_fields3.virtual)({
      field: (lists2) => import_core3.graphql.field({
        type: lists2.UserAnswer.types.output,
        resolve: async (item, args, context) => {
          const userId = getSessionOrFail_default(context);
          const viewerAnswer = await context.prisma.userAnswer.findFirst({
            where: {
              userId,
              questionId: item.id
            }
          });
          return viewerAnswer;
        }
      }),
      ui: {
        listView: {
          fieldMode: "hidden"
        },
        itemView: {
          fieldMode: "hidden"
        }
      }
    }),
    createdAt: (0, import_fields3.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields3.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});
var TopicQuestion_default = TopicQuestion;

// schemas/Tag.ts
var import_core4 = require("@keystone-6/core");
var import_access4 = require("@keystone-6/core/access");
var import_fields4 = require("@keystone-6/core/fields");
var Tag = (0, import_core4.list)({
  access: import_access4.allowAll,
  fields: {
    name: (0, import_fields4.text)({ validation: { isRequired: true }, isIndexed: "unique" }),
    createdAt: (0, import_fields4.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields4.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});
var Tag_default = Tag;

// schemas/UserAnswer.ts
var import_core5 = require("@keystone-6/core");
var import_access5 = require("@keystone-6/core/access");
var import_fields5 = require("@keystone-6/core/fields");
var UserAnswer = (0, import_core5.list)({
  access: import_access5.allowAll,
  fields: {
    user: (0, import_fields5.relationship)({ ref: "User.topicAnswers", many: false }),
    question: (0, import_fields5.relationship)({ ref: "TopicQuestion", many: false }),
    userAnswer: (0, import_fields5.text)({}),
    openAIAnswer: (0, import_fields5.text)({}),
    createdAt: (0, import_fields5.timestamp)({
      defaultValue: { kind: "now" }
    }),
    updatedAt: (0, import_fields5.timestamp)({
      defaultValue: { kind: "now" }
    })
  }
});
var UserAnswer_default = UserAnswer;

// schemas/index.ts
var schemas_default = { User: User_default, Topic: Topic_default, TopicQuestion: TopicQuestion_default, Tag: Tag_default, UserAnswer: UserAnswer_default };

// schema.ts
var lists = schemas_default;

// auth.ts
var import_crypto = require("crypto");
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret && process.env.NODE_ENV !== "production") {
  sessionSecret = (0, import_crypto.randomBytes)(32).toString("hex");
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  // this is a GraphQL query fragment for fetching what data will be attached to a context.session
  //   this can be helpful for when you are writing your access control functions
  //   you can find out more at https://keystonejs.com/docs/guides/auth-and-access-control
  sessionData: "name createdAt",
  secretField: "password",
  // WARNING: remove initFirstItem functionality in production
  //   see https://keystonejs.com/docs/config/auth#init-first-item for more
  initFirstItem: {
    // if there are no items in the database, by configuring this field
    //   you are asking the Keystone AdminUI to create a new user
    //   providing inputs for these fields
    fields: ["name", "email", "password"]
    // it uses context.sudo() to do this, which bypasses any access control you might have
    //   you shouldn't use this in production
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var import_dotenv = __toESM(require("dotenv"));
import_dotenv.default.config();
var keystone_default = withAuth(
  (0, import_core6.config)({
    db: {
      // we're using sqlite for the fastest startup experience
      //   for more information on what database might be appropriate for you
      //   see https://keystonejs.com/docs/guides/choosing-a-database#title
      provider: "postgresql",
      url: process.env.DATABASE_URL,
      prismaClientPath: "node_modules/.prisma/client"
    },
    lists,
    session
  })
);
//# sourceMappingURL=config.js.map
