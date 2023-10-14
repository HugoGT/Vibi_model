import React from "react";

export function Benefit({
  title = "No title",
  text = "No text",
  img = "/svg/logo.svg",
  alt = "image",
}) {
  return (
    <li className="py-4 flex flex-col items-center text-center max-w-sm">
      <img src={img} alt={alt} />
      <h3 className="font-bold py-2 mt-2">{title}</h3>
      <p className="text-sm text-secondary_vibi">{text}</p>
    </li>
  );
}
