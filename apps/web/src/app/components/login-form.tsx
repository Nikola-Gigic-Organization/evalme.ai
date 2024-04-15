"use client";

import { useFormState } from "react-dom";
import { authenticate } from "@/app/actions";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}>
      <input required type="email" name="email" id="email" />
      <input required type="password" name="password" id="password" />
      <button type="submit">Login</button>
      {errorMessage && <p>{errorMessage}</p>}
    </form>
  );
}
