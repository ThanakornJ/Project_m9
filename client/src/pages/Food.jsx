import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Navbar from '../components/nav/Navbar';
import Foods from "../components/main/Food";
export default function Food() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Avo | Home page</title>
      </Helmet>
      <Header />
      <Navbar/>

      <Foods />
      <Footer />
    </HelmetProvider>
  );
}
