"use client";

import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { LoginData } from "../actions";

const LoginForm: React.FC<{
  loginAction: (loginData: LoginData) => Promise<{ error: string }>;
}> = ({ loginAction }) => {
  const [error, setError] = React.useState("");

  const { register } = useForm<LoginData>();

  const handleSubmit = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const { error } = await loginAction({ email, password });
    setError(error);

    console.log(error);
  };
  return (
    <form
      action={handleSubmit}
      className="flex flex-col items-center justify-center"
    >
      <input type="email" placeholder="Email" {...register("email")} />
      <input type="password" placeholder="Password" {...register("password")} />
      <button type="submit">Login</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default LoginForm;
