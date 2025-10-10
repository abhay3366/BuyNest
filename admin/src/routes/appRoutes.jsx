
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Products from "../pages/Products";
import HomeSliderBanner from "../pages/HomeSliderBanner";
import Category from "../pages/Category";
import SubCategory from "../pages/SubCategory";
import Users from "../pages/Users";
import Orders from "../component/Orders";
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
            },
            {
                path:"/category/list",
                element:<Category/>
            },
            {
                path:"/category/subCategory",
                element:<SubCategory/>
            },
            {
                path:"/orders",
                element:<Orders/>
            },
             {
                path:"/users",
                element:<Users/>
            }
        ]
    }

])

export default appRouter