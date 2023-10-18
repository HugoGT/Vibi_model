import * as React from "react";
import { VibiForm } from "../components/form";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Layout } from "../components/layout";

const links = [{ url: "#", name: "¿Dudas?, Hablemos", isLast: true }];

export default function index() {
  return (
    <Layout title="Vibi - Simular Crédito">
      <div id="inicio" className="pt-20 sm:pt-24"></div>
      <Header main={"../"} links={links} />
      <VibiForm />
      <Footer />
    </Layout>
  );
}
