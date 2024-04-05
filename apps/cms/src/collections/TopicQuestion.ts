import { CollectionConfig } from "payload/types";

const TopicQuestion: CollectionConfig = {
  slug: "topicQuestion",
  admin: {
    useAsTitle: "text",
  },
  fields: [
    {
      name: "topic",
      label: "Topic",
      type: "relationship",
      relationTo: "topics",
      required: true,
      hasMany: false,
    },
    {
      name: "title",
      label: "Question Title",
      type: "text",
      required: true,
      defaultValue: "Untitled Question",
    },
    {
      name: "text",
      label: "Question Text",
      type: "textarea",
      required: true,
      defaultValue: "This is a question",
    },
    {
      name: "order",
      label: "Order",
      type: "number",
      required: true,
      defaultValue: 1,
    },
  ],
};

export default TopicQuestion;
