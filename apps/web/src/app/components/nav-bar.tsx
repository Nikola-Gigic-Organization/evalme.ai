"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import NavLink from "./nav-link";
import { onSignOut } from "@/app/actions";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      <form
        action={onSignOut}
        className={clsx([
          "absolute z-20 block h-screen w-full bg-white transition-all duration-150 sm:hidden",
          { "-top-full": !isMobileMenuOpen },
          { "top-0": isMobileMenuOpen },
        ])}
      >
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute right-1.5 top-2 z-30 border border-black p-1 text-black"
        >
          <XMarkIcon className="h-6 w-6" />
        </button>
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(true)}
          className="absolute -bottom-10 right-1.5 z-30 border border-black p-1 text-black"
        >
          <Bars3Icon className="h-6 w-6" />
        </button>
        <ul className="flex h-full w-full flex-col justify-between p-4">
          <ol className="flex flex-col space-y-2">
            <li>
              <NavLink onClick={onLinkClick} href="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink onClick={onLinkClick} href="/topics">
                topics
              </NavLink>
            </li>
            <li>
              <NavLink onClick={onLinkClick} href="/profile">
                profile
              </NavLink>
            </li>
          </ol>
          <li>
            <button
              type="submit"
              className="group space-x-1 text-xl font-bold lowercase"
            >
              <span>/</span>
              <span className="transition-colors duration-150 group-hover:text-rose-500">
                logout
              </span>
            </button>
          </li>
        </ul>
      </form>
      <form action={onSignOut} className="hidden w-full px-8 py-4 sm:block">
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
            <button
              type="submit"
              className="group space-x-1 text-xl font-bold lowercase"
            >
              <span>/</span>
              <span className="transition-colors duration-150 group-hover:text-rose-500">
                logout
              </span>
            </button>
          </li>
        </ul>
      </form>
    </>
  );
};

export default NavBar;
