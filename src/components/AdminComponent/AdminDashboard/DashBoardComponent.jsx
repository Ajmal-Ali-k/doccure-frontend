import React, { useEffect, useState } from "react";
import { FaUserAlt,FaUserMd } from "react-icons/fa";
import { AiFillDollarCircle } from "react-icons/ai";
import { BsCalendarCheckFill } from "react-icons/bs";
import { Chart } from "./Chart";
import { PieChart } from "./PieChart";
import { getDashDataApi } from "../../../Api/services/AdminReq";
import { useSelector } from "react-redux";

function DashBoardComponent() {
 const {token} = useSelector(state => state.adminLogin)
  const [data,setData]= useState('')
  const getdata = async ()=>{
    const response = await getDashDataApi(token) 
    if(response.data.success){
      console.log(response)
      setData(response.data)
    }else{
      console.log(response)
    }
  }
  useEffect(()=>{
    getdata()
  },[])
  console.log(data,"this is data")
  return (
    <>
      <div className="grid my-4 pb-10 px-8 mx-4 rounded-3xl bg-gray-100 border-4 border-sky-400">
        <div className="grid grid-cols-12 gap-6">
          <div className="grid grid-cols-12 col-span-12 gap-6 xxl:col-span-9">
            <div className="col-span-12 mt-8">
              <div className="flex items-center h-10 intro-y">
                <h2 className="mr-5 text-3xl font-medium truncate">Dashboard</h2>
              </div>
              <div className="grid grid-cols-12 gap-6 mt-2">
                <a
                  className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                  href="#"
                >
                  <div className="p-5">
                    <div className="flex justify-center">
                 
                      <div className="px-4 py-4 border-4 border-red-400 rounded-full ">
                        <BsCalendarCheckFill className="text-xl text-red-400" />
                      </div>
                 
                    </div>
                    <div className=" w-full flex-1">
                      <div className="flex  flex-col justify-center items-center">
                        <div className="mt-3 text-3xl font-bold leading-8">
                        {data?.count}
                        </div>
                        <div className="mt-1 text-base text-gray-600">
                         Appoinmnets
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                  href="#"
                >
                  <div className="p-5">
                    <div className="flex justify-center">
               
                      <div className="px-4 py-4 border-4 border-yellow-400 rounded-full ">
                        <FaUserAlt className="text-xl text-yellow-400" />
                      </div>
                
                    </div>
                    <div className=" w-full flex-1">
                      <div className="flex flex-col justify-center items-center">
                        <div className="mt-3 text-3xl font-bold leading-8">
                         {data?.patients}
                        </div>
                        <div className="mt-1 text-base text-gray-600">
                         Patients
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                  href="#"
                >
                  <div className="p-5">
                    <div className="flex justify-center">
          
                             <div className="px-4 py-4 border-4 border-sky-600 rounded-full ">
                        <FaUserMd className="text-xl text-sky-600" />
                      </div>
                  
                    </div>
                    <div className=" w-full flex-1">
                      <div className="flex  flex-col justify-center items-center">
                        <div className="mt-3 text-3xl font-bold leading-8">
                          {data?.doctors}
                        </div>
                        <div className="mt-1 text-base text-gray-600">
                          Doctors
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
                <a
                  className="transform  hover:scale-105 transition duration-300 shadow-xl rounded-lg col-span-12 sm:col-span-6 xl:col-span-3 intro-y bg-white"
                  href="#"
                >
                  <div className="p-5">
                    <div className="flex justify-center items-center">
                    <div className="px-4 py-4 border-4 border-green-500 rounded-full ">
                        <AiFillDollarCircle className="text-xl  text-green-500" />
                      </div>
                  
                     
                    </div>
                    <div className=" w-full flex-1">
                      <div className="flex  flex-col justify-center items-center">
                        <div className="mt-3 text-3xl font-bold leading-8">
                        ${data?.totalRevenue}
                        </div>
                        <div className="mt-1 text-base text-gray-600">
                         Revenue
                        </div>
                      </div>
                    </div>
                  </div>
                </a>
              </div>
            </div>
            <div className="col-span-12 mt-5">
              <div className="grid gap-2 grid-cols-1 lg:grid-cols-2">
                <div className="bg-white shadow-lg p-4" id="chartline" >
                  <Chart/>
                  </div>
                <div className="bg-white shadow-lg flex justify-center items-center" id="chartpie"  style={{ height: '312px'}}>
                  <PieChart/>
                  </div>
              </div>
            </div>
           
            
          </div>
        </div>
      </div>
    </>
  );
}

export default DashBoardComponent;
