import { CollectionConfig } from "payload/types";

const TopicQuestion: CollectionConfig = {
  slug: "topicQuestion",
  admin: {
    useAsTitle: "text",
  },
  fields: [
    {
      name: "text",
      label: "Question Text",
      type: "textarea",
      required: true,
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
