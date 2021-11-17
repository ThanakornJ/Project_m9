import { HelmetProvider, Helmet } from 'react-helmet-async';
import { useBodyClass } from '../../useHooks';

import HeaderAdmin from '../../components/header/HeaderAdmin';
import SideBarMenu from '../../components/nav/SideBarMenu';

export default function Dashboard() {
    useBodyClass('dashboard');

    return (
        <HelmetProvider>
            <Helmet>
                <title>ADMIN | Dashboard</title>
            </Helmet>
            <HeaderAdmin />
            <SideBarMenu />
        </HelmetProvider>
    );
}
