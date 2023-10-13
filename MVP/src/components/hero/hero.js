import React from "react";

export function Hero() {
  return (
    <section id="inicio" className="pt-20">
      <div className="p-8 m-auto max-w-screen-xl flex flex-col items-center md:flex-row md:justify-evenly lg:px-16">
        <div className="text-center md:px-8 md:text-left md:w-1/2 lg:p-0">
          <h1 className="text-2xl font-bold sm:text-4xl lg:text-5xl xl:text-6xl">
            Financiamos el sueño de tu casa propia
          </h1>
          <p className="my-6 lg:text-lg">
            Pre-califica para la compra de tu casa en la modalidad de crédito
            hipotecario o subsidio del estado.
          </p>

          <div className="flex items-start gap-2 mb-3">
            <img className="mr-1 w-5" src="/svg/check.svg" alt="" />
            <p className="text-sm lg:text-base">
              Hasta 20 años para pagar tu crédito con el subsidio del estado.
            </p>
          </div>
          <div className="flex items-start gap-2 mb-3">
            <img className="mr-1 w-5" src="/svg/check.svg" alt="" />
            <p className="text-sm lg:text-base">
              Fácil acceso para aplicar a los bonos del estado.
            </p>
          </div>
          <div className="flex items-start gap-2 mb-3">
            <img className="mr-1 w-5" src="/svg/check.svg" alt="" />
            <p className="text-sm lg:text-base">
              Aseoría gratuita y sin compromiso.
            </p>
          </div>

          <a
            className="inline-block mt-4 px-6 py-4 bg-vibi rounded text-sm text-white lg:text-base"
            href="#"
          >
            Pre-califica a tu crédito
          </a>
        </div>
        <img
          className="rounded mt-8 md:mt-0 md:max-w-sm lg:ml-8 lg:max-w-lg xl:ml-0"
          src="images/hero.jpg"
          alt="vendedor"
        />
      </div>
    </section>
  );
}
