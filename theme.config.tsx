import React from "react";
import { useRouter } from "next/router";
import { useConfig } from "nextra-theme-docs";
import type { DocsThemeConfig } from "nextra-theme-docs";
import packageJson from "./package.json";

/**
 * Nextra Theme Configuration
 * https://nextra.site/docs/docs-theme/theme-configuration
 */
const themeConfig: DocsThemeConfig = {
  project: {
    link: "https://github.com/e-picsa/docs",
  },
  logo: <strong>PICSA Project</strong>,
  docsRepositoryBase: "https://github.com/e-picsa/docs",
  head: () => {
    const { asPath } = useRouter();
    const { frontMatter } = useConfig();
    return (
      <>
        <meta property="og:url" content={`https://picsa.app/${asPath}`} />
        <meta property="og:title" content={frontMatter.title || "PICSA"} />
        <meta
          property="og:description"
          content={frontMatter.description || "PICSA Docs"}
        />
      </>
    );
  },
  toc: {
    float: true,
    title: <strong>On this Page</strong>,
  },
  darkMode: true,
  navigation: {
    prev: true,
    next: true,
  },
  footer: {
    component: (
      <>
        <span>
          Copyright {new Date().getFullYear()} ©{" "}
          <a href="https://picsa.app" target="_blank" rel="noopener noreferrer">
            PICSA
          </a>
        </span>
        <span style={{ marginLeft: "auto" }}>v{packageJson.version}</span>
      </>
    ),
  },
  sidebar: {
    defaultMenuCollapseLevel: 1,
  },
};

export default themeConfig;
