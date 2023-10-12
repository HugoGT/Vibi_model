import React from "react";
import { NavLink } from "./navLink.js";
import { RxHamburgerMenu } from "react-icons/rx";

export function Header({ main, links }) {
  return (
    <header className="py-3 px-6 md:px-56 flex justify-between items-center border-b text-sm font-medium border-gray-200">
      <a href={main} className="h-12 px-2 mt-1 ml-2">
        <img src="/images/icon.png" alt="logo vibi" className="h-full" />
      </a>
      <ul className="hidden sm:flex gap-6 mr-4">
        {links.map((link) => (
          <NavLink key={link.url} {...link} />
        ))}
      </ul>
      <details className="group sm:hidden">
        <summary className="list-none p-2 group-open:before:fixed group-open:before:inset-0">
          <RxHamburgerMenu className="text-2xl" />
        </summary>
        <nav className="absolute top-20 left-0 border-b border-gray-200 w-full p-4 pb-8 text-lg z-20 text-center">
          <ul>
            {links.map((link) => (
              <NavLink key={link.url} {...link} />
            ))}
          </ul>
        </nav>
      </details>
    </header>
  );
}
