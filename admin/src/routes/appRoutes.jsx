
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import Products from "../pages/Products";
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
            }
        ]
    }

])

export default appRouter