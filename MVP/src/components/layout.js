import React from "react";
import { SEO } from "./seo";

export function Layout({ title, children }) {
  return (
    <>
      <SEO title={title} />
      <main className="font-custom text-blue_vibi">{children}</main>
    </>
  );
}
