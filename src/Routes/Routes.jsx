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
import ManageClass from "../Pages/Dashboard/Admin/ManageClass/ManageClass";
import UpdateClass from "../Pages/Dashboard/Instractor/UpdateClass";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";
import Classes from "../Pages/Classes/Classes";
import Instractor from "../Pages/Instractor/Instractor";
import MySelectedClass from "../Pages/Dashboard/User/MySelectedClass";
import Payment from "../Pages/Dashboard/User/Payment/Payment";
import Error from "../Layout/Error";

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
            },
            {
                path: 'classes',
                element: <Classes />
            },
            {
                path: 'instractor',
                element: <Instractor />
            }
        ]
    },
    {
        path: 'dashboard',
        element: <PrivateRoute><Dashboard /></PrivateRoute>,
        children: [
            // users Routes
            {
                path: 'myselectedclass',
                element: <MySelectedClass />
            },
            {
                path: 'payment/:id',
                element: <PrivateRoute><Payment /></PrivateRoute>
            },

            // Instructor Routes
            {
                path: 'add-class',
                element: <InstructorRoute><AddClass /></InstructorRoute>
            },

            {
                path: 'myclass',
                element: <InstructorRoute><Myclass /></InstructorRoute>
            },
            {
                path: 'updateclass/:id',
                element: <InstructorRoute><UpdateClass /></InstructorRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/classes/${params.id}`)
            },
            // Admin Routes
            {
                path: 'manageusers',
                element: <AdminRoute><ManageUsers /></AdminRoute>
            },
            {
                path: 'manageclass',
                element: <AdminRoute><ManageClass /></AdminRoute>
            }
        ]
    },
    {
        path: '*',
        element: <Error />
    }
])

export default router