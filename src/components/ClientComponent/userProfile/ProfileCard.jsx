import React, { useState, useEffect, Suspense } from "react";
import { useDispatch, useSelector } from "react-redux";
import { message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "../../../Assets/blank-profile-picture-g05926a0d9_640.png";
import { FaMicrosoft, FaUserCog, FaKey } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { getUserDetails } from "../../../Api/services/ClientReq";
import { setLogout } from "../../../store/slice/userSlice";

function ProfileCard() {
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
  console.log(datas, "thisi s datas from profile");

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
                    {/* <div className="patient-details">
                  <h5>
                    <i className="fas fa-birthday-cake" /> 24 Jul 1983, 38 years
                  </h5>
                  <h5 className="mb-0">
                    <i className="fas fa-map-marker-alt" /> Newyork, USA
                  </h5>
                </div> */}
                  </div>
                </div>
              </div>

          <div className="dashboard-widget">
            <nav className="dashboard-menu">
              <ul>
                <li className="">
                  <Link to="/dashboard">
                    <i className="fas fa-columns" />
                    <span>Dashboard</span>
                  </Link>
                </li>
                {/* <li>
                      <Link to="">
                        <i className="fas fa-bookmark" />
                        <span>Favourites</span>
                      </Link>
                    </li> */}
                <li>
                  <Link to="/chating">
                    <i className="fas fa-comments" />
                    <span>Message</span>
                    {/* <small className="unread-msg">23</small> */}
                  </Link>
                </li>
                <li>
                  <Link to="/update_profile">
                    <i className="fas fa-user-cog" />
                    <span>Profile Settings</span>
                  </Link>
                </li>
                <li>
                  <Link to="/change_password">
                    <i className="fas fa-lock" />
                    <span>Change Password</span>
                  </Link>
                </li>
                <li onClick={handlelogout}>
                  <Link>
                    <i className="fas fa-sign-out-alt" />
                    <span>Logout</span>
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

export default ProfileCard;
