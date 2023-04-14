import React from 'react'
import NewDoctorDetaill from '../../components/AdminComponent/NewDoctorDetaill'
import AdminSidebar from '../../components/AdminComponent/AdminSidebar'

function NewDocDetails() {
  return (
    <div>
        <div className="w-full flex">
      <div className="w-1/5 fixed inset-0 md:relative sm:relative lg:relative lg:translate-x-0">
        <AdminSidebar />
      </div>
      <div className="w-full ">
        <NewDoctorDetaill />
      </div>
    </div>

    </div>
  )
}

export default NewDocDetails
