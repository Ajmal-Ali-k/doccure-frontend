import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { message } from "antd";
import Avatar from "../../../Assets/blank-profile-picture-g05926a0d9_640.png";
import { FaMicrosoft, FaUserCog, FaKey } from "react-icons/fa";
import { FiLogOut } from "react-icons/fi";
import { getUserDetails } from "../../../Api/services/ClientReq";
function ProfileCard() {
  const { token } = useSelector((state) => state.clientLogin);
  const [datas, setDatas] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const getuser = async () => {
    const result = await getUserDetails(token);
    if (result.data.success) {
      setDatas([result.data.user]);
    } else {
      message.error(result.data.message);
    }
  };
  useEffect(() => {
    getuser();
  }, [refresh]);
  return (
    <>
      {datas &&
        datas.map((val) => {
          return (
            <div className="w-1/5 m-10 ">
              <div className="bg-white shadow-xl rounded-lg py-3">
                <div className="photo-wrapper p-2">
                  <img
                    className="w-32 h-32 rounded-full mx-auto"
                    src={ val.photo ? val.photo : Avatar} 
                    alt={val.username}
                  />
                </div>
                <div className="p-2">
                  <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
                  {val.username}{ val.lastName ? val.lastName :'' }
                  </h3>

                  <table className="text-xs my-3 mx-2 ">
                    <tbody>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Phone
                        </td>
                        <td className="px-2 py-2">{val.number}</td>
                      </tr>
                      <tr>
                        <td className="px-2 py-2 text-gray-500 font-semibold">
                          Email
                        </td>
                        <td className="px-2 py-2">{val.email}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div className="mx-4">
                  <nav>
                    <ul className="space-y-4 flex flex-col">
                      <li className="border-y-2 py-2">
                        <Link
                          to="/dashboard"
                          className="flex gap-2 items-center"
                        >
                          <FaMicrosoft />
                          <span className="">Dashboard</span>
                        </Link>
                      </li>
                      <li className="border-y-2 py-2">
                        <Link
                          to="/update_profile"
                          className="flex gap-2 items-center"
                        >
                          <FaUserCog />
                          <span>Update Profile</span>
                        </Link>
                      </li>
                      <li className="border-y-2 py-2">
                        <Link
                          to="/change_password"
                          className="flex gap-2 items-center"
                        >
                          <FaKey />
                          <span>Change Password</span>
                        </Link>
                      </li>
                      <li className="border-y-2 py-2">
                        <Link className="flex gap-2 items-center">
                          <FiLogOut />
                          <span>Log out</span>
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}

export default ProfileCard;
