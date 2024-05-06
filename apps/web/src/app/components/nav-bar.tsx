"use client";

import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/20/solid";
import clsx from "clsx";
import NavLink from "./nav-link";
import { onSignOut } from "@/app/actions";
import LogoutButton from "./logout-button";
import LogoLink from "./logo-link";

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const onLinkClick = () => setIsMobileMenuOpen(false);

  return (
    <>
      <form
        action={onSignOut}
        className={clsx([
          "t absolute z-20 block h-screen w-full bg-white transition-all duration-150 sm:hidden",
          { "-top-full": !isMobileMenuOpen },
          { "top-0": isMobileMenuOpen },
        ])}
      >
        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(false)}
          className="absolute right-1.5 top-2 z-30 border border-black bg-white p-1 text-black"
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
            <li className="pb-2">
              <LogoLink />
            </li>
            <li>
              <NavLink onLinkClick={onLinkClick} href="/dashboard">
                Dashboard
              </NavLink>
            </li>
            <li>
              <NavLink onLinkClick={onLinkClick} href="/topics">
                topics
              </NavLink>
            </li>
            <li>
              <NavLink onLinkClick={onLinkClick} href="/profile">
                profile
              </NavLink>
            </li>
          </ol>
          <li>
            <LogoutButton />
          </li>
        </ul>
      </form>
      <form
        action={onSignOut}
        className="hidden h-16 w-full px-8 py-4 sm:block"
      >
        <ul className="flex items-end justify-between border-b border-black pb-2">
          <ol className="flex items-end space-x-4 text-center">
            <LogoLink />
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
            <LogoutButton />
          </li>
        </ul>
      </form>
    </>
  );
};

export default NavBar;
