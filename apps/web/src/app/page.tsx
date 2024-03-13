import { cookies } from "next/headers";
import { LoginForm } from "./components";
import { apolloClient } from "@/lib";
import { AllUsersDocument } from "@/gql/graphql";

import { loginAction, logoutAction } from "./actions";

export default async function Page(): Promise<JSX.Element> {
  const token = cookies().get("token");

  try {
    await apolloClient.query({
      query: AllUsersDocument,
    });
  } catch (error: any) {
    console.error("Error: ", error);
  }

  const handleLogout = async () => {
    "use server";

    await logoutAction();
  };

  return (
    <div className="flex w-full h-screen items-center justify-center flex-col">
      <h1>Page</h1>
      {token ? (
        <form
          action={handleLogout}
          className="flex flex-col items-center justify-center"
        >
          <button type="submit">Logout</button>
        </form>
      ) : (
        <LoginForm loginAction={loginAction} />
      )}
    </div>
  );
}
