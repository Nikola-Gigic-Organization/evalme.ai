import { GetTopicBySlugDocument } from "@/gql/graphql";
import { apolloClient } from "@/lib";

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

  const topic = data.Topics?.docs?.at(0);

  return (
    <div>
      <h1>Topic: {topic?.title}</h1>
    </div>
  );
}
