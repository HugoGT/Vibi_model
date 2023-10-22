import React from "react";
import { Seo } from "./seo";

export function Layout({ title, children }) {
  return (
    <>
      <Seo title={title} />
      <main className="font-sans text-blue_vibi">{children}</main>
    </>
  );
}
