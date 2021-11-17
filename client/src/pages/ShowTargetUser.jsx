import { Helmet, HelmetProvider } from "react-helmet-async";

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ShowTarget from "../components/main/ShowTarget";
import Navbar from '../components/nav/Navbar';

export default function ShowTargetUser() {
  return (
    <HelmetProvider>
      <Helmet>
        <title>Avo | Home page</title>
      </Helmet>
      <Header />
      <Navbar/>

      <ShowTarget />
      <Footer />
    </HelmetProvider>
  );
}
