import type { NextAuthConfig } from "next-auth";
import { NextResponse } from "next/server";
import {
  CreateUserDocument,
  GetUserDocument,
  LoginDocument,
} from "@/gql/graphql";
import { apolloClient, generatePassword } from ".";
import registerUser from "./register-user";

const sessionMaxAge = 30 * 24 * 60 * 60;

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl, url } }) {
      if (nextUrl.pathname === "/") return true;

      const isLoggedIn = !!auth?.user;
      if (isLoggedIn) {
        if (nextUrl.pathname === "/login") {
          const absoluteUrl = url.split("/login")[0];
          return NextResponse.redirect(`${absoluteUrl}/dashboard`);
        }
        return true;
      }
      return false;
    },
    signIn: async ({ account, profile }) => {
      if (!account) return false;

      if (account?.provider === "google") {
        if (profile?.email_verified) {
          const { error, status } = await registerUser(
            profile.email,
            profile.name,
          );

          return true;
        }

        return false;
      }

      if (account?.provider === "github") {
        const { error, status } = await registerUser(
          profile?.email,
          profile?.name,
        );

        return true;
      }

      return true;
    },
    session: async ({ session, token }) => {
      if (session?.user && token?.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
    jwt: async ({ token, session }) => {
      if (session) {
        session.jwt = token;
      }
      return token;
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: sessionMaxAge,
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
