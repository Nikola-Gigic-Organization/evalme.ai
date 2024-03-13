import { cookies } from "next/headers";
import { LoginForm } from "./components";

import { loginAction, logoutAction } from "./actions";

export default async function Page(): Promise<JSX.Element> {
  const token = cookies().get("token");

  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1>Page</h1>
      {token?.value ? (
        <form
          action={logoutAction}
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
