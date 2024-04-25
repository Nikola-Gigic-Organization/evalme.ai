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
import { auth } from "./auth";
import dotenv from "dotenv";

dotenv.config();

class ExtendedApolloClient {
  private client: ApolloClient<NormalizedCacheObject>;

  constructor() {
    this.client = new ApolloClient({
      ssrMode: true,
      link: createHttpLink({
        uri: `${process.env.CMS_API_URL}/api/graphql`,
        credentials: "same-origin",
      }),
      cache: new InMemoryCache().restore({}),
      ssrForceFetchDelay: 100, // in milliseconds
      defaultOptions: {
        query: {
          fetchPolicy: "cache-first",
        },
      },
    });
  }

  // Example of a custom query method using composition
  async query<
    T = any,
    TVariables extends OperationVariables = Record<string, any>,
  >(options: QueryOptions<TVariables, T>): Promise<ApolloQueryResult<T>> {
    try {
      const isBuild = process.env.NEXT_PUBLIC_BUILD_MODE;
      let token = "";
      if (!isBuild) {
        const session = await auth();
        token = session?.user?.id ?? "";
      }
      this.client.setLink(
        createHttpLink({
          uri: `${process.env.CMS_API_URL}/api/graphql`,
          credentials: "same-origin",
          headers: {
            Authorization: `JWT ${token}`,
          },
        }),
      );

      return await this.client.query<T, TVariables>(options);
    } catch (error: any) {
      if (error?.networkError?.cause?.code === "ECONNREFUSED") return error;

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
      const isBuild = process.env.NEXT_PUBLIC_BUILD_MODE;
      const token = isBuild ? "" : cookies().get("token")?.value;
      this.client.setLink(
        createHttpLink({
          uri: `${process.env.CMS_API_URL}/api/graphql`,
          credentials: "same-origin",
          headers: {
            Authorization: `JWT ${token}`,
          },
        }),
      );

      return await this.client.mutate<TData, TVariables>({
        ...options,
      });
    } catch (error: any) {
      if (error?.networkError?.cause?.code === "ECONNREFUSED") return error;

      console.error("Custom error handling: ", error);
      throw error; // You can also choose to handle errors differently here
    }
  }
}
const extendedClient = new ExtendedApolloClient();

export default extendedClient;
