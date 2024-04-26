export default async function Page(): Promise<JSX.Element> {
  return (
    <div className="h-app flex w-full flex-col items-center justify-center">
      <div className="cursor-default text-9xl font-bold">
        <span className="text-black">Eval</span>
        <span className="text-rose-500">Me</span>
      </div>
    </div>
  );
}
