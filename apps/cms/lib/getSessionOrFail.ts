import { type Context } from ".keystone/types";

const getSessionOrFail = (context: Context) => {
  const authorizationHeader = context.req?.headers.authorization;
  const userId = authorizationHeader?.split("JWT ").at(-1);
  if (!userId) {
    throw new Error("No user ID found in session");
  }

  return userId;
};

export default getSessionOrFail;
