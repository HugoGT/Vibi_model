import * as React from "react";
import { Benefits } from "../components/benefits";
import { Comparison } from "../components/comparison";
import { Cta } from "../components/cta";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { Layout } from "../components/layout";

const links = [
  { url: "#inicio", name: "Inicio" },
  { url: "#creditos", name: "Modalidades de crédito" },
  { url: "#beneficios", name: "Beneficios" },
  { url: "/simulacion", name: "Simular Crédito" },
  { url: "#", name: "¿Dudas?, Hablemos", isLast: true },
];

export default function index() {
  return (
    <Layout title="Vibi">
      <div id="inicio" className="pt-20 sm:pt-24"></div>
      <Header main={"#inicio"} links={links} />
      <Hero />
      <div id="creditos" className="pb-12 sm:pb-16"></div>
      <div className="bg-gray-100">
        <Comparison />
        <Cta />
      </div>
      <Benefits />
      {/* <About /> */}
      <Footer />
    </Layout>
  );
}
