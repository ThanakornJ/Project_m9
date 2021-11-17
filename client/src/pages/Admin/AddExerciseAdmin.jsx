import React from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import AddExercise from "../../components/form/AddExercies";

export default function AddExerciseAdmin() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Avo | Home page</title>
      </Helmet>
      <Header />
      <AddExercise />
      <Footer />
    </HelmetProvider>
  );
}
