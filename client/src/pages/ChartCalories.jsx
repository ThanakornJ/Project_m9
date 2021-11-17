import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import ChartCal from '../components/main/ChartCalories';
import Navbar from '../components/nav/Navbar';

export default function ChartCalories() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Avo | Home page</title>
            </Helmet>
            <Header />
            <Navbar/>
            <ChartCal/>
            <Footer />
        </HelmetProvider>
    );
}
