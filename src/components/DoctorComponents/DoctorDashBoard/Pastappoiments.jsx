import React, { useEffect, useState } from "react";
import DoctorProfileSidebar from "./DoctorProfileSidebar";
import { pastAppoinmentsApi } from "../../../Api/services/DoctorReq";
import { useSelector } from "react-redux";
import img from "../../../Assets/blank-profile-picture-g05926a0d9_640.png";

function Pastappoiments() {
  const {token} = useSelector(state => state.doctorLogin)
  const [data,setData]= useState([])
  const getdata = async ()=>{
    const response = await pastAppoinmentsApi(token)
    if(response.data.success){
      setData(response.data.data)

    }else{
      console.log(response.data.data,"kkkkkkkkkkk")
    }
  }
 useEffect(()=>{
  getdata()
 },[])
 console.log(data)
  return (
    <>
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-5 col-lg-4 col-xl-3 theiaStickySidebar">
              {/* Profile Sidebar */}
              <DoctorProfileSidebar />
              {/* /Profile Sidebar */}
            </div>
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body">
                  <div className="row">
                    <div className="col-md-12 col-lg-12">
                      {/* Change Password Form */}
                      <div className="row">
                        <div className="col-md-12">
                          <h4 className="mb-4 ml-2">Past Appoinments</h4>
                          <div className="appointment-tab">
                            {/* Appointment Tab */}
                            {/* <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded space-x-2">
                              <li className=" bg-cyan-500 py-2 px-2 rounded-3xl text-white flex text-sm justify-center items-center text-center cursor-pointer">
                                <div className="" onClick={""}>
                                  Upcoming
                                </div>
                              </li>
                              <li className=" cursor-pointer py-2 px-2 bg-cyan-500 rounded-2xl text-white flex text-sm justify-center items-center text-center">
                                <div className="" onClick={""}>
                                  Today
                                </div>
                              </li>
                            </ul> */}
                            {/* /Appointment Tab */}
                            <div className="tab-content">
                              {/* Upcoming Appointment Tab */}

                              <div className="tab-pane show active">
                                <div className="card card-table mb-0">
                                  <div className="card-body">
                                    <div className="table-responsive">
                                      <table className="table table-hover table-center mb-0">
                                        <thead>
                                          <tr>
                                            <th>Patient Name</th>
                                            <th>Appt Date</th>
                                            <th>Timing</th>
                                            <th>Status</th>
                                            <th className="text-center">
                                              Paid Amount
                                            </th>
                                            <th />
                                          </tr>
                                        </thead>
                                        {data && data.map((val)=>(

                                     
                                        <tbody>
                                          <tr>
                                            <td>
                                              <h2 className="table-avatar">
                                                <div
                                                  href=""
                                                  className="avatar avatar-sm mr-2"
                                                >
                                                  <img
                                                    className="avatar-img rounded-circle"
                                                    src={val?.user?.photo ?val?.user?.photo: img }
                                                    alt="Use"
                                                  />
                                                </div>
                                             
                                                <div>
                                                {val?.user?.username}
                                                {val?.user?.lastName}
                                                  <span> #{val?.transactionId.slice(-5)}</span>
                                                </div>
                                              </h2>
                                            </td>
                                            <td>
                                              {val?.date}
                                              {/* <span className="d-block text-info">
                                          8.00 AM
                                        </span> */}
                                            </td>
                                            <td>
                                            {val?.start}-{val?.end}
                                            </td>
                                            
                                      
                                            {val.status === "pending" ? (
                                          <td>
                                            <span className="badge badge-pill bg-warning-light">
                                              Pending
                                            </span>
                                          </td>
                                        ) : (
                                          ""
                                        )}
                                        {val.status === "cancelled" ? (
                                          <td>
                                            <span className="badge badge-pill bg-danger-light">
                                              Cancelled
                                            </span>
                                          </td>
                                        ) : (
                                          ""
                                        )}
                                        {val?.status === "confirmed" ? (
                                          <td>
                                            <span className="badge badge-pill bg-success-light">
                                              Confirm
                                            </span>
                                          </td>
                                        ) : (
                                          ""
                                        )}
                                        {val?.status === "compeleted" ? (
                                          <td>
                                            <span className="badge badge-pill bg-info-light">
                                              Compleated
                                            </span>
                                          </td>
                                        ) : (
                                          ""
                                        )}

                                            <td className="text-center">${val?.consultationFee}</td>
                                            <td className="text-right">
                               
                                            </td>
                                          </tr>
                                        </tbody>
                                           ))}
                                      </table>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* /Upcoming Appointment Tab */}
                         
                            </div>
                          </div>
                        </div>
                      </div>

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
  );
}

export default Pastappoiments;
