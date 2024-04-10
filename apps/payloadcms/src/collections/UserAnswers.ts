import { CollectionConfig } from "payload/types";

const UserAnswers: CollectionConfig = {
  slug: "user-answers",
  admin: {
    useAsTitle: "user",
  },
  access: {
    read: () => true,
    create: ({ req: { user } }) => !!user,
    update: () => false,
    delete: ({ req: { user } }) => !!user,
  },
  fields: [
    {
      name: "user",
      type: "relationship",
      relationTo: "users",
      required: true,
    },
    {
      name: "question",
      type: "relationship",
      relationTo: "topicQuestion",
      required: true,
    },
    {
      name: "answer",
      type: "text",
      required: true,
    },
  ],
};

export default UserAnswers;
