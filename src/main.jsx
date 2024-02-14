import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { router } from './Routes/Routes'
import {
  
  RouterProvider,
} from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Provider from './Provider/Provider';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <HelmetProvider>
      <Provider>
      <RouterProvider router={router} />
      </Provider>
    </HelmetProvider>
  </React.StrictMode>,
)
