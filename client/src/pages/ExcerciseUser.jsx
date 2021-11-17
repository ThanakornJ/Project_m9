import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Excercise from "../components/main/Excercise";
import Navbar from '../components/nav/Navbar';

export default function ExcerciseUser() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Avo | Home page</title>
      </Helmet>
      <Header />
      <Navbar/>

      <Excercise />
      <Footer />
    </HelmetProvider>
  );
}
