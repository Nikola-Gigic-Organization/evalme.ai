import {
  ApolloClient,
  InMemoryCache,
  createHttpLink,
  NormalizedCacheObject,
  ApolloQueryResult,
  QueryOptions,
  MutationOptions,
  FetchResult,
  OperationVariables,
} from "@apollo/client";
import { cookies } from "next/headers";

class ExtendedApolloClient {
  private client: ApolloClient<NormalizedCacheObject>;

  constructor(token: string) {
    this.client = new ApolloClient({
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
  }

  // Example of a custom query method using composition
  async query<
    T = any,
    TVariables extends OperationVariables = Record<string, any>,
  >(options: QueryOptions<TVariables, T>): Promise<ApolloQueryResult<T>> {
    try {
      return await this.client.query<T, TVariables>(options);
    } catch (error: any) {
      if (error.networkError.cause.code === "ECONNREFUSED") return error;

      console.error("Custom error handling: ", error);
      throw error; // You can also choose to handle errors differently here
    }
  }

  // Example of a custom mutate method using composition
  async mutate<
    TData = any,
    TVariables extends OperationVariables = Record<string, any>,
  >(options: MutationOptions<TData, TVariables>): Promise<FetchResult<TData>> {
    try {
      return await this.client.mutate<TData, TVariables>(options);
    } catch (error: any) {
      if (error.networkError.cause.code === "ECONNREFUSED") return error;

      console.error("Custom error handling: ", error);
      throw error; // You can also choose to handle errors differently here
    }
  }

  // You can add more custom methods or properties as needed
}

// Usage
const isBuild = process.env.NEXT_PUBLIC_BUILD_MODE;
const token = isBuild ? "" : cookies().get("token")?.value;
const extendedClient = new ExtendedApolloClient(token ?? "");

export default extendedClient;
