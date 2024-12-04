import {React, useState } from 'react'
import { Header } from './Header'

export const Login = () => {
  const [isSignInform, setIsSignInForm] = useState(true)
  const toggleSingInForm = ()=>{
    setIsSignInForm(!isSignInform)
  }
  return (
    <div>
      <Header></Header>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/2bcf01ee-7ef6-4930-b0d5-c6863853c461/web/IN-en-20241125-TRIFECTA-perspective_a47db038-756f-4f26-b1f7-cfc882b98746_large.jpg' alt='image'></img>
      </div>
      <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80'>
        <h1 className='font-bold text-3xl py-4'>{isSignInform?"Sign In":"Sing Up"}</h1>
        {!isSignInform &&(<input type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-700'></input>)}

        <input type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-700'></input>
        <input type='password' placeholder='Password' className='p-4 my-4 w-full bg-gray-700'></input>
        <button className='p-4 my-4 bg-red-600 w-full rounded-lg' >{isSignInform?"Sign In":"Sing Up"}</button>

        <p className='py-4 cursor-pointer' onClick={toggleSingInForm}>{isSignInform?"New to netflix? sing up know":"Already register sign in know"}</p>

      </form>
    </div>
  )
}
