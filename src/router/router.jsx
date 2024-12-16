import React from 'react';

import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Signin from '../pages/Signin';

  const router = createBrowserRouter([
    {
      path: "/",
      errorElement: <h2>route not found</h2>,
      element: <MainLayout></MainLayout>,
      children:[
      {
        path: '/',
      element: <Home></Home>
      },
      {
        path : 'register',
        element:<Register></Register>
      },
      {
        path : 'signin',
        element:<Signin></Signin>
      }
      ]
    },
  ]);

  export default router;