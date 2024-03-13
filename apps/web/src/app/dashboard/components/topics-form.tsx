"use client";

import { Topic } from "@/gql/graphql";

import TopicCard from "./topic-card";

const TopicsForm: React.FC<{ topics?: Partial<Topic | null>[] | null }> = ({
  topics,
}) => {
  return (
    <div className="flex flex-col space-y-4">
      <input
        className="border border-black px-2 py-1 outline-0 ring-0 placeholder:font-light"
        placeholder="Search Topic"
      />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {topics?.map((topic) => (
          <TopicCard
            key={topic?.id}
            title={topic?.title}
            description={topic?.description}
            tags={topic?.tags?.map((tag) => tag.name)}
          />
        ))}
      </div>
    </div>
  );
};

export default TopicsForm;
