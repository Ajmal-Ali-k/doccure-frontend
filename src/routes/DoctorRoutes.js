import React from 'react'
import {Routes,Route} from "react-router-dom"
import DoctorSignup from '../pages/Doctor/DoctorSignup'
import DoctorVerification from '../pages/Doctor/DoctorVerification'
import DoctorLogin from '../pages/Doctor/DoctorLogin'

function DoctorRoutes() {
  return (
    <div>
    <Routes>
      <Route path='/doctor_login' element={<DoctorLogin/>}/>
      <Route path='/doctor_signup' element={<DoctorSignup/>}/>
      <Route path='/doctor_verification' element={<DoctorVerification/>}/>
    
    </Routes>

      
    </div>
  )
}

export default DoctorRoutes
