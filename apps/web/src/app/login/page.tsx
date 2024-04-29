import dynamic from "next/dynamic";

const LoginForm = dynamic(() => import("./components/login-form"), {
  ssr: false,
});

export default function Page() {
  return (
    <div className="sm:h-app flex justify-center p-8">
      <LoginForm />
    </div>
  );
}
