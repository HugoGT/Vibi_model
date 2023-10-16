import * as React from "react";
import Form from "../components/form";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Layout } from "../components/layout";

const links = [
  { url: "../#inicio", name: "Inicio" },
  { url: "../#creditos", name: "Modalidades de crédito" },
  { url: "../#beneficios", name: "Beneficios" },
  { url: "#", name: "¿Dudas?, Hablemos", isLast: true },
];

export default function index() {
  return (
    <Layout title="Vibi - Simular Crédito">
      <div id="inicio" className="pt-20 sm:pt-24"></div>
      <Header main={"../"} links={links} />
      <Form />
      <Footer />
    </Layout>
  );
}
