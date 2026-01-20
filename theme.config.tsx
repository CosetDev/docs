import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: (
    <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
      <img src="/logo.svg" alt="Coset" style={{ width: 32, height: 32 }} />
      <span style={{ marginLeft: "8px", fontWeight: "bold", fontSize: "24px" }}>Coset</span>
    </div>
  ),
  project: {
    link: "https://github.com/CosetDev",
  },
  footer: {
    text: "Coset - Public Oracle Ecosystem",
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="Coset" />
      <meta property="og:description" content="Coset - Public Oracle Ecosystem" />
      <meta property="og:image" content="/logo.png" />
      <title>Coset - Public Oracle Ecosystem</title>
    </>
  )
};

export default config;
