import React, { useEffect, useState } from "react";
import "./DoctorCard.css";
import img from "../../Assets/doctor-image.jpg";
import { useSelector } from "react-redux";
import { getDoctors } from "../../Api/services/ClientReq";
import { useNavigate } from "react-router-dom";
import DoctorsFilterCard from "../doctorsListComponent/DoctorsFilterCard"


function DoctorCard() {
  const navigate = useNavigate()
  const { token } = useSelector((state) => state.clientLogin);
  const [selected, setSelected] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const[filterd,setFiltered]=useState([])

  console.log(filterd,'here is doctors');
 
  const getDoc = async () => {
    await getDoctors(token)
      .then((data) => {
        setDoctors(data.data.Doctors);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getDoc();
  }, []);

  const handleClick = () => {
    navigate('/doctor_detail')

  }

  useEffect(()=>{
     const filteredDoctors =[]

    console.log('use effect');


   for (let i = 0; i < doctors.length; i++) {
  
      console.log(6666666666);
      console.log(doctors[i],'haaai');

      for (let j= 0; j< selected.length; j++) {
        console.log( doctors[i].specialization,selected[j]);
        console.log(doctors[i].specialization===selected[j]);
  
        if ( doctors[i].specialization===selected[j]) {
          console.log(12121212121212);
         
         filteredDoctors.push(doctors[i])
         
          setFiltered(filteredDoctors)
        }
        else{
          //  setFiltered([])
        }
      
      }
    }
  
    
   
  },[selected])
  return (
    <>

    <div className="w-full flex">
        <div className="w-1/5  inset-0 md:relative sm:relative lg:relative lg:translate-x-0 ">
          <DoctorsFilterCard selected ={selected} setSelected={setSelected}/>
        </div>

        <div className="w-full ">
  
          {(selected[0]?filterd:doctors).map((val) => {
        return (
      
          <div className="block  w-auto mt-5  p-6 mx-20 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
            <div className="card-body">
              <div className="doctor-widget">
                <div className="doc-info-left">
                  <div className="doctor-img">
                    <div href="doctor-profile.html">

                      <img
                        src={val.photo}
                        className="img-fluid"
                        alt="User Image"
                      />
                    </div>
                  </div>
                  <div className="doc-info-cont">
                    <h4 className="doc-name">
                      <a href="doctor-profile.html">{val.name}</a>
                    </h4>
                    <p className="doc-speciality font-semibold">
                      {val.specialization}
                    </p>
                    {/* <h5 className="doc-department">
                  <img src={img} className="img-fluid" alt="Speciality" />
                  Dentist
                </h5> */}
                    <p className="text-gray-600 font-medium text-xs">
                      consultation fee : <span className="text-md">$20</span>
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
                    <div className="view-pro-btn mb-2" onClick={handleClick}>
                      View Profile
                    </div>
                    <div className="apt-btn " href="booking.html">
                      Book Appoitment
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

     
    </>
  );
}

export default DoctorCard;
