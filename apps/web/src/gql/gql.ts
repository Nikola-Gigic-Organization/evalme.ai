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
    "query GetInProgressTopcis {\n  getViewerInProgressTopics {\n    id\n    slug\n    title\n    description\n    tags {\n      id\n      name\n    }\n    viewerAnsweredAllQuestions\n  }\n}\n\nquery GetCompletedTopics {\n  getViewerCompletedTopics {\n    id\n    slug\n    title\n    description\n    tags {\n      id\n      name\n    }\n    viewerAnsweredAllQuestions\n  }\n}": types.GetInProgressTopcisDocument,
    "mutation login($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      user: item {\n        id\n        email\n      }\n      sessionToken\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      message\n    }\n  }\n}\n\nmutation logout {\n  endSession\n}": types.LoginDocument,
    "mutation CreateUser($data: UserCreateInput!) {\n  createUser(data: $data) {\n    id\n    email\n    name\n  }\n}": types.CreateUserDocument,
    "query GetUser($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    id\n    oAuthId\n    email\n  }\n}\n\nmutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n  updateUser(where: $where, data: $data) {\n    id\n  }\n}": types.GetUserDocument,
    "query GetTopicBySlug($slug: String!) {\n  topic(where: {slug: $slug}) {\n    id\n    title\n    slug\n    questions(orderBy: {order: asc}) {\n      id\n      title\n      text\n      viewerAnswer {\n        id\n        userAnswer\n        openAIAnswer\n      }\n    }\n    questionsCount\n    viewerAnsweredQuestionsCount\n  }\n}\n\nmutation CreateUserAnswer($data: UserAnswerCreateInput!) {\n  createUserAnswer(data: $data) {\n    id\n  }\n}": types.GetTopicBySlugDocument,
    "query GetViewerTopicAnswers($slug: String!) {\n  topic(where: {slug: $slug}) {\n    id\n    title\n    viewerAnsweredQuestions {\n      id\n      question {\n        id\n        title\n        text\n        order\n      }\n      userAnswer\n      openAIAnswer\n    }\n  }\n}": types.GetViewerTopicAnswersDocument,
    "query GetAllTopics {\n  topics(orderBy: {title: asc}) {\n    id\n    slug\n    title\n    description\n    viewerAnsweredAllQuestions\n    questions {\n      id\n      title\n      text\n      viewerAnswer {\n        id\n        userAnswer\n        openAIAnswer\n      }\n    }\n    tags {\n      id\n      name\n    }\n  }\n}\n\nquery GetAllTags {\n  tags(orderBy: {name: asc}) {\n    id\n    name\n  }\n}": types.GetAllTopicsDocument,
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
export function graphql(source: "query GetInProgressTopcis {\n  getViewerInProgressTopics {\n    id\n    slug\n    title\n    description\n    tags {\n      id\n      name\n    }\n    viewerAnsweredAllQuestions\n  }\n}\n\nquery GetCompletedTopics {\n  getViewerCompletedTopics {\n    id\n    slug\n    title\n    description\n    tags {\n      id\n      name\n    }\n    viewerAnsweredAllQuestions\n  }\n}"): (typeof documents)["query GetInProgressTopcis {\n  getViewerInProgressTopics {\n    id\n    slug\n    title\n    description\n    tags {\n      id\n      name\n    }\n    viewerAnsweredAllQuestions\n  }\n}\n\nquery GetCompletedTopics {\n  getViewerCompletedTopics {\n    id\n    slug\n    title\n    description\n    tags {\n      id\n      name\n    }\n    viewerAnsweredAllQuestions\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation login($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      user: item {\n        id\n        email\n      }\n      sessionToken\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      message\n    }\n  }\n}\n\nmutation logout {\n  endSession\n}"): (typeof documents)["mutation login($email: String!, $password: String!) {\n  authenticateUserWithPassword(email: $email, password: $password) {\n    ... on UserAuthenticationWithPasswordSuccess {\n      user: item {\n        id\n        email\n      }\n      sessionToken\n    }\n    ... on UserAuthenticationWithPasswordFailure {\n      message\n    }\n  }\n}\n\nmutation logout {\n  endSession\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "mutation CreateUser($data: UserCreateInput!) {\n  createUser(data: $data) {\n    id\n    email\n    name\n  }\n}"): (typeof documents)["mutation CreateUser($data: UserCreateInput!) {\n  createUser(data: $data) {\n    id\n    email\n    name\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetUser($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    id\n    oAuthId\n    email\n  }\n}\n\nmutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n  updateUser(where: $where, data: $data) {\n    id\n  }\n}"): (typeof documents)["query GetUser($where: UserWhereUniqueInput!) {\n  user(where: $where) {\n    id\n    oAuthId\n    email\n  }\n}\n\nmutation UpdateUser($where: UserWhereUniqueInput!, $data: UserUpdateInput!) {\n  updateUser(where: $where, data: $data) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetTopicBySlug($slug: String!) {\n  topic(where: {slug: $slug}) {\n    id\n    title\n    slug\n    questions(orderBy: {order: asc}) {\n      id\n      title\n      text\n      viewerAnswer {\n        id\n        userAnswer\n        openAIAnswer\n      }\n    }\n    questionsCount\n    viewerAnsweredQuestionsCount\n  }\n}\n\nmutation CreateUserAnswer($data: UserAnswerCreateInput!) {\n  createUserAnswer(data: $data) {\n    id\n  }\n}"): (typeof documents)["query GetTopicBySlug($slug: String!) {\n  topic(where: {slug: $slug}) {\n    id\n    title\n    slug\n    questions(orderBy: {order: asc}) {\n      id\n      title\n      text\n      viewerAnswer {\n        id\n        userAnswer\n        openAIAnswer\n      }\n    }\n    questionsCount\n    viewerAnsweredQuestionsCount\n  }\n}\n\nmutation CreateUserAnswer($data: UserAnswerCreateInput!) {\n  createUserAnswer(data: $data) {\n    id\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetViewerTopicAnswers($slug: String!) {\n  topic(where: {slug: $slug}) {\n    id\n    title\n    viewerAnsweredQuestions {\n      id\n      question {\n        id\n        title\n        text\n        order\n      }\n      userAnswer\n      openAIAnswer\n    }\n  }\n}"): (typeof documents)["query GetViewerTopicAnswers($slug: String!) {\n  topic(where: {slug: $slug}) {\n    id\n    title\n    viewerAnsweredQuestions {\n      id\n      question {\n        id\n        title\n        text\n        order\n      }\n      userAnswer\n      openAIAnswer\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "query GetAllTopics {\n  topics(orderBy: {title: asc}) {\n    id\n    slug\n    title\n    description\n    viewerAnsweredAllQuestions\n    questions {\n      id\n      title\n      text\n      viewerAnswer {\n        id\n        userAnswer\n        openAIAnswer\n      }\n    }\n    tags {\n      id\n      name\n    }\n  }\n}\n\nquery GetAllTags {\n  tags(orderBy: {name: asc}) {\n    id\n    name\n  }\n}"): (typeof documents)["query GetAllTopics {\n  topics(orderBy: {title: asc}) {\n    id\n    slug\n    title\n    description\n    viewerAnsweredAllQuestions\n    questions {\n      id\n      title\n      text\n      viewerAnswer {\n        id\n        userAnswer\n        openAIAnswer\n      }\n    }\n    tags {\n      id\n      name\n    }\n  }\n}\n\nquery GetAllTags {\n  tags(orderBy: {name: asc}) {\n    id\n    name\n  }\n}"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;