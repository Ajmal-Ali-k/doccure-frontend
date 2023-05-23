import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getAppoinmentDataApi } from "../../../Api/services/ClientReq";
function BookingSuccess() {
  const [data,setData]= useState("")
const {token} = useSelector(state =>state.clientLogin)
  const {id} = useParams()

 const getdata = async ()=>{
  const response = await getAppoinmentDataApi(id,token)
  if(response.data.success){
    setData(response.data.data)
  }
 }

  useEffect(()=>{
    getdata()

  },[])
  return (

     
        <div className="content success-page-cont ">
          <div className="container-fluid">
            <div className="row justify-content-center  h-screen mt-16">
              <div className="col-lg-6">
                <div className="card success-card">
                  <div className="card-body">
                    <div className="success-cont">
                      {/* <i className="fas fa-check" /> */}
                      <FaCheck className="text-4xl  bg-teal-500 text-white inline-flex justify-center items-center mb-2 rounded-full p-2"/>
                      <h3>Appointment booked Successfully!</h3>
                      <p>
                        Appointment booked with{" "}
                        <strong>Dr.{data?.doctor?.name}</strong>
                        <br /> on <strong>{data?.date} {data?.start} to {data?.end}</strong>
                      </p>
                      <a
                        href="/"
                        className="btn btn-primary view-inv-btn"
                      >
                        Back to home 
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>


  );
}

export default BookingSuccess;
