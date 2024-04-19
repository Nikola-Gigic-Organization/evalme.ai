"use client";

import React, { forwardRef } from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLinkProps = {
  href: string;
  onClick?: LinkProps["onClick"];
  children: React.ReactNode;
};

const NavLink = ({ href, onClick, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.endsWith(href);
  return (
    <Link onClick={onClick} href={href}>
      <span className="space-x-0.5 font-bold uppercase">
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
