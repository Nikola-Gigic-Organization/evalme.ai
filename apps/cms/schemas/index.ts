import { default as User } from "./User";
import { Topic, TopicTypeDefs, TopicResolvers } from "./Topic";
import { TopicQuestion } from "./TopicQuestion";
import { default as Tag } from "./Tag";
import { default as UserAnswer } from "./UserAnswer";

export const schemas = { User, Topic, TopicQuestion, Tag, UserAnswer };
export const typeDefs = [TopicTypeDefs];
export const resolvers = [TopicResolvers];
