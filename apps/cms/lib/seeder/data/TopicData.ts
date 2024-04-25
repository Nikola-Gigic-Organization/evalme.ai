import { Topic } from "@prisma/client";

const TopicData: Topic[] = [
  {
    id: "1",
    slug: "next-js",
    title: "Next.js",
    description:
      "Next.js is a React framework that enables server-side rendering and static site generation for React applications.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "2",
    slug: "react",
    title: "React",
    description: "React is a JavaScript library for building user interfaces.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "3",
    slug: "prisma",
    title: "Prisma",
    description: "Prisma is a modern database toolkit.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "4",
    slug: "typescript",
    title: "TypeScript",
    description:
      "TypeScript is a typed superset of JavaScript that compiles to plain JavaScript.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "5",
    slug: "graphql",
    title: "GraphQL",
    description:
      "GraphQL is a query language for APIs and a runtime for executing those queries.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "6",
    slug: "apollo",
    title: "Apollo",
    description:
      "Apollo is a platform for building a data graph, a communication layer that seamlessly connects your application clients (such as React and iOS apps) to your back-end services.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "7",
    slug: "tailwind-css",
    title: "Tailwind CSS",
    description:
      "Tailwind CSS is a utility-first CSS framework for building custom designs.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "8",
    slug: "vercel",
    title: "Vercel",
    description:
      "Vercel is a cloud platform for static sites and serverless functions.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "9",
    slug: "jamstack",
    title: "JAMstack",
    description:
      "JAMstack is a modern web development architecture based on client-side JavaScript, reusable APIs, and prebuilt Markup.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "10",
    slug: "serverless",
    title: "Serverless",
    description:
      "Serverless is a cloud computing execution model in which the cloud provider runs the server, and dynamically manages the allocation of machine resources.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
  {
    id: "11",
    slug: "aws",
    title: "AWS",
    description:
      "Amazon Web Services (AWS) is a subsidiary of Amazon providing on-demand cloud computing platforms and APIs to individuals, companies, and governments, on a metered pay-as-you-go basis.",
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];

export default TopicData;
