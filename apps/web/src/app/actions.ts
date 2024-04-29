"use server";

import { signIn, signOut } from "@/lib/auth";
import { AuthError } from "next-auth";

export async function authenticate(
  prevState: string | undefined,
  formData: FormData,
) {
  try {
    await signIn("credentials", {
      redirectTo: "/dashboard",
      ...Object.fromEntries(formData),
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return "Invalid credentials.";
        default:
          return "Something went wrong.";
      }
    }
    throw error;
  }
}

export async function authenticateWithGoogle() {
  await signIn("google", { callbackUrl: "/dashboard" });
}

export async function authenticateWithGithub() {
  await signIn("github", { callbackUrl: "/dashboard" });
}

export async function onSignOut() {
  await signOut({ redirectTo: "/" });
}
