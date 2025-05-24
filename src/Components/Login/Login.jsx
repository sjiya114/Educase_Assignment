import React from 'react'
import '../WelcomePage/Welcomepage.css'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const nav=useNavigate();
  const handlesubmit=(e)=>
  {
    e.preventDefault();
    if(email===localStorage.getItem("email") && password===localStorage.getItem("password"))
    {
   nav("/home");
    }
    else{
      nav("/signup");
    }
  }
  return (
    <>
     <div  id='welcome-bottom' className='h-screen flex flex-col  px-4 bg-gray-200 '>
        <div className='py-2 mt-10'>
           <h1 className='text-black font-bold text-2xl py-2'>Signin to your PopX account </h1>
           <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        <div className='flex flex-col'>
           <form onSubmit={handlesubmit}> 
             <div>
              <label  htmlFor="Email" className='block ml-3 absolute bg-gray-200 '>Email address</label>
              <input onChange={(e)=>{setEmail(e.target.value)}} className='border-2 px-2 py-1 mb-2 w-full border-gray-400 rounded-md mt-4'  placeholder='Enter email address' name='Email' type="text" required /></div>
            <div>
               <label htmlFor="Password"  className='block ml-3 absolute bg-gray-200'>Password</label>
              <input onChange={(e)=>{setPassword(e.target.value)}} className='border-2 px-2 py-1 mb-1 w-full border-gray-400 rounded-md mt-4' placeholder='Enter password'  name='Password' type="password" required /></div>
               <div className='mt-4'>
              <button className='bg-gray-400 text-center w-full rounded-md px-4 py-2 text-gray-950 hover:bg-purple-600 hover:text-white'>Login</button>
           </div>
           </form>
        </div>
     </div>
    </>
  )
}

export default Login
