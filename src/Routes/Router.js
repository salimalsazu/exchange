import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../Error/ErrorElement";
import About from "../Pages/About/About";
import Login from "../Pages/Contact/Login/Login";
import Reg from "../Pages/Contact/Registration/Reg";
import AddUser from "../Pages/Dashboard/User/AddUser";
import ListOfUser from "../Pages/Dashboard/User/ListOfUser";
import Home from "../Pages/Home/Home";
import LeftSidebar from "../Pages/LeftSidebar/LeftSidebar";
import Main from "../Pages/Main/Main";
import Service from "../Pages/Service/Service";
import Services from "../Pages/Service/Services";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorElement></ErrorElement>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/service',
                element: <Service></Service>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/dashboard',
                element: <LeftSidebar></LeftSidebar>,
                children: [
                    {
                        path: '/dashboard/adduser',
                        element: <AddUser></AddUser>
                    },
                    {
                        path: '/dashboard/listOfUser',
                        element: <ListOfUser></ListOfUser>
                    },
                    {
                        path: '/dashboard/changerole',
                        element: <ListOfUser></ListOfUser>
                    }
                ]
            },
            {
                path: '/reg',
                element: <Reg></Reg>
            }
        ]
    }
])