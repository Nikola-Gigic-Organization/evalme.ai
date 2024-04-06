import payload from "payload";
import path from "path";
import dotenv from "dotenv";

import { Topic, TopicQuestion, Tag } from "payload/generated-types";

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
          const topicQuestions = await payload.find({
            collection: "topics",
            where: {
              id: { equals: (res.topic as any).id },
            },
          });
          const topicQuestionsIds = topicQuestions.docs.at(0).questions;
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

  const Tags: Tag[] = [
    {
      id: 1,
      name: "front-end",
      createdAt: "2021-09-01T00:00:00.000Z",
      updatedAt: "2021-09-01T00:00:00.000Z",
    },
    {
      id: 2,
      name: "back-end",
      createdAt: "2021-09-01T00:00:00.000Z",
      updatedAt: "2021-09-01T00:00:00.000Z",
    },
    {
      id: 3,
      name: "full-stack",
      createdAt: "2021-09-01T00:00:00.000Z",
      updatedAt: "2021-09-01T00:00:00.000Z",
    },
    {
      id: 4,
      name: "frameworks",
      createdAt: "2021-09-01T00:00:00.000Z",
      updatedAt: "2021-09-01T00:00:00.000Z",
    },
  ];

  let tags: { id: number; name: string }[] = [];

  const findTag = async (name: string) => {
    if (tags.length === 0) {
      const allTags = await payload.find({
        collection: "tags",
      });
      tags = allTags.docs.map((tag) => ({ id: tag.id, name: tag.name }));
    }

    return tags.find((tag) => tag.name === name)?.id;
  };

  payload.logger.info(`Seeding ${Tags.length} tags`);
  await Promise.all(
    Tags.map(async (tag) => {
      await payload
        .create({
          collection: "tags",
          data: {
            ...tag,
          },
        })
        .then((res) => {
          tags.push({ id: res.id, name: res.name });
        });
    }),
  );
  await payload.update({
    collection: "topics",
    where: {
      slug: { equals: "next-js" },
    },
    data: {
      tags: [await findTag("full-stack"), await findTag("frameworks")],
    },
  });
  await payload.update({
    collection: "topics",
    where: {
      slug: { equals: "react" },
    },
    data: {
      tags: [await findTag("front-end"), await findTag("frameworks")],
    },
  });
  await payload.update({
    collection: "topics",
    where: {
      slug: { equals: "graphql" },
    },
    data: {
      tags: [await findTag("back-end"), await findTag("frameworks")],
    },
  });

  payload.logger.info("Seeding complete");

  process.exit();
};

runSeeder();
