import React from "react";
import { Login } from "./Login";
import { Browse } from "./Browse";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Ensure you import createBrowserRouter

export const Body = () => {
    const appRoutes = createBrowserRouter([
        {
            path: '/',
            element: <Login />
        },
        {
            path: '/browse',
            element: <Browse />
        }
    ]);

    return (
        <div>
             <RouterProvider router={appRoutes} />
        </div>
    );
};
