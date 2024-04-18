import { apolloClient } from "@/lib";
import { GetAllTopicsDocument } from "@/gql/graphql";
import { TopicsForm } from "./components";

export default async function Page(): Promise<JSX.Element> {
  const { data } = await apolloClient.query({
    query: GetAllTopicsDocument,
  });

  return (
    <div className="p-8">
      <TopicsForm topics={data?.topics} />
    </div>
  );
}
