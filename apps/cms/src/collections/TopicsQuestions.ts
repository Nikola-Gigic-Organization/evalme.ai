import { CollectionConfig } from "payload/types";
import { ErrorResponse } from "payload/dist/express/responses/formatError";
import payload from "payload";

const TopicsQuestions: CollectionConfig = {
  slug: "topics-questions",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "topic",
      label: "Topic",
      type: "relationship",
      relationTo: "topics",
      required: true,
      unique: true,
    },
    {
      name: "questions",
      type: "array",
      labels: {
        singular: "Question",
        plural: "Questions",
      },
      fields: [
        {
          name: "question",
          label: "Question",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      admin: {
        readOnly: true,
        hidden: true,
      },
      hooks: {
        afterRead: [
          async ({ data }) => {
            const { topic } = data;
            const topicDoc = await payload.findByID({
              collection: "topics",
              id: topic,
            });
            return topicDoc.title;
          },
        ],
      },
    },
  ],
  hooks: {
    beforeValidate: [
      async ({ operation, data }) => {
        if (operation === "create") {
          const { topic } = data;
          const topicDoc = await payload.findByID({
            collection: "topics",
            id: topic,
          });

          if (topicDoc) {
            throw new Error(
              "Questions with this topic already exists. Please update the existing questions.",
            );
          }
        }
      },
    ],
  },
};

export default TopicsQuestions;
