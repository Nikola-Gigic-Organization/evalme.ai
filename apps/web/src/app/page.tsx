import { cookies } from "next/headers";

import { apolloClient } from "../lib";
import {
  AllUsersDocument,
  LoginDocument,
  LogoutDocument,
} from "../gql/graphql";

export default async function Page(): Promise<JSX.Element> {
  const loginAction = async () => {
    "use server";

    const { data } = await apolloClient.mutate({
      mutation: LoginDocument,
      variables: {
        email: "aaaa@aaa.com",
        password: "aaaa",
      },
    });

    if (data?.loginUser?.token) {
      cookies().set("token", data?.loginUser?.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
      });
    } else {
      console.error("No token");
    }
  };

  const logoutAction = async () => {
    "use server";

    const { data } = await apolloClient.mutate({
      mutation: LogoutDocument,
    });

    if (data?.logoutUser) {
      cookies().delete("token");
    } else {
      console.error("No token");
    }
  };

  const token = cookies().get("token");

  if (token) {
    await apolloClient.query({
      query: AllUsersDocument,
    });
  }

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <h1>Page</h1>
      {token ? (
        <form action={logoutAction}>
          <button type="submit">Logout</button>
        </form>
      ) : (
        <form action={loginAction}>
          <button type="submit">Login</button>
        </form>
      )}
    </div>
  );
}
