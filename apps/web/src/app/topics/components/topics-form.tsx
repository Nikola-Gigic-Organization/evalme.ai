"use client";
import React from "react";
import { Topic } from "@/gql/graphql";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { TopicCard } from "@repo/ui";

const TopicsForm: React.FC<{ topics?: DeepPartial<Topic | null>[] | null }> = ({
  topics,
}) => {
  const [search, setSearch] = React.useState("");

  const filteredTopics = React.useMemo(() => {
    if (!topics) return topics;
    if (!search) return topics;
    return topics.filter((topic) =>
      topic?.title?.toLowerCase().startsWith(search.toLowerCase()),
    );
  }, [topics, search]);

  return (
    <div className="w-full space-y-2">
      <div className="col-span-4 flex w-full items-end justify-between px-2.5">
        <div className="flex h-10 w-56 space-x-2 border-b border-black">
          <MagnifyingGlassIcon className="h-full w-5 text-black" />
          <input
            className="h-full w-full outline-0 ring-0 placeholder:text-gray-500"
            placeholder="Search topic"
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
            }}
          />
        </div>
        <div>
          {filteredTopics?.length ? (
            filteredTopics.length > 1 ? (
              <>
                <span className="font-bold">{filteredTopics.length}</span>{" "}
                topics
              </>
            ) : (
              <>
                <span className="font-bold">{filteredTopics.length}</span> topic
              </>
            )
          ) : (
            "No topics found"
          )}
        </div>
      </div>
      <div className="flex w-full flex-1 flex-wrap gap-8 border-l-4 border-t-4 border-black p-4">
        {filteredTopics?.map((topic) => (
          <TopicCard
            key={topic?.title}
            slug={topic?.slug}
            title={topic?.title}
            description={topic?.description}
            tags={topic?.tags?.map((tag) => tag?.name ?? "")}
            viewerAnsweredAllQuestions={Boolean(
              topic?.viewerAnsweredAllQuestions,
            )}
          />
        ))}
        {filteredTopics?.length === 0 && <div className="h-60 w-60" />}
      </div>
    </div>
  );
};

export default TopicsForm;
