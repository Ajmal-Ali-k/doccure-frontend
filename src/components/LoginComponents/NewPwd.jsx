import React, { useState } from 'react'
import logo from "../../Assets/logo.png";
import { Spinner } from "flowbite-react";
import { Link } from "react-router-dom";
import { NewpwdApi } from '../../Api/services/ClientReq';
import { message } from 'antd';

function NewPwd({mobile}) {
    
    const [newPassword,setNewpassword] =useState('')
    const [confirmPassword,setConfirmPassword] =useState('')
    const [errors,setErrors] =useState('')
    const [loading, setLoading] = useState(false);

    const onSubmit =async ()=>{
        try {
            if(newPassword === confirmPassword) {
                setLoading(true);
                const response = await NewpwdApi(newPassword,mobile);
                if(response.data.success) {
                message.success(response.data.message)
                setLoading(false);
               window.location.reload();
                }else{
                    setLoading(false);
                    setErrors(response.data.message)
                }

            } 
            else{
                setErrors('password not match')
            }
            
        } catch (error) {
            console.log(error)
            
        }

    }
  return (
    <div>
        <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <Link
            href="#"
            className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            <img className="w-18 h-10 mr-2" src={logo} alt="logo" />
          </Link>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Change your password
              </h1>
              <div className="space-y-4 md:space-y-6" >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white "
                  >
                   Enter New Password
                  </label>
                  <input
                    onChange={(event) => setNewpassword(event.target.value)}
                    type="text"
                    name="newPassword"
                    id="newPassword"
                    value={newPassword}
                    onKeyUp={()=>setErrors('')}
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 " 
                    placeholder="Enter new password"
                  />
                  {/* </div>
                {errors.email && (
                  <span className="error text-red-400 text-sm">
                    {" "}
                    {errors.email}
                  </span>
                )}
                <div> */}
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white pt-2"
                  >
                   Confirm password
                  </label>
                  <input
                    onChange={(event) => setConfirmPassword(event.target.value)}
                    value={confirmPassword}
                    onKeyUp={()=>setErrors('')}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Confirm password"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  />
                </div>

    
                {errors && (
                  <span className="error text-red-400 text-sm">
              
                    {errors}
                  </span>
                )}
                <button
                 onClick={onSubmit}
                  className="w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
                {loading && <div className="text-center">
                  <Spinner
                    aria-label="Center-aligned spinner example"
                    size="xl"
                  />
                </div>}

              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default NewPwd