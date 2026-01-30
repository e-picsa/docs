import { Footer, Layout, Navbar } from "nextra-theme-docs";
import { Head } from "nextra/components";
import { getPageMap } from "nextra/page-map";
import "nextra-theme-docs/style.css";
import React from "react";
import packageJson from "../package.json";

export const metadata = {
  description: "PICSA Docs",
  title: {
    template: "%s - PICSA",
    default: "PICSA",
  },
};

const navbar = (
  <Navbar
    logo={<strong>PICSA Project</strong>}
    projectLink="https://github.com/e-picsa/docs"
  />
);

const footer = (
  <Footer>
    <span>
      Copyright {new Date().getFullYear()} ©{" "}
      <a href="https://picsa.app" target="_blank" rel="noopener noreferrer">
        PICSA
      </a>
    </span>
    <span style={{ marginLeft: "auto" }}>v{packageJson.version}</span>
  </Footer>
);

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageMap = await getPageMap();
  return (
    <html lang="en" suppressHydrationWarning>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <body>
        <Layout
          navbar={navbar}
          footer={footer}
          editLink="Edit this page on GitHub"
          docsRepositoryBase="https://github.com/e-picsa/docs"
          sidebar={{ defaultMenuCollapseLevel: 1 }}
          pageMap={pageMap}
          toc={{ float: true, title: "On this Page" }}
          navigation={{ prev: true, next: true }}
        >
          {children}
        </Layout>
      </body>
    </html>
  );
}
