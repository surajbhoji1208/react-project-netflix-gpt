import {React, useRef, useState } from 'react'
import { Header } from './Header'
import { ValidateForm } from '../utils/Validation'
import { createUserWithEmailAndPassword ,signInWithEmailAndPassword, updateProfile} from "firebase/auth";
import {auth} from '../utils/firebase'
import { useDispatch } from 'react-redux';
import { addUser } from "../utils/userSlice";
import { BG_URL } from '../utils/constants';


export const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true)
  const [errorMessage, setErrorMessage] = useState(null)
  const toggleSingInForm = ()=>{
    setIsSignInForm(!isSignInform)
  }
  //validating form 
  const emailVal = useRef(null)
  const passVal = useRef(null)
  const nameVal = useRef(null)
  const dispatch = useDispatch()

  const submitForm = () => {

    const message = ValidateForm(emailVal.current.value, passVal.current.value)
    setErrorMessage(message)

    if (message) return

    if (!isSignInform) {
      //sign up logic
      createUserWithEmailAndPassword(auth,emailVal.current.value, passVal.current.value)
        .then((userCredential) => {
          // Signed up 
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameVal.current.value,
          })
            .then(() => {
              const { uid, email, displayName } = auth.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
            })
            .catch((error) => {
              setErrorMessage(error);
            });
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+errorMessage)
        });

    }
    else {
      //sign in logic
      signInWithEmailAndPassword(auth,emailVal.current.value, passVal.current.value)
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode+errorMessage)
        });
    }

  }
  return (
    <div>
      <Header></Header>
      <div className='absolute'>
        <img src={BG_URL} alt='image'></img>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80' onSubmit={e => e.preventDefault()}>
        <h1 className='font-bold text-3xl py-4'>{isSignInform?"Sign In":"Sing Up"}</h1>
        {!isSignInform &&(<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700' ref={nameVal}></input>)}

        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700' ref={emailVal}></input>
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700' ref={passVal}></input>
        <p className='text-red-600 text-lg py-4'>{errorMessage}</p>
        <button className='p-4 my-4 bg-red-600 w-full rounded-lg'  onClick={submitForm}>{isSignInform?"Sign In":"Sing Up"}</button>

        <p className='py-4 cursor-pointer' onClick={toggleSingInForm}>{isSignInform?"New to netflix? sing up know":"Already register sign in know"}</p>

      </form>
    </div>
  )
}
