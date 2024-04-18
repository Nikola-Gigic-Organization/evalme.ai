import { signOut } from "@/lib/auth";
import NavLink from "./nav-link";

const NavBar = () => {
  const onLogout = async () => {
    "use server";
    await signOut();
  };

  return (
    <form action={onLogout} className="w-full px-8 py-4">
      <ul className="flex justify-between border-b border-black pb-2">
        <ol className="flex space-x-8">
          <li>
            <NavLink href="/dashboard">Dashboard</NavLink>
          </li>
          <li>
            <NavLink href="/topics">topics</NavLink>
          </li>
          <li>
            <NavLink href="/profile">profile</NavLink>
          </li>
        </ol>
        <li>
          <button className="group space-x-1 text-xl font-bold lowercase">
            <span>/</span>
            <span className="transition-colors duration-150 group-hover:text-rose-500">
              logout
            </span>
          </button>
        </li>
      </ul>
    </form>
  );
};

export default NavBar;
