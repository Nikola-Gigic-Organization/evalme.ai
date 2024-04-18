import { LoginForm } from "./components";

export default async function Page(): Promise<JSX.Element> {
  return (
    <div className="flex h-screen w-full flex-col items-center justify-center">
      <LoginForm />
    </div>
  );
}
