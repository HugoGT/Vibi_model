import React from "react";

export function NavLink({ url = "#", name = "No name", isLast = false }) {
  return (
    <li className="">
      {isLast ? (
        <a href={url}>
          <button className="flex gap-2 px-6 py-3 items-center mx-auto md:mx-0 mt-4 md:mt-0 md:ml-2 bg-green_wpp rounded text-white">
            <img src="/svg/wpp.svg" alt="wpp logo" />
            {name}
          </button>
        </a>
      ) : (
        <a className="pt-3 block" href={url}>
          {name}
        </a>
      )}
    </li>
  );
}
