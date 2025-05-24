import React from 'react'
import './Signup.css'
import {useNavigate} from 'react-router-dom';
import { useState } from 'react';
function Signup() {
  const [email,setEmail]=useState("");
  const [name,setName]=useState("");
  const [password,setPassword]=useState("");
  const nav=useNavigate();
  const handlesubmit=(e)=>
  {
    e.preventDefault();
    localStorage.setItem("password",password);
    localStorage.setItem("email",email);
    localStorage.setItem("name",name);
    nav('/home');
  }
  return (
    <>
     <div id='welcome-bottom' className='h-screen flex flex-col bg-gray-200 '>
       <div>
         <h1  className='text-black mt-12 font-bold text-2xl px-4 py-2'>Create Your PopX Account</h1>
       </div>
        <div className='flex flex-col px-4'>
          <form onSubmit={handlesubmit}>
            <div>
              <label htmlFor="FullName" className='block ml-3 absolute bg-gray-200 '>Full Name</label>
              <input onChange={(e)=>{setName(e.target.value)}} className='border-2 px-2 py-1 mb-1 w-full border-gray-400 rounded-md mt-4' name='FullName' type="text" required /></div>
            <div>
               <label htmlFor="PhoneNo"  className='block ml-3 absolute bg-gray-200'>Phone number</label>
              <input className='border-2 px-2 py-1 mb-1 w-full border-gray-400 rounded-md mt-4' min={10} max={10} name='PhoneNo' type="number" required /></div>
            <div> 
               <label htmlFor="EmailAddress"  className='block ml-3 absolute bg-gray-200'>Email address</label>
              <input onChange={(e)=>{setEmail(e.target.value)}}   className='border-2 px-2 py-1 mb-1 w-full border-gray-400 rounded-md mt-4' name='EmailAddress' type="text" required /></div>
            <div> 
               <label htmlFor="Password"  className='block ml-3 absolute bg-gray-200'>Password</label>
              <input onChange={(e)=>{setPassword(e.target.value)}}  minLength={8} className='border-2 px-2 py-1 mb-1 w-full border-gray-400 rounded-md mt-4' type="password" name='Password' required/></div>
            <div>
               <label htmlFor="CompanyName"  className='block ml-3 absolute bg-gray-200'>Company name</label>
                <input className='border-2 px-2 py-1 mb-1 w-full border-gray-400 rounded-md mt-4' type="text" name='CompanyName' /></div>
             <h3 className='mt-4'>Are you an Agency?</h3>
            <div className='my-2'> 
           <input type="radio" placeholder='Yes' name='agency' id='Yes' />
           <label  className='pr-2 pl-1' htmlFor="Yes " >Yes</label>
           <input type="radio" placeholder='No' name='agency' id='No' />
           <label  className='pr-2 pl-1' htmlFor="No">No</label>
          
           </div>
           <div className='button-submit'>
              <button className='bg-gray-400 text-center w-full rounded-md px-4 py-2 text-gray-950 hover:bg-purple-600 hover:text-white'>Create Account</button>
           </div>
          </form>
        </div>
     </div>
    </>
  )
}

export default Signup
