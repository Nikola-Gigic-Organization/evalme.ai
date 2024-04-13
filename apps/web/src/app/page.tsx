import { LoginForm } from "./components";

export default function Page(): JSX.Element {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <h1>Page</h1>
      <LoginForm />
    </div>
  );
}
