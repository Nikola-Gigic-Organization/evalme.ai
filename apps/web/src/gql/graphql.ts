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
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar. */
  DateTime: { input: any; output: any; }
  /** A field whose value conforms to the standard internet email address format as specified in HTML Spec: https://html.spec.whatwg.org/multipage/input.html#valid-e-mail-address. */
  EmailAddress: { input: any; output: any; }
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: { input: any; output: any; }
  /** The `JSONObject` scalar type represents JSON objects as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSONObject: { input: any; output: any; }
};

export type Access = {
  __typename?: 'Access';
  canAccessAdmin: Scalars['Boolean']['output'];
  payload_preferences?: Maybe<Payload_PreferencesAccess>;
  tags?: Maybe<TagsAccess>;
  topicQuestion?: Maybe<TopicQuestionAccess>;
  topics?: Maybe<TopicsAccess>;
  users?: Maybe<UsersAccess>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createPayloadPreference?: Maybe<PayloadPreference>;
  createTag?: Maybe<Tag>;
  createTopic?: Maybe<Topic>;
  createTopicQuestion?: Maybe<TopicQuestion>;
  createUser?: Maybe<User>;
  deletePayloadPreference?: Maybe<PayloadPreference>;
  deleteTag?: Maybe<Tag>;
  deleteTopic?: Maybe<Topic>;
  deleteTopicQuestion?: Maybe<TopicQuestion>;
  deleteUser?: Maybe<User>;
  forgotPasswordUser: Scalars['Boolean']['output'];
  loginUser?: Maybe<UsersLoginResult>;
  logoutUser?: Maybe<Scalars['String']['output']>;
  refreshTokenUser?: Maybe<UsersRefreshedUser>;
  resetPasswordUser?: Maybe<UsersResetPassword>;
  unlockUser: Scalars['Boolean']['output'];
  updatePayloadPreference?: Maybe<PayloadPreference>;
  updateTag?: Maybe<Tag>;
  updateTopic?: Maybe<Topic>;
  updateTopicQuestion?: Maybe<TopicQuestion>;
  updateUser?: Maybe<User>;
  verifyEmailUser?: Maybe<Scalars['Boolean']['output']>;
};


export type MutationCreatePayloadPreferenceArgs = {
  data: MutationPayloadPreferenceInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateTagArgs = {
  data: MutationTagInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateTopicArgs = {
  data: MutationTopicInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateTopicQuestionArgs = {
  data: MutationTopicQuestionInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationCreateUserArgs = {
  data: MutationUserInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
};


export type MutationDeletePayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTagArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTopicArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteTopicQuestionArgs = {
  id: Scalars['Int']['input'];
};


export type MutationDeleteUserArgs = {
  id: Scalars['Int']['input'];
};


export type MutationForgotPasswordUserArgs = {
  disableEmail?: InputMaybe<Scalars['Boolean']['input']>;
  email: Scalars['String']['input'];
  expiration?: InputMaybe<Scalars['Int']['input']>;
};


export type MutationLoginUserArgs = {
  email?: InputMaybe<Scalars['String']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
};


export type MutationRefreshTokenUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationResetPasswordUserArgs = {
  password?: InputMaybe<Scalars['String']['input']>;
  token?: InputMaybe<Scalars['String']['input']>;
};


export type MutationUnlockUserArgs = {
  email: Scalars['String']['input'];
};


export type MutationUpdatePayloadPreferenceArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationPayloadPreferenceUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateTagArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationTagUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateTopicArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationTopicUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateTopicQuestionArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationTopicQuestionUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationUpdateUserArgs = {
  autosave?: InputMaybe<Scalars['Boolean']['input']>;
  data: MutationUserUpdateInput;
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type MutationVerifyEmailUserArgs = {
  token?: InputMaybe<Scalars['String']['input']>;
};

export type PayloadPreference = {
  __typename?: 'PayloadPreference';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  key?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
  user: PayloadPreference_User_Relationship;
  value?: Maybe<Scalars['JSON']['output']>;
};

export type PayloadPreferenceUpdate_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreferenceUpdate_UserRelationshipInputRelationTo {
  Users = 'users'
}

export type PayloadPreference_User = User;

export type PayloadPreference_UserRelationshipInput = {
  relationTo?: InputMaybe<PayloadPreference_UserRelationshipInputRelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_UserRelationshipInputRelationTo {
  Users = 'users'
}

export enum PayloadPreference_User_RelationTo {
  Users = 'users'
}

export type PayloadPreference_User_Relationship = {
  __typename?: 'PayloadPreference_User_Relationship';
  relationTo?: Maybe<PayloadPreference_User_RelationTo>;
  value?: Maybe<PayloadPreference_User>;
};

export type PayloadPreference_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type PayloadPreference_Key_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type PayloadPreference_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type PayloadPreference_User_Relation = {
  relationTo?: InputMaybe<PayloadPreference_User_Relation_RelationTo>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export enum PayloadPreference_User_Relation_RelationTo {
  Users = 'users'
}

export type PayloadPreference_Value_Operator = {
  contains?: InputMaybe<Scalars['JSON']['input']>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  intersects?: InputMaybe<Scalars['JSON']['input']>;
  like?: InputMaybe<Scalars['JSON']['input']>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  within?: InputMaybe<Scalars['JSON']['input']>;
};

export type PayloadPreference_Where = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreference_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<PayloadPreference_Where_Or>>>;
  createdAt?: InputMaybe<PayloadPreference_CreatedAt_Operator>;
  id?: InputMaybe<PayloadPreference_Id_Operator>;
  key?: InputMaybe<PayloadPreference_Key_Operator>;
  updatedAt?: InputMaybe<PayloadPreference_UpdatedAt_Operator>;
  user?: InputMaybe<PayloadPreference_User_Relation>;
  value?: InputMaybe<PayloadPreference_Value_Operator>;
};

export type PayloadPreferences = {
  __typename?: 'PayloadPreferences';
  docs?: Maybe<Array<Maybe<PayloadPreference>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type PayloadPreferencesCreateAccess = {
  __typename?: 'PayloadPreferencesCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesCreateDocAccess = {
  __typename?: 'PayloadPreferencesCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteAccess = {
  __typename?: 'PayloadPreferencesDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDeleteDocAccess = {
  __typename?: 'PayloadPreferencesDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesDocAccessFields = {
  __typename?: 'PayloadPreferencesDocAccessFields';
  createdAt?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesDocAccessFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesDocAccessFields_User>;
  value?: Maybe<PayloadPreferencesDocAccessFields_Value>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_CreatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key = {
  __typename?: 'PayloadPreferencesDocAccessFields_key';
  create?: Maybe<PayloadPreferencesDocAccessFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Key_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Key_Update>;
};

export type PayloadPreferencesDocAccessFields_Key_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Key_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt';
  create?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_UpdatedAt_Update>;
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User = {
  __typename?: 'PayloadPreferencesDocAccessFields_user';
  create?: Maybe<PayloadPreferencesDocAccessFields_User_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_User_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_User_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_User_Update>;
};

export type PayloadPreferencesDocAccessFields_User_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_User_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value = {
  __typename?: 'PayloadPreferencesDocAccessFields_value';
  create?: Maybe<PayloadPreferencesDocAccessFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesDocAccessFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesDocAccessFields_Value_Read>;
  update?: Maybe<PayloadPreferencesDocAccessFields_Value_Update>;
};

export type PayloadPreferencesDocAccessFields_Value_Create = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Delete = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Read = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesDocAccessFields_Value_Update = {
  __typename?: 'PayloadPreferencesDocAccessFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields = {
  __typename?: 'PayloadPreferencesFields';
  createdAt?: Maybe<PayloadPreferencesFields_CreatedAt>;
  key?: Maybe<PayloadPreferencesFields_Key>;
  updatedAt?: Maybe<PayloadPreferencesFields_UpdatedAt>;
  user?: Maybe<PayloadPreferencesFields_User>;
  value?: Maybe<PayloadPreferencesFields_Value>;
};

export type PayloadPreferencesFields_CreatedAt = {
  __typename?: 'PayloadPreferencesFields_createdAt';
  create?: Maybe<PayloadPreferencesFields_CreatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_CreatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_CreatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_CreatedAt_Update>;
};

export type PayloadPreferencesFields_CreatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_CreatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key = {
  __typename?: 'PayloadPreferencesFields_key';
  create?: Maybe<PayloadPreferencesFields_Key_Create>;
  delete?: Maybe<PayloadPreferencesFields_Key_Delete>;
  read?: Maybe<PayloadPreferencesFields_Key_Read>;
  update?: Maybe<PayloadPreferencesFields_Key_Update>;
};

export type PayloadPreferencesFields_Key_Create = {
  __typename?: 'PayloadPreferencesFields_key_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Delete = {
  __typename?: 'PayloadPreferencesFields_key_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Read = {
  __typename?: 'PayloadPreferencesFields_key_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Key_Update = {
  __typename?: 'PayloadPreferencesFields_key_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt = {
  __typename?: 'PayloadPreferencesFields_updatedAt';
  create?: Maybe<PayloadPreferencesFields_UpdatedAt_Create>;
  delete?: Maybe<PayloadPreferencesFields_UpdatedAt_Delete>;
  read?: Maybe<PayloadPreferencesFields_UpdatedAt_Read>;
  update?: Maybe<PayloadPreferencesFields_UpdatedAt_Update>;
};

export type PayloadPreferencesFields_UpdatedAt_Create = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Delete = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Read = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_UpdatedAt_Update = {
  __typename?: 'PayloadPreferencesFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User = {
  __typename?: 'PayloadPreferencesFields_user';
  create?: Maybe<PayloadPreferencesFields_User_Create>;
  delete?: Maybe<PayloadPreferencesFields_User_Delete>;
  read?: Maybe<PayloadPreferencesFields_User_Read>;
  update?: Maybe<PayloadPreferencesFields_User_Update>;
};

export type PayloadPreferencesFields_User_Create = {
  __typename?: 'PayloadPreferencesFields_user_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Delete = {
  __typename?: 'PayloadPreferencesFields_user_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Read = {
  __typename?: 'PayloadPreferencesFields_user_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_User_Update = {
  __typename?: 'PayloadPreferencesFields_user_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value = {
  __typename?: 'PayloadPreferencesFields_value';
  create?: Maybe<PayloadPreferencesFields_Value_Create>;
  delete?: Maybe<PayloadPreferencesFields_Value_Delete>;
  read?: Maybe<PayloadPreferencesFields_Value_Read>;
  update?: Maybe<PayloadPreferencesFields_Value_Update>;
};

export type PayloadPreferencesFields_Value_Create = {
  __typename?: 'PayloadPreferencesFields_value_Create';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Delete = {
  __typename?: 'PayloadPreferencesFields_value_Delete';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Read = {
  __typename?: 'PayloadPreferencesFields_value_Read';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesFields_Value_Update = {
  __typename?: 'PayloadPreferencesFields_value_Update';
  permission: Scalars['Boolean']['output'];
};

export type PayloadPreferencesReadAccess = {
  __typename?: 'PayloadPreferencesReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesReadDocAccess = {
  __typename?: 'PayloadPreferencesReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateAccess = {
  __typename?: 'PayloadPreferencesUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type PayloadPreferencesUpdateDocAccess = {
  __typename?: 'PayloadPreferencesUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Query = {
  __typename?: 'Query';
  Access?: Maybe<Access>;
  PayloadPreference?: Maybe<PayloadPreference>;
  PayloadPreferences?: Maybe<PayloadPreferences>;
  Tag?: Maybe<Tag>;
  Tags?: Maybe<Tags>;
  Topic?: Maybe<Topic>;
  TopicQuestion?: Maybe<TopicQuestion>;
  TopicQuestions?: Maybe<TopicQuestions>;
  Topics?: Maybe<Topics>;
  User?: Maybe<User>;
  Users?: Maybe<Users>;
  docAccessPayloadPreference?: Maybe<Payload_PreferencesDocAccess>;
  docAccessTag?: Maybe<TagsDocAccess>;
  docAccessTopic?: Maybe<TopicsDocAccess>;
  docAccessTopicQuestion?: Maybe<TopicQuestionDocAccess>;
  docAccessUser?: Maybe<UsersDocAccess>;
  initializedUser?: Maybe<Scalars['Boolean']['output']>;
  meUser?: Maybe<UsersMe>;
};


export type QueryPayloadPreferenceArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryPayloadPreferencesArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<PayloadPreference_Where>;
};


export type QueryTagArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryTagsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Tag_Where>;
};


export type QueryTopicArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryTopicQuestionArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryTopicQuestionsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<TopicQuestion_Where>;
};


export type QueryTopicsArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<Topic_Where>;
};


export type QueryUserArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  id: Scalars['Int']['input'];
};


export type QueryUsersArgs = {
  draft?: InputMaybe<Scalars['Boolean']['input']>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  page?: InputMaybe<Scalars['Int']['input']>;
  sort?: InputMaybe<Scalars['String']['input']>;
  where?: InputMaybe<User_Where>;
};


export type QueryDocAccessPayloadPreferenceArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessTagArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessTopicArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessTopicQuestionArgs = {
  id: Scalars['Int']['input'];
};


export type QueryDocAccessUserArgs = {
  id: Scalars['Int']['input'];
};

export type Tag = {
  __typename?: 'Tag';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  name: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type Tag_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tag_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Tag_Name_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Tag_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Tag_Where = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tag_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tag_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Tag_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Tag_Where_Or>>>;
  createdAt?: InputMaybe<Tag_CreatedAt_Operator>;
  id?: InputMaybe<Tag_Id_Operator>;
  name?: InputMaybe<Tag_Name_Operator>;
  updatedAt?: InputMaybe<Tag_UpdatedAt_Operator>;
};

export type Tags = {
  __typename?: 'Tags';
  docs?: Maybe<Array<Maybe<Tag>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type TagsCreateAccess = {
  __typename?: 'TagsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsCreateDocAccess = {
  __typename?: 'TagsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDeleteAccess = {
  __typename?: 'TagsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDeleteDocAccess = {
  __typename?: 'TagsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsDocAccessFields = {
  __typename?: 'TagsDocAccessFields';
  createdAt?: Maybe<TagsDocAccessFields_CreatedAt>;
  name?: Maybe<TagsDocAccessFields_Name>;
  updatedAt?: Maybe<TagsDocAccessFields_UpdatedAt>;
};

export type TagsDocAccessFields_CreatedAt = {
  __typename?: 'TagsDocAccessFields_createdAt';
  create?: Maybe<TagsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<TagsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<TagsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<TagsDocAccessFields_CreatedAt_Update>;
};

export type TagsDocAccessFields_CreatedAt_Create = {
  __typename?: 'TagsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'TagsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Read = {
  __typename?: 'TagsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_CreatedAt_Update = {
  __typename?: 'TagsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name = {
  __typename?: 'TagsDocAccessFields_name';
  create?: Maybe<TagsDocAccessFields_Name_Create>;
  delete?: Maybe<TagsDocAccessFields_Name_Delete>;
  read?: Maybe<TagsDocAccessFields_Name_Read>;
  update?: Maybe<TagsDocAccessFields_Name_Update>;
};

export type TagsDocAccessFields_Name_Create = {
  __typename?: 'TagsDocAccessFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name_Delete = {
  __typename?: 'TagsDocAccessFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name_Read = {
  __typename?: 'TagsDocAccessFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_Name_Update = {
  __typename?: 'TagsDocAccessFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt = {
  __typename?: 'TagsDocAccessFields_updatedAt';
  create?: Maybe<TagsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<TagsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<TagsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<TagsDocAccessFields_UpdatedAt_Update>;
};

export type TagsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'TagsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'TagsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'TagsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'TagsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields = {
  __typename?: 'TagsFields';
  createdAt?: Maybe<TagsFields_CreatedAt>;
  name?: Maybe<TagsFields_Name>;
  updatedAt?: Maybe<TagsFields_UpdatedAt>;
};

export type TagsFields_CreatedAt = {
  __typename?: 'TagsFields_createdAt';
  create?: Maybe<TagsFields_CreatedAt_Create>;
  delete?: Maybe<TagsFields_CreatedAt_Delete>;
  read?: Maybe<TagsFields_CreatedAt_Read>;
  update?: Maybe<TagsFields_CreatedAt_Update>;
};

export type TagsFields_CreatedAt_Create = {
  __typename?: 'TagsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Delete = {
  __typename?: 'TagsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Read = {
  __typename?: 'TagsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_CreatedAt_Update = {
  __typename?: 'TagsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name = {
  __typename?: 'TagsFields_name';
  create?: Maybe<TagsFields_Name_Create>;
  delete?: Maybe<TagsFields_Name_Delete>;
  read?: Maybe<TagsFields_Name_Read>;
  update?: Maybe<TagsFields_Name_Update>;
};

export type TagsFields_Name_Create = {
  __typename?: 'TagsFields_name_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name_Delete = {
  __typename?: 'TagsFields_name_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name_Read = {
  __typename?: 'TagsFields_name_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_Name_Update = {
  __typename?: 'TagsFields_name_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt = {
  __typename?: 'TagsFields_updatedAt';
  create?: Maybe<TagsFields_UpdatedAt_Create>;
  delete?: Maybe<TagsFields_UpdatedAt_Delete>;
  read?: Maybe<TagsFields_UpdatedAt_Read>;
  update?: Maybe<TagsFields_UpdatedAt_Update>;
};

export type TagsFields_UpdatedAt_Create = {
  __typename?: 'TagsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Delete = {
  __typename?: 'TagsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Read = {
  __typename?: 'TagsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TagsFields_UpdatedAt_Update = {
  __typename?: 'TagsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TagsReadAccess = {
  __typename?: 'TagsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsReadDocAccess = {
  __typename?: 'TagsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsUpdateAccess = {
  __typename?: 'TagsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TagsUpdateDocAccess = {
  __typename?: 'TagsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type Topic = {
  __typename?: 'Topic';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  description?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order: Scalars['Float']['output'];
  questions?: Maybe<Array<Topic_Questions>>;
  questionsCount?: Maybe<Scalars['Float']['output']>;
  slug: Scalars['String']['output'];
  tags?: Maybe<Array<Tag>>;
  title: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TopicQuestion = {
  __typename?: 'TopicQuestion';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  order: Scalars['Float']['output'];
  text: Scalars['String']['output'];
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type TopicQuestionCreateAccess = {
  __typename?: 'TopicQuestionCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicQuestionCreateDocAccess = {
  __typename?: 'TopicQuestionCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicQuestionDeleteAccess = {
  __typename?: 'TopicQuestionDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicQuestionDeleteDocAccess = {
  __typename?: 'TopicQuestionDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicQuestionDocAccessFields = {
  __typename?: 'TopicQuestionDocAccessFields';
  createdAt?: Maybe<TopicQuestionDocAccessFields_CreatedAt>;
  order?: Maybe<TopicQuestionDocAccessFields_Order>;
  text?: Maybe<TopicQuestionDocAccessFields_Text>;
  updatedAt?: Maybe<TopicQuestionDocAccessFields_UpdatedAt>;
};

export type TopicQuestionDocAccessFields_CreatedAt = {
  __typename?: 'TopicQuestionDocAccessFields_createdAt';
  create?: Maybe<TopicQuestionDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<TopicQuestionDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<TopicQuestionDocAccessFields_CreatedAt_Read>;
  update?: Maybe<TopicQuestionDocAccessFields_CreatedAt_Update>;
};

export type TopicQuestionDocAccessFields_CreatedAt_Create = {
  __typename?: 'TopicQuestionDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_CreatedAt_Delete = {
  __typename?: 'TopicQuestionDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_CreatedAt_Read = {
  __typename?: 'TopicQuestionDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_CreatedAt_Update = {
  __typename?: 'TopicQuestionDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_Order = {
  __typename?: 'TopicQuestionDocAccessFields_order';
  create?: Maybe<TopicQuestionDocAccessFields_Order_Create>;
  delete?: Maybe<TopicQuestionDocAccessFields_Order_Delete>;
  read?: Maybe<TopicQuestionDocAccessFields_Order_Read>;
  update?: Maybe<TopicQuestionDocAccessFields_Order_Update>;
};

export type TopicQuestionDocAccessFields_Order_Create = {
  __typename?: 'TopicQuestionDocAccessFields_order_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_Order_Delete = {
  __typename?: 'TopicQuestionDocAccessFields_order_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_Order_Read = {
  __typename?: 'TopicQuestionDocAccessFields_order_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_Order_Update = {
  __typename?: 'TopicQuestionDocAccessFields_order_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_Text = {
  __typename?: 'TopicQuestionDocAccessFields_text';
  create?: Maybe<TopicQuestionDocAccessFields_Text_Create>;
  delete?: Maybe<TopicQuestionDocAccessFields_Text_Delete>;
  read?: Maybe<TopicQuestionDocAccessFields_Text_Read>;
  update?: Maybe<TopicQuestionDocAccessFields_Text_Update>;
};

export type TopicQuestionDocAccessFields_Text_Create = {
  __typename?: 'TopicQuestionDocAccessFields_text_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_Text_Delete = {
  __typename?: 'TopicQuestionDocAccessFields_text_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_Text_Read = {
  __typename?: 'TopicQuestionDocAccessFields_text_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_Text_Update = {
  __typename?: 'TopicQuestionDocAccessFields_text_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_UpdatedAt = {
  __typename?: 'TopicQuestionDocAccessFields_updatedAt';
  create?: Maybe<TopicQuestionDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<TopicQuestionDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<TopicQuestionDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<TopicQuestionDocAccessFields_UpdatedAt_Update>;
};

export type TopicQuestionDocAccessFields_UpdatedAt_Create = {
  __typename?: 'TopicQuestionDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'TopicQuestionDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_UpdatedAt_Read = {
  __typename?: 'TopicQuestionDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionDocAccessFields_UpdatedAt_Update = {
  __typename?: 'TopicQuestionDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields = {
  __typename?: 'TopicQuestionFields';
  createdAt?: Maybe<TopicQuestionFields_CreatedAt>;
  order?: Maybe<TopicQuestionFields_Order>;
  text?: Maybe<TopicQuestionFields_Text>;
  updatedAt?: Maybe<TopicQuestionFields_UpdatedAt>;
};

export type TopicQuestionFields_CreatedAt = {
  __typename?: 'TopicQuestionFields_createdAt';
  create?: Maybe<TopicQuestionFields_CreatedAt_Create>;
  delete?: Maybe<TopicQuestionFields_CreatedAt_Delete>;
  read?: Maybe<TopicQuestionFields_CreatedAt_Read>;
  update?: Maybe<TopicQuestionFields_CreatedAt_Update>;
};

export type TopicQuestionFields_CreatedAt_Create = {
  __typename?: 'TopicQuestionFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_CreatedAt_Delete = {
  __typename?: 'TopicQuestionFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_CreatedAt_Read = {
  __typename?: 'TopicQuestionFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_CreatedAt_Update = {
  __typename?: 'TopicQuestionFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_Order = {
  __typename?: 'TopicQuestionFields_order';
  create?: Maybe<TopicQuestionFields_Order_Create>;
  delete?: Maybe<TopicQuestionFields_Order_Delete>;
  read?: Maybe<TopicQuestionFields_Order_Read>;
  update?: Maybe<TopicQuestionFields_Order_Update>;
};

export type TopicQuestionFields_Order_Create = {
  __typename?: 'TopicQuestionFields_order_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_Order_Delete = {
  __typename?: 'TopicQuestionFields_order_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_Order_Read = {
  __typename?: 'TopicQuestionFields_order_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_Order_Update = {
  __typename?: 'TopicQuestionFields_order_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_Text = {
  __typename?: 'TopicQuestionFields_text';
  create?: Maybe<TopicQuestionFields_Text_Create>;
  delete?: Maybe<TopicQuestionFields_Text_Delete>;
  read?: Maybe<TopicQuestionFields_Text_Read>;
  update?: Maybe<TopicQuestionFields_Text_Update>;
};

export type TopicQuestionFields_Text_Create = {
  __typename?: 'TopicQuestionFields_text_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_Text_Delete = {
  __typename?: 'TopicQuestionFields_text_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_Text_Read = {
  __typename?: 'TopicQuestionFields_text_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_Text_Update = {
  __typename?: 'TopicQuestionFields_text_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_UpdatedAt = {
  __typename?: 'TopicQuestionFields_updatedAt';
  create?: Maybe<TopicQuestionFields_UpdatedAt_Create>;
  delete?: Maybe<TopicQuestionFields_UpdatedAt_Delete>;
  read?: Maybe<TopicQuestionFields_UpdatedAt_Read>;
  update?: Maybe<TopicQuestionFields_UpdatedAt_Update>;
};

export type TopicQuestionFields_UpdatedAt_Create = {
  __typename?: 'TopicQuestionFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_UpdatedAt_Delete = {
  __typename?: 'TopicQuestionFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_UpdatedAt_Read = {
  __typename?: 'TopicQuestionFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionFields_UpdatedAt_Update = {
  __typename?: 'TopicQuestionFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicQuestionReadAccess = {
  __typename?: 'TopicQuestionReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicQuestionReadDocAccess = {
  __typename?: 'TopicQuestionReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicQuestionUpdateAccess = {
  __typename?: 'TopicQuestionUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicQuestionUpdateDocAccess = {
  __typename?: 'TopicQuestionUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicQuestion_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TopicQuestion_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type TopicQuestion_Order_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type TopicQuestion_Text_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type TopicQuestion_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type TopicQuestion_Where = {
  AND?: InputMaybe<Array<InputMaybe<TopicQuestion_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicQuestion_Where_Or>>>;
  createdAt?: InputMaybe<TopicQuestion_CreatedAt_Operator>;
  id?: InputMaybe<TopicQuestion_Id_Operator>;
  order?: InputMaybe<TopicQuestion_Order_Operator>;
  text?: InputMaybe<TopicQuestion_Text_Operator>;
  updatedAt?: InputMaybe<TopicQuestion_UpdatedAt_Operator>;
};

export type TopicQuestion_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<TopicQuestion_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicQuestion_Where_Or>>>;
  createdAt?: InputMaybe<TopicQuestion_CreatedAt_Operator>;
  id?: InputMaybe<TopicQuestion_Id_Operator>;
  order?: InputMaybe<TopicQuestion_Order_Operator>;
  text?: InputMaybe<TopicQuestion_Text_Operator>;
  updatedAt?: InputMaybe<TopicQuestion_UpdatedAt_Operator>;
};

export type TopicQuestion_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<TopicQuestion_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<TopicQuestion_Where_Or>>>;
  createdAt?: InputMaybe<TopicQuestion_CreatedAt_Operator>;
  id?: InputMaybe<TopicQuestion_Id_Operator>;
  order?: InputMaybe<TopicQuestion_Order_Operator>;
  text?: InputMaybe<TopicQuestion_Text_Operator>;
  updatedAt?: InputMaybe<TopicQuestion_UpdatedAt_Operator>;
};

export type TopicQuestions = {
  __typename?: 'TopicQuestions';
  docs?: Maybe<Array<Maybe<TopicQuestion>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type Topic_Questions = {
  __typename?: 'Topic_Questions';
  id?: Maybe<Scalars['String']['output']>;
  question?: Maybe<TopicQuestion>;
};

export type Topic_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Topic_Description_Operator = {
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
};

export type Topic_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type Topic_Order_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Topic_QuestionsCount_Operator = {
  equals?: InputMaybe<Scalars['Float']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Float']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Float']['input']>;
  less_than?: InputMaybe<Scalars['Float']['input']>;
  less_than_equal?: InputMaybe<Scalars['Float']['input']>;
  not_equals?: InputMaybe<Scalars['Float']['input']>;
};

export type Topic_Questions__Id_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Topic_Questions__Question_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Topic_Slug_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Topic_Tags_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  equals?: InputMaybe<Scalars['JSON']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
  not_equals?: InputMaybe<Scalars['JSON']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['JSON']['input']>>>;
};

export type Topic_Title_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  contains?: InputMaybe<Scalars['String']['input']>;
  equals?: InputMaybe<Scalars['String']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
  like?: InputMaybe<Scalars['String']['input']>;
  not_equals?: InputMaybe<Scalars['String']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['String']['input']>>>;
};

export type Topic_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type Topic_Where = {
  AND?: InputMaybe<Array<InputMaybe<Topic_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Topic_Where_Or>>>;
  createdAt?: InputMaybe<Topic_CreatedAt_Operator>;
  description?: InputMaybe<Topic_Description_Operator>;
  id?: InputMaybe<Topic_Id_Operator>;
  order?: InputMaybe<Topic_Order_Operator>;
  questionsCount?: InputMaybe<Topic_QuestionsCount_Operator>;
  questions__id?: InputMaybe<Topic_Questions__Id_Operator>;
  questions__question?: InputMaybe<Topic_Questions__Question_Operator>;
  slug?: InputMaybe<Topic_Slug_Operator>;
  tags?: InputMaybe<Topic_Tags_Operator>;
  title?: InputMaybe<Topic_Title_Operator>;
  updatedAt?: InputMaybe<Topic_UpdatedAt_Operator>;
};

export type Topic_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<Topic_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Topic_Where_Or>>>;
  createdAt?: InputMaybe<Topic_CreatedAt_Operator>;
  description?: InputMaybe<Topic_Description_Operator>;
  id?: InputMaybe<Topic_Id_Operator>;
  order?: InputMaybe<Topic_Order_Operator>;
  questionsCount?: InputMaybe<Topic_QuestionsCount_Operator>;
  questions__id?: InputMaybe<Topic_Questions__Id_Operator>;
  questions__question?: InputMaybe<Topic_Questions__Question_Operator>;
  slug?: InputMaybe<Topic_Slug_Operator>;
  tags?: InputMaybe<Topic_Tags_Operator>;
  title?: InputMaybe<Topic_Title_Operator>;
  updatedAt?: InputMaybe<Topic_UpdatedAt_Operator>;
};

export type Topic_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<Topic_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<Topic_Where_Or>>>;
  createdAt?: InputMaybe<Topic_CreatedAt_Operator>;
  description?: InputMaybe<Topic_Description_Operator>;
  id?: InputMaybe<Topic_Id_Operator>;
  order?: InputMaybe<Topic_Order_Operator>;
  questionsCount?: InputMaybe<Topic_QuestionsCount_Operator>;
  questions__id?: InputMaybe<Topic_Questions__Id_Operator>;
  questions__question?: InputMaybe<Topic_Questions__Question_Operator>;
  slug?: InputMaybe<Topic_Slug_Operator>;
  tags?: InputMaybe<Topic_Tags_Operator>;
  title?: InputMaybe<Topic_Title_Operator>;
  updatedAt?: InputMaybe<Topic_UpdatedAt_Operator>;
};

export type Topics = {
  __typename?: 'Topics';
  docs?: Maybe<Array<Maybe<Topic>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type TopicsCreateAccess = {
  __typename?: 'TopicsCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicsCreateDocAccess = {
  __typename?: 'TopicsCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicsDeleteAccess = {
  __typename?: 'TopicsDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicsDeleteDocAccess = {
  __typename?: 'TopicsDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicsDocAccessFields = {
  __typename?: 'TopicsDocAccessFields';
  createdAt?: Maybe<TopicsDocAccessFields_CreatedAt>;
  description?: Maybe<TopicsDocAccessFields_Description>;
  order?: Maybe<TopicsDocAccessFields_Order>;
  questions?: Maybe<TopicsDocAccessFields_Questions>;
  questionsCount?: Maybe<TopicsDocAccessFields_QuestionsCount>;
  slug?: Maybe<TopicsDocAccessFields_Slug>;
  tags?: Maybe<TopicsDocAccessFields_Tags>;
  title?: Maybe<TopicsDocAccessFields_Title>;
  updatedAt?: Maybe<TopicsDocAccessFields_UpdatedAt>;
};

export type TopicsDocAccessFields_CreatedAt = {
  __typename?: 'TopicsDocAccessFields_createdAt';
  create?: Maybe<TopicsDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<TopicsDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<TopicsDocAccessFields_CreatedAt_Read>;
  update?: Maybe<TopicsDocAccessFields_CreatedAt_Update>;
};

export type TopicsDocAccessFields_CreatedAt_Create = {
  __typename?: 'TopicsDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_CreatedAt_Delete = {
  __typename?: 'TopicsDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_CreatedAt_Read = {
  __typename?: 'TopicsDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_CreatedAt_Update = {
  __typename?: 'TopicsDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Description = {
  __typename?: 'TopicsDocAccessFields_description';
  create?: Maybe<TopicsDocAccessFields_Description_Create>;
  delete?: Maybe<TopicsDocAccessFields_Description_Delete>;
  read?: Maybe<TopicsDocAccessFields_Description_Read>;
  update?: Maybe<TopicsDocAccessFields_Description_Update>;
};

export type TopicsDocAccessFields_Description_Create = {
  __typename?: 'TopicsDocAccessFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Description_Delete = {
  __typename?: 'TopicsDocAccessFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Description_Read = {
  __typename?: 'TopicsDocAccessFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Description_Update = {
  __typename?: 'TopicsDocAccessFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Order = {
  __typename?: 'TopicsDocAccessFields_order';
  create?: Maybe<TopicsDocAccessFields_Order_Create>;
  delete?: Maybe<TopicsDocAccessFields_Order_Delete>;
  read?: Maybe<TopicsDocAccessFields_Order_Read>;
  update?: Maybe<TopicsDocAccessFields_Order_Update>;
};

export type TopicsDocAccessFields_Order_Create = {
  __typename?: 'TopicsDocAccessFields_order_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Order_Delete = {
  __typename?: 'TopicsDocAccessFields_order_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Order_Read = {
  __typename?: 'TopicsDocAccessFields_order_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Order_Update = {
  __typename?: 'TopicsDocAccessFields_order_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Questions = {
  __typename?: 'TopicsDocAccessFields_questions';
  create?: Maybe<TopicsDocAccessFields_Questions_Create>;
  delete?: Maybe<TopicsDocAccessFields_Questions_Delete>;
  fields?: Maybe<TopicsDocAccessFields_Questions_Fields>;
  read?: Maybe<TopicsDocAccessFields_Questions_Read>;
  update?: Maybe<TopicsDocAccessFields_Questions_Update>;
};

export type TopicsDocAccessFields_QuestionsCount = {
  __typename?: 'TopicsDocAccessFields_questionsCount';
  create?: Maybe<TopicsDocAccessFields_QuestionsCount_Create>;
  delete?: Maybe<TopicsDocAccessFields_QuestionsCount_Delete>;
  read?: Maybe<TopicsDocAccessFields_QuestionsCount_Read>;
  update?: Maybe<TopicsDocAccessFields_QuestionsCount_Update>;
};

export type TopicsDocAccessFields_QuestionsCount_Create = {
  __typename?: 'TopicsDocAccessFields_questionsCount_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_QuestionsCount_Delete = {
  __typename?: 'TopicsDocAccessFields_questionsCount_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_QuestionsCount_Read = {
  __typename?: 'TopicsDocAccessFields_questionsCount_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_QuestionsCount_Update = {
  __typename?: 'TopicsDocAccessFields_questionsCount_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Questions_Create = {
  __typename?: 'TopicsDocAccessFields_questions_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Questions_Delete = {
  __typename?: 'TopicsDocAccessFields_questions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Questions_Fields = {
  __typename?: 'TopicsDocAccessFields_questions_Fields';
  id?: Maybe<TopicsDocAccessFields_Questions_Id>;
  question?: Maybe<TopicsDocAccessFields_Questions_Question>;
};

export type TopicsDocAccessFields_Questions_Read = {
  __typename?: 'TopicsDocAccessFields_questions_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Questions_Update = {
  __typename?: 'TopicsDocAccessFields_questions_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Questions_Id = {
  __typename?: 'TopicsDocAccessFields_questions_id';
  create?: Maybe<TopicsDocAccessFields_Questions_Id_Create>;
  delete?: Maybe<TopicsDocAccessFields_Questions_Id_Delete>;
  read?: Maybe<TopicsDocAccessFields_Questions_Id_Read>;
  update?: Maybe<TopicsDocAccessFields_Questions_Id_Update>;
};

export type TopicsDocAccessFields_Questions_Id_Create = {
  __typename?: 'TopicsDocAccessFields_questions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Questions_Id_Delete = {
  __typename?: 'TopicsDocAccessFields_questions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Questions_Id_Read = {
  __typename?: 'TopicsDocAccessFields_questions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Questions_Id_Update = {
  __typename?: 'TopicsDocAccessFields_questions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Questions_Question = {
  __typename?: 'TopicsDocAccessFields_questions_question';
  create?: Maybe<TopicsDocAccessFields_Questions_Question_Create>;
  delete?: Maybe<TopicsDocAccessFields_Questions_Question_Delete>;
  read?: Maybe<TopicsDocAccessFields_Questions_Question_Read>;
  update?: Maybe<TopicsDocAccessFields_Questions_Question_Update>;
};

export type TopicsDocAccessFields_Questions_Question_Create = {
  __typename?: 'TopicsDocAccessFields_questions_question_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Questions_Question_Delete = {
  __typename?: 'TopicsDocAccessFields_questions_question_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Questions_Question_Read = {
  __typename?: 'TopicsDocAccessFields_questions_question_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Questions_Question_Update = {
  __typename?: 'TopicsDocAccessFields_questions_question_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Slug = {
  __typename?: 'TopicsDocAccessFields_slug';
  create?: Maybe<TopicsDocAccessFields_Slug_Create>;
  delete?: Maybe<TopicsDocAccessFields_Slug_Delete>;
  read?: Maybe<TopicsDocAccessFields_Slug_Read>;
  update?: Maybe<TopicsDocAccessFields_Slug_Update>;
};

export type TopicsDocAccessFields_Slug_Create = {
  __typename?: 'TopicsDocAccessFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Slug_Delete = {
  __typename?: 'TopicsDocAccessFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Slug_Read = {
  __typename?: 'TopicsDocAccessFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Slug_Update = {
  __typename?: 'TopicsDocAccessFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Tags = {
  __typename?: 'TopicsDocAccessFields_tags';
  create?: Maybe<TopicsDocAccessFields_Tags_Create>;
  delete?: Maybe<TopicsDocAccessFields_Tags_Delete>;
  read?: Maybe<TopicsDocAccessFields_Tags_Read>;
  update?: Maybe<TopicsDocAccessFields_Tags_Update>;
};

export type TopicsDocAccessFields_Tags_Create = {
  __typename?: 'TopicsDocAccessFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Tags_Delete = {
  __typename?: 'TopicsDocAccessFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Tags_Read = {
  __typename?: 'TopicsDocAccessFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Tags_Update = {
  __typename?: 'TopicsDocAccessFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Title = {
  __typename?: 'TopicsDocAccessFields_title';
  create?: Maybe<TopicsDocAccessFields_Title_Create>;
  delete?: Maybe<TopicsDocAccessFields_Title_Delete>;
  read?: Maybe<TopicsDocAccessFields_Title_Read>;
  update?: Maybe<TopicsDocAccessFields_Title_Update>;
};

export type TopicsDocAccessFields_Title_Create = {
  __typename?: 'TopicsDocAccessFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Title_Delete = {
  __typename?: 'TopicsDocAccessFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Title_Read = {
  __typename?: 'TopicsDocAccessFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_Title_Update = {
  __typename?: 'TopicsDocAccessFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_UpdatedAt = {
  __typename?: 'TopicsDocAccessFields_updatedAt';
  create?: Maybe<TopicsDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<TopicsDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<TopicsDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<TopicsDocAccessFields_UpdatedAt_Update>;
};

export type TopicsDocAccessFields_UpdatedAt_Create = {
  __typename?: 'TopicsDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'TopicsDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_UpdatedAt_Read = {
  __typename?: 'TopicsDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsDocAccessFields_UpdatedAt_Update = {
  __typename?: 'TopicsDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields = {
  __typename?: 'TopicsFields';
  createdAt?: Maybe<TopicsFields_CreatedAt>;
  description?: Maybe<TopicsFields_Description>;
  order?: Maybe<TopicsFields_Order>;
  questions?: Maybe<TopicsFields_Questions>;
  questionsCount?: Maybe<TopicsFields_QuestionsCount>;
  slug?: Maybe<TopicsFields_Slug>;
  tags?: Maybe<TopicsFields_Tags>;
  title?: Maybe<TopicsFields_Title>;
  updatedAt?: Maybe<TopicsFields_UpdatedAt>;
};

export type TopicsFields_CreatedAt = {
  __typename?: 'TopicsFields_createdAt';
  create?: Maybe<TopicsFields_CreatedAt_Create>;
  delete?: Maybe<TopicsFields_CreatedAt_Delete>;
  read?: Maybe<TopicsFields_CreatedAt_Read>;
  update?: Maybe<TopicsFields_CreatedAt_Update>;
};

export type TopicsFields_CreatedAt_Create = {
  __typename?: 'TopicsFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_CreatedAt_Delete = {
  __typename?: 'TopicsFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_CreatedAt_Read = {
  __typename?: 'TopicsFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_CreatedAt_Update = {
  __typename?: 'TopicsFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Description = {
  __typename?: 'TopicsFields_description';
  create?: Maybe<TopicsFields_Description_Create>;
  delete?: Maybe<TopicsFields_Description_Delete>;
  read?: Maybe<TopicsFields_Description_Read>;
  update?: Maybe<TopicsFields_Description_Update>;
};

export type TopicsFields_Description_Create = {
  __typename?: 'TopicsFields_description_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Description_Delete = {
  __typename?: 'TopicsFields_description_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Description_Read = {
  __typename?: 'TopicsFields_description_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Description_Update = {
  __typename?: 'TopicsFields_description_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Order = {
  __typename?: 'TopicsFields_order';
  create?: Maybe<TopicsFields_Order_Create>;
  delete?: Maybe<TopicsFields_Order_Delete>;
  read?: Maybe<TopicsFields_Order_Read>;
  update?: Maybe<TopicsFields_Order_Update>;
};

export type TopicsFields_Order_Create = {
  __typename?: 'TopicsFields_order_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Order_Delete = {
  __typename?: 'TopicsFields_order_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Order_Read = {
  __typename?: 'TopicsFields_order_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Order_Update = {
  __typename?: 'TopicsFields_order_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Questions = {
  __typename?: 'TopicsFields_questions';
  create?: Maybe<TopicsFields_Questions_Create>;
  delete?: Maybe<TopicsFields_Questions_Delete>;
  fields?: Maybe<TopicsFields_Questions_Fields>;
  read?: Maybe<TopicsFields_Questions_Read>;
  update?: Maybe<TopicsFields_Questions_Update>;
};

export type TopicsFields_QuestionsCount = {
  __typename?: 'TopicsFields_questionsCount';
  create?: Maybe<TopicsFields_QuestionsCount_Create>;
  delete?: Maybe<TopicsFields_QuestionsCount_Delete>;
  read?: Maybe<TopicsFields_QuestionsCount_Read>;
  update?: Maybe<TopicsFields_QuestionsCount_Update>;
};

export type TopicsFields_QuestionsCount_Create = {
  __typename?: 'TopicsFields_questionsCount_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_QuestionsCount_Delete = {
  __typename?: 'TopicsFields_questionsCount_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_QuestionsCount_Read = {
  __typename?: 'TopicsFields_questionsCount_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_QuestionsCount_Update = {
  __typename?: 'TopicsFields_questionsCount_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Questions_Create = {
  __typename?: 'TopicsFields_questions_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Questions_Delete = {
  __typename?: 'TopicsFields_questions_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Questions_Fields = {
  __typename?: 'TopicsFields_questions_Fields';
  id?: Maybe<TopicsFields_Questions_Id>;
  question?: Maybe<TopicsFields_Questions_Question>;
};

export type TopicsFields_Questions_Read = {
  __typename?: 'TopicsFields_questions_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Questions_Update = {
  __typename?: 'TopicsFields_questions_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Questions_Id = {
  __typename?: 'TopicsFields_questions_id';
  create?: Maybe<TopicsFields_Questions_Id_Create>;
  delete?: Maybe<TopicsFields_Questions_Id_Delete>;
  read?: Maybe<TopicsFields_Questions_Id_Read>;
  update?: Maybe<TopicsFields_Questions_Id_Update>;
};

export type TopicsFields_Questions_Id_Create = {
  __typename?: 'TopicsFields_questions_id_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Questions_Id_Delete = {
  __typename?: 'TopicsFields_questions_id_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Questions_Id_Read = {
  __typename?: 'TopicsFields_questions_id_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Questions_Id_Update = {
  __typename?: 'TopicsFields_questions_id_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Questions_Question = {
  __typename?: 'TopicsFields_questions_question';
  create?: Maybe<TopicsFields_Questions_Question_Create>;
  delete?: Maybe<TopicsFields_Questions_Question_Delete>;
  read?: Maybe<TopicsFields_Questions_Question_Read>;
  update?: Maybe<TopicsFields_Questions_Question_Update>;
};

export type TopicsFields_Questions_Question_Create = {
  __typename?: 'TopicsFields_questions_question_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Questions_Question_Delete = {
  __typename?: 'TopicsFields_questions_question_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Questions_Question_Read = {
  __typename?: 'TopicsFields_questions_question_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Questions_Question_Update = {
  __typename?: 'TopicsFields_questions_question_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Slug = {
  __typename?: 'TopicsFields_slug';
  create?: Maybe<TopicsFields_Slug_Create>;
  delete?: Maybe<TopicsFields_Slug_Delete>;
  read?: Maybe<TopicsFields_Slug_Read>;
  update?: Maybe<TopicsFields_Slug_Update>;
};

export type TopicsFields_Slug_Create = {
  __typename?: 'TopicsFields_slug_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Slug_Delete = {
  __typename?: 'TopicsFields_slug_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Slug_Read = {
  __typename?: 'TopicsFields_slug_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Slug_Update = {
  __typename?: 'TopicsFields_slug_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Tags = {
  __typename?: 'TopicsFields_tags';
  create?: Maybe<TopicsFields_Tags_Create>;
  delete?: Maybe<TopicsFields_Tags_Delete>;
  read?: Maybe<TopicsFields_Tags_Read>;
  update?: Maybe<TopicsFields_Tags_Update>;
};

export type TopicsFields_Tags_Create = {
  __typename?: 'TopicsFields_tags_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Tags_Delete = {
  __typename?: 'TopicsFields_tags_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Tags_Read = {
  __typename?: 'TopicsFields_tags_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Tags_Update = {
  __typename?: 'TopicsFields_tags_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Title = {
  __typename?: 'TopicsFields_title';
  create?: Maybe<TopicsFields_Title_Create>;
  delete?: Maybe<TopicsFields_Title_Delete>;
  read?: Maybe<TopicsFields_Title_Read>;
  update?: Maybe<TopicsFields_Title_Update>;
};

export type TopicsFields_Title_Create = {
  __typename?: 'TopicsFields_title_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Title_Delete = {
  __typename?: 'TopicsFields_title_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Title_Read = {
  __typename?: 'TopicsFields_title_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_Title_Update = {
  __typename?: 'TopicsFields_title_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_UpdatedAt = {
  __typename?: 'TopicsFields_updatedAt';
  create?: Maybe<TopicsFields_UpdatedAt_Create>;
  delete?: Maybe<TopicsFields_UpdatedAt_Delete>;
  read?: Maybe<TopicsFields_UpdatedAt_Read>;
  update?: Maybe<TopicsFields_UpdatedAt_Update>;
};

export type TopicsFields_UpdatedAt_Create = {
  __typename?: 'TopicsFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_UpdatedAt_Delete = {
  __typename?: 'TopicsFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_UpdatedAt_Read = {
  __typename?: 'TopicsFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type TopicsFields_UpdatedAt_Update = {
  __typename?: 'TopicsFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type TopicsReadAccess = {
  __typename?: 'TopicsReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicsReadDocAccess = {
  __typename?: 'TopicsReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicsUpdateAccess = {
  __typename?: 'TopicsUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type TopicsUpdateDocAccess = {
  __typename?: 'TopicsUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type User = {
  __typename?: 'User';
  createdAt?: Maybe<Scalars['DateTime']['output']>;
  email: Scalars['EmailAddress']['output'];
  hash?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  lockUntil?: Maybe<Scalars['DateTime']['output']>;
  loginAttempts?: Maybe<Scalars['Float']['output']>;
  password: Scalars['String']['output'];
  resetPasswordExpiration?: Maybe<Scalars['DateTime']['output']>;
  resetPasswordToken?: Maybe<Scalars['String']['output']>;
  salt?: Maybe<Scalars['String']['output']>;
  updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type User_CreatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Email_Operator = {
  all?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  contains?: InputMaybe<Scalars['EmailAddress']['input']>;
  equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
  like?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_equals?: InputMaybe<Scalars['EmailAddress']['input']>;
  not_in?: InputMaybe<Array<InputMaybe<Scalars['EmailAddress']['input']>>>;
};

export type User_Id_Operator = {
  equals?: InputMaybe<Scalars['Int']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['Int']['input']>;
  greater_than_equal?: InputMaybe<Scalars['Int']['input']>;
  less_than?: InputMaybe<Scalars['Int']['input']>;
  less_than_equal?: InputMaybe<Scalars['Int']['input']>;
  not_equals?: InputMaybe<Scalars['Int']['input']>;
};

export type User_UpdatedAt_Operator = {
  equals?: InputMaybe<Scalars['DateTime']['input']>;
  exists?: InputMaybe<Scalars['Boolean']['input']>;
  greater_than?: InputMaybe<Scalars['DateTime']['input']>;
  greater_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  less_than?: InputMaybe<Scalars['DateTime']['input']>;
  less_than_equal?: InputMaybe<Scalars['DateTime']['input']>;
  like?: InputMaybe<Scalars['DateTime']['input']>;
  not_equals?: InputMaybe<Scalars['DateTime']['input']>;
};

export type User_Where = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_And = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type User_Where_Or = {
  AND?: InputMaybe<Array<InputMaybe<User_Where_And>>>;
  OR?: InputMaybe<Array<InputMaybe<User_Where_Or>>>;
  createdAt?: InputMaybe<User_CreatedAt_Operator>;
  email?: InputMaybe<User_Email_Operator>;
  id?: InputMaybe<User_Id_Operator>;
  updatedAt?: InputMaybe<User_UpdatedAt_Operator>;
};

export type Users = {
  __typename?: 'Users';
  docs?: Maybe<Array<Maybe<User>>>;
  hasNextPage?: Maybe<Scalars['Boolean']['output']>;
  hasPrevPage?: Maybe<Scalars['Boolean']['output']>;
  limit?: Maybe<Scalars['Int']['output']>;
  nextPage?: Maybe<Scalars['Int']['output']>;
  offset?: Maybe<Scalars['Int']['output']>;
  page?: Maybe<Scalars['Int']['output']>;
  pagingCounter?: Maybe<Scalars['Int']['output']>;
  prevPage?: Maybe<Scalars['Int']['output']>;
  totalDocs?: Maybe<Scalars['Int']['output']>;
  totalPages?: Maybe<Scalars['Int']['output']>;
};

export type UsersCreateAccess = {
  __typename?: 'UsersCreateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersCreateDocAccess = {
  __typename?: 'UsersCreateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteAccess = {
  __typename?: 'UsersDeleteAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDeleteDocAccess = {
  __typename?: 'UsersDeleteDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersDocAccessFields = {
  __typename?: 'UsersDocAccessFields';
  createdAt?: Maybe<UsersDocAccessFields_CreatedAt>;
  email?: Maybe<UsersDocAccessFields_Email>;
  password?: Maybe<UsersDocAccessFields_Password>;
  updatedAt?: Maybe<UsersDocAccessFields_UpdatedAt>;
};

export type UsersDocAccessFields_CreatedAt = {
  __typename?: 'UsersDocAccessFields_createdAt';
  create?: Maybe<UsersDocAccessFields_CreatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_CreatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_CreatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_CreatedAt_Update>;
};

export type UsersDocAccessFields_CreatedAt_Create = {
  __typename?: 'UsersDocAccessFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Read = {
  __typename?: 'UsersDocAccessFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_CreatedAt_Update = {
  __typename?: 'UsersDocAccessFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email = {
  __typename?: 'UsersDocAccessFields_email';
  create?: Maybe<UsersDocAccessFields_Email_Create>;
  delete?: Maybe<UsersDocAccessFields_Email_Delete>;
  read?: Maybe<UsersDocAccessFields_Email_Read>;
  update?: Maybe<UsersDocAccessFields_Email_Update>;
};

export type UsersDocAccessFields_Email_Create = {
  __typename?: 'UsersDocAccessFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Delete = {
  __typename?: 'UsersDocAccessFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Read = {
  __typename?: 'UsersDocAccessFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Email_Update = {
  __typename?: 'UsersDocAccessFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password = {
  __typename?: 'UsersDocAccessFields_password';
  create?: Maybe<UsersDocAccessFields_Password_Create>;
  delete?: Maybe<UsersDocAccessFields_Password_Delete>;
  read?: Maybe<UsersDocAccessFields_Password_Read>;
  update?: Maybe<UsersDocAccessFields_Password_Update>;
};

export type UsersDocAccessFields_Password_Create = {
  __typename?: 'UsersDocAccessFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Delete = {
  __typename?: 'UsersDocAccessFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Read = {
  __typename?: 'UsersDocAccessFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_Password_Update = {
  __typename?: 'UsersDocAccessFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt = {
  __typename?: 'UsersDocAccessFields_updatedAt';
  create?: Maybe<UsersDocAccessFields_UpdatedAt_Create>;
  delete?: Maybe<UsersDocAccessFields_UpdatedAt_Delete>;
  read?: Maybe<UsersDocAccessFields_UpdatedAt_Read>;
  update?: Maybe<UsersDocAccessFields_UpdatedAt_Update>;
};

export type UsersDocAccessFields_UpdatedAt_Create = {
  __typename?: 'UsersDocAccessFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Delete = {
  __typename?: 'UsersDocAccessFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Read = {
  __typename?: 'UsersDocAccessFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersDocAccessFields_UpdatedAt_Update = {
  __typename?: 'UsersDocAccessFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields = {
  __typename?: 'UsersFields';
  createdAt?: Maybe<UsersFields_CreatedAt>;
  email?: Maybe<UsersFields_Email>;
  password?: Maybe<UsersFields_Password>;
  updatedAt?: Maybe<UsersFields_UpdatedAt>;
};

export type UsersFields_CreatedAt = {
  __typename?: 'UsersFields_createdAt';
  create?: Maybe<UsersFields_CreatedAt_Create>;
  delete?: Maybe<UsersFields_CreatedAt_Delete>;
  read?: Maybe<UsersFields_CreatedAt_Read>;
  update?: Maybe<UsersFields_CreatedAt_Update>;
};

export type UsersFields_CreatedAt_Create = {
  __typename?: 'UsersFields_createdAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Delete = {
  __typename?: 'UsersFields_createdAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Read = {
  __typename?: 'UsersFields_createdAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_CreatedAt_Update = {
  __typename?: 'UsersFields_createdAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email = {
  __typename?: 'UsersFields_email';
  create?: Maybe<UsersFields_Email_Create>;
  delete?: Maybe<UsersFields_Email_Delete>;
  read?: Maybe<UsersFields_Email_Read>;
  update?: Maybe<UsersFields_Email_Update>;
};

export type UsersFields_Email_Create = {
  __typename?: 'UsersFields_email_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Delete = {
  __typename?: 'UsersFields_email_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Read = {
  __typename?: 'UsersFields_email_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Email_Update = {
  __typename?: 'UsersFields_email_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password = {
  __typename?: 'UsersFields_password';
  create?: Maybe<UsersFields_Password_Create>;
  delete?: Maybe<UsersFields_Password_Delete>;
  read?: Maybe<UsersFields_Password_Read>;
  update?: Maybe<UsersFields_Password_Update>;
};

export type UsersFields_Password_Create = {
  __typename?: 'UsersFields_password_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Delete = {
  __typename?: 'UsersFields_password_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Read = {
  __typename?: 'UsersFields_password_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_Password_Update = {
  __typename?: 'UsersFields_password_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt = {
  __typename?: 'UsersFields_updatedAt';
  create?: Maybe<UsersFields_UpdatedAt_Create>;
  delete?: Maybe<UsersFields_UpdatedAt_Delete>;
  read?: Maybe<UsersFields_UpdatedAt_Read>;
  update?: Maybe<UsersFields_UpdatedAt_Update>;
};

export type UsersFields_UpdatedAt_Create = {
  __typename?: 'UsersFields_updatedAt_Create';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Delete = {
  __typename?: 'UsersFields_updatedAt_Delete';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Read = {
  __typename?: 'UsersFields_updatedAt_Read';
  permission: Scalars['Boolean']['output'];
};

export type UsersFields_UpdatedAt_Update = {
  __typename?: 'UsersFields_updatedAt_Update';
  permission: Scalars['Boolean']['output'];
};

export type UsersReadAccess = {
  __typename?: 'UsersReadAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersReadDocAccess = {
  __typename?: 'UsersReadDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockAccess = {
  __typename?: 'UsersUnlockAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUnlockDocAccess = {
  __typename?: 'UsersUnlockDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateAccess = {
  __typename?: 'UsersUpdateAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type UsersUpdateDocAccess = {
  __typename?: 'UsersUpdateDocAccess';
  permission: Scalars['Boolean']['output'];
  where?: Maybe<Scalars['JSONObject']['output']>;
};

export type MutationPayloadPreferenceInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreference_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationPayloadPreferenceUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  key?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
  user?: InputMaybe<PayloadPreferenceUpdate_UserRelationshipInput>;
  value?: InputMaybe<Scalars['JSON']['input']>;
};

export type MutationTagInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTagUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTopicInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['Float']['input'];
  questions?: InputMaybe<Array<InputMaybe<MutationTopic_QuestionsInput>>>;
  questionsCount?: InputMaybe<Scalars['Float']['input']>;
  slug: Scalars['String']['input'];
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  title: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTopicQuestionInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  order: Scalars['Float']['input'];
  text: Scalars['String']['input'];
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTopicQuestionUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Float']['input']>;
  text?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTopicUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  description?: InputMaybe<Scalars['String']['input']>;
  order?: InputMaybe<Scalars['Float']['input']>;
  questions?: InputMaybe<Array<InputMaybe<MutationTopicUpdate_QuestionsInput>>>;
  questionsCount?: InputMaybe<Scalars['Float']['input']>;
  slug?: InputMaybe<Scalars['String']['input']>;
  tags?: InputMaybe<Array<InputMaybe<Scalars['Int']['input']>>>;
  title?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationTopicUpdate_QuestionsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationTopic_QuestionsInput = {
  id?: InputMaybe<Scalars['String']['input']>;
  question?: InputMaybe<Scalars['Int']['input']>;
};

export type MutationUserInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email: Scalars['String']['input'];
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password: Scalars['String']['input'];
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type MutationUserUpdateInput = {
  createdAt?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  hash?: InputMaybe<Scalars['String']['input']>;
  lockUntil?: InputMaybe<Scalars['String']['input']>;
  loginAttempts?: InputMaybe<Scalars['Float']['input']>;
  password?: InputMaybe<Scalars['String']['input']>;
  resetPasswordExpiration?: InputMaybe<Scalars['String']['input']>;
  resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  salt?: InputMaybe<Scalars['String']['input']>;
  updatedAt?: InputMaybe<Scalars['String']['input']>;
};

export type Payload_PreferencesAccess = {
  __typename?: 'payload_preferencesAccess';
  create?: Maybe<PayloadPreferencesCreateAccess>;
  delete?: Maybe<PayloadPreferencesDeleteAccess>;
  fields?: Maybe<PayloadPreferencesFields>;
  read?: Maybe<PayloadPreferencesReadAccess>;
  update?: Maybe<PayloadPreferencesUpdateAccess>;
};

export type Payload_PreferencesDocAccess = {
  __typename?: 'payload_preferencesDocAccess';
  create?: Maybe<PayloadPreferencesCreateDocAccess>;
  delete?: Maybe<PayloadPreferencesDeleteDocAccess>;
  fields?: Maybe<PayloadPreferencesDocAccessFields>;
  read?: Maybe<PayloadPreferencesReadDocAccess>;
  update?: Maybe<PayloadPreferencesUpdateDocAccess>;
};

export type TagsAccess = {
  __typename?: 'tagsAccess';
  create?: Maybe<TagsCreateAccess>;
  delete?: Maybe<TagsDeleteAccess>;
  fields?: Maybe<TagsFields>;
  read?: Maybe<TagsReadAccess>;
  update?: Maybe<TagsUpdateAccess>;
};

export type TagsDocAccess = {
  __typename?: 'tagsDocAccess';
  create?: Maybe<TagsCreateDocAccess>;
  delete?: Maybe<TagsDeleteDocAccess>;
  fields?: Maybe<TagsDocAccessFields>;
  read?: Maybe<TagsReadDocAccess>;
  update?: Maybe<TagsUpdateDocAccess>;
};

export type TopicQuestionAccess = {
  __typename?: 'topicQuestionAccess';
  create?: Maybe<TopicQuestionCreateAccess>;
  delete?: Maybe<TopicQuestionDeleteAccess>;
  fields?: Maybe<TopicQuestionFields>;
  read?: Maybe<TopicQuestionReadAccess>;
  update?: Maybe<TopicQuestionUpdateAccess>;
};

export type TopicQuestionDocAccess = {
  __typename?: 'topicQuestionDocAccess';
  create?: Maybe<TopicQuestionCreateDocAccess>;
  delete?: Maybe<TopicQuestionDeleteDocAccess>;
  fields?: Maybe<TopicQuestionDocAccessFields>;
  read?: Maybe<TopicQuestionReadDocAccess>;
  update?: Maybe<TopicQuestionUpdateDocAccess>;
};

export type TopicsAccess = {
  __typename?: 'topicsAccess';
  create?: Maybe<TopicsCreateAccess>;
  delete?: Maybe<TopicsDeleteAccess>;
  fields?: Maybe<TopicsFields>;
  read?: Maybe<TopicsReadAccess>;
  update?: Maybe<TopicsUpdateAccess>;
};

export type TopicsDocAccess = {
  __typename?: 'topicsDocAccess';
  create?: Maybe<TopicsCreateDocAccess>;
  delete?: Maybe<TopicsDeleteDocAccess>;
  fields?: Maybe<TopicsDocAccessFields>;
  read?: Maybe<TopicsReadDocAccess>;
  update?: Maybe<TopicsUpdateDocAccess>;
};

export type UsersAccess = {
  __typename?: 'usersAccess';
  create?: Maybe<UsersCreateAccess>;
  delete?: Maybe<UsersDeleteAccess>;
  fields?: Maybe<UsersFields>;
  read?: Maybe<UsersReadAccess>;
  unlock?: Maybe<UsersUnlockAccess>;
  update?: Maybe<UsersUpdateAccess>;
};

export type UsersDocAccess = {
  __typename?: 'usersDocAccess';
  create?: Maybe<UsersCreateDocAccess>;
  delete?: Maybe<UsersDeleteDocAccess>;
  fields?: Maybe<UsersDocAccessFields>;
  read?: Maybe<UsersReadDocAccess>;
  unlock?: Maybe<UsersUnlockDocAccess>;
  update?: Maybe<UsersUpdateDocAccess>;
};

export type UsersJwt = {
  __typename?: 'usersJWT';
  collection: Scalars['String']['output'];
  email: Scalars['EmailAddress']['output'];
};

export type UsersLoginResult = {
  __typename?: 'usersLoginResult';
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersMe = {
  __typename?: 'usersMe';
  collection?: Maybe<Scalars['String']['output']>;
  exp?: Maybe<Scalars['Int']['output']>;
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type UsersRefreshedUser = {
  __typename?: 'usersRefreshedUser';
  exp?: Maybe<Scalars['Int']['output']>;
  refreshedToken?: Maybe<Scalars['String']['output']>;
  user?: Maybe<UsersJwt>;
};

export type UsersResetPassword = {
  __typename?: 'usersResetPassword';
  token?: Maybe<Scalars['String']['output']>;
  user?: Maybe<User>;
};

export type GetAllTopicsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTopicsQuery = { __typename?: 'Query', Topics?: { __typename?: 'Topics', docs?: Array<{ __typename?: 'Topic', id?: number | null, slug: string, title: string, description?: string | null, questions?: Array<{ __typename?: 'Topic_Questions', id?: string | null, question?: { __typename?: 'TopicQuestion', id?: number | null, text: string } | null }> | null, tags?: Array<{ __typename?: 'Tag', id?: number | null, name: string }> | null } | null> | null } | null };

export type LoginMutationVariables = Exact<{
  email: Scalars['String']['input'];
  password: Scalars['String']['input'];
}>;


export type LoginMutation = { __typename?: 'Mutation', loginUser?: { __typename?: 'usersLoginResult', exp?: number | null, token?: string | null, user?: { __typename?: 'User', email: any } | null } | null };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logoutUser?: string | null };

export type GetTopicBySlugQueryVariables = Exact<{
  slug: Scalars['String']['input'];
}>;


export type GetTopicBySlugQuery = { __typename?: 'Query', Topics?: { __typename?: 'Topics', docs?: Array<{ __typename?: 'Topic', id?: number | null, title: string, questionsCount?: number | null, questions?: Array<{ __typename?: 'Topic_Questions', id?: string | null, question?: { __typename?: 'TopicQuestion', id?: number | null, text: string } | null }> | null } | null> | null } | null };


export const GetAllTopicsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getAllTopics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Topics"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"slug"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"description"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"tags"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetAllTopicsQuery, GetAllTopicsQueryVariables>;
export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"password"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"loginUser"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"password"},"value":{"kind":"Variable","name":{"kind":"Name","value":"password"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"email"}}]}},{"kind":"Field","name":{"kind":"Name","value":"exp"}},{"kind":"Field","name":{"kind":"Name","value":"token"}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"logout"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"logoutUser"}}]}}]} as unknown as DocumentNode<LogoutMutation, LogoutMutationVariables>;
export const GetTopicBySlugDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getTopicBySlug"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"slug"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"Topics"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"where"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"slug"},"value":{"kind":"ObjectValue","fields":[{"kind":"ObjectField","name":{"kind":"Name","value":"equals"},"value":{"kind":"Variable","name":{"kind":"Name","value":"slug"}}}]}}]}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"docs"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"questions"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"question"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}}]}}]}},{"kind":"Field","name":{"kind":"Name","value":"questionsCount"}}]}}]}}]}}]} as unknown as DocumentNode<GetTopicBySlugQuery, GetTopicBySlugQueryVariables>;