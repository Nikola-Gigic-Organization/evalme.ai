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
  const topic = data?.Topics?.docs?.at(0);

  return (
    <div className="flex h-screen w-full items-center justify-center p-4">
      <QuestionForm topic={topic} />
    </div>
  );
}
