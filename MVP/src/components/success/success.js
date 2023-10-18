import React from "react";

export function Success() {
  return (
    <div className="flex items-center bg-gray-100">
      <div className="m-auto rounded max-w-xs p-2 sm:max-w-lg sm:p-12 sm:py-16 md:max-w-2xl lg:max-w-3xl">
        <div className="flex flex-col py-8 px-12 items-center text-center font-medium bg-red-100 sm:text-lg">
          <img className="w-8 mb-2" src="/svg/check.svg" alt="check" />
          <p>¡Enhorabuena!</p>
          <p>Tus datos han sido envíados con éxito.</p>
        </div>
        <div className="flex flex-col py-8 px-12 items-center text-center bg-white sm:text-lg">
          <img className="w-16 mb-4" src="/images/avatar.png" alt="avatar" />
          <p>
            Un asesor de Vibi se pondrá en
            <b> contacto contigo a tu celular </b>
            en el transcurso del día para continuar con tu proceso de
            calificación.
          </p>
          <p className="text-secondary_vibi my-4 font-medium">
            Estamos atentos para despejar tus dudas
          </p>
          <button className="flex gap-2 px-6 py-4 items-center mx-auto lg:mx-0 mt-4 lg:mt-0 lg:ml-2 bg-green_wpp rounded text-white text-sm">
            <img src="/svg/wpp.svg" alt="wpp logo" />
            Contacta con un asesor
          </button>
          <a href="../" className="mt-4 text-sm underline hover:text-blue-700">
            Volver a inicio
          </a>
        </div>
      </div>
    </div>
  );
}
