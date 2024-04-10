import { CollectionConfig } from "payload/types";

const Tags: CollectionConfig = {
  slug: "tags",
  admin: {
    useAsTitle: "name",
  },
  access: {},
  fields: [
    {
      name: "name",
      label: "Name",
      type: "text",
      required: true,
    },
  ],
};

export default Tags;
