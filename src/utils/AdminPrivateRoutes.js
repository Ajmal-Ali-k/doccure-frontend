import React from 'react'
import { Outlet, Navigate } from 'react-router-dom'


function AdminPrivateRoutes() {
  const adminToken = JSON.parse(localStorage.getItem("adminToken"))
  console.log("this is admin token from routes",adminToken)
  return (
    adminToken ? <Outlet/> : <Navigate to="/admin"/>
  )
}

export default AdminPrivateRoutes
