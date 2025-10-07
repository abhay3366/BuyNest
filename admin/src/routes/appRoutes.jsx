
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Dashboard/>
            },{
                path:"/login",
                element:<Login/>
            }
        ]
    }

])

export default appRouter