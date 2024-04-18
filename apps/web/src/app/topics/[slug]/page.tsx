import { GetTopicBySlugDocument } from "@/gql/graphql";
import { apolloClient } from "@/lib";
import { QuestionForm } from "./components";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({
  params,
}: PageProps): Promise<JSX.Element> {
  const { slug } = params;
  const { data, loading, error } = await apolloClient.query({
    query: GetTopicBySlugDocument,
    variables: {
      slug,
    },
  });
  const topic = data.topic;

  return (
    <div className="h-app flex w-full justify-center px-4 pt-20 sm:py-10">
      <QuestionForm topic={topic} />
    </div>
  );
}
