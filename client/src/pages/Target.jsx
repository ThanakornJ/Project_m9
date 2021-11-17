import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import TargetForm from '../components/form/SetTarget';
import Navbar from '../components/nav/Navbar';

export default function Target() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Avo | Home page</title>
            </Helmet>
            <Header />
            <Navbar/>

            <TargetForm />
            <Footer />
        </HelmetProvider>
    );
}
