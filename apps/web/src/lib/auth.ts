import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { z } from "zod";
import dotenv from "dotenv";
import { match, P } from "ts-pattern";
import { LoginDocument } from "@/gql/graphql";
import { apolloClient } from ".";
import { authConfig } from "./auth.config";

dotenv.config();

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth({
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
    GoogleProvider({
      name: "Google",
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      authorization: {
        params: {
          prompt: "consent",
          access_type: "offline",
          response_type: "code",
        },
      },
    }),
    GitHubProvider({
      name: "GitHub",
      clientId: process.env.GITHUB_CLIENT_ID,
      clientSecret: process.env.GITHUB_CLIENT_SECRET,
    }),
  ],
});
