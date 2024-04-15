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
    <div className="flex h-screen w-full justify-center px-4 py-10">
      <QuestionForm topic={topic} />
    </div>
  );
}
