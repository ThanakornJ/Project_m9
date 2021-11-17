import React from 'react';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useBodyClass } from '../../useHooks'

import HeaderAdmin from '../../components/header/HeaderAdmin';
import SideBarMenu from '../../components/nav/SideBarMenu';
import TableExercise from '../../components/table/TableExercise';

export default function ExerciseAdmin() {
    useBodyClass('dashboard');

    return (
        <HelmetProvider>
            <Helmet>
                <title>ADMIN | Dashboard</title>
            </Helmet>
            <HeaderAdmin />
            <SideBarMenu />
            <TableExercise/>
        </HelmetProvider>
    )
}
