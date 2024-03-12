/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "query allUsers {\n  Users {\n    docs {\n      id\n      email\n    }\n  }\n}\n\nquery allTags {\n  Tags {\n    docs {\n      id\n      name\n    }\n  }\n}\n\nquery getTag($id: Int!) {\n  Tag(id: $id) {\n    id\n    name\n  }\n}\n\nmutation login($email: String!, $password: String!) {\n  loginUser(email: $email, password: $password) {\n    user {\n      email\n    }\n    exp\n    token\n  }\n}\n\nmutation logout {\n  logoutUser\n}": types.AllUsersDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query allUsers {\n  Users {\n    docs {\n      id\n      email\n    }\n  }\n}\n\nquery allTags {\n  Tags {\n    docs {\n      id\n      name\n    }\n  }\n}\n\nquery getTag($id: Int!) {\n  Tag(id: $id) {\n    id\n    name\n  }\n}\n\nmutation login($email: String!, $password: String!) {\n  loginUser(email: $email, password: $password) {\n    user {\n      email\n    }\n    exp\n    token\n  }\n}\n\nmutation logout {\n  logoutUser\n}"): (typeof documents)["query allUsers {\n  Users {\n    docs {\n      id\n      email\n    }\n  }\n}\n\nquery allTags {\n  Tags {\n    docs {\n      id\n      name\n    }\n  }\n}\n\nquery getTag($id: Int!) {\n  Tag(id: $id) {\n    id\n    name\n  }\n}\n\nmutation login($email: String!, $password: String!) {\n  loginUser(email: $email, password: $password) {\n    user {\n      email\n    }\n    exp\n    token\n  }\n}\n\nmutation logout {\n  logoutUser\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;