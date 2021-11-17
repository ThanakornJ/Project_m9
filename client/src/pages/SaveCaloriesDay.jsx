import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../actions/userAction';
import auth from '../auth/user.auth';

import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import SaveCaloriesDa from "../components/main/SaveCaloriesDay";
import Navbar from '../components/nav/Navbar';

export default function SaveCaloriesDay() {
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

      <SaveCaloriesDa />
      <Footer />
    </HelmetProvider>
  );
}
