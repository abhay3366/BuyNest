
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Products from "../pages/Products";
import HomeSliderBanner from "../pages/HomeSliderBanner";
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Dashboard/>
            },
            {
                path:"/login",
                element:<Login/>
            },
             {
                path:"/products",
                element:<Products/>
            },
            {
                path:"/homeSlider/list",
                element:<HomeSliderBanner/>
            }
        ]
    }

])

export default appRouter