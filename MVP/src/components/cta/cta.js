import React from "react";

export function Cta() {
  return (
    <div className="flex flex-col items-center justify-center p-8 pb-16 sm:pb-20 md:flex-row">
      <img src="/svg/virtual.svg" alt="call" />
      <p className="text-center my-4 md:my-0 md:text-lg md:px-6">
        ¿Dudas? Comunícate con un asesor especializado
      </p>
      <a
        id="beneficios"
        href="https://api.whatsapp.com/send/?phone=%2B51902409387&text=Hola%21%2C+quisiera+m%C3%A1s+informaci%C3%B3n+acerca+de+cr%C3%A9dito+Mivivienda&type=phone_number&app_absent=0#"
        target="blank_"
      >
        <button className="flex gap-2 px-6 py-3 items-center mx-auto lg:mx-0 lg:mt-0 lg:ml-4 bg-green_wpp rounded text-white hover:bg-wpp_hover">
          <img src="/svg/wpp.svg" alt="wpp logo" />
          Hablemos
        </button>
      </a>
    </div>
  );
}
