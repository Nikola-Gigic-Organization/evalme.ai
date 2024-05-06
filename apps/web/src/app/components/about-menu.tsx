"use client";

import { useEffect, useState, useRef } from "react";
import Link from "next/link";

const aboutLinks = [
  {
    title: "Platform",
    href: "#platform",
  },
  {
    title: "How it works",
    href: "#how-it-works",
  },
  {
    title: "What we offer",
    href: "#what-we-offer",
  },
];

const AboutMenu = () => {
  const rootRef = useRef<HTMLDivElement>(null);

  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);

    rootRef.current?.addEventListener("mouseenter", handleMouseEnter);
    rootRef.current?.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      rootRef.current?.removeEventListener("mouseenter", handleMouseEnter);
      rootRef.current?.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={rootRef} className="group relative">
      <div className="w-fit cursor-default space-x-0.5 font-bold uppercase group-hover:space-x-1">
        <span>/</span>
        <span className="transition-all duration-150 group-hover:pl-1 group-hover:text-rose-500">
          About
        </span>
      </div>
      {isHovered && (
        <div className="absolute h-fit w-fit flex-col border border-black bg-white px-2 group-hover:flex">
          {aboutLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="not-last:border-b flex w-28 cursor-default space-x-0.5 border-black py-1 text-sm font-light"
              onClick={() => setIsHovered(false)}
            >
              <span className="font-semibold">#</span>
              <span className="cursor-pointer transition-all duration-150 hover:pl-1 hover:font-semibold hover:text-rose-500">
                {link.title}
              </span>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AboutMenu;
