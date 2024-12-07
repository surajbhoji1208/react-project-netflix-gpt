import React from 'react'
import {  signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useSelector } from 'react-redux';


export const Header = () => {
   const navigate = useNavigate()
   const user = useSelector((store)=>store.user)
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate('/')
      })
      .catch((error) => {
        navigate('/error')
      });
  };
  return (
    <div className="absolute w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44"
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        alt="logo"
      ></img>

      {user && (
        <div className="flex p-2">
          <button
            className="h-10 w-20 font-bold rounded-2xl  bg-slate-400"
            onClick={handleSignOut}
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
}
