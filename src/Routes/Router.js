import { createBrowserRouter } from "react-router-dom";
import ErrorElement from "../Error/ErrorElement";
import About from "../Pages/About/About";
import Login from "../Pages/Contact/Login/Login";
import Reg from "../Pages/Contact/Registration/Reg";
import MyOrder from "../Pages/Dashboard/Buyers/MyOrder";
import MyProfile from "../Pages/Dashboard/Buyers/MyProfile";
import WishList from "../Pages/Dashboard/Buyers/WishList";
import AddProduct from "../Pages/Dashboard/Seller/AddProduct";
import EditProduct from "../Pages/Dashboard/Seller/EditProduct";
import MyBuyers from "../Pages/Dashboard/Seller/MyBuyers";
import MyProducts from "../Pages/Dashboard/Seller/MyProducts";
import ListOfAdmin from "../Pages/Dashboard/User/ListOfAdmin";
import ListOfBuyer from "../Pages/Dashboard/User/ListOfBuyer";
import ListOfSeller from "../Pages/Dashboard/User/ListOfSeller";
import ReportedItems from "../Pages/Dashboard/User/ReportedItems";
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
                        path: '/dashboard/listofadmin',
                        element: <ListOfAdmin></ListOfAdmin>
                    },
                    {
                        path: '/dashboard/listofbuyers',
                        element: <ListOfBuyer></ListOfBuyer>
                    },
                    {
                        path: '/dashboard/listofsellers',
                        element: <ListOfSeller></ListOfSeller>
                    },
                    {
                        path: '/dashboard/reporteditems',
                        element: <ReportedItems></ReportedItems>
                    },
                    {
                        path: '/dashboard/addproduct',
                        element: <AddProduct></AddProduct>
                    },
                    {
                        path: '/dashboard/editproduct',
                        element: <EditProduct></EditProduct>
                    },
                    {
                        path: '/dashboard/myproducts',
                        element: <MyProducts></MyProducts>
                    },
                    {
                        path: '/dashboard/mybuyers',
                        element: <MyBuyers></MyBuyers>
                    },
                    {
                        path: '/dashboard/myorders',
                        element: <MyOrder></MyOrder>
                    },
                    {
                        path: '/dashboard/myprofile',
                        element: <MyProfile></MyProfile>
                    },
                    {
                        path: '/dashboard/wishlist',
                        element: <WishList></WishList>
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