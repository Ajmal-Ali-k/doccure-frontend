import React, { useEffect, useState } from 'react'
import "./DoctorCard.css"
import img from "../../Assets/doctor-image.jpg"

function DoctorCard() {
  const [doctors,setDoctors] = useState([])
  const getDoctors =()=>{

  }
  useEffect(()=>{

  },[])
  return (
   <div>
  <div className="block  w-auto mt-5  p-6 mx-20 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
    <div className="card-body">
      <div className="doctor-widget">
        <div className="doc-info-left">
          <div className="doctor-img">
            <a href="doctor-profile.html">
              <img src={img} className="img-fluid" alt="User Image" />
            </a>
          </div>
          <div className="doc-info-cont">
            <h4 className="doc-name"><a href="doctor-profile.html">Dr. Ruby Perrin</a></h4>
            <p className="doc-speciality">MDS - Periodontology and Oral Implantology, BDS</p>
            <h5 className="doc-department"><img src={img} className="img-fluid" alt="Speciality" />Dentist</h5>
         
    
          </div>
        </div>
        <div className="doc-info-right">
          {/* <div className="clini-infos">
            <ul>
              <li><i className="far fa-thumbs-up" /> 98%</li>
              <li><i className="far fa-comment" /> 17 Feedback</li>
              <li><i className="fas fa-map-marker-alt" /> Florida, USA</li>
              <li><i className="far fa-money-bill-alt" /> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /> </li>
            </ul>
          </div> */}
          <div className="clinic-booking">
            <a className="view-pro-btn " href="doctor-profile.html">View Profile</a>
            <a className="apt-btn " href="booking.html">Book Appointment</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      
    
  )
}

export default DoctorCard
