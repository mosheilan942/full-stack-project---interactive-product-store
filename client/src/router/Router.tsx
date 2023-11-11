import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "./ErorrComponentsRuoter";
import ROUTES from "./routesModel";


// Pages that contain routes 
import HomePage from "../pages/HomePage";
import Categories from "../pages/Categories";
import ProductPage from "../pages/ProductPage";


import Project from "../types/ProjectType";



    const router = createBrowserRouter([
        {
            path: '/',
            element: <HomePage />,
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
    ]
    );
   


export default router

