import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Navbar from '../components/nav/Navbar';
import Homepage from '../components/main/Homepage';

export default function Home() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Avo | Home page</title>
            </Helmet>
            <Header />
            
            <Navbar/>
            <Homepage/>
            <Footer />
        </HelmetProvider>
    );
}
