
import React from 'react'
import {Routes,Route} from "react-router-dom"
import NewDoctors from '../pages/Admin/NewDoctors'
import AdminLogin from '../pages/Admin/AdminLogin'
import NewDocDetails from '../pages/Admin/NewDocDetails'
import Department from '../pages/Admin/Department'

function AdminRoutes() {
  return (
    <div>
    <Routes>
       <Route path='/' element={<AdminLogin/>}/> 
      <Route path='/new_doctors' element={<NewDoctors/>}></Route>
      <Route path='/new_doctor_details' element={<NewDocDetails/>}/>
      <Route path='/department' element={<Department/>}/>
    </Routes>
      
    </div>
  )
}

export default AdminRoutes
