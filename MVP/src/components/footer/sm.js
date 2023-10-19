import React from "react";

export function Sm({ img = "/svg/logo.svg", alt = "image", url = "#footer" }) {
  return (
    <li>
      <a href={url} target="_blank" rel="noreferrer">
        <img className="w-6 sm:w-8 hover:opacity-80" src={img} alt={alt} />
      </a>
    </li>
  );
}
