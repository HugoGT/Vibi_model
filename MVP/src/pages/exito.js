import * as React from "react";
import { Success } from "../components/success";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Layout } from "../components/layout";

const links = [
  { url: "../#inicio", name: "Inicio" },
  { url: "../#creditos", name: "Modalidades de crédito" },
  { url: "../#beneficios", name: "Beneficios" },
  { url: "../simulacion", name: "Simular Crédito" },
  { url: "#", name: "¿Dudas?, Hablemos", isLast: true },
];

export default function index() {
  return (
    <Layout title="Vibi - Enviado con éxito">
      <div id="inicio" className="bg-gray-100 pt-20"></div>
      <Header main={"../"} links={links} />
      <Success />
      <Footer />
    </Layout>
  );
}
