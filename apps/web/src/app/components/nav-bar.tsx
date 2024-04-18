import Link from "next/link";
import NavLink from "./nav-link";

const NavBar = () => {
  return (
    <div className="w-full px-8 py-4">
      <ul className="flex h-full space-x-8 border-b border-black pb-2">
        <li>
          <NavLink href="/dashboard">Dashboard</NavLink>
        </li>
        <li>
          <NavLink href="/topics">topics</NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
