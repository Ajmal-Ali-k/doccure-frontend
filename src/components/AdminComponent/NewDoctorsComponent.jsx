import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { message } from "antd";
import { GrView } from "react-icons/gr";
import axios from "../../Axios/Axios";
import { approveDoc, rejectDoc } from "../../Api/services/AdminReq";

import { useSelector } from "react-redux";
import FieldsetComponent from "./FieldsetComponent";


function NewDoctorsComponent() {
  const [pendingDoctors, setPendingDoctors] = useState([]);
  const [refresh, setRefresh] = useState(false);

  const { token } = useSelector((state) => state.adminLogin);

 

  function getPendingDoctors() {
    axios.get("/admin/getpendig_doctors",{
      headers:{Authorization: "Bearer" + token}

    }).then((response) => {


      if (response.data.success) {
        setPendingDoctors(response.data.pendingDoctors);
        setRefresh(!refresh);
        console.log(
          response.data.pendingDoctors,
          "this is the pending doctors data"
        );
      } else {
        message.error(response.data.message);
      }
    });
  }

  useEffect(() => {
    getPendingDoctors();
     // eslint-disable-next-line 
  }, [setRefresh]);


  async function handleApprove(id) {
    const response = await approveDoc(id, token);
    if (response.data.success) {
      message.success(response.data.message);
      getPendingDoctors();
      setRefresh(!refresh);
    } else {
      message.error("some thing went wrong");
      getPendingDoctors();
      setRefresh(!refresh);
    }
  }
  const handlereject = async (id) => {
    const response = await rejectDoc(id, token);
    if (response.data.success) {
      message.success(response.data.message);
      getPendingDoctors();
      setRefresh(!refresh);
    } else {
      message.error("some thing went wrong");
      getPendingDoctors();
      setRefresh(!refresh);
    }
  };

  const navigate = useNavigate();
  const docDetailhandles = (id)=>{
      navigate('/admin/new_doctor_details/'+id)

  }



  return (
    <div>
      <>
     <FieldsetComponent title="New doctors"/>
        <div className="">
          <div className="min-w-screen flex items-center justify-center bg-gray font-sans overflow-hidden">
            <div className="w-full lg:w-6/6 mx-4">
              <div className="bg-white shadow-md rounded my-6 overflow-x-scroll scrollbar-hide">
                {pendingDoctors.length === 0 && (
                  <div>
                    <h1 className="text-gray-600 text-3xl text-center">
                      no pending doctors !!!
                    </h1>
                  </div>
                )}
                {pendingDoctors.length > 0 && (
                  <table className="min-w-max w-full table-auto">
                    <thead>
                      <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                        <th className="py-3 px-6 text-left">Client</th>
                        <th className="py-3 px-6 text-center">email</th>
                        <th className="py-3 px-6 text-center">specialized</th>
                        <th className="py-3 px-6 text-center">View</th>
                        <th className="py-3 px-6 text-center">Actions</th>
                      </tr>
                    </thead>

                    {pendingDoctors.map((val) => (
                      <tbody className="text-gray-600 text-sm font-light">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                          <td className="py-3 px-6 text-left">
                            <div className="flex items-center">
                              <div className="mr-2">
                                <img
                                  className="w-6 h-6 rounded-full"
                                  src={val.photo}
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
                            <div className="flex items-center justify-center font-medium" onClick={()=>docDetailhandles(val._id)}>
                              {/* <Link to="/admin/new_doctor_details">
                                <GrView />
                              </Link> */}
                              <GrView />
                            </div>
                          </td>

                          <td className="py-3 px-6 text-center">
                            <button
                              onClick={() => handleApprove(val._id)}
                              className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs"
                            >
                              Approve
                            </button>

                            <button
                              onClick={() => handlereject(val._id)}
                              className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs"
                            >
                              reject
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    ))}
                  </table>
                )}
              </div>
            </div>
          </div>
        </div>
      </>
    </div>
  );
}

export default NewDoctorsComponent;
