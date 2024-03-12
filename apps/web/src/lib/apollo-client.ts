import { ApolloClient, createHttpLink, InMemoryCache } from "@apollo/client";
import { cookies } from "next/headers";

const token = cookies().get("token");

const client = new ApolloClient({
  ssrMode: true,
  link: createHttpLink({
    uri: "http://localhost:3001/api/graphql",
    credentials: "same-origin",
    headers: {
      Authorization: `JWT ${token?.value}`,
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
