import React from 'react';
import { Route } from 'react-router-dom';
import Home from '../pages/Home';
import authService from '../services/authService';
import { useSelector } from 'react-redux';


function GuestRoutes({ component: Component, ...rest }) {
    const account = useSelector( state => state.account);
    const isAuthenticated = Boolean(account.user);


    return (
        <Route {...rest} component={(
            isAuthenticated
            ? Home
            : Component
        )}>
        </Route>
    )
    
}

export default GuestRoutes;