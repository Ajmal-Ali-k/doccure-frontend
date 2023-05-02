import React, { useEffect, useState } from "react";
import FieldsetComponent from "../FieldsetComponent";
import img from "../../../Assets/blank-profile-picture-g05926a0d9_640.png";
import { useSelector } from "react-redux";
import { getUsersList } from "../../../Api/services/AdminReq";
import BlockModal from "./BlockModal";
import UnBlockModal from "./UnBlockModal";
function UserListComponent() {
  const { token } = useSelector((state) => state.adminLogin);
  const [users, setUsers] = useState([]);
  const [refresh,setRefresh]= useState(false)
  const getUsers = async () => {
    const response = await getUsersList(token);
    if (response.data.success) {
      setUsers(response.data.Users);
    }
  };

  useEffect(() => {
    getUsers();
  }, [refresh]);

  return (
    <div>
      <FieldsetComponent title="Users List" />

      <div className="">
        <div className="min-w-screen flex items-center justify-center bg-gray font-sans overflow-hidden">
          <div className="w-full lg:w-6/6 mx-4">
            <div className="bg-white shadow-md rounded my-6 overflow-x-scroll scrollbar-hide">
              <table className="min-w-max w-full table-auto">
                <thead>
                  <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                    <th className="py-3 px-6 text-left">Client</th>
                    <th className="py-3 px-6 text-center">email</th>
                    <th className="py-3 px-6 text-center">Status</th>
                    <th className="py-3 px-6 text-center">Actions</th>
                  </tr>
                </thead>
                {users &&
                  users.map((val) => {
  
                    return (
                      <tbody className="text-gray-600 text-sm font-light">
                        <tr className="border-b border-gray-200 hover:bg-gray-100">
                          <td className="py-3 px-6 text-left">
                            <div className="flex items-center">
                              <div className="mr-2">
                                <img
                                  className="w-6 h-6 rounded-full"
                                  src={img}
                                  alt="profile"
                                />
                              </div>
                              <span className="font-medium">
                                {val.username}
                              </span>
                            </div>
                          </td>
                          <td className="py-3 px-6 text-center whitespace-nowrap">
                            <div className=" text-center">
                              <span className="font-medium ">{val.email}</span>
                            </div>
                          </td>
                          <td className="py-3 px-6  text-center">
                            <div className="flex items-center justify-center font-medium">
                              {val.block ? (
                                <span class="bg-red-400 text-red-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300">
                                  Blocked
                                </span>
                              ) : (
                                <span class="bg-green-400 text-green-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300">
                                  Active
                                </span>
                              )}
                            </div>
                          </td>

                          <td className="py-3 px-6  text-center">
                            <div className="flex items-center justify-center font-medium">
                            {val.block ? (
                            <UnBlockModal Id={val._id} setRefresh={setRefresh}/>
                            ):(
                               <BlockModal Id= {val._id} setRefresh={setRefresh}/>
                            )}
                            
                            
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserListComponent;
