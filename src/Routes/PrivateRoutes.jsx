import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth();
    let location = useLocation()

    if (loading) {
        return <progress className="progress my-20 mx-auto w-56"></progress>
    }

    if (user) {
        return children;
    }


    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;