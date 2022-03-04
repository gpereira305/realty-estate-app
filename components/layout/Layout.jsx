import React from "react";
import Head from "next/head";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Imo Realty Estate</title>
      </Head>

      <header className="header">
        <Navbar />
      </header>

      <Box width={"100%"} m={"auto"}>
        <main>{children}</main>
      </Box>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
