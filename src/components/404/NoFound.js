
import React from 'react'
import { useNavigate } from 'react-router-dom'


function NoFound() {
    const naviagate = useNavigate()
    const handleClick =()=>{
        naviagate('/')
    }
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <h1 className="text-9xl text-sky-400">404</h1>
        <p className="text-xl text-black">Oops! Page not found!</p>
        <p className="text-xl text-black pt-2">The page you requested was not found.</p>
        <button className="py-3 bg-sky-400 text-white px-3 rounded-3xl mt-4" onClick={handleClick}>
          Back to Home
        </button>
      </div>
    </div>
  )
}

export default NoFound