import payload from "payload";
import { CollectionConfig } from "payload/types";

const Topics: CollectionConfig = {
  slug: "topics",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "slug",
      label: "Slug",
      type: "text",
      unique: true,
      required: true,
    },
    {
      name: "title",
      label: "Title",
      type: "text",
      required: true,
    },
    {
      name: "description",
      label: "Description",
      type: "textarea",
    },
    {
      name: "questions",
      label: "Questions",
      type: "relationship",
      relationTo: "topicQuestion",
      hasMany: true,
      filterOptions: async ({ data, id }) => {
        return {
          topic: {
            equals: id,
          },
        };
      },
    },
    {
      name: "questionsCount",
      label: "Questions Count",
      type: "number",
      admin: {
        readOnly: true,
      },
      hooks: {
        afterRead: [
          async ({ data }) => {
            return data?.questions?.length ?? 0;
          },
        ],
      },
    },
    {
      name: "order",
      label: "Order",
      type: "number",
      required: true,
      defaultValue: 1,
    },
    {
      name: "tags",
      label: "Tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
  ],
};

export default Topics;
