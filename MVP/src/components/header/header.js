import React from "react";
import { NavLink } from "./navLink.js";
import { RxHamburgerMenu } from "react-icons/rx";

export function Header({ main, links }) {
  return (
    <header className="fixed top-0 left-0 w-full bg-white border-b border-gray-200 z-50">
      <div className="py-4 px-8 m-auto max-w-screen-xl flex justify-between items-center text-sm font-medium lg:px-12">
        <a href={main} className="h-6 px-4">
          <img src="/svg/vibi.svg" alt="logo vibi" className="h-full" />
        </a>
        <ul className="hidden lg:flex gap-6 mr-4">
          {links.map((link) => (
            <NavLink key={link.url} {...link} />
          ))}
        </ul>
        <details className="group lg:hidden">
          <summary className="list-none p-2 group-open:before:fixed group-open:before:inset-0">
            <RxHamburgerMenu className="text-2xl" />
          </summary>
          <nav className="absolute top-18 left-0 bg-white border-b border-gray-200 w-full p-4 pb-8 text-lg z-20 text-center">
            <ul>
              {links.map((link) => (
                <NavLink key={link.url} {...link} />
              ))}
            </ul>
          </nav>
        </details>
      </div>
    </header>
  );
}
