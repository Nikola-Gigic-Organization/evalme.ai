"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink = ({ href, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link href={href}>
      <span className="space-x-1 text-xl font-bold lowercase">
        <span>/</span>
        <span
          className={clsx([
            "transition-colors duration-150 hover:text-rose-500",
            { "text-rose-500": isActive },
            { "text-black": !isActive },
          ])}
        >
          {children}
        </span>
      </span>
    </Link>
  );
};

export default NavLink;
