import React from "react";

export function Sm({ img = "/svg/logo.svg", alt = "image" }) {
  return (
    <li>
      <a href="#footer">
        <img className="w-6 sm:w-8" src={img} alt={alt} />
      </a>
    </li>
  );
}
