import React from 'react'
import ProfileCard from '../../components/ClientComponent/userProfile/ProfileCard'
import NavbarComponent from "../../components/HomeComponents/NavbarComponent"
import Loader from '../../components/HomeComponents/Loader'

function Dashboard() {
  return (
    <>
    
    <NavbarComponent/>
    <div className="flex  h-screen w-full justify-start space-x-8 bg-gray-50">
    <ProfileCard/>
    <h1> dash board</h1>
   {/* <Loader/> */}
    </div>
    </>
  )
}

export default Dashboard
