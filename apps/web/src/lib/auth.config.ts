import type { NextAuthConfig } from "next-auth";

const sessionMaxAge = 30 * 24 * 60 * 60;

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      if (nextUrl.pathname === "/") return true;

      const isLoggedIn = !!auth?.user;
      if (isLoggedIn) return true;
      return false;

      // if (nextUrl.pathname !== "/") {
      //   if (isLoggedIn) return true;
      //   return false; // Redirect unauthenticated users to login page
      // } else if (isLoggedIn) {
      //   return Response.redirect(new URL("/dashboard", nextUrl));
      // }
      // return true;
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
  session: {
    strategy: "jwt",
    maxAge: sessionMaxAge,
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
