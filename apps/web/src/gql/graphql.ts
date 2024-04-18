/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
};

export type AuthenticatedItem = User;

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};

export type DateTimeNullableFilter = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  gt?: InputMaybe<Scalars['DateTime']['input']>;
  gte?: InputMaybe<Scalars['DateTime']['input']>;
  in?: InputMaybe<Array<Scalars['DateTime']['input']>>;
  lt?: InputMaybe<Scalars['DateTime']['input']>;
  lte?: InputMaybe<Scalars['DateTime']['input']>;
  not?: InputMaybe<DateTimeNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']['input']>>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']['input']>;
  gt?: InputMaybe<Scalars['ID']['input']>;
  gte?: InputMaybe<Scalars['ID']['input']>;
  in?: InputMaybe<Array<Scalars['ID']['input']>>;
  lt?: InputMaybe<Scalars['ID']['input']>;
  lte?: InputMaybe<Scalars['ID']['input']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']['input']>>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  gt?: InputMaybe<Scalars['Int']['input']>;
  gte?: InputMaybe<Scalars['Int']['input']>;
  in?: InputMaybe<Array<Scalars['Int']['input']>>;
  lt?: InputMaybe<Scalars['Int']['input']>;
  lte?: InputMaybe<Scalars['Int']['input']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']['input']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String']['input'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String']['output'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  fieldMeta?: Maybe<Scalars['JSON']['output']>;
  isFilterable: Scalars['Boolean']['output'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
  isOrderable: Scalars['Boolean']['output'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String']['output'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String']['output'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int']['output'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']['output']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean']['output'];
  hideDelete: Scalars['Boolean']['output'];
  initialColumns: Array<Scalars['String']['output']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean']['output'];
  isSingleton: Scalars['Boolean']['output'];
  itemQueryName: Scalars['String']['output'];
  key: Scalars['String']['output'];
  label: Scalars['String']['output'];
  labelField: Scalars['String']['output'];
  listQueryName: Scalars['String']['output'];
  pageSize: Scalars['Int']['output'];
  path: Scalars['String']['output'];
  plural: Scalars['String']['output'];
  singular: Scalars['String']['output'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String']['output'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  createTopic?: Maybe<Topic>;
  createTopicQuestion?: Maybe<TopicQuestion>;
  createTopicQuestions?: Maybe<Array<Maybe<TopicQuestion>>>;
  createTopics?: Maybe<Array<Maybe<Topic>>>;
  createUser?: Maybe<User>;
  createUserAnswer?: Maybe<UserAnswer>;
  createUserAnswers?: Maybe<Array<Maybe<UserAnswer>>>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
  deleteTopic?: Maybe<Topic>;
  deleteTopicQuestion?: Maybe<TopicQuestion>;
  deleteTopicQuestions?: Maybe<Array<Maybe<TopicQuestion>>>;
  deleteTopics?: Maybe<Array<Maybe<Topic>>>;
  deleteUser?: Maybe<User>;
  deleteUserAnswer?: Maybe<UserAnswer>;
  deleteUserAnswers?: Maybe<Array<Maybe<UserAnswer>>>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean']['output'];
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
  updateTopic?: Maybe<Topic>;
  updateTopicQuestion?: Maybe<TopicQuestion>;
  updateTopicQuestions?: Maybe<Array<Maybe<TopicQuestion>>>;
  updateTopics?: Maybe<Array<Maybe<Topic>>>;
  updateUser?: Maybe<User>;
  updateUserAnswer?: Maybe<UserAnswer>;
  updateUserAnswers?: Maybe<Array<Maybe<UserAnswer>>>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTagsArgs = {
  data: Array<TagCreateInput>;
};


export type MutationCreateTopicArgs = {
  data: TopicCreateInput;
};


export type MutationCreateTopicQuestionArgs = {
  data: TopicQuestionCreateInput;
};


export type MutationCreateTopicQuestionsArgs = {
  data: Array<TopicQuestionCreateInput>;
};


export type MutationCreateTopicsArgs = {
  data: Array<TopicCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUserAnswerArgs = {
  data: UserAnswerCreateInput;
};


export type MutationCreateUserAnswersArgs = {
  data: Array<UserAnswerCreateInput>;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>;
};


export type MutationDeleteTopicArgs = {
  where: TopicWhereUniqueInput;
};


export type MutationDeleteTopicQuestionArgs = {
  where: TopicQuestionWhereUniqueInput;
};


export type MutationDeleteTopicQuestionsArgs = {
  where: Array<TopicQuestionWhereUniqueInput>;
};


export type MutationDeleteTopicsArgs = {
  where: Array<TopicWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUserAnswerArgs = {
  where: UserAnswerWhereUniqueInput;
};


export type MutationDeleteUserAnswersArgs = {
  where: Array<UserAnswerWhereUniqueInput>;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: Array<TagUpdateArgs>;
};


export type MutationUpdateTopicArgs = {
  data: TopicUpdateInput;
  where: TopicWhereUniqueInput;
};


export type MutationUpdateTopicQuestionArgs = {
  data: TopicQuestionUpdateInput;
  where: TopicQuestionWhereUniqueInput;
};


export type MutationUpdateTopicQuestionsArgs = {
  data: Array<TopicQuestionUpdateArgs>;
};


export type MutationUpdateTopicsArgs = {
  data: Array<TopicUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUserAnswerArgs = {
  data: UserAnswerUpdateInput;
  where: UserAnswerWhereUniqueInput;
};


export type MutationUpdateUserAnswersArgs = {
  data: Array<UserAnswerUpdateArgs>;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean']['output'];
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  keystone: KeystoneMeta;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  topic?: Maybe<Topic>;
  topicQuestion?: Maybe<TopicQuestion>;
  topicQuestions?: Maybe<Array<TopicQuestion>>;
  topicQuestionsCount?: Maybe<Scalars['Int']['output']>;
  topics?: Maybe<Array<Topic>>;
  topicsCount?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<User>;
  userAnswer?: Maybe<UserAnswer>;
  userAnswers?: Maybe<Array<UserAnswer>>;
  userAnswersCount?: Maybe<Scalars['Int']['output']>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']['output']>;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryTopicArgs = {
  where: TopicWhereUniqueInput;
};


export type QueryTopicQuestionArgs = {
  where: TopicQuestionWhereUniqueInput;
};


export type QueryTopicQuestionsArgs = {
  cursor?: InputMaybe<TopicQuestionWhereUniqueInput>;
  orderBy?: Array<TopicQuestionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicQuestionWhereInput;
};


export type QueryTopicQuestionsCountArgs = {
  where?: TopicQuestionWhereInput;
};


export type QueryTopicsArgs = {
  cursor?: InputMaybe<TopicWhereUniqueInput>;
  orderBy?: Array<TopicOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicWhereInput;
};


export type QueryTopicsCountArgs = {
  where?: TopicWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUserAnswerArgs = {
  where: UserAnswerWhereUniqueInput;
};


export type QueryUserAnswersArgs = {
  cursor?: InputMaybe<UserAnswerWhereUniqueInput>;
  orderBy?: Array<UserAnswerOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserAnswerWhereInput;
};


export type QueryUserAnswersCountArgs = {
  where?: UserAnswerWhereInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']['input']>;
  endsWith?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  gt?: InputMaybe<Scalars['String']['input']>;
  gte?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<Scalars['String']['input']>>;
  lt?: InputMaybe<Scalars['String']['input']>;
  lte?: InputMaybe<Scalars['String']['input']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']['input']>>;
  startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TagCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TagManyRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
};

export type Topic = {
  __typename?: 'Topic';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  questions?: Maybe<Array<TopicQuestion>>;
  questionsCount?: Maybe<Scalars['Int']['output']>;
  slug?: Maybe<Scalars['String']['output']>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  viewerAnsweredQuestions?: Maybe<Array<Maybe<UserAnswer>>>;
  viewerAnsweredQuestionsCount?: Maybe<Scalars['Int']['output']>;
};


export type TopicQuestionsArgs = {
  cursor?: InputMaybe<TopicQuestionWhereUniqueInput>;
  orderBy?: Array<TopicQuestionOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TopicQuestionWhereInput;
};


export type TopicQuestionsCountArgs = {
  where?: TopicQuestionWhereInput;
};


export type TopicTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: TagWhereInput;
};


export type TopicTagsCountArgs = {
  where?: TagWhereInput;
};

export type TopicCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<TopicQuestionRelateToManyForCreateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TopicOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  description?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  slug?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type TopicQuestion = {
  __typename?: 'TopicQuestion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  order?: Maybe<Scalars['Int']['output']>;
  text?: Maybe<Scalars['String']['output']>;
  title?: Maybe<Scalars['String']['output']>;
  topic?: Maybe<Topic>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  viewerAnswer?: Maybe<UserAnswer>;
};

export type TopicQuestionCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<TopicRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TopicQuestionManyRelationFilter = {
  every?: InputMaybe<TopicQuestionWhereInput>;
  none?: InputMaybe<TopicQuestionWhereInput>;
  some?: InputMaybe<TopicQuestionWhereInput>;
};

export type TopicQuestionOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  order?: InputMaybe<OrderDirection>;
  text?: InputMaybe<OrderDirection>;
  title?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type TopicQuestionRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TopicQuestionWhereUniqueInput>>;
  create?: InputMaybe<Array<TopicQuestionCreateInput>>;
};

export type TopicQuestionRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TopicQuestionWhereUniqueInput>>;
  create?: InputMaybe<Array<TopicQuestionCreateInput>>;
  disconnect?: InputMaybe<Array<TopicQuestionWhereUniqueInput>>;
  set?: InputMaybe<Array<TopicQuestionWhereUniqueInput>>;
};

export type TopicQuestionRelateToOneForCreateInput = {
  connect?: InputMaybe<TopicQuestionWhereUniqueInput>;
  create?: InputMaybe<TopicQuestionCreateInput>;
};

export type TopicQuestionRelateToOneForUpdateInput = {
  connect?: InputMaybe<TopicQuestionWhereUniqueInput>;
  create?: InputMaybe<TopicQuestionCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopicQuestionUpdateArgs = {
  data: TopicQuestionUpdateInput;
  where: TopicQuestionWhereUniqueInput;
};

export type TopicQuestionUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  order?: InputMaybe<Scalars['Int']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  title?: InputMaybe<Scalars['String']['input']>;
  topic?: InputMaybe<TopicRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TopicQuestionWhereInput = {
  AND?: InputMaybe<Array<TopicQuestionWhereInput>>;
  NOT?: InputMaybe<Array<TopicQuestionWhereInput>>;
  OR?: InputMaybe<Array<TopicQuestionWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  order?: InputMaybe<IntNullableFilter>;
  text?: InputMaybe<StringFilter>;
  title?: InputMaybe<StringFilter>;
  topic?: InputMaybe<TopicWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type TopicQuestionWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type TopicRelateToOneForCreateInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  create?: InputMaybe<TopicCreateInput>;
};

export type TopicRelateToOneForUpdateInput = {
  connect?: InputMaybe<TopicWhereUniqueInput>;
  create?: InputMaybe<TopicCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type TopicUpdateArgs = {
  data: TopicUpdateInput;
  where: TopicWhereUniqueInput;
};

export type TopicUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  questions?: InputMaybe<TopicQuestionRelateToManyForUpdateInput>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TopicWhereInput = {
  AND?: InputMaybe<Array<TopicWhereInput>>;
  NOT?: InputMaybe<Array<TopicWhereInput>>;
  OR?: InputMaybe<Array<TopicWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  questions?: InputMaybe<TopicQuestionManyRelationFilter>;
  slug?: InputMaybe<StringFilter>;
  tags?: InputMaybe<TagManyRelationFilter>;
  title?: InputMaybe<StringFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type TopicWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name?: Maybe<Scalars['String']['output']>;
  password?: Maybe<PasswordState>;
  topicAnswers?: Maybe<Array<UserAnswer>>;
  topicAnswersCount?: Maybe<Scalars['Int']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UserTopicAnswersArgs = {
  cursor?: InputMaybe<UserAnswerWhereUniqueInput>;
  orderBy?: Array<UserAnswerOrderByInput>;
  skip?: Scalars['Int']['input'];
  take?: InputMaybe<Scalars['Int']['input']>;
  where?: UserAnswerWhereInput;
};


export type UserTopicAnswersCountArgs = {
  where?: UserAnswerWhereInput;
};

export type UserAnswer = {
  __typename?: 'UserAnswer';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id: Scalars['ID']['output'];
  openAIAnswer?: Maybe<Scalars['String']['output']>;
  question?: Maybe<TopicQuestion>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user?: Maybe<User>;
  userAnswer?: Maybe<Scalars['String']['output']>;
};

export type UserAnswerCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  openAIAnswer?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<TopicQuestionRelateToOneForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForCreateInput>;
  userAnswer?: InputMaybe<Scalars['String']['input']>;
};

export type UserAnswerManyRelationFilter = {
  every?: InputMaybe<UserAnswerWhereInput>;
  none?: InputMaybe<UserAnswerWhereInput>;
  some?: InputMaybe<UserAnswerWhereInput>;
};

export type UserAnswerOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  openAIAnswer?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
  userAnswer?: InputMaybe<OrderDirection>;
};

export type UserAnswerRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<UserAnswerWhereUniqueInput>>;
  create?: InputMaybe<Array<UserAnswerCreateInput>>;
};

export type UserAnswerRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<UserAnswerWhereUniqueInput>>;
  create?: InputMaybe<Array<UserAnswerCreateInput>>;
  disconnect?: InputMaybe<Array<UserAnswerWhereUniqueInput>>;
  set?: InputMaybe<Array<UserAnswerWhereUniqueInput>>;
};

export type UserAnswerUpdateArgs = {
  data: UserAnswerUpdateInput;
  where: UserAnswerWhereUniqueInput;
};

export type UserAnswerUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  openAIAnswer?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<TopicQuestionRelateToOneForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
  user?: InputMaybe<UserRelateToOneForUpdateInput>;
  userAnswer?: InputMaybe<Scalars['String']['input']>;
};

export type UserAnswerWhereInput = {
  AND?: InputMaybe<Array<UserAnswerWhereInput>>;
  NOT?: InputMaybe<Array<UserAnswerWhereInput>>;
  OR?: InputMaybe<Array<UserAnswerWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  id?: InputMaybe<IdFilter>;
  openAIAnswer?: InputMaybe<StringFilter>;
  question?: InputMaybe<TopicQuestionWhereInput>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
  user?: InputMaybe<UserWhereInput>;
  userAnswer?: InputMaybe<StringFilter>;
};

export type UserAnswerWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String']['output'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String']['output'];
};

