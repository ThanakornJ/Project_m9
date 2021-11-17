import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeaderController from '../components/header/HeaderController';
import RegisterMain from '../components/main/RegisterMain';
import Footer from '../components/footer/Footer';

export default function Register() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Avo | Sign up</title>
            </Helmet>
            <HeaderController titlePage="Sign up" />
            <RegisterMain />
            <Footer />
        </HelmetProvider>
    )
}
