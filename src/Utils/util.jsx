import React from 'react'
import WelcomePage from '../Components/WelcomePage/WelcomePage'
import Login from '../Components/Login/Login'
import Signup from '../Components/Signup/Signup'
import Home from '../Components/Home/Home'
import { Route,Routes } from 'react-router-dom'
function util() {
  return (
    <>
    <Routes>
        <Route path='/' element={<WelcomePage/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/home' element={<Home/>}/>
    </Routes>
    </>
  )
}

export default util
