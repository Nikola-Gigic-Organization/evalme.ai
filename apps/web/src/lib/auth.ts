import NextAuth from "next-auth";
import { authConfig } from "./auth.config";
import Credentials from "next-auth/providers/credentials";
import { z } from "zod";
import dotenv from "dotenv";
import { LoginDocument } from "@/gql/graphql";
import { apolloClient } from ".";
import { match, P } from "ts-pattern";

dotenv.config();

export const { auth, signIn, signOut } = NextAuth({
  ...authConfig,
  secret: process.env.AUTH_SECRET,
  providers: [
    Credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;

          const res = await apolloClient.mutate({
            mutation: LoginDocument,
            variables: {
              email,
              password,
            },
          });

          return match(res.data)
            .with(
              {
                authenticateUserWithPassword: {
                  __typename: "UserAuthenticationWithPasswordFailure",
                },
              },
              (res) => {
                console.error(res.authenticateUserWithPassword.message);
                return null;
              },
            )
            .with(
              {
                authenticateUserWithPassword: {
                  __typename: "UserAuthenticationWithPasswordSuccess",
                  user: {
                    id: P.string,
                    email: P.string,
                  },
                  sessionToken: P.string,
                },
              },
              ({ authenticateUserWithPassword }) => {
                return {
                  id: authenticateUserWithPassword.user.id,
                  email: authenticateUserWithPassword.user.email,
                  keystoneSessionToken:
                    authenticateUserWithPassword.sessionToken,
                };
              },
            )
            .otherwise(() => null);
        }

        return null;
      },
    }),
  ],
});
