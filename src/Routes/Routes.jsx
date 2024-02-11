import {
    createBrowserRouter,
   
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Our Menu/Menu/Menu";
import Order from "../Pages/OrderFood/Order/Order";

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
          element :  <Menu></Menu>
        },
        {
          path :'/order',
          element : <Order></Order>
        }
      ]
    },
  ]);