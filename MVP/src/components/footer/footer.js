import React from "react";
import { Sm } from "./sm.js";

const socialMedia = [
  {
    img: "/svg/facebook.svg",
    alt: "facebook",
    url: "https://www.facebook.com/vibiperu/",
  },
  {
    img: "/svg/instagram.svg",
    alt: "instagram",
    url: "https://www.instagram.com/vibiperu/",
  },
  { img: "/svg/linkedin.svg", alt: "linkedin", url: "#footer" },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="p-8 pt-16 flex flex-col items-center bg-gray-200 sm:pt-20"
    >
      <ul className="mb-8 flex gap-8 sm:mb-12">
        {socialMedia.map((sm) => (
          <Sm key={sm.alt} {...sm} />
        ))}
      </ul>
      <img className="h-8" src="/svg/logo-gray.svg" alt="logo vibi" />
      <p className="pt-2 text-sm text-gray_vibi sm:text-base">
        &#169; 2023 Vibiperu. Derechos reservados.
      </p>
    </footer>
  );
}
