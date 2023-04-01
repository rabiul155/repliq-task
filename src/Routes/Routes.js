import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import Products from "../Pages/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import Cart from "../Pages/Cart/Cart";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([{

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
}])