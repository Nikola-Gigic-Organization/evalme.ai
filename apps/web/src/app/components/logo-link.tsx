import Link from "next/link";

const LogoLink = () => {
  return (
    <Link href="/" className="group text-2xl font-bold leading-tight">
      <span className="text-rose-500 transition-colors duration-150 group-hover:text-black">
        Eval
      </span>
      <span className="transition-colors duration-150 group-hover:text-rose-500">
        Me
      </span>
    </Link>
  );
};

export default LogoLink;
