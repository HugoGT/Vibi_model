import * as React from "react";
import { VibiForm } from "../components/form";
import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { Layout } from "../components/layout";

const links = [
  {
    url: "https://api.whatsapp.com/send/?phone=%2B51902409387&text=Hola%21%2C+quisiera+m%C3%A1s+informaci%C3%B3n+acerca+de+cr%C3%A9dito+Mivivienda&type=phone_number&app_absent=0#",
    name: "¿Dudas?, Hablemos",
    isLast: true,
  },
];

export default function simulation() {
  let effect = () => {
    fetch("https://house-pricing-vibi.onrender.com/")
      .then((response) => console.log(response.json()))
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <Layout title="Vibi - Simular Crédito">
      <div id="inicio" className="pt-20 sm:pt-24">
        {effect()}
      </div>
      <Header main={"../"} links={links} />
      <VibiForm />
      <Footer />
    </Layout>
  );
}
