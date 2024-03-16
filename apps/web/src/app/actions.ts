"use server";

import { cookies } from "next/headers";

import { apolloClient } from "@/lib";
import { LoginDocument, LogoutDocument } from "@/gql/graphql";

export type LoginData = {
  email: string;
  password: string;
};

export type LoginFormData = LoginData & FormData;

export const loginAction = async (
  loginData: LoginData,
): Promise<{ error: string }> => {
  try {
    const { email, password } = loginData;

    const { data } = await apolloClient.mutate({
      mutation: LoginDocument,
      variables: {
        email,
        password,
      },
    });

    if (data?.loginUser?.token) {
      cookies().set("token", data?.loginUser?.token, {
        maxAge: 30 * 24 * 60 * 60,
        path: "/",
        httpOnly: true,
      });

      return { error: "" };
    } else {
      console.error("No token");

      return { error: "No token" };
    }
  } catch (error: any) {
    return { error: error.graphQLErrors.at(0).message };
  }
};

export const logoutAction = async () => {
  const { data } = await apolloClient.mutate({
    mutation: LogoutDocument,
  });

  if (data?.logoutUser) {
    cookies().delete("token");
  } else {
    console.error("No token");
  }
};
