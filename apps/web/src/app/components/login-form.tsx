"use client";

import { useFormState } from "react-dom";
import { authenticate } from "@/app/actions";
import { GithubOriginal, GoogleOriginal } from "devicons-react";

export default function LoginForm() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <div className="flex h-fit w-full flex-col items-center space-y-8">
      <form
        action={dispatch}
        className="bg-dotted-spacing-4 bg-dotted-gray-500 flex h-full w-full max-w-sm flex-col items-end space-y-8 p-8"
      >
        <div className="flex w-full flex-col items-end space-y-4">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Email"
            className="w-full border-b border-black bg-white p-1 outline-0 ring-0"
          />
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            autoComplete="new-password"
            className="w-full border-b border-black bg-white p-1 outline-0 ring-0"
          />
          <div className="group relative h-11 w-24">
            <button
              type="submit"
              className="absolute bottom-1 left-1 z-10 h-full w-full border border-black bg-white transition-all duration-150 group-hover:bottom-2 group-hover:left-2"
            >
              Login
            </button>
            <div className="absolute h-full w-full bg-black" />
          </div>
        </div>
        <div className="relative flex h-10 w-full items-center justify-center">
          <div className="absolute w-full border border-dashed border-black" />
          <div className="absolute bg-white p-2 font-bold">OR</div>
        </div>
        <div className="grid w-full grid-cols-2 place-items-center gap-4">
          <div className="group relative h-11 w-full">
            <button
              onClick={() => {}}
              className="absolute bottom-1 left-1 z-10 flex h-full w-full items-center justify-center space-x-1 border border-black bg-white transition-all duration-150 group-hover:bottom-2 group-hover:left-2"
            >
              <GoogleOriginal className="h-6 w-6" />
              <span>Google</span>
            </button>
            <div className="absolute bottom-0 left-0 h-full w-full bg-black" />
          </div>
          <div className="group relative h-11 w-full">
            <button className="absolute bottom-1 left-1 z-10 flex h-full w-full items-center justify-center space-x-1 border border-black bg-white transition-all duration-150 group-hover:bottom-2 group-hover:left-2">
              <GithubOriginal className="h-6 w-6" />
              <span>Github</span>
            </button>
            <div className="absolute bottom-0 left-0 h-full w-full bg-black" />
          </div>
        </div>
      </form>
      {errorMessage && (
        <div className="relative h-11 w-full max-w-sm">
          <div className="absolute bottom-2 left-2 z-10 flex h-full w-full items-center justify-center overflow-x-auto border border-black bg-white p-1 font-medium text-red-500">
            <p>{errorMessage}</p>
          </div>
          <div className="absolute bottom-0 left-0 h-full w-full bg-black" />
        </div>
      )}
    </div>
  );
}
