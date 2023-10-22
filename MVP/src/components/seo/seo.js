import React from "react";
import { Helmet } from "react-helmet";

export function Seo({ title }) {
  return (
    <Helmet>
      <link rel="shortcut icon" href="/svg/logo.svg" />
      <title>{title}</title>
    </Helmet>
  );
}
