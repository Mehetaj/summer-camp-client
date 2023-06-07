import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Login from "../Pages/Authenications/Login/Login";
import Signup from "../Pages/Authenications/Signup/Signup";
import Home from "../Pages/Home/Home/Home";
import Dashboard from "../Pages/Dashboard/Dashboard";

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
        element: <Dashboard />
    }
])

export default router