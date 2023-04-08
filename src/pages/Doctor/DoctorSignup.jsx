import React from 'react'
import DoctorSignupComponent from '../../components/DoctorComponents/DoctorSignupComponent'
import NavbarComponent from '../../components/HomeComponents/NavbarComponent'
import FooterComponent from '../../components/HomeComponents/FooterComponent'


function DoctorSignup() {
  return (
    <div>
    <NavbarComponent/>
    
      <DoctorSignupComponent/>
      <FooterComponent/>
    </div>
  )
}

export default DoctorSignup
