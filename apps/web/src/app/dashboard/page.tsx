import { TopicCard } from "@repo/ui";

export default function Page() {
  return (
    <div className="w-full py-8 pl-8">
      <div className="flex w-full flex-col">
        <span className="mr-8 border-b-4 border-black pb-4 text-2xl font-bold">
          Completed Topics
        </span>
        <div className="flex w-full space-x-8 overflow-x-auto border-l-4 border-black p-4">
          <TopicCard
            slug="next-js"
            title="Next.js"
            description="The React Framework for Production"
            tags={["React", "Framework"]}
            viewerAnsweredAllQuestions={true}
          />
          <TopicCard
            slug="react"
            title="React"
            description="A JavaScript library for building user interfaces"
            tags={["JavaScript", "Library"]}
            viewerAnsweredAllQuestions={true}
          />
          <TopicCard
            slug="tailwind-css"
            title="Tailwind CSS"
            description="A utility-first CSS framework"
            tags={["CSS", "Framework"]}
            viewerAnsweredAllQuestions={true}
          />
          <TopicCard
            slug="graphql"
            title="GraphQL"
            description="A query language for your API"
            tags={["API", "Query"]}
            viewerAnsweredAllQuestions={true}
          />
          <TopicCard
            slug="apollo-client"
            title="Apollo Client"
            description="A fully-featured caching GraphQL client"
            tags={["GraphQL", "Client"]}
            viewerAnsweredAllQuestions={true}
          />
          <TopicCard
            slug="apollo-server"
            title="Apollo Server"
            description="A production-ready GraphQL server"
            tags={["GraphQL", "Server"]}
            viewerAnsweredAllQuestions={true}
          />
          <TopicCard
            slug="prisma"
            title="Prisma"
            description="Next-generation ORM for Node.js and TypeScript"
            tags={["ORM", "Node.js"]}
            viewerAnsweredAllQuestions={true}
          />
          <TopicCard
            slug="typescript"
            title="TypeScript"
            description="JavaScript that scales"
            tags={["JavaScript", "Type"]}
            viewerAnsweredAllQuestions={true}
          />
          <TopicCard
            slug="jest"
            title="Jest"
            description="Delightful JavaScript Testing"
            tags={["JavaScript", "Testing"]}
            viewerAnsweredAllQuestions={true}
          />
        </div>
      </div>
    </div>
  );
}
