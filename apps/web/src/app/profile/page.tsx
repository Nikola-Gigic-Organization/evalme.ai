"use server";

import { auth } from "@/lib/auth";
import { apolloClient } from "@/lib";
import { GetUserDocument, UpdateUserDocument } from "@/gql/graphql";

export default async function Page() {
  const session = await auth();
  const userData = await apolloClient.query({
    query: GetUserDocument,
    variables: { where: { id: session?.user?.id } },
  });
  const user = userData.data?.user;

  const onSave = async (data: FormData) => {
    "use server";

    if (!session || !user) {
      return;
    }

    const password = data.get("password") as string;
    if (!password) {
      return;
    }

    try {
      await apolloClient.mutate({
        mutation: UpdateUserDocument,
        variables: {
          where: { id: user.id },
          data: { password },
        },
      });
    } catch (error: unknown) {
      console.error(error);
    }
  };

  return (
    <div className="h-app flex justify-center p-8">
      <form
        action={onSave}
        className="w-lg mt-10 flex flex-col gap-y-8 sm:mt-0"
      >
        <div className="relative h-40 w-full sm:h-28 sm:pt-0">
          <div className="absolute bottom-2 left-2 z-10 flex h-full w-full flex-col justify-between border border-black bg-white p-4">
            <span className="text-2xl font-bold">Details</span>
            <div className="w-full space-y-2 sm:space-x-8 sm:space-y-2">
              <input
                disabled
                type="email"
                placeholder={user?.email ?? ""}
                className="border-b border-black p-1 outline-0 ring-0 placeholder:text-black disabled:bg-white"
              />
              <input
                type="password"
                placeholder="password"
                autoComplete="new-password"
                name="password"
                id="password"
                className="border-b border-black p-1 outline-0 ring-0"
              />
            </div>
          </div>
          <div className="absolute right-2 top-2 h-full w-full bg-black" />
        </div>
        <div className="flex w-full justify-end">
          <div className="group relative h-11 w-24">
            <button className="absolute -right-1 -top-1 z-10 h-full w-full border border-black bg-white p-2 transition-all duration-300 group-hover:-right-2 group-hover:-top-2">
              Save
            </button>
            <div className="absolute -bottom-1 -left-1 h-full w-full bg-black transition-all duration-300 group-hover:-bottom-2 group-hover:-left-2" />
          </div>
        </div>
      </form>
    </div>
  );
}
