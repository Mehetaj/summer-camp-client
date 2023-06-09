import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';
import useAdmin from '../Hooks/useAdmin'

const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();
    let location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress my-20 mx-auto w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }


    return <Navigate to="/" state={{ from: location }} replace></Navigate>
};

export default AdminRoute;