export type UserCreateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  topicAnswers?: InputMaybe<UserAnswerRelateToManyForCreateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserOrderByInput = {
  createdAt?: InputMaybe<OrderDirection>;
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  updatedAt?: InputMaybe<OrderDirection>;
};

export type UserRelateToOneForCreateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
};

export type UserRelateToOneForUpdateInput = {
  connect?: InputMaybe<UserWhereUniqueInput>;
  create?: InputMaybe<UserCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']['input']>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  createdAt?: InputMaybe<Scalars['DateTime']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  topicAnswers?: InputMaybe<UserAnswerRelateToManyForUpdateInput>;
  updatedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  createdAt?: InputMaybe<DateTimeNullableFilter>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  topicAnswers?: InputMaybe<UserAnswerManyRelationFilter>;
  updatedAt?: InputMaybe<DateTimeNullableFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
};

export type GetAllTopicsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTopicsQuery = { __typename?: 'Query', topics?: Array<{ __typename?: 'Topic', id: string, slug?: string | null, title?: string | null, description?: string | null, questions?: Array<{ __typename?: 'TopicQuestion', id: string, title?: string | null, text?: string | null, viewerAnswer?: { __typename?: 'UserAnswer', id: string, userAnswer?: string | null, openAIAnswer?: string | null } | null }> | null, tags?: Array<{ __typename?: 'Tag', id: string, name?: string | null }> | null }> | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'UserAuthenticationWithPasswordFailure', message: string } | { __typename?: 'UserAuthenticationWithPasswordSuccess', sessionToken: string, user: { __typename?: 'User', id: string, email?: string | null } } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', endSession: boolean };

