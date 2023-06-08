import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authenications/Login/Login";
import Signup from "../Pages/Authenications/Signup/Signup";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";
import AddClass from "../Pages/Dashboard/Instractor/AddClass";
import ManageUsers from "../Pages/Dashboard/Admin/ManageUsers/ManageUsers";

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
            {
                path: 'add-class',
                element: <AddClass />
            },
            {
                path: 'manageusers',
                element: <ManageUsers />
            }
        ]
    }
])

export default router