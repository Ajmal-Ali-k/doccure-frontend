import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { message } from "antd";
import { GrView } from "react-icons/gr";
import axios from "../../Axios/Axios";
function NewDoctorsComponent() {
  const [pendingDoctors, setPendingDoctors] = useState([]);

  function getPendingDoctors() {
    axios.get("/admin/getpendig_doctors").then((response) => {
      console.log(response);
      const result = response.data;
      if (result.success) {
        setPendingDoctors(result.pendingDoctors);

        console.log(
          response.data.pendingDoctors,
          "this is the pending doctors data"
        );
      } else {
        message.error(result.error.message);
      }
    });
  }

  useEffect(() => {
    getPendingDoctors();
    console.log("use effect");
  }, []);

  return (
    <div>
      <>
        <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-regal-blue">
          <div className="space-y-2 col-span-full lg:col-span-1">
            <p className="font-extrabold text-lg text-real-orange">
              New Doctors
            </p>
          </div>
        </fieldset>
        <div className="">
          <div className="min-w-screen flex items-center justify-center bg-gray font-sans overflow-hidden">
            <div className="w-full lg:w-5/6">
              <div className="bg-white shadow-md rounded my-6 overflow-x-scroll scrollbar-hide">
                <table className="min-w-max w-full table-auto">
                  <thead>
                    <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                      {/* <th className="py-3 px-6 text-left">id</th> */}
                      <th className="py-3 px-6 text-left">Client</th>
                      <th className="py-3 px-6 text-center">email</th>
                      <th className="py-3 px-6 text-center">specialized</th>
                      <th className="py-3 px-6 text-center">View</th>
                      <th className="py-3 px-6 text-center">Actions</th>
                    </tr>
                  </thead>
                  {pendingDoctors ? (
                    pendingDoctors.map((val) => {
                      return (
                        <tbody className="text-gray-600 text-sm font-light">
                          <tr className="border-b border-gray-200 hover:bg-gray-100">
                            {/* <td className="py-3 pl-0 text-center whitespace-nowrap">
                        <div className=" text-center">
                          <span className="font-medium "></span>
                        </div>
                      </td> */}
                            <td className="py-3 px-6 text-left">
                              <div className="flex items-center">
                                <div className="mr-2">
                                  <img
                                    className="w-6 h-6 rounded-full"
                                    src="/images/1.jpg"
                                    alt="profile"
                                  />
                                </div>
                                <span className="font-medium">{val.name}</span>
                              </div>
                            </td>
                            <td className="py-3 px-6 text-center whitespace-nowrap">
                              <div className=" text-center">
                                <span className="font-medium ">
                                  {val.email}
                                </span>
                              </div>
                            </td>
                            <td className="py-3 px-6  text-center">
                              <div className="flex items-center justify-center font-medium">
                                {val.specialization}
                              </div>
                            </td>
                            <Link to='/admin/new_doctor_details'> 
                              <td className="py-3 pl-12 lg:pl-16 text-center">
                                <GrView />
                              </td>
                            </Link>

                            <td className="py-3 px-6 text-center">
                              <button className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
                                Approve
                              </button>

                              <button className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
                                reject
                              </button>
                            </td>
                          </tr>
                        </tbody>
                      );
                    })
                  ) : (
                    <div></div>
                  )}
                </table>
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default NewDoctorsComponent;
