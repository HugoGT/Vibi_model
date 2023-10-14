import React from "react";

export function Comparison() {
  return (
    <section className="flex flex-col items-center pt-8 px-8 max-w-screen-2xl m-auto md:pt-12">
      <div className="pb-8 text-center">
        <h2 className="text-2xl font-bold mb-2 sm:text-3xl lg:text-4xl">
          Conoce las modalidades de financiamiento
        </h2>
        <p className="text-sm text-secondary_vibi sm:text-base">
          Asesoramiento y acompañamiento en todo momento
        </p>
      </div>
      <div className="flex flex-col gap-2 md:gap-4 md:flex-row">
        <div className="p-6 max-w-sm  bg-green_vibi-100 rounded md:p-8">
          <h3 className="text-green_vibi-900 font-medium text-xl">
            Credito con apoyo del estado
          </h3>
          <p className="my-2 font-medium text-sm">Características:</p>
          <ul>
            <li className="flex gap-2 mb-3 items-start">
              <img className="mt-1 w-4" src="/svg/check-2.svg" alt="check" />
              <p className="text-sm">
                Pre-calificación sin trámites y en línea.
              </p>
            </li>
            <li className="flex gap-2 mb-3 items-start">
              <img className="mt-1 w-4" src="/svg/check-2.svg" alt="check" />
              <p className="text-sm">
                No ser porpietario de una vivienda a nivel nacional.
              </p>
            </li>
            <li className="flex gap-2 mb-3 items-start">
              <img className="mt-1 w-4" src="/svg/check-2.svg" alt="check" />
              <p className="text-sm">
                Financiamos hasta el 90% del precio de la vivienda.
              </p>
            </li>
            <li className="flex gap-2 mb-3 items-start">
              <img className="mt-1 w-4" src="/svg/check-2.svg" alt="check" />
              <p className="text-sm">Hasta 20 años para pagar tu crédito.</p>
            </li>
          </ul>
          <a
            className="text-sm text-green_vibi-900 underline hover:text-green_vibi-700"
            href="#"
          >
            Conoce los subsidios del estado
          </a>
        </div>
        <div className="p-6  max-w-sm bg-orange_vibi-100 rounded md:p-8">
          <h3 className="text-orange_vibi-900 font-medium text-xl">
            Credito hipotecario tradicional
          </h3>
          <p className="my-2 font-medium text-sm">Características:</p>
          <ul>
            <li className="flex gap-2 mb-3 items-start">
              <img className="mt-1 w-4" src="/svg/check-3.svg" alt="check" />
              <p className="text-sm">Pre-calificación flexible y en línea.</p>
            </li>
            <li className="flex gap-2 mb-3 items-start">
              <img className="mt-1 w-4" src="/svg/check-3.svg" alt="check" />
              <p className="text-sm">
                Compra cualqueir vivienda, sin importar si es 1ra venta.
              </p>
            </li>
            <li className="flex gap-2 mb-3 items-start">
              <img className="mt-1 w-4" src="/svg/check-3.svg" alt="check" />
              <p className="text-sm">
                Consideramos todas tus fuentes de ingreso.
              </p>
            </li>
            <li className="flex gap-2 mb-3 items-start">
              <img className="mt-1 w-4" src="/svg/check-3.svg" alt="check" />
              <p className="text-sm">Hasta 20 años para pagar tu crédito.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
