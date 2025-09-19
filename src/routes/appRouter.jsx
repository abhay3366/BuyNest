import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import HelpCenter from "../pages/HelpCenter";
import TrackOrder from "../pages/TrackOrder";


const appRouter=createBrowserRouter([
  {
    path:"/",
    element:<MainLayout />,
    children:[
        {
            path:"/",
            element:<Home />
        },
         {
            path:"/help_center",
            element:<HelpCenter/>
        },
         {
            path:"/track_order",
            element:<TrackOrder/>
        },
    ]
  }

])



export default appRouter;