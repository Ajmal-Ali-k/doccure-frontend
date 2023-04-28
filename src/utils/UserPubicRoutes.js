import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'
function UserPubicRoutes() {
  const userToken = JSON.parse(localStorage.getItem('clientToken'))

  return (
    userToken ? <Navigate to="/"/> :  <Outlet/> 
  )
}

export default UserPubicRoutes
