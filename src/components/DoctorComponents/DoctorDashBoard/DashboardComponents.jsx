import React, { useState } from "react";
import DoctorProfileSidebar from "./DoctorProfileSidebar";
import icon1 from "../../../Assets/icon-01.png";
import icon2 from "../../../Assets/icon-02.png";
import icon3 from "../../../Assets/icon-03.png";
import img from "../../../Assets/blank-profile-picture-g05926a0d9_640.png";

function DashboardComponents() {
  const [today, setToday] = useState(false);
  const [upcoming, setUpcoming] = useState(true);

  const handletoday = () => {
    setToday(true);
    setUpcoming(false);
  };
  const handleUpcoming = () => {
    setUpcoming(true);
    setToday(false);
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
                              <h3>1500</h3>
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
                              <h3>160</h3>
                              <p className="text-muted">06, Nov 2019</p>
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
                              <h3>85</h3>
                              <p className="text-muted">06, Apr 2019</p>
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
                      {upcoming && (
                        <div className="tab-pane show active">
                          <div className="card card-table mb-0">
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Patient Name</th>
                                      <th>Appt Date</th>
                                      <th>Purpose</th>
                                      <th>Type</th>
                                      <th className="text-center">
                                        Paid Amount
                                      </th>
                                      <th />
                                    </tr>
                                  </thead>
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
                                              src={img}
                                              alt="Use"
                                            />
                                          </div>
                                          <div>
                                            Gina Moore <span>#PT0005</span>
                                          </div>
                                        </h2>
                                      </td>
                                      <td>
                                        27 Oct 2019{" "}
                                        <span className="d-block text-info">
                                          8.00 AM
                                        </span>
                                      </td>
                                      <td>General</td>
                                      <td>Old Patient</td>
                                      <td className="text-center">$250</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <div className="btn btn-sm bg-info-light">
                                            <i className="far fa-eye" /> View
                                          </div>
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
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {/* /Upcoming Appointment Tab */}
                      {/* Today Appointment Tab */}
                      {today && (
                        <div className="tab-pane show active">
                          <div className="card card-table mb-0">
                            <div className="card-body">
                              <div className="table-responsive">
                                <table className="table table-hover table-center mb-0">
                                  <thead>
                                    <tr>
                                      <th>Patient Name</th>
                                      <th>Appt Date</th>
                                      <th>Purpose</th>
                                      <th>Type</th>
                                      <th className="text-center">
                                        Paid Amount
                                      </th>
                                      <th />
                                    </tr>
                                  </thead>
                                  <tbody>
                                    <tr>
                                      <td>
                                        <h2 className="table-avatar">
                                          <div className="avatar avatar-sm mr-2">
                                            <img
                                              className="avatar-img rounded-circle"
                                              src={img}
                                              alt="Use"
                                            />
                                          </div>
                                          <div>
                                            Gina Moore <span>#PT0005</span>
                                          </div>
                                        </h2>
                                      </td>
                                      <td>
                                        27 Oct 2019{" "}
                                        <span className="d-block text-info">
                                          1000
                                        </span>
                                      </td>
                                      <td>General</td>
                                      <td>Old Patient</td>
                                      <td className="text-center">$250</td>
                                      <td className="text-right">
                                        <div className="table-action">
                                          <div className="btn btn-sm bg-info-light">
                                            <i className="far fa-eye" /> View
                                          </div>
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
                                </table>
                              </div>
                            </div>
                          </div>
                        </div>
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
