import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'

function UserPrivateRoutes() {
  const userToken = JSON.parse(localStorage.getItem('clientToken'))
  console.log(userToken,"this is the user token from sgssujhdf")
  return (
   userToken ? <Outlet/> :<Navigate to="/login"/>
  )
}

export default UserPrivateRoutes
