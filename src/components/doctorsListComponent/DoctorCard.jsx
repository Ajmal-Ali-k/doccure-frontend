import React, { useEffect, useRef, useState } from "react";
import "./DoctorCard.css";
import img from "../../Assets/doctor-image.jpg";
import { useSelector } from "react-redux";
import { getDoctors } from "../../Api/services/ClientReq";
import { useNavigate } from "react-router-dom";
import DoctorsFilterCard from "../doctorsListComponent/DoctorsFilterCard";

function DoctorCard() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.clientLogin);
  const [selected, setSelected] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [doctorlist,setDoctorlist] =useState([]);
  const [filterd, setFiltered] = useState([]);
  const searchInp = useRef()

  console.log(filterd, "here is doctors");

  const getDoc = async () => {
    await getDoctors(token)
      .then((data) => {
        setDoctors(data.data.Doctors);
        setDoctorlist(data.data.Doctors)
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getDoc();
  }, []);

  const handleClick = (id) => {
    navigate("/doctor_detail/" + id);
  };
  const handlenavigate = (id) => {
    navigate("/booking/" + id);
  };

  useEffect(() => {
    const filteredDoctors = [];

    for (let i = 0; i < doctors.length; i++) {
      console.log(6666666666);
      console.log(doctors[i], "haaai");

      for (let j = 0; j < selected.length; j++) {
        console.log(doctors[i].specialization, selected[j]);
        console.log(doctors[i].specialization === selected[j]);

        if (doctors[i].specialization === selected[j]) {
          console.log(12121212121212);

          filteredDoctors.push(doctors[i]);

          setFiltered(filteredDoctors);
        } else {
          //  setFiltered([])
        }
      }
    }
  }, [selected]);
  async function search(){
    const data = searchInp.current.value;
    const regex = new RegExp(`^${data}`, "i");
    const filteredDoctor = doctors?.filter((doctor) => regex.test(doctor.name));
    if(!data){
      setDoctors(doctorlist)
    }else{
      setDoctors(filteredDoctor)
    }
  }
  console.log(doctors,"thhis is doctorsss")

  return (
    <div>
      <div className="mr-20">
        <form className="flex items-end justify-end">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-2/5 mt-6">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <input
              type="text"
              id="simple-search"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search"
              onKeyUp={search}
              ref={searchInp}
            />
          </div>
          <button
            type="submit"
            className="p-2.5 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <span className="sr-only">Search</span>
          </button>
        </form>
      </div>

      <div className="w-full flex">
        <div className="w-1/5  inset-0 md:relative sm:relative lg:relative lg:translate-x-0 ">
          <DoctorsFilterCard selected={selected} setSelected={setSelected} />
        </div>

        <div className="w-full ">
          {(selected[0] ? filterd : doctors).map((val) => {
            return (
              <div className="block  w-auto mt-5  p-6 mx-20 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                <div className="card-body">
                  <div className="doctor-widget">
                    <div className="doc-info-left">
                      <div className="doctor-img">
                        <div href="doctor-profile.html">
                          <img
                            src={val.photo}
                            className="img-fluid h-36 w-28"
                            alt="User Image"
                          />
                        </div>
                      </div>
                      <div className="doc-info-cont">
                        <h4 className="doc-name">
                          <a href="doctor-profile.html">Dr.{val.name}</a>
                        </h4>
                        <p className="doc-speciality font-semibold">
                          {val.specialization}
                        </p>
                        {/* <h5 className="doc-department">
                  <img src={img} className="img-fluid" alt="Speciality" />
                  Dentist
                </h5> */}
                        <p className="text-gray-600 font-medium text-xs">
                          consultation fee :{" "}
                          <span className="text-md">${val?.fee}</span>
                        </p>
                      </div>
                    </div>
                    <div className="doc-info-right">
                      {/* <div className="clini-infos">
            <ul>
              <li><i className="far fa-thumbs-up" /> 98%</li>
              <li><i className="far fa-comment" /> 17 Feedback</li>
              <li><i className="fas fa-map-marker-alt" /> Florida, USA</li>
              <li><i className="far fa-money-bill-alt" /> $300 - $1000 <i className="fas fa-info-circle" data-toggle="tooltip" title="Lorem Ipsum" /> </li>
            </ul>
          </div> */}
                      <div className="clinic-booking">
                        <div
                          className="view-pro-btn mb-2"
                          onClick={() => handleClick(val._id)}
                        >
                          View Profile
                        </div>
                        <div
                          className="apt-btn "
                          href="booking.html"
                          onClick={() => handlenavigate(val._id)}
                        >
                          Book now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
