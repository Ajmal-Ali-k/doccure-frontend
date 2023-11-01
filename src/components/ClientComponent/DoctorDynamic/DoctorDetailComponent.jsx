import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import img from "../../../Assets/doctor-image.jpg";
import {
  createChatApi,
  getDoctorDetail,
} from "../../../Api/services/ClientReq";
import { useSelector } from "react-redux";
import { message } from "antd";

function DoctorDetailComponent() {
  const { token } = useSelector((state) => state.clientLogin);
  const { clientId } = JSON.parse(localStorage.getItem("clientToken"));

  const [Doctor, setDoctor] = useState([]);
  const objId = useParams();
  const data = objId.id;
  const navigate = useNavigate();

  const DoctorDetail = async () => {
    const response = await getDoctorDetail(data, token);

    if (response.data.success) {
      setDoctor(response.data.Doctor);
    } else {
      message.error("something went wrong");
    }
  };
  useEffect(() => {
    DoctorDetail();
  }, []);
  const handlenavigate = () => {
    navigate("/booking/" + data);
  };
  const handlechat = async () => {
    const createChat = await createChatApi(clientId, data);

    if (createChat.data.success) {
      navigate("/chating");
    }
  };

  return (
    <>
      <div className="mx-auto container w-full max-container p-3  h-screen ">
        <div className="relative flex flex-col min-w-0 break-words bg-white  rounded-lg p-5 border mt-16">
          <div className="flex flex-wrap justify-center bg-gray-100">
            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center p-4">
              <div className="relative">
                <img
                  src={Doctor.photo}
                  alt="..."
                  className="rounded-full shadow-xl object-contain"
                  width={260}
                  height={260}

                />
              </div>
            </div>
            <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center flex flex-col items-center md:justify-center">
              <div className="py-6 px-3 mt-32 sm:mt-0">
                <button
                  className="bg-sky-600 active:bg-sky-600 uppercase text-white font-bold hover:shadow-md shadow text-xs pl-14 pr-14 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handlechat}
                >
                  Connect
                </button>
              </div>
              <div className="px-3  sm:mt-0 ">
                <button
                  className=" border-sky-600 border-2 active:bg-sky-600 uppercase text-blue  font-bold hover:shadow-md shadow text-xs px-8 py-2 rounded outline-none focus:outline-none sm:mr-2 mb-1 ease-linear transition-all duration-150"
                  type="button"
                  onClick={handlenavigate}
                >
                  Book Appoiment
                </button>
              </div>
            </div>
            {/* <div className="w-full lg:w-4/12 px-4 lg:order-1"></div> */}
          </div>

          <div className=" flex flex-col  items-start bg-slate-100">
            <div className="flex ">
              <div className="md:flex-1  md:w-96"></div>

              <div className="flex-1 p-4 md:ml-8">
                <h3 className="text-3xl font-semibold leading-normal  text-blueGray-700">
                  Dr.{Doctor.name}
                </h3>
                <div className="text-sm leading-normal text-gray-500 font-bold uppercase">
                  
                  Senior Consultant
                </div>
                <div className="text-sky-400 text-base  leading-normal my-1 capitalize font-sans font-bold">
                 
                  Specilization - <span className="text-gray-500 leading-3 font-semibold">{Doctor.specialization}</span>
                </div>
                <div className="text-sky-400 text-base  leading-normal my-1 capitalize font-sans font-bold">
                   fee - <span className="text-gray-500 leading-3 font-semibold">$ {Doctor.fee}</span>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
            <div className="flex flex-wrap justify-center">
              <div className="w-full lg:w-9/12 px-4">
                <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quidem ratione dolorem quo, maxime commodi eos natus
                  blanditiis porro esse, eligendi fugiat sint rem nesciunt, ex
                  architecto! Iure, iste. Cupiditate, quaerat.
                </p>
              </div>
            </div>
          </div> */}
        </div>
      </div>
      );
    </>
  );
}

export default DoctorDetailComponent;
