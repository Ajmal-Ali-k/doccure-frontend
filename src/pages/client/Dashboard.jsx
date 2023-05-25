import React from 'react'
import ProfileCard from '../../components/ClientComponent/userProfile/ProfileCard'
import NavbarComponent from "../../components/HomeComponents/NavbarComponent"
import Loader from '../../components/HomeComponents/Loader'
import DashBoardComponents from '../../components/ClientComponent/userProfile/DashBoardComponents'

function Dashboard() {
  return (
    <>
    
    <NavbarComponent/>
    {/* <div className="flex  h-screen w-full justify-start space-x-8 bg-gray-50"> */}
    {/* <ProfileCard/> */}
    <DashBoardComponents/>
  
    {/* </div> */}
    </>
  )
}

export default Dashboard
