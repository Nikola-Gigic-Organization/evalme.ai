"use client";

import React from "react";
import Link, { LinkProps } from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

type NavLinkProps = {
  href: string;
  onLinkClick?: LinkProps["onClick"];
  children: React.ReactNode;
};

const NavLink = ({ href, onLinkClick, children }: NavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname.endsWith(href);
  const onClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isActive) {
      e.preventDefault();
    }

    if (onLinkClick) {
      onLinkClick(e);
    }
  };
  return (
    <Link onClick={onClick} href={href}>
      <span className="group space-x-0.5 font-bold uppercase">
        <span>/</span>
        <span
          className={clsx([
            "transition-all duration-150 group-hover:pl-1 group-hover:text-rose-500",
            { "text-rose-500": isActive },
            { "text-black": !isActive },
            { "pl-1": isActive },
            { "cursor-default": isActive },
          ])}
        >
          {children}
        </span>
      </span>
    </Link>
  );
};

export default NavLink;
