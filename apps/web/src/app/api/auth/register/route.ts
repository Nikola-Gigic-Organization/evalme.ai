import dotenv from "dotenv";
import { apolloClient, generatePassword } from "@/lib";
import {
  CreateUserDocument,
  GetUserDocument,
  UpdateUserDocument,
} from "@/gql/graphql";

dotenv.config();

const POST = async (req: Request) => {
  const { secret, userId, email, name } = await req.json();

  if (secret !== process.env.AUTH_SECRET) {
    return Response.json({ error: "Invalid request", status: 400 });
  }

  const user = await apolloClient.query({
    query: GetUserDocument,
    variables: {
      where: {
        email,
      },
    },
  });

  if (user.errors) {
    return Response.json({ error: user.errors[0].message, status: 400 });
  }

  if (user.data.user) {
    if (user.data.user.oAuthId !== userId) {
      await apolloClient.mutate({
        mutation: UpdateUserDocument,
        variables: {
          where: {
            email,
          },
          data: {
            oAuthId: userId,
          },
        },
      });
    }

    return Response.json({ error: "User already exists", status: 400 });
  }

  const password = generatePassword(16);

  const res = await apolloClient.mutate({
    mutation: CreateUserDocument,
    variables: {
      data: {
        oAuthId: userId,
        name: name ?? "User",
        email,
        password,
      },
    },
  });

  if (res.errors) {
    return Response.json({ error: res.errors[0].message, status: 400 });
  }

  return Response.json({ status: 200 });
};

export { POST };
