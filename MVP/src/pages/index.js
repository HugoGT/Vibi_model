import * as React from "react";
import { Layout } from "../components/layout";
import { Header } from "../components/header";

const links = [
  { url: "#", name: "Simula tu crédito" },
  { url: "#", name: "Busca tu vivienda" },
  { url: "#", name: "Preguntas frecuentes" },
  { url: "#", name: "Hablemos ahora", isLast: true },
];

export default function index() {
  return (
    <Layout title="Vibi">
      <Header main={"#"} links={links} />
      {/* <Hero />
      <Services />
      <About />
      <Clients /> */}
    </Layout>
  );
}
