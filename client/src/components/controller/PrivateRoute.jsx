import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../../useHooks';

export default function PrivateRoute({ component: Component, ...rest }) {
    const isAdmin = useAuth();

    return (
        <Route {...rest} render={({ location }) =>
                isAdmin 
                ? <Component />
                : <Redirect to={{ pathname: '/loading', state: { from: location } }} />
        } />
    );
}
