import React from "react";
import BottomHeaderComponent from "../components/bottomHeader";
import Footer from "../components/Footer/Footer";
import NavbarComponent from "../components/Navbar";

import { BackgroundImage, Container } from "./LayoutStyles";

export const Layout = ({ children }) => {
  return (
    <Container>
      <BackgroundImage />
      <NavbarComponent />
      <main>{children}</main>
      <BottomHeaderComponent />
      <Footer />
    </Container>
  );
};