export type GetTopicBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetTopicBySlugQuery = { __typename?: 'Query', topic?: { __typename?: 'Topic', id: string, title?: string | null, slug?: string | null, questionsCount?: number | null, viewerAnsweredQuestionsCount?: number | null, questions?: Array<{ __typename?: 'TopicQuestion', id: string, title?: string | null, text?: string | null, viewerAnswer?: { __typename?: 'UserAnswer', id: string, userAnswer?: string | null, openAIAnswer?: string | null } | null }> | null } | null };

export type CreateUserAnswerMutationVariables = Exact<{
  data: UserAnswerCreateInput;
}>;


export type CreateUserAnswerMutation = { __typename?: 'Mutation', createUserAnswer?: { __typename?: 'UserAnswer', id: string } | null };

export type GetViewerTopicAnswersQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetViewerTopicAnswersQuery = { __typename?: 'Query', topic?: { __typename?: 'Topic', id: string, title?: string | null, viewerAnsweredQuestions?: Array<{ __typename?: 'UserAnswer', id: string, userAnswer?: string | null, openAIAnswer?: string | null, question?: { __typename?: 'TopicQuestion', id: string, title?: string | null, text?: string | null, order?: number | null } | null } | null> | null } | null };


export const GetAllTopicsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetAllTopics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"title"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"viewerAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userAnswer"}},{"kind":"Field","name":{"kind":"Name","value":"openAIAnswer"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]} as unknown as DocumentNode<GetAllTopicsQuery, GetAllTopicsQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"authenticateUserWithPassword"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordSuccess"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","alias":{"kind":"Name","value":"user"},"name":{"kind":"Name","value":"item"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"sessionToken"}}]}},{"kind":"InlineFragment","typeCondition":{"kind":"NamedType","name":{"kind":"Name","value":"UserAuthenticationWithPasswordFailure"}},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"message"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"endSession"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const GetTopicBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTopicBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"orderBy"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"order"},"value":{"kind":"EnumValue","value":"asc"}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"viewerAnswer"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"userAnswer"}},{"kind":"Field","name":{"kind":"Name","value":"openAIAnswer"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"questionsCount"}},{"kind":"Field","name":{"kind":"Name","value":"viewerAnsweredQuestionsCount"}}]}}]}}]} as unknown as DocumentNode<GetTopicBySlugQuery, GetTopicBySlugQueryVariables>;
export const CreateUserAnswerDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"CreateUserAnswer"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"data"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"UserAnswerCreateInput"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"createUserAnswer"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"data"},"value":{"kind":"Variable","name":{"kind":"Name","value":"data"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}}]}}]}}]} as unknown as DocumentNode<CreateUserAnswerMutation, CreateUserAnswerMutationVariables>;
export const GetViewerTopicAnswersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetViewerTopicAnswers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"topic"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"viewerAnsweredQuestions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"order"}}]}},{"kind":"Field","name":{"kind":"Name","value":"userAnswer"}},{"kind":"Field","name":{"kind":"Name","value":"openAIAnswer"}}]}}]}}]}}]} as unknown as DocumentNode<GetViewerTopicAnswersQuery, GetViewerTopicAnswersQueryVariables>;