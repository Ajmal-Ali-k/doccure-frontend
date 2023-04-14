import React from "react";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { useState } from "react";
import axios from '../../Axios/Axios'
import {useNavigate} from "react-router-dom"
import {setLogin} from "../../store/slice/adminSlice.js"
import { Spinner } from "flowbite-react";

function AdminLoginComponent() {
 const dispatch = useDispatch();
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false)

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true)
    axios.post('/admin/admin_login',{email,password}).then((res)=>{
      const result = res.data
      if(result.success){
        setLoading(false)
        localStorage.setItem('adminToken',JSON.stringify( result))
        dispatch(setLogin({
          admin:"admin",
          adminEmail:result.adminemail,
          token:result.adminToken
        }))

        message.success('login successfully')
        navigate('/admin/new_doctors')
      }else{
        setLoading(false)
        message.error(result.message)
      }
  
    })
    

  }
  return (
    <div>
      <div class="min-h-screen bg-gray-100 flex flex-col justify-center sm:py-12">
        <div class="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
          <h1 class="font-bold text-center text-2xl mb-5">Doccure</h1>
      
          <div class="bg-white shadow w-full rounded-lg divide-y divide-gray-200">
            <div class="px-5 py-7">
              <label class="font-semibold text-sm text-gray-600 pb-1 block">
                E-mail
              </label>
              <input
                type="text"
                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                onChange={(e)=>setEmail(e.target.value)}
              />
              <label class="font-semibold text-sm text-gray-600 pb-1 block">
                Password
              </label>
              <input
                type="text"
                class="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full"
                onChange={(e)=>setPassword
                (e.target.value)}
              />
              <button
                type="button"
                class="transition duration-200 mb-3 bg-blue-500 hover:bg-blue-600 focus:bg-blue-700 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md font-semibold text-center inline-block"
                onClick={handleSubmit}
              >
                <span class="inline-block mr-2">Login</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  class="w-4 h-4 inline-block"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
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
    </div>
  );
}

export default AdminLoginComponent;
