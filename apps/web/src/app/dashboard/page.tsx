import { TopicCard } from "@repo/ui";
import {
  GetInProgressTopcisDocument,
  GetCompletedTopicsDocument,
} from "@/gql/graphql";
import { apolloClient } from "@/lib";

export default async function Page() {
  const { data: inProgressTopicsData } = await apolloClient.query({
    query: GetInProgressTopcisDocument,
  });

  const { data: completedTopicsData } = await apolloClient.query({
    query: GetCompletedTopicsDocument,
  });

  return (
    <div className="w-full space-y-16 py-8 pl-8">
      <div className="flex w-full flex-col">
        <span className="mr-8 border-b-4 border-black pb-4 text-2xl font-bold">
          / In Progress Topics /
        </span>
        <div className="bg-dotted-spacing-4 bg-dotted-gray-500 flex w-full space-x-8 overflow-x-auto border-l-4 border-black p-4">
          {inProgressTopicsData.getViewerInProgressTopics?.length ? (
            inProgressTopicsData.getViewerInProgressTopics.map((topic) => (
              <TopicCard
                key={topic.slug}
                slug={topic.slug}
                title={topic.title}
                description={topic.description}
                tags={topic.tags?.map((tag) => tag.name ?? "")}
                viewerAnsweredAllQuestions={Boolean(
                  topic.viewerAnsweredAllQuestions,
                )}
              />
            ))
          ) : (
            <TopicCard
              slug={""}
              title={"No in progress topics"}
              description={"You have not started any topics yet"}
              tags={[]}
              viewerAnsweredAllQuestions={false}
            />
          )}
        </div>
      </div>
      <div className="flex w-full flex-col">
        <span className="mr-8 border-b-4 border-black pb-4 text-2xl font-bold">
          / Completed Topics /
        </span>
        <div className="bg-dotted-spacing-4 bg-dotted-gray-500 flex w-full space-x-8 overflow-x-auto border-l-4 border-black p-4">
          {completedTopicsData.getViewerCompletedTopics?.length !== 0 ? (
            completedTopicsData.getViewerCompletedTopics?.map(
              (topic) =>
                topic && (
                  <TopicCard
                    key={topic.slug}
                    slug={topic.slug}
                    title={topic.title}
                    description={topic.description}
                    tags={topic.tags?.map((tag) => tag.name ?? "")}
                    viewerAnsweredAllQuestions={Boolean(
                      topic.viewerAnsweredAllQuestions,
                    )}
                  />
                ),
            )
          ) : (
            <TopicCard
              slug={""}
              title={"No completed topics"}
              description={"You have not completed any topics yet"}
              tags={[]}
              viewerAnsweredAllQuestions={false}
            />
          )}
        </div>
      </div>
    </div>
  );
}
