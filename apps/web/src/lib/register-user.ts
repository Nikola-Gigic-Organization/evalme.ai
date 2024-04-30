const registerUser = async (
  email?: string | null,
  name?: string | null,
): Promise<{ error: string; status: number }> => {
  if (!process.env.NEXT_AUTH_URL) {
    throw new Error("NEXT_AUTH_URL is not defined");
  }

  if (!process.env.AUTH_SECRET) {
    throw new Error("AUTH_SECRET is not defined");
  }

  if (!email) {
    throw new Error("Email is required");
  }

  if (!name) {
    throw new Error("Name is required");
  }

  const res = await fetch(`${process.env.NEXT_AUTH_URL}/api/auth/register`, {
    method: "POST",
    body: JSON.stringify({
      secret: process.env.AUTH_SECRET,
      email: email,
      name: name,
    }),
  });

  const data = await res.json();
  const { error, status } = data;

  return { error, status };
};

export default registerUser;
