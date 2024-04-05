import payload from "payload";
import path from "path";
import dotenv from "dotenv";

import { Topic, TopicQuestion } from "payload/generated-types";

const runSeeder = async (): Promise<void> => {
  dotenv.config({
    path: path.resolve(__dirname, "../../.env"),
  });

  await payload.init({
    secret: process.env.PAYLOAD_SECRET,
    local: true, // Enables local mode, doesn't spin up a server or frontend
  });

  await payload.create({
    collection: "users",
    data: {
      email: "nik.gigic@gmail.com",
      password: "password",
    },
  });

  const Topics: Topic[] = [
    {
      id: 1,
      title: "Next.js",
      description: "The React Framework for Production",
      slug: "next-js",
      questions: [],
      order: 1,
      createdAt: "2021-09-01T00:00:00.000Z",
      updatedAt: "2021-09-01T00:00:00.000Z",
    },
    {
      id: 2,
      title: "React",
      description: "A JavaScript library for building user interfaces",
      slug: "react",
      questions: [],
      order: 2,
      createdAt: "2021-09-01T00:00:00.000Z",
      updatedAt: "2021-09-01T00:00:00.000Z",
    },
    {
      id: 3,
      title: "GraphQL",
      description: "A query language for your API",
      slug: "graphql",
      questions: [],
      order: 3,
      createdAt: "2021-09-01T00:00:00.000Z",
      updatedAt: "2021-09-01T00:00:00.000Z",
    },
  ];

  let topics: { id: number; slug: string }[] = [];

  payload.logger.info(`Seeding ${Topics.length} topics`);
  await Promise.all(
    Topics.map(async (topic) => {
      await payload
        .create({
          collection: "topics",
          data: {
            ...topic,
          },
        })
        .then((res) => {
          topics.push({ id: res.id, slug: res.slug });
        });
    }),
  );

  const TopicQuestions: TopicQuestion[] = [
    {
      id: 1,
      topic: topics.find((topic) => topic.slug === "next-js")?.id,
      title: "What is Next.js?",
      text: "Explain what Next.js is and what it is used for",
      order: 1,
      createdAt: "2021-09-01T00:00:00.000Z",
      updatedAt: "2021-09-01T00:00:00.000Z",
    },
    {
      id: 2,
      topic: topics.find((topic) => topic.slug === "react")?.id,
      title: "What is React?",
      text: "Explain what React is and what it is used for",
      order: 2,
      createdAt: "2021-09-01T00:00:00.000Z",
      updatedAt: "2021-09-01T00:00:00.000Z",
    },
    {
      id: 3,
      topic: topics.find((topic) => topic.slug === "graphql")?.id,
      title: "What is GraphQL?",
      text: "Explain what GraphQL is and what it is used for",
      order: 3,
      createdAt: "2021-09-01T00:00:00.000Z",
      updatedAt: "2021-09-01T00:00:00.000Z",
    },
  ];

  payload.logger.info(`Seeding ${TopicQuestions.length} topic questions`);
  await Promise.all([
    ...TopicQuestions.map(async (question) => {
      return await payload
        .create({
          collection: "topicQuestion",
          data: {
            ...question,
          },
        })
        .then(async (res) => {
          payload.logger.info(`Created topic question: ${res.id} ${res.title}`);

          const topicQuestions = await payload.find({
            collection: "topics",
            where: {
              id: { equals: (res.topic as any).id },
            },
          });
          const topicQuestionsIds = topicQuestions.docs.at(0).questions;

          payload.logger.info(
            `Adding question ${res.id} to topic ${(res.topic as any).id} questions`,
          );
          await payload.update({
            collection: "topics",
            where: { id: { equals: (res.topic as any).id } },
            data: {
              questions: [...topicQuestionsIds, res.id],
            },
          });
        });
    }),
  ]);

  payload.logger.info("Seeding complete");

  process.exit();
};

runSeeder();
