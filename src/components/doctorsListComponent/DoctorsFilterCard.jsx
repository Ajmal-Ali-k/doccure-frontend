import React from 'react'
import {Link} from "react-router-dom"


function DoctorsFilterCard() {
  return (
    <div>
<div href="#" className="block max-w-md w-72 mt-5 p-6 ml-8 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
  <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">select your specialist</h5>
  <hr />
 
  <ul className='font-normal text-gray-700 mb-4'>
    <li>cardiologist</li>
    <li>Dentist</li>
    <li>Orthopaedics</li>
    <li>Urology</li>
  </ul>
</div>


    </div>
  )
}

export default DoctorsFilterCard
