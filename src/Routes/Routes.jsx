import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Our Menu/Menu/Menu";
import Order from "../Pages/OrderFood/Order/Order";
import SingIn from "../Pages/SingIn/SingIn";
import LogIn from "../Pages/LogIn/LogIn";
import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path : '/',
            element : <Home></Home>

        }
        ,{
          path : '/menu',
          element :  <PrivateRoute><Menu></Menu></PrivateRoute>
        },
        {
          path :'order/:category',
          element : <Order></Order>
        },
        {
          path :'/singin',
          element : <SingIn></SingIn>
        },
        {
          path :'/login',
          element : <LogIn></LogIn>
        }
      ]
    },
  ]);