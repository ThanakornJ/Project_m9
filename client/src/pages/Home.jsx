import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../actions/userAction';
import auth from '../auth/user.auth';

import Header from '../components/header/Header';
import Footer from '../components/footer/Footer';
import Navbar from '../components/nav/Navbar';
import Homepage from '../components/main/Homepage';

export default function Home() {
    const dispatch = useDispatch();
    useEffect(() => {
        const getUser = async () => {
            dispatch(fetchUser(await auth()));
        }

        getUser();
    }, []);


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
