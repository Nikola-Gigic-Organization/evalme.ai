import { apolloClient } from "@/lib";
import { GetAllTopicsDocument } from "@/gql/graphql";
import { TopicsForm } from "./components";

export default async function Page(): Promise<JSX.Element> {
  try {
    const { data } = await apolloClient.query({
      query: GetAllTopicsDocument,
    });

    return (
      <div className="flex justify-center">
        <TopicsForm topics={data.Topics?.docs} />
      </div>
    );
  } catch {
    return <div>Error fetching topics</div>;
  }
}
