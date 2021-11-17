import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import HeaderController from '../components/header/HeaderController';
import LoginMain from '../components/main/LoginMain';
import Footer from '../components/footer/Footer';

export default function Login() {
    return (
        <HelmetProvider>
            <Helmet>
                <title>Avo | Sign in</title>
            </Helmet>
            <HeaderController titlePage="Sign in" />
            <LoginMain />
            <Footer />
        </HelmetProvider>
    )
}
