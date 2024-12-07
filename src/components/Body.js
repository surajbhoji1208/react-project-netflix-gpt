import React, { useEffect } from "react";
import { Login } from "./Login";
import { Browse } from "./Browse";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'; // Ensure you import createBrowserRouter
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { useDispatch } from "react-redux";

export const Body = () => {
    const dispatch = useDispatch()
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

    useEffect(() => {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          const { uid, email, displayName } = user;
          dispatch(
            addUser({ uid: uid, email: email, displayName: displayName })
          );
        } else {
          dispatch(removeUser());
        }
      });
    }, []);

    return (
        <div>
             <RouterProvider router={appRoutes} />
        </div>
    );
};
