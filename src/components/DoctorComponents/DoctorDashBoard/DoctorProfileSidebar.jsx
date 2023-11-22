import React, { useEffect, useState } from "react";
import img from "./../../../Assets/blank-profile-picture-g05926a0d9_640.png";
import { Link, useNavigate,NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setLogout } from "../../../store/slice/doctorSlice";
import { getDocname } from "../../../Api/services/DoctorReq";
import { MdDashboard, MdPassword } from "react-icons/md";
import { AiFillMessage, AiFillWallet } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoLogOutSharp } from "react-icons/io5";
import { IoMdTime } from "react-icons/io";

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
  const sidebarData = [
    {
      path: "/doctor/dashboard",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/doctor/appoinments",
      name: "Appoinments",
      icon: <AiFillWallet />,
    },
    {
      path: "/doctor/schedule_timing",
      name: "Schedule Timing",
      icon: <IoMdTime />,
    },
    {
      path: "/chating",
      name: "Messages",
      icon: <AiFillMessage />,
    },
    {
      path: "/doctor/change_password",
      name: "Change Password",
      icon: <CgProfile />,
    },

  ];
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
              </div>
            </div>
          </div>
        </div>
        <div className="dashboard-widget">
          <nav className="dashboard-menu">
            <ul>
            {sidebarData.map((datas, index) => (
                  <li className="" key={index}>
                    <NavLink
                      to={datas.path}
                      className={(navClass) =>
                        navClass.isActive
                          ? "text-white text-[16px] leading-7 font-[600] bg-gray-300"
                          : "text-gray-500 text-[16px] leading-7 font-[600] hover:text-blue-500"
                      }
                    >
                      <div className="flex gap-x-4 items-center">
                        <div>{datas.icon}</div>
                        <div>{datas.name}</div>
                      </div>
                    </NavLink>
                  </li>
                ))}
            
              <li onClick={handleLogout}>
                  <Link className="text-gray-500 text-[16px] leading-7 font-[600] hover:text-blue-500 flex">
                    <div className="flex gap-x-4 items-center">
                      <div>
                        {" "}
                        <IoLogOutSharp />
                      </div>
                      <div>LogOut</div>
                    </div>
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
