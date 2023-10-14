import React from "react";

export function Cta() {
  return (
    <div className="flex flex-col items-center justify-center p-8 md:flex-row">
      <img src="/svg/virtual.svg" alt="call" />
      <p className="text-center my-4 md:my-0 md:text-lg md:px-6">
        ¿Dudas? Comunícate con un asesor especializado
      </p>
      <a id="beneficios" href="#">
        <button className="flex gap-2 px-6 py-3 items-center mx-auto lg:mx-0 lg:mt-0 lg:ml-4 bg-green_wpp rounded text-white">
          <img src="/svg/wpp.svg" alt="wpp logo" />
          Hablemos
        </button>
      </a>
    </div>
  );
}
