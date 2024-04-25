import { apolloClient } from "@/lib";
import { GetAllTopicsDocument, GetAllTagsDocument } from "@/gql/graphql";
import { TopicsForm } from "./components";
import { LoadingTopicCard } from "@repo/ui";

export default async function Page(): Promise<JSX.Element> {
  const { data: topicsData } = await apolloClient.query({
    query: GetAllTopicsDocument,
  });

  const { data: tagsData } = await apolloClient.query({
    query: GetAllTagsDocument,
  });

  return (
    <div className="p-8">
      <TopicsForm topics={topicsData?.topics} tags={tagsData?.tags} />
    </div>
  );
}
