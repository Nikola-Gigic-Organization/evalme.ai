import dynamic from "next/dynamic";
import { apolloClient } from "@/lib";
import { GetViewerTopicAnswersDocument } from "@/gql/graphql";

const PreviewResults = dynamic(() => import("./components/preview-results"), {
  ssr: false,
});

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: PageProps) {
  const { slug } = params;
  const { data, loading, error } = await apolloClient.query({
    query: GetViewerTopicAnswersDocument,
    variables: { slug },
  });
  return (
    <div className="flex h-screen w-full justify-center px-4 py-10">
      <PreviewResults
        topicTitle={data.topic?.title}
        viewerAnswers={data.topic?.viewerAnsweredQuestions}
      />
    </div>
  );
}
