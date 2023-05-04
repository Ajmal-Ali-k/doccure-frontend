import React from "react";
import { FaMicrosoft, FaUserCog, FaKey } from "react-icons/fa";
import { BsFillCalendar2Fill,BsFillClockFill } from "react-icons/bs";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import Avatar from "../../../Assets/blank-profile-picture-g05926a0d9_640.png"

function DoctorProfileCard() {
  return (
    <>
      <div className="w-1/5 m-10 ">
        <div className="bg-white shadow-xl rounded-lg py-3">
          <div className="photo-wrapper p-2">
            <img
              className="w-32 h-32 rounded-full mx-auto"
              src={Avatar}
              alt="John Doe"
            />
          </div>
          <div className="p-2">
            <h3 className="text-center text-xl text-gray-900 font-medium leading-8">
              Ajmal ali
            </h3>

            <table className="text-xs my-3 mx-2 ">
              <tbody>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Phone
                  </td>
                  <td className="px-2 py-2">75618803811</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">
                    Email
                  </td>
                  <td className="px-2 py-2">ajmalali749@gmail.com</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="mx-4">
            <nav>
              <ul className="space-y-4 flex flex-col">
                <li className="border-y-2 py-2">
                  <Link to="" className="flex gap-2 items-center">
                    <FaMicrosoft />
                    <span className="">Dashboard</span>
                  </Link>
                </li>
                <li className="border-y-2 py-2">
                  <Link to="" className="flex gap-2 items-center">
                  <BsFillCalendar2Fill/>
                    <span className="">Appoinments</span>
                  </Link>
                </li>
                <li className="border-y-2 py-2">
                  <Link to="/doctor/schedule_timing" className="flex gap-2 items-center">
                   <BsFillClockFill/>
                    <span className="">Schedule Timing</span>
                  </Link>
                </li>
                <li className="border-y-2 py-2">
                  <Link
                    to=""
                    className="flex gap-2 items-center"
                  >
                    <FaUserCog />
                    <span>Update Profile</span>
                  </Link>
                </li>
                <li className="border-y-2 py-2">
                  <Link
                    to=""
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
    </>
  );
}

export default DoctorProfileCard;
