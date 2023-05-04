import React from 'react'
import img from "./../../../Assets/blank-profile-picture-g05926a0d9_640.png"
function DoctorProfileSidebar() {
  return (
    <>
      <div className="profile-sidebar">
                <div className="widget-profile pro-widget-content">
                  <div className="profile-info-widget">
                    <a href="#" className="booking-doc-img">
                      <img
                        src={img}
                        alt="User"
                      />
                    </a>
                    <div className="profile-det-info">
                      <h3>Dr. Gokul das</h3>
                      <div className="patient-details">
                        {/* <h5 className="mb-0">
                          BDS, MDS - Oral &amp; Maxillofacial Surgery
                        </h5> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="dashboard-widget">
                  <nav className="dashboard-menu">
                    <ul>
                      <li>
                        <a href="doctor-dashboard.html">
                          <i className="fas fa-columns" />
                          <span>Dashboard</span>
                        </a>
                      </li>
                      <li>
                        <a href="appointments.html">
                          <i className="fas fa-calendar-check" />
                          <span>Appointments</span>
                        </a>
                      </li>
                      <li>
                        <a href="my-patients.html">
                          <i className="fas fa-user-injured" />
                          <span>My Patients</span>
                        </a>
                      </li>
                      <li className="active">
                        <a href="schedule-timings.html">
                          <i className="fas fa-hourglass-start" />
                          <span>Schedule Timings</span>
                        </a>
                      </li>
                     
                    
                      <li>
                        <a href="chat-doctor.html">
                          <i className="fas fa-comments" />
                          <span>Message</span>
                          {/* <small className="unread-msg">23</small> */}
                        </a>
                      </li>
                      <li>
                        <a href="doctor-profile-settings.html">
                          <i className="fas fa-user-cog" />
                          <span>Profile Settings</span>
                        </a>
                      </li>
                 
                      <li>
                        <a href="doctor-change-password.html">
                          <i className="fas fa-lock" />
                          <span>Change Password</span>
                        </a>
                      </li>
                      <li>
                        <a href="index-2.html">
                          <i className="fas fa-sign-out-alt" />
                          <span>Logout</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
    </>
  )
}

export default DoctorProfileSidebar
