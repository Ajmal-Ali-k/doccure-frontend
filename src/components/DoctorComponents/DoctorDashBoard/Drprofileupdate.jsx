import React, { useState } from 'react'
import DoctorProfileSidebar from "./DoctorProfileSidebar";

function Drprofileupdate() {
    const [datas,setDatas] = useState("")
    const handleSubmit =()=>{

    }
  return (
    <>

      {/* jjjjjjjjjjjjjjjjjjjjjjjjjj */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Profile Sidebar */}
              <DoctorProfileSidebar/>
              {/* /Profile Sidebar */}
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-6">
                      {/* Change Password Form */}
                      <form onSubmit={handleSubmit}>
                    <div className="row form-row space-y-4 ">
                     
                   
                          <>
                            <div className="col-12 col-md-12">
                              <div className="form-group">
                                <div className="change-avatar flex items-center">
                                  <div className=" mr-4">
                                    {/* <img
                                      name="image"
                                      src={val.photo ? val.photo : img}
                                      className="rounded  h-24 w-24"
                                      alt="User"
                                    /> */}
                                  </div>
                                  <div className="">
                                    <div className="change-photo-btn mb-2 w-40">
                                      <span>
                                        <i className="fa fa-upload" /> Upload
                                        Photo
                                      </span>
                                      <input
                                        type="file"
                                        name="photo"
                                        className="upload"
                                      />
                                    </div>
                                    <small className="form-text text-muted">
                                      {/* Allowed JPG, GIF or PNG. Max size of 2MB */}
                                    </small>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>First Name</label>
                                <input
                                  name="username"
                                  type="text"
                                  className="form-control rounded-md border-gray-300"
                                //   defaultValue={
                                //     val.username ? val.username : ""
                                //   }
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group ">
                                <label>Last Name</label>
                                <input
                                  name="lastName"
                                  type="text"
                                  className="form-control rounded-md border-gray-300"
                                //   defaultValue={
                                //     val.lastName ? val.lastName : ""
                                //   }
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Date of Birth</label>
                                <div className="cal-icon">
                                  <input
                                    type="date"
                                    name="dateOfBirth"
                                    className="form-control datetimepicker rounded-md border-gray-300"
                                    // defaultValue={
                                    //   val.dateOfBirth ? val.dateOfBirth : ""
                                    // }
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Blood Group</label>
                                <select
                                  className="form-control select"
                                  name="bloodGroup"
                                >
                                  <option value="" selected>
                                    {/* {val.bloodGroup ? val.bloodGroup : ""} */}
                                  </option>
                                  <option>A-</option>
                                  <option>A+</option>
                                  <option>B-</option>
                                  <option>B+</option>
                                  <option>AB-</option>
                                  <option>AB+</option>
                                  <option>O-</option>
                                  <option>O+</option>
                                </select>
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Email ID</label>
                                <input
                                  type="email"
                                  className="form-control rounded-md border-gray-300"
                                  name="email"
                                //   defaultValue={val.email ? val.email : ""}
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Mobile</label>
                                <input
                                  type="number"
                                //   defaultValue={val.number ? val.number : ""}
                                  className="form-control rounded-md border-gray-300"
                                  name="number"
                                />
                              </div>
                            </div>
                            <div className="col-12">
                              <div className="form-group">
                                <label>Address</label>
                                <input
                                  type="text"
                                  className="form-control rounded-md border-gray-300"
                                //   defaultValue={val.address ? val.address : ""}
                                  name="address"
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>City</label>
                                <input
                                  type="text"
                                  className="form-control rounded-md border-gray-300"
                                  name="city"
                                //   defaultValue={val.city ? val.city : ""}
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>State</label>
                                <input
                                  type="text"
                                  className="form-control rounded-md border-gray-300"
                                  name="state"
                                //   defaultValue={val.state ? val.state : ""}
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Zip Code</label>
                                <input
                                  type="text"
                                  className="form-control rounded-md border-gray-300"
                                  name="zipCode"
                                //   defaultValue={val.zipCode ? val.zipCode : ""}
                                />
                              </div>
                            </div>
                            <div className="col-12 col-md-6">
                              <div className="form-group">
                                <label>Country</label>
                                <input
                                  type="text"
                                  name="country"
                                  className="form-control rounded-md border-gray-300"
                                //   defaultValue={val.country ? val.country : ""}
                                />
                              </div>
                            </div>
                          </>
            
                    </div>
                    <div className="submit-section mt-4 flex justify-end ">
                      <button
                        type="submit"
                        className="bg-blue-600 text-white p-2 rounded-xl hover:bg-blue-700"
                      >
                        Save Changes
                      </button>
                    </div>
                  </form>
                      {/* /Change Password Form */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
    </>
  )
}

export default Drprofileupdate
