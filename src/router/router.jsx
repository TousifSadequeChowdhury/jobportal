import {
    createBrowserRouter,
    
  } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import Register from "../pages/Register";

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
      }
      ]
    },
  ]);

  export default router;