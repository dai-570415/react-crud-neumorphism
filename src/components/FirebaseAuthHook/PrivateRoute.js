import React, { useContext } from 'react';
import { Route } from 'react-router-dom';
import { AuthContext } from './AuthProvider';
import Signin from './Signin';

const PrivateRoute = ({ component: RouteComponent, ...options }) => {
    const { currentUser } = useContext(AuthContext);
    const Component = currentUser ? RouteComponent : Signin;

    return <Route { ...options } component={ Component } />;
}

export default PrivateRoute;