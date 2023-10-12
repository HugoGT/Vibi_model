import React from "react";

export function NavLink({ url = "#", name = "No name", isLast = false }) {
  return (
    <li className="py-1 text-gray-800">
      {isLast ? (
        <a href={url}>
          <button className="px-8 py-4 mx-auto md:mx-0 mt-4 md:mt-0 md:ml-2 md:px-6 mdpy-3 block bg-vibi rounded-sm text-white">
            {name}
          </button>
        </a>
      ) : (
        <a className="pt-4 block" href={url}>
          {name}
        </a>
      )}
    </li>
  );
}
