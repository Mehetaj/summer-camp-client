import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authenications/Login/Login";
import Signup from "../Pages/Authenications/Signup/Signup";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddClass from "../Pages/Dashboard/Instractor/AddClass";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";
import PrivateRoute from "./PrivateRoutes";
import Myclass from "../Pages/Dashboard/Instractor/Myclass";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'signup',
                element: <Signup />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard />,
        children: [
            // users Routes

            // Instructor Routes
            {
                path: 'add-class',
                element: <AddClass />
            },

            {
                path: 'myclass',
                element: <Myclass />
            },
            // Admin Routes
            {
                path: 'manageusers',
                element: <ManageUsers />
            },
        ]
    }
])

export default router