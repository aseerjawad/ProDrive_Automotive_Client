import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Inverntory from "../Components/Inventory/Inverntory";
import Home from "../Components/Home/Home";
import Reviews from "../Components/Customer reviews/Reviews";
import AboutUs from "../Components/About Us/AboutUs";
import App from "../Components/Inventory/App";
import OurProducts from "../Components/OurProducts/OurProducts";




export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "inventory",
                element: <Inverntory></Inverntory>
            },
            {
                path: "reviews",
                element: <Reviews></Reviews>
            },
            {
                path: "aboutus",
                element: <AboutUs></AboutUs>
            },
            {
                path: "app",
                element: <App></App>
            },
            {
                path: "ourProducts",
                element: <OurProducts></OurProducts>
            }

        ]
    }
]);