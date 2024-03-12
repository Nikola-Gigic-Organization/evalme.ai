import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  schema: "../cms/src/generated-schema.graphql",
  documents: ["src/**/*.graphql"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
      // plugins: [
      //   "typescript",
      //   "typescript-operations",
      //   "typescript-graphql-request",
      // ],
    },
  },
};

export default config;
