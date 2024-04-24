"use client";
import { useState, useMemo, FC } from "react";
import { useSearchParams } from "next/navigation";
import { Topic, Tag } from "@/gql/graphql";
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { TopicCard } from "@repo/ui";
import TagsDropdown from "./tags-dropdown";

const TopicsForm: FC<{
  topics?: DeepPartial<Topic | null>[] | null;
  tags?: DeepPartial<Tag | null>[] | null;
}> = ({ topics, tags }) => {
  const params = useSearchParams();
  const tagParam = params.get("tags");
  const [search, setSearch] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>(
    tagParam?.split(",").filter((tag) => tag !== "") || [],
  );

  const filteredTopics = useMemo(() => {
    if (!topics) return topics;
    if (!search && selectedTags.length === 0) {
      return topics;
    }
    return topics.filter((topic) => {
      const topicTitle = topic?.title?.toLowerCase();
      const topicTags = topic?.tags?.map((tag) => tag?.name?.toLowerCase());

      const filteredByTopics = topicTitle?.includes(search.toLowerCase());

      if (!selectedTags.length) {
        return filteredByTopics;
      }

      const filteredByTags = selectedTags.some((tag) =>
        topicTags?.includes(tag.toLowerCase()),
      );

      return filteredByTopics && filteredByTags;
    });
  }, [topics, search, selectedTags]);

  return (
    <div className="w-full space-y-2">
      <div className="col-span-4 flex w-full items-start justify-between sm:items-end sm:px-2.5">
        <div className="space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
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
          <TagsDropdown
            tags={tags}
            selectedTags={selectedTags}
            setSelectedTags={setSelectedTags}
          />
        </div>
        <div className="pt-2">
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
