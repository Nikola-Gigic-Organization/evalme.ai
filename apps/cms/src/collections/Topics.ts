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
      name: "tags",
      label: "Tags",
      type: "relationship",
      relationTo: "tags",
      hasMany: true,
    },
  ],
};

export default Topics;
