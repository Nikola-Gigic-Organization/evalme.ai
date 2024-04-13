import type { CodegenConfig } from "@graphql-codegen/cli";

const config: CodegenConfig = {
  overwrite: true,
  errorsOnly: true,
  schema: "../cms/schema.graphql",
  documents: ["src/**/*.graphql"],
  ignoreNoDocuments: true, // for better experience with the watcher
  generates: {
    "./src/gql/": {
      preset: "client",
    },
    "./__generated__/server.ts": {
      plugins: [
        "typescript",
        "typescript-operations",
        "typescript-graphql-request",
      ],
      config: {
        dedupeFragments: true,
        exposeDocument: true,
        exposeQueryKeys: true,
        exposeMutationKeys: true,
        legacyMode: false,
        addInfiniteQuery: true,
        pureMagicComment: true,
      },
    },
  },
};

export default config;
