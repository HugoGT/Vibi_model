import React from "react";

export function NavLink({ url = "#", name = "No name", isLast = false }) {
  return (
    <li className="">
      {isLast ? (
        <a href={url}>
          <button className="flex gap-2 px-6 py-3 items-center mx-auto lg:mx-0 mt-4 lg:mt-0 lg:ml-2 bg-green_wpp rounded text-white hover:bg-wpp_hover">
            <img src="/svg/wpp.svg" alt="wpp logo" />
            {name}
          </button>
        </a>
      ) : (
        <a className="pt-3 block hover:text-vibi hover:opacity-90" href={url}>
          {name}
        </a>
      )}
    </li>
  );
}
