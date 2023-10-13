import * as React from "react";
import { Hero } from "../components/hero";
import { Header } from "../components/header";
import { Layout } from "../components/layout";

const links = [
  { url: "#", name: "Inicio" },
  { url: "#", name: "Beneficios" },
  { url: "#", name: "Preguntas frecuentes" },
  { url: "#", name: "¿Dudas?, Hablemos", isLast: true },
];

export default function index() {
  return (
    <Layout title="Vibi">
      <Header main={"#"} links={links} />
      <Hero />
      {/* <Services />
      <About />
      <Clients /> */}
    </Layout>
  );
}
