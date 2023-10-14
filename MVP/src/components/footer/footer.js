import React from "react";
import { Sm } from "./sm.js";

const socialMedia = [
  { img: "/svg/facebook.svg", alt: "facebook" },
  { img: "/svg/instagram.svg", alt: "instagram" },
  { img: "/svg/linkedin.svg", alt: "linkedin" },
];

export function Footer() {
  return (
    <footer
      id="footer"
      className="p-8 flex flex-col items-center bg-gray-100 md:py-12"
    >
      <ul className="mb-8 flex gap-8 sm:mb-12">
        {socialMedia.map((sm) => (
          <Sm key={sm.alt} {...sm} />
        ))}
      </ul>
      <img className="h-8" src="svg/logo-gray.svg" alt="logo vibi" />
      <p className="pt-2 text-sm text-secondary_vibi sm:text-base">
        &#169; 2023 Vibiperu. Derechos reservados.
      </p>
    </footer>
  );
}
