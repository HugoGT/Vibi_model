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
  {
    url: "https://api.whatsapp.com/send/?phone=%2B51902409387&text=Hola%21%2C+quisiera+m%C3%A1s+informaci%C3%B3n+acerca+de+cr%C3%A9dito+Mivivienda&type=phone_number&app_absent=0#",
    name: "¿Dudas?, Hablemos",
    isLast: true,
  },
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
