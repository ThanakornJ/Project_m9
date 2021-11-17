import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useBodyClass } from '../../useHooks'

import HeaderAdmin from '../../components/header/HeaderAdmin';
import SideBarMenu from '../../components/nav/SideBarMenu';
import NewFoodMain from '../../components/main/NewFoodMain';

export default function NewFood() {
    useBodyClass('dashboard');

    return (
        <HelmetProvider>
            <Helmet>
                <title>ADMIN | Dashboard</title>
            </Helmet>
            <HeaderAdmin />
            <SideBarMenu />
            <NewFoodMain />
        </HelmetProvider>
    );
}
