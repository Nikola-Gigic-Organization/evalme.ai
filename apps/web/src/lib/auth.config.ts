import type { NextAuthConfig } from "next-auth";
import { apolloClient } from ".";
import { GetUserDocument } from "@/gql/graphql";
import { NextResponse } from "next/server";

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
    signIn: async ({ user, account, profile, email, credentials }) => {
      if (account?.provider === "google") {
        if (profile?.email_verified) {
          return true;
        }

        return false;
      }

      if (account?.provider === "github") {
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
    jwt: async ({ token, user, session }) => {
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
