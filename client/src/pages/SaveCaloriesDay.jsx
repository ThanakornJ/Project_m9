import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SaveCaloriesDa from "../components/main/SaveCaloriesDay";
import Navbar from '../components/nav/Navbar';

export default function SaveCaloriesDay() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Avo | Home page</title>
      </Helmet>
      <Header />
      <Navbar/>

      <SaveCaloriesDa />
      <Footer />
    </HelmetProvider>
  );
}
