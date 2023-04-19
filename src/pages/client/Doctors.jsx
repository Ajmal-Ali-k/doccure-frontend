import React from 'react'
import DoctorsFilterCard from '../../components/doctorsListComponent/DoctorsFilterCard'
import NavbarComponent from '../../components/HomeComponents/NavbarComponent'

function Doctors() {
  return (
    <div>
    <NavbarComponent/>
    <div className="w-full flex">
      <div className="w-1/5 fixed inset-0 md:relative sm:relative lg:relative lg:translate-x-0">
      <DoctorsFilterCard/>
      </div>
      <div className="w-full ">

      </div>
    </div>
      
    </div>
  )
}

export default Doctors
