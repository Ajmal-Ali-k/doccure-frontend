
import React from 'react'
import {Routes,Route} from "react-router-dom"
import NewDoctors from '../pages/Admin/NewDoctors'
import AdminLogin from '../pages/Admin/AdminLogin'
import NewDocDetails from '../pages/Admin/NewDocDetails'

function AdminRoutes() {
  return (
    <div>
    <Routes>
       <Route path='/' element={<AdminLogin/>}/> 
      <Route path='/new_doctors' element={<NewDoctors/>}></Route>
      <Route path='/new_doctor_details' element={<NewDocDetails/>}/>
    </Routes>
      
    </div>
  )
}

export default AdminRoutes
