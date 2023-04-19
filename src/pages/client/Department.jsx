import React from 'react'
import DepartmentCard from '../../components/ClientComponent/Department/DepartmentCard'
import NavbarComponent from '../../components/HomeComponents/NavbarComponent'

function Department() {
  return (
    <div>
    <div className='mb-3'>
    <NavbarComponent/>
    </div>
    <div className='min-w-max w-full my-4'>
        <h2 className='text-center text-4xl font-serif font-normal'>Our Departments</h2>
    </div>
    
      <div className="w-full flex">
        <DepartmentCard/>

      </div>
    </div>
  )
}

export default Department
