import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useBodyClass } from '../../useHooks'

import HeaderAdmin from '../../components/header/HeaderAdmin';
import SideBarMenu from '../../components/nav/SideBarMenu';
import EE from '../../components/main/Ext';
import AddExercies from '../../components/form/AddExercies';
export default function ExerciseAdmin() {
    useBodyClass('dashboard');

    return (
        <HelmetProvider>
            <Helmet>
                <title>ADMIN | Dashboard</title>
            </Helmet>
            <HeaderAdmin />
            <SideBarMenu />   
            
            <EE/>
         <AddExercies/>
        </HelmetProvider>
    )
}
