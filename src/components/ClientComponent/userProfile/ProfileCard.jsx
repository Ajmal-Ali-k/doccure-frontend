import React, { useState, useEffect, Suspense, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Avatar from "../../../Assets/blank-profile-picture-g05926a0d9_640.png";
import { getUserDetails } from "../../../Api/services/ClientReq";
import { setLogout } from "../../../store/slice/userSlice";
import { MdDashboard, MdPassword } from "react-icons/md";
import { AiFillMessage, AiFillWallet } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoLogOutSharp } from "react-icons/io5";

function ProfileCard1() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.clientLogin);
  const [datas, setDatas] = useState();
  const [refresh, setRefresh] = useState(false);
  const handlelogout = () => {
    navigate("/login");
    localStorage.removeItem("clientToken");

    dispatch(setLogout());
  };
  const getuser = async () => {
    const result = await getUserDetails(token);
    if (result.data.success) {
      setDatas(result.data.user);
    } else {
      message.error(result.data.message);
    }
  };
  useEffect(() => {
    getuser();
  }, []);

  const sidebarData = [
    {
      path: "/dashboard",
      name: "Dashboard",
      icon: <MdDashboard />,
    },
    {
      path: "/chating",
      name: "Messages",
      icon: <AiFillMessage />,
    },
    {
      path: "/wallet",
      name: "Wallet",
      icon: <AiFillWallet />,
    },
    {
      path: "/update_profile",
      name: "Profile",
      icon: <CgProfile />,
    },
    {
      path: "/change_password",
      name: "Change Password",
      icon: <MdPassword />,
    },
  ];

  return (
    <>
      <div className="col-md-5 col-lg-4 col-xl-3 ">
        <div className="profile-sidebar sticky top-0">
          <div className="widget-profile pro-widget-content">
            <div className="profile-info-widget">
              <div className="booking-doc-img">
                <Suspense fallback={<p>Loading .....</p>}>
                  <img src={datas?.photo ? datas.photo : Avatar} alt="User" />
                </Suspense>
              </div>
              <div className="profile-det-info">
                <h3>
                  {datas?.username} {datas?.lastName}
                </h3>
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

                <li onClick={handlelogout}>
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
      </div>
    </>
  );
}
const ProfileCard = React.memo(ProfileCard1);

export default ProfileCard;
