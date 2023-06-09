import React, { useEffect, useState } from "react";
import img from "./../../../Assets/blank-profile-picture-g05926a0d9_640.png";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../../store/slice/doctorSlice";
import { getDocname } from "../../../Api/services/DoctorReq";
function DoctorProfileSidebar() {
  const {token} = useSelector(state => state.doctorLogin )
  const [docname,SetDocname] = useState("")
  const [docimg,setDocimg]= useState("")
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const getname =async ()=>{
    const response = await getDocname(token)
    if(response.data.success) {

      SetDocname(response.data.docname)
      setDocimg(response.data.docimg)
  
  }else{
    console.log("something went wrong")
  }
}
  useEffect(()=>{
    getname()

  },[])

  const handleLogout = () => {
    navigate("/doctor/doctor_login");
    localStorage.removeItem("doctorToken");
    dispatch(setLogout());
  };
  return (
    <>
      <div className="profile-sidebar">
        <div className="widget-profile pro-widget-content">
          <div className="profile-info-widget">
            <Link className="booking-doc-img">
              <img src={docimg ?docimg : img} alt="User" />
            </Link>
            <div className="">
              <h3>Dr.{docname}</h3>
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
                <Link to="/doctor/dashboard">
                  <i className="fas fa-columns" />
                  <span>Dashboard</span>
                </Link>
              </li>
              <li>
                <Link to="/doctor/appoinments">
                  <i className="fas fa-calendar-check" />
                  <span>Appointments</span>
                </Link>
              </li>
              {/* <li>
                <Link href="">
                  <i className="fas fa-user-injured" />
                  <span>My Patients</span>
                </Link>
              </li> */}
              <li className="">
                <Link to="/doctor/schedule_timing">
                  <i className="fas fa-hourglass-start" />
                  <span>Schedule Timings</span>
                </Link>
              </li>

              <li>
                <Link to="/chating">
                  <i className="fas fa-comments" />
                  <span>Message</span>
                  {/* <small className="unread-msg">23</small> */}
                </Link>
              </li>
              {/* <li>
                <Link to={'/doctor/profile_setting'}>
                  <i className="fas fa-user-cog" />
                  <span>Profile Settings</span>
                </Link>
              </li> */}

              <li>
                <Link to="/doctor/change_password">
                  <i className="fas fa-lock" />
                  <span>Change Password</span>
                </Link>
              </li>
              <li onClick={handleLogout}>
                <Link>
                  <i className="fas fa-sign-out-alt" />
                  <span>Logout</span>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}

export default DoctorProfileSidebar;
