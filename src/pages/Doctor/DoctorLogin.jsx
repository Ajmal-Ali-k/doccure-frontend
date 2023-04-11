import React from 'react'
import DoctorLoginComponent from '../../components/DoctorComponents/DoctorLoginComponent'
import NavbarComponent from '../../components/HomeComponents/NavbarComponent'
import FooterComponent from '../../components/HomeComponents/FooterComponent'

function DoctorLogin() {
  return (
    <div>
    <NavbarComponent/>


      <DoctorLoginComponent/>
      <FooterComponent/>
    </div>
  )
}

export default DoctorLogin
