import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErorrComponentsRuoter";
import ROUTES from "./routesModel";


// Pages that contain routes 
import HomePage from "../pages/HomePage";
import Categories from "../pages/Categories";
import ProductPage from "../pages/ProductPage";
import Comparison from "../pages/Comparison";


import Project from "../types/ProductType";
import Cart from "../pages/Cart";
import Login from "../components/loginANDsignup/Login";
import SignupForm from "../components/loginANDsignup/SignupForm";



    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
            errorElement: <ErrorPage />,          
        },
        {
            path: '/login',
            element: <Login  />,
            errorElement: <ErrorPage />,          
        },
        {
            path: '/signup',
            element: <SignupForm  />,
            errorElement: <ErrorPage />,          
        },
        {
            path: '/product/:id',
            element: <ProductPage />,
            errorElement: <ErrorPage />,          
        },
        {
            path: `${ROUTES.CATEGORIES}`,
            element: <Categories />,
            errorElement: <ErrorPage />,          
        },
        {
            path: '/comparison',
            element: <Comparison />,
            errorElement: <ErrorPage />,          
        },
        {
            path: '/cart',
            element: <Cart />,
            errorElement: <ErrorPage />,          
        },
    ]
    );
   


export default router

