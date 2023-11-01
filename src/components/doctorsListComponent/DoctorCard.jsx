import React, { useEffect, useRef, useState } from "react";
import "./DoctorCard.css";
import { useSelector } from "react-redux";
import { getDoctors } from "../../Api/services/ClientReq";
import { useNavigate } from "react-router-dom";
import DoctorsFilterCard from "../doctorsListComponent/DoctorsFilterCard";
import { DoctorShimmer, FilterCardShimmer } from "../common/Shimmer";

function DoctorCard() {
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.clientLogin);
  const [selected, setSelected] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [doctorlist, setDoctorlist] = useState([]);
  const [filterd, setFiltered] = useState([]);
  const searchInp = useRef();

  const getDoc = async () => {
    await getDoctors(token)
      .then((data) => {
        setTimeout(() => {
          setDoctors(data.data.Doctors);
          setDoctorlist(data.data.Doctors);
        }, 500);
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
  async function search() {
    const data = searchInp.current.value;
    const regex = new RegExp(`^${data}`, "i");
    const filteredDoctor = doctors?.filter((doctor) => regex.test(doctor.name));
    if (!data) {
      setDoctors(doctorlist);
    } else {
      setDoctors(filteredDoctor);
    }
  }

  return (
    <>
      <section className="max-container ">
        <form className="flex items-end justify-end  mr-24">
          <label htmlFor="simple-search" className="sr-only">
            Search
          </label>
          <div className="relative w-2/5 mt-6 ">
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
      </section>

      <section className="w-screen flex flex-col lg:flex-row  max-container">
        <div className="lg:w-1/5 w-full   inset-0 md:relative sm:relative lg:relative lg:translate-x-0 mt-12 ">
          {!doctors.length > 0 ? (
            <FilterCardShimmer />
          ) : (
            <DoctorsFilterCard selected={selected} setSelected={setSelected} />
          )}
        </div>

        <div className="w-full mt-12 ">
          {!doctors.length > 0 ? (
            <DoctorShimmer />
          ) : (
            (selected[0] ? filterd : doctors).map((val) => {
              return (
                <div key={val._id} className="mx-auto ">
                  <div className="  min-w-[288px] mx-auto overflow-hidden sm:w-[90%] md:w-[83%]  bg-white mb-3 border border-gray-200  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex flex-col md:flex-row justify-between items-center">
                      <div className="flex-1 flex justify-center items-center flex-col md:flex-row gap-5 p-5">
                        <div className="min-h-36 min-w-28">
                          <img
                            src={val.photo}
                            className="w-28 h-36 object-cover rounded-lg"
                            alt="User Image"
                          />
                        </div>

                        <div className="pt-3">
                          <h4 className="">Dr.{val.name}</h4>
                          <p className="font-semibold">{val.specialization}</p>

                          <p className="text-gray-600 font-medium font-sans text-base leading-none mt-1">
                            consultation fee :
                            <span className="text-sm"> ${val?.fee}</span>
                          </p>
                        </div>
                      </div>
                      <div className="flex-1 flex flex-col items-center md:items-end justify-center p-5">
                        <div
                          className="w-full px-3 py-2 bg-blue-600 hover:bg-blue-800 rounded-lg text-white mb-2 md:w-1/3"
                          onClick={() => handleClick(val._id)}
                        >
                          View Profile
                        </div>
                        <div
                          className="w-full px-3 py-2  border-2 border-blue-600 rounded-lg text-blue hover:bg-blue-600 hover:text-white md:w-1/3"
                          onClick={() => handlenavigate(val._id)}
                        >
                          Book now
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>
      </section>
    </>
  );
}

export default DoctorCard;
