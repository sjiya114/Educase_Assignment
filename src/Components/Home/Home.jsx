import React from 'react'
import Profile from '../../assets/profile.png';

function Home() {
    return (
        <>
            <div id='welcome-bottom' className='flex flex-col h-screen bg-gray-200'>
                <h1 className='text-black text-3xl px-4 font-bold py-6 bg-white border-gray-200 border-2 '>Account Settings</h1>
                <div className='flex flex-row py-4 px-4'>
                    <div>
                        <img className='w-30 h-30 rounded-full' src={Profile} alt="image" />
                    </div>
                    <div>
                        <h1 className='text-black font-bold px-2 pt-2 '>{localStorage.getItem("name")}</h1>
                        <h1 className='px-2'>{localStorage.getItem("email")}</h1>
                    </div>

                </div>
                <div className='py-4 px-4'>
                    <p className='text-gray-500'>Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr,
                        Sed Diam Nonumy Eirmod Tempor Invidunt Ut Labore Et
                        Dolore Magna Aliquyam Erat, Sed Diam</p>
                </div>
                <div>

                </div>
            </div>
        </>
    )
}

export default Home
