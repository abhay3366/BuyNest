import { createBrowserRouter } from "react-router";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import HelpCenter from "../pages/HelpCenter";
import TrackOrder from "../pages/TrackOrder";
import SignIn from "../component/SignIn";
import SignUp from "../component/signup";
import Cart from "../component/Cart";
import ProductListing from "../component/ProductListing";
import ViewCart from "../component/ViewCart";
import Verify from "../component/Verify";
import ForgotPassword from "../component/ForgotPassword";
import Checkout from "../component/Checkout";
import MyAccount from "../pages/MyAccount";
import MyList from "../pages/MyList";


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
        {
            path:"/login",
            element:<SignIn/>
        },
        {
          path:"/register",
          element:<SignUp/>
        },
        {
          path:"/productListing",
          element:<ProductListing/>
        },
        {
          path:"/cart",
          element:<Cart/>
        },
        {
          path:"/viewCart",
          element:<ViewCart/>
        },
         {
          path:"/verify",
          element:<Verify/>
        },
        {
          path:"/forgot-password",
          element:<ForgotPassword/>
        },
         {
          path:"/checkout",
          element:<Checkout/>
        },
        {
          path:"/my-account",
          element:<MyAccount/>
        },
        {
          path:"/my-list",
          element:<MyList/>
        }
    ]
  }

])



export default appRouter;