import React from "react";
import { Benefit } from "./benefit.js";

const benefits = [
  {
    title: "Asistencia virtual en todo el proceso",
    text: "Desde la comodidad de tu casa despejamos tus dudas.",
    img: "/svg/assistan.svg",
    alt: "asistente",
  },
  {
    title: "Accede a tu crédito según tu necesidad",
    text: "Cumple tu meta de comprar tu casa propia con nuestras modalidades.",
    img: "/svg/money.svg",
    alt: "dinero",
  },
  {
    title: "Evaluación para Techo Propio o Mi Vivienda",
    text: "Fácil e intuitivo y lo mejor es de manera online.",
    img: "/svg/evaluation.svg",
    alt: "evaluación",
  },
];

export function Benefits() {
  return (
    <section className="p-8 max-w-screen-2xl m-auto md:p-12">
      <div className="text-center">
        <h2 className="text-2xl font-bold mb-2 sm:text-3xl lg:text-4xl">
          Descubre los beneficios de nuestro crédito
        </h2>
        <p className="text-sm text-secondary_vibi sm:text-base">
          Asesoramiento y acompañamiento en todo momento
        </p>
      </div>
      <ul className="flex flex-col justify-center items-center p-8 md:flex-row md:gap-6">
        {benefits.map((ben) => (
          <Benefit key={ben.alt} {...ben} />
        ))}
      </ul>
    </section>
  );
}
