import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Royal Realty Imobiliária</title>
      </Head>

      <header className="header">
        <Navbar />
      </header>

      <Box width={"100%"} m={"auto"} marginBottom={"24"}>
        <main>{children}</main>
      </Box>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
