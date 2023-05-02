import React, { useEffect, useState } from "react";
import FieldsetComponent from "../FieldsetComponent";
import img from "../../../Assets/blank-profile-picture-g05926a0d9_640.png";
import { useSelector } from "react-redux";
import { getDoctorsList } from "../../../Api/services/AdminReq";
function DoctorsListComponent() {
  const [doctors, setDoctors] = useState([]);
  const {token}= useSelector((state)=>state.adminLogin)
  const getDoctors = async () => {
   const response =await getDoctorsList(token)
   console.log(response)
   if(response.data.success){
    setDoctors(response.data.Doctors)
   }
  };
  useEffect(() => {
    getDoctors()
  }, []);
  console.log(doctors,"this is the docotor slist")
  return (
    <div>
      <FieldsetComponent title="Doctors List" />
      <div className="">
        <div className="min-w-screen flex items-center justify-center bg-gray font-sans overflow-hidden">
          <div className="w-full lg:w-6/6 mx-4">
            <div className="bg-white shadow-md rounded my-6 overflow-x-scroll scrollbar-hide">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Doctor</th>
                    <th className="py-3 px-6 text-center">email</th>
                    <th className="py-3 px-6 text-center">specialized</th>
                    <th className="py-3 px-6 text-center">status</th>
                    <th className="py-3 px-6 text-center">Action</th>
                  </tr>
                </thead>
                {doctors && doctors.map((val)=>{
                  return(

               
                <tbody className="text-gray-600 text-sm font-light">
                  <tr className="border-b border-gray-200 hover:bg-gray-100">
                    <td className="py-3 px-6 text-left">
                      <div className="flex items-center">
                        <div className="mr-2">
                          <img
                            className="w-6 h-6 rounded-full"
                            src={val.photo ? val.photo :img}
                            alt="profile"
                          />
                        </div>
                        <span className="font-medium">{val.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6 text-center whitespace-nowrap">
                      <div className=" text-center">
                        <span className="font-medium ">{val.email}</span>
                      </div>
                    </td>
                    <td className="py-3 px-6  text-center">
                      <div className="flex items-center justify-center font-medium">
                       {val.specialization}
                      </div>
                    </td>

                    <td className="py-3 px-6  text-center">
                      <div className="flex items-center justify-center font-medium">
                        <span class="bg-red-400 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                          Blocked
                        </span>
                      </div>
                    </td>

                    <td className="py-3 px-6 text-center">
                      <button className="bg-green-400 text-green-900 py-1 px-3 rounded-full text-xs hover:bg-green-600">
                        Unblock
                      </button>
                    </td>
                  </tr>
                </tbody>
                )
                })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DoctorsListComponent;
