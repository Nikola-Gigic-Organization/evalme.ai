import "./globals.css";
import "@repo/ui/styles.css";
import type { Metadata } from "next";
import { Titillium_Web } from "next/font/google";
import clsx from "clsx";
import { NavBar } from "./components";
import { auth } from "@/lib/auth";
import NavLink from "./components/nav-link";
import LogoLink from "./components/logo-link";
import AboutMenu from "./components/about-menu";

const fontFamily = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700"],
});

export const metadata: Metadata = {
  title: "EvalMe",
  description: "A platform for evaluating your knowledge",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): Promise<JSX.Element> {
  const session = await auth();
  return (
    <html lang="en">
      <body className={clsx([fontFamily.className])}>
        {session ? (
          <NavBar />
        ) : (
          <div className="h-16 w-full px-8 py-4 sm:block">
            <div className="flex items-end justify-between border-b border-black pb-2">
              <div className="flex h-full items-end space-x-4">
                <LogoLink />
                <AboutMenu />
              </div>
              <NavLink href="/login">Login</NavLink>
            </div>
          </div>
        )}
        <main className="h-app w-full">{children}</main>
      </body>
    </html>
  );
}
