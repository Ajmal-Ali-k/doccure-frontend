import React from 'react'
import AdminSidebar from '../../components/AdminComponent/AdminSidebar'
import DepartmentComponenet from '../../components/AdminComponent/DepartmentComponent.jsx/DepartmentComponenet'

function Department() {
  return (

       <div>
        <div className="w-full flex">
      <div className="w-1/5 fixed inset-0 md:relative sm:relative lg:relative lg:translate-x-0">
        <AdminSidebar />
      </div>
      <div className="w-full ">
      <DepartmentComponenet/>
      </div>
    </div>

    </div>
    
  )
}

export default Department
