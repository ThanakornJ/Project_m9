import React, { useEffect } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../actions/userAction';
import auth from '../auth/user.auth';

export default function Loading() {
    const dispatch = useDispatch();
    const user = useSelector(state => state.user);
    
    useEffect(() => {
        const check = async () => {
            try {
                const res = await auth();
                dispatch(fetchUser(res));
            } catch (error) {
                dispatch(fetchUser({}));
            }
        }

        check();
    }, [dispatch]);

    return (
        <HelmetProvider>
            <Helmet>
                <title>Avo | Loading...</title>
            </Helmet>
        </HelmetProvider>
    )
}
