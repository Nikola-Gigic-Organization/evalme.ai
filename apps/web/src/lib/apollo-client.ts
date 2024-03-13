import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
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

export default client;
