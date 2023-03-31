import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import SignUp from "../Pages/SignUp/SignUp";

export const router = createBrowserRouter([{

    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/signup',
            element: <SignUp> </SignUp>
        }
    ]
}])