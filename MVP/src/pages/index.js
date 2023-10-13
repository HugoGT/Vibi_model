import * as React from "react";
import { Comparison } from "../components/comparison";
import { Cta } from "../components/cta";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";

const links = [
  { url: "#inicio", name: "Inicio" },
  { url: "#creditos", name: "Modalidades de crédito" },
  { url: "#", name: "Beneficios" },
  { url: "#", name: "Preguntas frecuentes" },
  { url: "#", name: "¿Dudas?, Hablemos", isLast: true },
];

export default function index() {
  return (
    <Layout title="Vibi">
      <Header main={"#inicio"} links={links} />
      <Hero />
      <div className="bg-gray-100">
        <Comparison />
        <Cta />
      </div>
      {/* <About /> */}
    </Layout>
  );
}