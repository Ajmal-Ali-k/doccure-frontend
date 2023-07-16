import React, { useEffect, useState } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import img from "../../../Assets/doctor-image.jpg"
import { createChatApi, getDoctorDetail } from "../../../Api/services/ClientReq";
import { useSelector } from "react-redux";
import { message } from "antd";


function DoctorDetailComponent() {
  const { token } = useSelector((state) => state.clientLogin);
  const {clientId} = JSON.parse(localStorage.getItem("clientToken"))

  console.log(clientId,"this is client")
   const [Doctor, setDoctor] = useState([])
   const objId = useParams()
   const data = objId.id;
   const navigate=useNavigate()
   console.log(data,"doctorid")
   const DoctorDetail = async()=> {
    const response = await getDoctorDetail(data,token)
    console.log(response,"ygsddjfhfjihdjfhj")
    if(response.data.success){
      setDoctor([response.data.Doctor])
    }else{
      message.error('something went wrong')

    }
   }
   useEffect(()=>{
    DoctorDetail()
   },[])
   const handlenavigate =()=>{
    navigate('/booking/'+data)
   }
   const handlechat =async()=>{

    const createChat = await createChatApi(clientId,data)
   
   if(createChat.data.success){
        navigate('/chating')
   }
    

   }
  return (
    <>
 
      <main className="profile-page ">
        {/* <section className="relative block h-500-px">
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{
              backgroundImage:
                'url("https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2710&q=80")',
            }}
          >
            <span
              id="blackOverlay"
              className="w-full h-full absolute opacity-50 bg-black"
            />
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
            style={{ transform: "translateZ(0px)" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x={0}
              y={0}
            >
              <polygon
                className="text-blueGray-200 fill-current"
                points="2560 0 2560 100 0 100"
              />
            </svg>
          </div>
        </section> */}
        
        {Doctor.map((val)=>{
          return (
            <section className="relative py-16 bg-blueGray-200">
          <div className="container mx-auto px-4 ">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg ">
              <div className="px-6">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                    <div className="relative">
                      <img
                    
                        src={val.photo}
                        alt="..."
                        //  className="shadow-xl rounded-full align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-150-px"
                        className="rounded-full shadow-xl "
                      />
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                    <div className="py-6 px-3 mt-32 sm:mt-0">
                      <button
                        className="bg-blue-600 active:bg-blue-600 uppercase text-white font-bold hover:shadow-md shadow text-xs pl-14 pr-14 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handlechat}
                      >
                        Connect
                      </button>
                    </div>
                    <div className="px-3  sm:mt-0 te">
                      <button
                        className=" border-blue-600 border-2 active:bg-blue-600 uppercase text-blue  font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={handlenavigate}
                      >
                        Book Appoiment
                      </button>
                    </div>
                  </div>
                  <div className="w-full lg:w-4/12 px-4 lg:order-1">
                    {/* <div className="flex justify-center py-4 lg:pt-4 pt-8">
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          22
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Friends
                        </span>
                      </div>
                      <div className="mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          10
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Photos
                        </span>
                      </div>
                      <div className="lg:mr-4 p-3 text-center">
                        <span className="text-xl font-bold block uppercase tracking-wide text-blueGray-600">
                          89
                        </span>
                        <span className="text-sm text-blueGray-400">
                          Comments
                        </span>
                      </div>
                    </div> */}
                  </div>
                </div>
                <div className="text-center mt-12">
                  <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                  Dr. {val.name}
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                    <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400" />
                    Senior Consultant
                  </div>
                  <div className="mb-2 text-blueGray-600 mt-10">
                    <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400" />
                    Specilization -  {val.specialization}
                  </div>
                  <div className="mb-2 text-blueGray-600">
                    <i className="fas fa-university mr-2 text-lg text-blueGray-400" />
                  consultaion fee - $20
                  </div>
                </div>
                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                  <div className="flex flex-wrap justify-center">
                    <div className="w-full lg:w-9/12 px-4">
                      <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem ratione dolorem quo, maxime commodi eos natus blanditiis porro esse, eligendi fugiat sint rem nesciunt, ex architecto! Iure, iste. Cupiditate, quaerat.
                      </p>
                      {/* <a href="#pablo" className="font-normal text-pink-500">
                        Show more
                      </a> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </section>
            
          )
        })}
        
      </main>

    </>
  );
}

export default DoctorDetailComponent;
