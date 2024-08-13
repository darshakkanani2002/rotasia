import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const PrivateRoute = ({ path, element }) => {
    const isLoggedIn = useSelector((state) => state.isLoggedIn);

    return isLoggedIn ? <Outlet/> : <Navigate to="/" />;
};

export default PrivateRoute;