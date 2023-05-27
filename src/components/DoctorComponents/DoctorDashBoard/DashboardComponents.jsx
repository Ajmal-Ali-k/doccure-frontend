import React, { useEffect, useState } from "react";
import DoctorProfileSidebar from "./DoctorProfileSidebar";
import icon1 from "../../../Assets/icon-01.png";
import icon2 from "../../../Assets/icon-02.png";
import icon3 from "../../../Assets/icon-03.png";
import img from "../../../Assets/blank-profile-picture-g05926a0d9_640.png";
import { useSelector } from "react-redux";
import {
  getTodayAppoiment,
  getUpcomingAppoiment,
} from "../../../Api/services/DoctorReq";
import { useNavigate } from "react-router-dom";

function DashboardComponents() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.doctorLogin);
  const [today, setToday] = useState(false);
  const [upcoming, setUpcoming] = useState(true);
  const [todayData, setTodayData] = useState([]);
  const [upcomingData, setUpcomingData] = useState([]);
  let nowday = new Date();

  const handletoday = () => {
    setToday(true);
    setUpcoming(false);
  };
  const handleUpcoming = () => {
    setUpcoming(true);
    setToday(false);
  };

  const getTodayAppoinments = async () => {
    const response = await getTodayAppoiment(token);
    if (response.data.success) {
      setTodayData(response.data.data);
    } else {
      console.log(response.data);
    }
  };
  useEffect(() => {
    getTodayAppoinments();
  }, [today]);

  const getUpcomingAppoinments = async () => {
    const response = await getUpcomingAppoiment(token);
    if (response.data.success) {
      setUpcomingData(response.data.data);
    } else {
      console.log(response.data);
    }
  };
  useEffect(() => {
    getUpcomingAppoinments();
  }, [upcoming]);
  console.log(todayData, "this is todaydata");
  console.log(upcomingData, "this upcoming dat");
  const handleCall = () => {
    navigate("/doctor/videoCall");
  };
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
              <div className="row">
                <div className="col-md-12">
                  <div className="card dash-card">
                    <div className="card-body">
                      <div className="row">
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget dct-border-rht">
                            <div className="circle-bar circle-bar1">
                              <img
                                src={icon1}
                                className="img-fluid"
                                alt="patient"
                              />
                            </div>
                            <div className="dash-widget-info">
                              <h6>Total Patient</h6>
                              <h3>15</h3>
                              <p className="text-muted">Till Today</p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget dct-border-rht">
                            <div className="circle-bar circle-bar2">
                              <img
                                src={icon2}
                                className="img-fluid"
                                alt="Patient"
                              />
                            </div>
                            <div className="dash-widget-info">
                              <h6>Today Patient</h6>
                              <h3>{todayData.length}</h3>
                              <p className="text-muted">
                                {nowday.toLocaleDateString()}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-12 col-lg-4">
                          <div className="dash-widget">
                            <div className="circle-bar circle-bar3">
                              <img
                                src={icon3}
                                className="img-fluid"
                                alt="Patient"
                              />
                            </div>
                            <div className="dash-widget-info">
                              <h6>Appoinments</h6>
                              <h3>15</h3>
                              <p className="text-muted"></p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-12">
                  <h4 className="mb-4">Patient Appoinment</h4>
                  <div className="appointment-tab">
                    {/* Appointment Tab */}
                    <ul className="nav nav-tabs nav-tabs-solid nav-tabs-rounded space-x-2">
                      <li className=" bg-cyan-500 py-2 px-2 rounded-3xl text-white flex text-sm justify-center items-center text-center cursor-pointer">
                        <div className="" onClick={handleUpcoming}>
                          Upcoming
                        </div>
                      </li>
                      <li className=" cursor-pointer py-2 px-2 bg-cyan-500 rounded-2xl text-white flex text-sm justify-center items-center text-center">
                        <div className="" onClick={handletoday}>
                          Today
                        </div>
                      </li>
                    </ul>
                    {/* /Appointment Tab */}
                    <div className="tab-content">
                      {/* Upcoming Appointment Tab */}
                      {upcoming && upcomingData  ? (
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
                                      <th>Type</th>
                                      <th className="text-center">
                                        Paid Amount
                                      </th>
                                      <th />
                                    </tr>
                                  </thead>
                                  {upcomingData.map((data) => (
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
                                                src={
                                                  data?.user[0]?.photo
                                                    ? data?.user[0]?.photo
                                                    : img
                                                }
                                                alt="Use"
                                              />
                                            </div>
                                            <div>
                                              {data?.user[0]?.username}{" "}
                                              {data?.user[0]?.lastName}{" "}
                                              <span>
                                                #{data?.transactionId.slice(-5)}
                                              </span>
                                            </div>
                                          </h2>
                                        </td>
                                        <td>
                                          {data?.date}
                                          {/* <span className="d-block text-info">
                                          8.00 AM
                                        </span> */}
                                        </td>
                                        <td>
                                          {data?.start}-{data?.end}
                                        </td>
                                        <td>Old Patient</td>
                                        <td className="text-center">
                                          ${data?.consultationFee}
                                        </td>
                                        <td className="text-right">
                                          <div className="table-action">
                                            {/* <div
                                              className="btn btn-sm bg-info-light"
                                              onClick={handleCall}
                                            >
                                              <i className="far fa-eye" /> call
                                            </div> */}
                                            <div className="btn btn-sm bg-success-light">
                                            <i className="fas fa-check" />{" "}
                                            Accept
                                          </div>
                                            <div className="btn btn-sm bg-danger-light">
                                              <i className="fas fa-times" />{" "}
                                              Cancel
                                            </div>
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
                      ) : (
                          ""
                      )}
                      {/* /Upcoming Appointment Tab */}
                      {/* Today Appointment Tab */}
                      {today && todayData ? (
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
                                  {todayData.map((data) => (
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
                                                src={
                                                  data?.user[0]?.photo
                                                    ? data?.user[0]?.photo
                                                    : img
                                                }
                                                alt="Use"
                                              />
                                            </div>
                                            <div>
                                              {data?.user[0]?.username}
                                              {data?.user[0]?.lastName}
                                              <span>
                                                #{data?.transactionId.slice(-5)}
                                              </span>
                                            </div>
                                          </h2>
                                        </td>
                                        <td>
                                          {data?.date}
                                          {/* <span className="d-block text-info">
                                          8.00 AM
                                        </span> */}
                                        </td>
                                        <td>
                                          {data?.start}-{data?.end}
                                        </td>
                                        {data.status === "pending" ? (
                                          <td>
                                            <span className="badge badge-pill bg-warning-light">
                                              Pending
                                            </span>
                                          </td>
                                        ) : (
                                          ""
                                        )}
                                        {data.status === "cancelled" ? (
                                          <td>
                                            <span className="badge badge-pill bg-danger-light">
                                              Cancelled
                                            </span>
                                          </td>
                                        ) : (
                                          ""
                                        )}
                                        {data?.status === "confirmed" ? (
                                          <td>
                                            <span className="badge badge-pill bg-success-light">
                                              Confirm
                                            </span>
                                          </td>
                                        ) : (
                                          ""
                                        )}
                                        {data?.status === "compeleted" ? (
                                          <td>
                                            <span className="badge badge-pill bg-info-light">
                                              Compleated
                                            </span>
                                          </td>
                                        ) : (
                                          ""
                                        )}
                                        <td className="text-center">
                                          ${data?.consultationFee}
                                        </td>
                                        <td className="text-right">
                                          <div className="table-action">
                                          { data?.status === "confirmed" ? 

                                            <div
                                              className="btn btn-sm bg-info-light"
                                              onClick={handleCall}
                                            >
                                              <i className="far fa-eye" /> call
                                            </div> :""
                                          }
                                            <div className="btn btn-sm bg-success-light">
                                              <i className="fas fa-check" />
                                              Accept
                                            </div>
                                            <div className="btn btn-sm bg-danger-light">
                                              <i className="fas fa-times" />
                                              Cancel
                                            </div>
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
                      ) : (
                        ""
                      )}
                      {/* /Today Appointment Tab */}
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

export default DashboardComponents;
