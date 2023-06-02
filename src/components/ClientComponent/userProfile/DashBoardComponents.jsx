import React, { useCallback, useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";
import { useSelector } from "react-redux";
import {
  cancelAppoinmentsApi,
  getAppoinmentsApi,
} from "../../../Api/services/ClientReq";
import { message } from "antd";
import { useSocket } from "../../../Context/SocketProvider";
import { useNavigate, useParams } from "react-router-dom";

function DashBoardComponents() {
  const socket = useSocket()
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.clientLogin);
  const [datas, setDatas] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const email = "client@gmail.com"

  const now = new Date();

  const currentTime = new Date(now.getTime());
  const hours = currentTime.getHours();
  const minutes = currentTime.getMinutes();

  const time =
    hours.toString().padStart(2, "0") +
    ":" +
    minutes.toString().padStart(2, "0");


  const getdata = async () => {
    const response = await getAppoinmentsApi(token);
    if (response.data.success) {
      setDatas(response.data.appointments);
    }
  };

  useEffect(() => {
    getdata();
  }, [refresh]);

  const cancelAppoinment = async (id) => {
    const response = await cancelAppoinmentsApi(id, token);
    if (response.data.success) {
      message.success(response.data.message);
      setRefresh((state) => !state);
    } else {
      message.error(response.data.message);
      setRefresh((state) => !state);
    }
  };
  const handleCancel = (id) => {
    cancelAppoinment(id);
  };

  //handle video call
  const handleCall = useCallback((room) => {
    socket.emit("room:join",{email,room})
  },[email,socket]);
  const handleJoinRoom = useCallback((data)=>{
    const {email,room}=data
 
    navigate(`/doctor/room/${room}`)

  },[])
  useEffect(()=>{
    socket.on('room:join',handleJoinRoom)
    return ()=>{
      socket.off('room:join',handleJoinRoom)
    }
  },[handleJoinRoom, socket])

  return (
    <div>
      {/* Page Content */}
      <div className="content">
        <div className="container-fluid">
          <div className="row">
            {/* Profile Sidebar */}
            <ProfileCard />
            {/* / Profile Sidebar */}
            <div className="col-md-7 col-lg-8 col-xl-9">
              <div className="card">
                <div className="card-body pt-0">
                  {/* Tab Menu */}
                  <nav className="user-tabs mb-4">
                    <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                      <li className="nav-item">
                        <a
                          className="nav-link active"
                          href="#pat_appointments"
                          data-toggle="tab"
                        >
                          Appointments
                        </a>
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
                    <div
                      id="pat_appointments"
                      className="tab-pane fade show active"
                    >
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
                                  <th>Timing</th>
                                  <th>Status</th>
                                  <th />
                                </tr>
                              </thead>
                              {datas &&
                                datas.map((val) => (
                               
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <a
                                            href="doctor-profile.html"
                                            className="avatar avatar-sm mr-2"
                                          >
                                            <img
                                              className="avatar-img rounded-circle"
                                              src={val?.doctor?.photo}
                                              alt="User"
                                            />
                                          </a>
                                          <a href="doctor-profile.html">
                                            Dr.{val?.doctor?.name}
                                            <span>
                                              {val?.doctor?.specialization}
                                            </span>
                                          </a>
                                        </h2>
                                      </td>
                                      <td>
                                        {val?.createdAt.substring(0, 10)}
                                        <span className="d-block text-info"></span>
                                      </td>
                                      <td>{val?.date}</td>
                                      <td>${val?.consultationFee}</td>
                                      <td>
                                        {val?.start} - {val?.end}
                                      </td>
                                      {val?.status === "pending" ? (
                                        <td>
                                          <span className="badge badge-pill bg-warning-light">
                                            Pending
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
                                      {val?.status === "cancelled" ? (
                                        <td>
                                          <span className="badge badge-pill bg-danger-light">
                                            Cancelled
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

                                      <td className="text-right">
                                        <div className="table-action">
                                          {/* <a href="" className="btn btn-sm bg-primary-light">
                                    <i className="fas fa-print" /> Print
                                  </a> */}
                                          {val.status === "pending" && (
                                            <div
                                              className="btn btn-sm bg-danger-light"
                                              onClick={() =>
                                                handleCancel(val._id)
                                              }
                                            >
                                              <i className="far fa-eye" />{" "}
                                              Cancel
                                            </div>
                                          )}
                                          {val?.status === "confirmed" && time > val?.start && time < val?.end ? (
                                            <div
                                              className="btn btn-sm bg-info-light"
                                              onClick={() =>
                                                handleCall(val._id)
                                              }
                                            >
                                              <i className="far fa-eye" /> join
                                            </div>
                                          ) : (
                                            ""
                                          )}
                                        </div>
                                      
                                      </td>
                                    </tr>
                                  </tbody>
                                ))}
                            </table>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* /Appointment Tab */}
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
  );
}

export default DashBoardComponents;
