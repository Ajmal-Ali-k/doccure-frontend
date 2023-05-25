import React from 'react'
import ProfileCard from '../../components/ClientComponent/userProfile/ProfileCard'
import NavbarComponent from "../../components/HomeComponents/NavbarComponent"
import ProfileUpdateForm from '../../components/ClientComponent/userProfile/ProfileUpdateForm'


function ProfileSetting() {
  return (
    <div className="main-wrapper">
    <NavbarComponent/>
    {/* <div className="flex  h-screen w-full justify-start "> */}

      <ProfileUpdateForm/>
    </div>
    // </div>
  )
}

export default ProfileSetting
