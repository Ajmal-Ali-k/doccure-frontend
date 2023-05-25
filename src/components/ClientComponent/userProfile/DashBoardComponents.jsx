import React from 'react'
import ProfileCard from './ProfileCard'

function DashBoardComponents() {
  return (
   <div>
  {/* Page Content */}
  <div className="content">
    <div className="container-fluid">
      <div className="row">
        {/* Profile Sidebar */}
        <ProfileCard/>
        {/* / Profile Sidebar */}
        <div className="col-md-7 col-lg-8 col-xl-9">
          <div className="card">
            <div className="card-body pt-0">
              {/* Tab Menu */}
              <nav className="user-tabs mb-4">
                <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                  <li className="nav-item">
                    <a className="nav-link active" href="#pat_appointments" data-toggle="tab">Appointments</a>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#pat_prescriptions" data-toggle="tab">Prescriptions</a>
                  </li> */}
                  {/* <li className="nav-item">
                    <a className="nav-link" href="#pat_medical_records" data-toggle="tab"><span className="med-records">Medical Records</span></a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#pat_billing" data-toggle="tab">Billing</a>
                  </li> */}
                </ul>
              </nav>
              {/* /Tab Menu */}
              {/* Tab Content */}
              <div className="tab-content pt-0">
                {/* Appointment Tab */}
                <div id="pat_appointments" className="tab-pane fade show active">
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Doctor</th>
                              <th>Appt Date</th>
                              <th>Booking Date</th>
                              <th>Amount</th>
                              <th>Follow Up</th>
                              <th>Status</th>
                              <th />
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="doctor-profile.html" className="avatar avatar-sm mr-2">
                                    <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" />
                                  </a>
                                  <a href="doctor-profile.html">Dr. Ruby Perrin <span>Dental</span></a>
                                </h2>
                              </td>
                              <td>14 Nov 2019 <span className="d-block text-info">10.00 AM</span></td>
                              <td>12 Nov 2019</td>
                              <td>$160</td>
                              <td>16 Nov 2019</td>
                              <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                    <i className="fas fa-print" /> Print
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                </div>
                              </td>
                            </tr>
                            
                            
                            <tr>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="doctor-profile.html" className="avatar avatar-sm mr-2">
                                    <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-10.jpg" alt="User Image" />
                                  </a>
                                  <a href="doctor-profile.html">Dr. Olga Barlow  <span>Dental</span></a>
                                </h2>
                              </td>
                              <td>5 Nov 2019 <span className="d-block text-info">5.00 PM</span></td>
                              <td>1 Nov 2019</td>
                              <td>$100</td>
                              <td>7 Nov 2019</td>
                              <td><span className="badge badge-pill bg-success-light">Confirm</span></td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                    <i className="fas fa-print" /> Print
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                </div>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Appointment Tab */}
                {/* Prescription Tab */}
                <div className="tab-pane fade" id="pat_prescriptions">
                  <div className="card card-table mb-0">
                    <div className="card-body">
                      <div className="table-responsive">
                        <table className="table table-hover table-center mb-0">
                          <thead>
                            <tr>
                              <th>Date </th>
                              <th>Name</th>									
                              <th>Created by </th>
                              <th />
                            </tr>     
                          </thead>
                          <tbody>
                            <tr>
                              <td>14 Nov 2019</td>
                              <td>Prescription 1</td>
                              <td>
                                <h2 className="table-avatar">
                                  <a href="doctor-profile.html" className="avatar avatar-sm mr-2">
                                    <img className="avatar-img rounded-circle" src="assets/img/doctors/doctor-thumb-01.jpg" alt="User Image" />
                                  </a>
                                  <a href="doctor-profile.html">Dr. Ruby Perrin <span>Dental</span></a>
                                </h2>
                              </td>
                              <td className="text-right">
                                <div className="table-action">
                                  <a href="javascript:void(0);" className="btn btn-sm bg-primary-light">
                                    <i className="fas fa-print" /> Print
                                  </a>
                                  <a href="javascript:void(0);" className="btn btn-sm bg-info-light">
                                    <i className="far fa-eye" /> View
                                  </a>
                                </div>
                              </td>
                            </tr>
                                           
                          </tbody>	
                        </table>
                      </div>
                    </div>
                  </div>
                </div>
                {/* /Prescription Tab */}
               
                
              </div>
              {/* Tab Content */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>		
  {/* /Page Content */}
</div>

  )
}

export default DashBoardComponents
