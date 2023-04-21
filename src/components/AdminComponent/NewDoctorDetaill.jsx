import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getDocdetails } from "../../Api/services/AdminReq.js";
import { message } from "antd";
import { approveDoc,rejectDoc } from "../../Api/services/AdminReq.js";
function NewDoctorDetaill() {
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.adminLogin);
  const [viewData, setViewData] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const objId = useParams();
  const data = objId.id;
  console.log(data, "tis is the id from riyas");
  console.log("this is the token", token);
  useEffect(() => {
    DoctorDetails();
  }, [refresh]);
  const DoctorDetails = async () => {
    const response = await getDocdetails(data, token);
    console.log("this is response", response);
    if (response.data.success) {
      setViewData([response.data.newDoctor]);
      console.log(response.data.newDoctor, "ghsdhuhfgdugdfggd");
    } else {
      message.error("something went wrong");
    }
  };

  async function handleApprove(id) {
    const response = await approveDoc(id, token);
    if (response.data.success) {
      message.success(response.data.message);
      navigate('/admin/new_doctors')
 
      setRefresh(!refresh);
    } else {
      message.error("some thing went wrong");
  
      setRefresh(!refresh);
    }
  }
  const handlereject = async (id) => {
    const response = await rejectDoc(id, token);
    if (response.data.success) {
      message.success(response.data.message);
      navigate('/admin/new_doctors')
      setRefresh(!refresh);
    } else {
      message.error("some thing went wrong");

      setRefresh(!refresh);
    }
  };
 

  return (
    <>
      <fieldset className="grid grid-cols-4 gap-6 p-6 rounded-md shadow-sm bg-regal-blue  mx-4 ">
        <div className="space-y-2 col-span-full lg:col-span-1">
          {console.log(viewData)}
          <p className="font-extrabold text-lg text-real-orange">
            Doctor details
          </p>
        </div>
      </fieldset>

      <div className="container mx-auto mt-1 p-4">
        <div className="md:flex no-wrap md:-mx-2 ">
          {/* Left Side */}
          <div className="w-full md:w-3/12 md:mx-2">
            {/* Profile Card */}
            {viewData.map((val) => {
              return (
                <div className="bg-white p-3">
                  <div className=" ">
                    <div className="avatar">
                      <div className="w-40 h-40 rounded-full flex items-center overflow-hidden ">
                        <img className="h-fit w-fit" src={val.photo} alt="" />
                      </div>
                    </div>
                  </div>

                  <h1 className="text-gray-900 font-bold text-xl leading-8 my-1">
                    {val.name}
                  </h1>
                  {/* <h3 className="text-gray-600 font-lg text-semibold leading-6">
                {val.specialization}
              </h3> */}
                  {/* <p className="text-sm text-gray-500 hover:text-gray-600 leading-6">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Reprehenderit, eligendi dolorum sequi illum qui unde aspernatur
                non deserunt
              </p> */}
                  <ul className="bg-gray-100 text-gray-600 hover:text-gray-700 hover:shadow py-2 px-3 mt-3 divide-y rounded shadow-sm">
                    <li className="flex items-center py-3">
                      <span>Status</span>
                      <span className="ml-auto">
                        <span className="bg-green-500 py-1 px-2 rounded text-white text-sm">
                          {val.status}
                        </span>
                      </span>
                    </li>
                    {/* <li className="flex items-center py-3">
                  <span>Registration date</span>
                  <span className="ml-auto">{val.createdAt.toeDateString()}</span>
                </li> */}
                  </ul>
                  <div className="py-2 px-3 mt-3 bg-gray-100">
                  <button
                              onClick={() => handleApprove(data)}
                              className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs"
                            >
                              Approve
                            </button>

                            <button
                              onClick={() => handlereject(data)}
                              className="bg-red-200 text-red-600 py-1 px-3 ml-7 rounded-full text-xs"
                            >
                              reject
                            </button>

                  </div>
                </div>
              );
            })}
          </div>
          {viewData.map((val)=>{

            return(
          <div className="w-full md:w-9/12 mx-2 h-64">
            <div className="bg-white p-3 shadow-sm rounded-sm">
              <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                <span clas="text-green-500">
                  <svg
                    className="h-5"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </span>
                <span className="tracking-wide">About</span>
              </div>
              <div className="text-gray-700">
                <div className="grid md:grid-cols-2 text-sm">
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold"> Name</div>
                    <div className="px-4 py-2">{val.name}</div>
                  </div>
                  {/* <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Last Name</div>
                    <div className="px-4 py-2">Doe</div>
                  </div> */}
                  {/* <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Gender</div>
                    <div className="px-4 py-2">Female</div>
                  </div> */}
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Contact No.</div>
                      <div className="px-4 py-2">{val.number}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                       Address
                    </div>
                    <div className="px-4 py-2">
                      {val.address}
                    </div>
                  </div>
                  {/* <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">
                      Permanant Address
                    </div>
                    <div className="px-4 py-2">
                      Arlington Heights, IL, Illinois
                    </div>
                  </div> */}
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Email.</div>
                    <div className="px-4 py-2">
                      <div
                        className="text-gray-700"
                        href=""
                      >
                       {val.email}
                      </div>
                    </div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Department</div>
                    <div className="px-4 py-2">{val.specialization}</div>
                  </div>
                  <div className="grid grid-cols-2">
                    <div className="px-4 py-2 font-semibold">Experience</div>
                    <div className="px-4 py-2">{val.expirience} year</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-4" />
            <div className="bg-white p-3 shadow-sm rounded-sm">
            <div className="   flex items-center overflow-hidden ">
                        <img className="h-fit w-fit" src={val.certificate} alt="" />
                      </div>
              {/* <div className="grid grid-cols-2">
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Experience</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-teal-600">
                        Owner at Her Company Inc.
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div className="text-teal-600">
                        Owner at Her Company Inc.
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div className="text-teal-600">
                        Owner at Her Company Inc.
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div className="text-teal-600">
                        Owner at Her Company Inc.
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                  </ul>
                </div>
                <div>
                  <div className="flex items-center space-x-2 font-semibold text-gray-900 leading-8 mb-3">
                    <span clas="text-green-500">
                      <svg
                        className="h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                        <path
                          fill="#fff"
                          d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                        />
                      </svg>
                    </span>
                    <span className="tracking-wide">Education</span>
                  </div>
                  <ul className="list-inside space-y-2">
                    <li>
                      <div className="text-teal-600">
                        Masters Degree in Oxford
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                    <li>
                      <div className="text-teal-600">
                        Bachelors Degreen in LPU
                      </div>
                      <div className="text-gray-500 text-xs">
                        March 2020 - Now
                      </div>
                    </li>
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
            )
        })}
        </div>
      </div>
    </>
  );
}

export default NewDoctorDetaill;
