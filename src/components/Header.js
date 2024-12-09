import React, { useEffect } from 'react'
import {  onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth } from '../utils/firebase';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/userSlice';
import { LOGO } from '../utils/constants';
import { toggleGptSearchView } from '../utils/gptSlice';


export const Header = () => {
   const navigate = useNavigate()
   const dispatch = useDispatch()

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

  /**User this code here besose navigator cant use outside of router provider there head is inside body and its load every time */
  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(
          addUser({ uid: uid, email: email, displayName: displayName })
        );
        navigate('/browse')
      } else {
        dispatch(removeUser());
        navigate('/')
      }
    });

    //to unsubscribe event
    return ()=>unsubscribe()
  }, []);

  const handleGptSearch =()=>{
      dispatch(toggleGptSearchView())
  }

  return (
    <div className="absolute w-screen py-2 bg-gradient-to-b from-black z-10 flex justify-between">
      <img
        className="w-44 ml-12"
        src={LOGO}
        alt="logo"
      ></img>

      {user && (
        <div className="flex p-2 mr-9">
          <button className='py-2 px-4  mx-4 my-2 bg-purple-800 text-white rounded-lg' onClick={handleGptSearch}>
            GPT Search
          </button>
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
