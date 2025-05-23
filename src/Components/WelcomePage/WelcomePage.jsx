import React from 'react'
import './Welcomepage.css'
import { useNavigate } from 'react-router-dom'
function WelcomePage() {
  const nav=useNavigate();
  return (
    <>
      <div id='welcome-bottom' className='h-screen flex flex-col justify-between bg-gray-200 '>
        <div>

        </div>
        <div  className='px-6'>
           <div  className='pb-5'>
                <h1 className='text-black font-bold text-2xl py-2'>Welcome to PopX</h1>
                <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className='flex flex-col space-y-2 pb-10'> 
                <button  onClick={()=>{nav('/signup')}}  className='bg-gray-400 text-center  rounded-md px-4 py-2 text-gray-950 hover:bg-purple-600 hover:text-white'>Create Account</button>
                <button  onClick={()=>{nav('/login')}} className='bg-gray-400 text-center rounded-md px-4 py-2 text-gray-950 hover:bg-purple-600 hover:text-white'>Already Registered? Login</button>
            </div>
        </div>   
        </div>
    </>
  )
}

export default WelcomePage
