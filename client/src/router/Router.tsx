import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErorrComponentsRuoter";
import ROUTES from "./routesModel";


// Pages that contain routes 
import ProductPage from "../pages/ProductPage";
import Comparison from "../pages/Comparison";

import Cart from "../pages/Cart";

import Login from "../components/loginANDsignup/Login";

import HomePage from "../components/home/HomePage";
import CardsProducts from "../components/cardProduct/CardsProducts";
import Signup from "../components/loginANDsignup/Signup";




    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
            errorElement: <ErrorPage />,          
        },
        {
            path: '/product/:name/:id',
            element: <ProductPage />,
            errorElement: <ErrorPage />,          
        },
        {
            path: '/category/:categoryName',
            element: <CardsProducts />,
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

