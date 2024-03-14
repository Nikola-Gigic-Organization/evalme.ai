"use client";
import React from "react";
import { Topic } from "@/gql/graphql";

import TopicCard from "./topic-card";

const TopicsForm: React.FC<{ topics?: Partial<Topic | null>[] | null }> = ({
  topics,
}) => {
  const [search, setSearch] = React.useState("");
  const [filteredTopics, setFilteredTopics] = React.useState(topics);
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      <input
        className="col-span-1 border border-black px-2 py-1 outline-0 ring-0 placeholder:font-light sm:col-span-2 lg:col-span-3"
        placeholder="Search Topic"
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          if (topics) {
            setFilteredTopics(
              topics.filter((topic) =>
                topic?.title
                  ?.toLowerCase()
                  .includes(e.target.value.toLowerCase()),
              ),
            );
          }
        }}
      />
      {filteredTopics?.map((topic) => (
        <TopicCard
          key={topic?.id}
          title={topic?.title}
          description={topic?.description}
          tags={topic?.tags?.map((tag) => tag.name)}
        />
      ))}
    </div>
  );
};

export default TopicsForm;
