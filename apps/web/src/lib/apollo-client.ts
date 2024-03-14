import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  FetchResult,
  NormalizedCacheObject,
} from "@apollo/client";
import { cookies } from "next/headers";

const isBuild = process.env.NEXT_PUBLIC_BUILD_MODE;
const token = isBuild ? "" : cookies().get("token")?.value;

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "http://127.0.0.1:3001/api/graphql",
    credentials: "same-origin",
    headers: {
      Authorization: `JWT ${token}`,
    },
  }),
  cache: new InMemoryCache(),
});

const customQuery: typeof client.query = async (options): Promise<any> => {
  try {
    const data = await client.query(options);

    return data;
  } catch (error: any) {
    return error;
  }
};
const customMutate: typeof client.mutate = async (
  options,
): Promise<FetchResult<any>> => {
  try {
    const data = await client.mutate(options);

    return data;
  } catch (error: any) {
    return error;
  }
};

class CustomClient {
  query = customQuery;
  mutate = customMutate;
}

export default new CustomClient() as ApolloClient<NormalizedCacheObject>;
