
import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Dashboard from "../pages/Dashboard";
const appRouter=createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {
                path:"/",
                element:<Dashboard/>
            }
        ]
    }

])

export default appRouter