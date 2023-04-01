import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Cart from "../Pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";
import Dashbord from "../layout/Dashbord";
import AddProduct from "../Pages/AddProduct/AddProduct";
import Orders from "../Pages/Orders/Orders";
import ProductsList from "../Pages/ProducstList/ProductsList";
import Customers from "../Pages/Customers/Customers";
import CustomerDetails from "../Pages/CustomerDetails/CustomerDetails";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>

            },
            {
                path: '/products',
                element: <Products></Products>

            },
            {
                path: '/item/:_id',
                loader: ({ params }) => fetch(`http://localhost:5000/item/${params._id}`),
                element: <ProductDetails></ProductDetails>
            },

            {
                path: '/cart',
                element: <PrivateRoute><Cart></Cart></PrivateRoute>
            },

            {
                path: '/signup',
                element: <SignUp> </SignUp>,
            },
            {
                path: '/login',
                element: <Login></Login>
            }
        ]
    },
    {
        path: '/dashbord',
        element: <Dashbord></Dashbord>,
        children: [
            {
                path: '/dashbord/',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashbord/orders',
                element: <Orders></Orders>
            },
            {
                path: '/dashbord/products',
                element: <ProductsList></ProductsList>
            },
            {
                path: '/dashbord/customers',
                element: <Customers></Customers>
            },
            {
                path: '/dashbord/customerDetails/:email',
                loader: ({ params }) => fetch(`http://localhost:5000/customerDetails?email=${params.email}`),
                element: <CustomerDetails></CustomerDetails>
            },
        ]
    }
])