import React from "react";
import doctorImage from "../../Assets/dr-slider.png";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import backgroundImage from "../../Assets/banner-bg.png";
import { useSelector } from "react-redux";

function BannerSecond() {
  const { token } = useSelector((state) => state.doctorLogin);

  return (
    <section id="banner-2" className="flex flex-col md:flex-row max-container">
      <div className="w-full h-full  md:w-[50%] p-4">
        <div className=" inset-0 flex items-center justify-center p-4">
          <div className=" mb-5 lg:p-12  ">
            <img
              src={doctorImage}
              alt=""
              width={432}
              height={510}
              className="object-cover
              "
            />
          </div>
        </div>
      </div>

      <div className="w-full    md:w-[50%] flex justify-center content-center">
        <div className="lg:p-28 p-10 ">
          <h1 className="heading capitalize">
            Doccure For Private Practices
          </h1>
          <h2 className="mt-4 text__para">
            Are you a provider interested in
            <br />
            reaching new patients?
          </h2>
          {token ? (
            <Link to="/doctor/dashboard">
              <span className="cursor-pointer  flex justify-center items-center mt-10 font-semibold text-md w-52 bg-[#194569] p-2  text-white hover:text-black rounded">
                List Your Practice
                <ArrowForwardIcon
                  style={{ marginLeft: "10px", marginTop: "5px" }}
                />
              </span>
            </Link>
          ) : (
            <Link to="/doctor/doctor_signup">
              <span className="cursor-pointer  flex justify-center items-center mt-10 font-semibold text-md w-52 bg-[#194569] p-2  text-white hover:text-black rounded">
                List Your Practice
                <ArrowForwardIcon
                  style={{ marginLeft: "10px", marginTop: "5px" }}
                />
              </span>
            </Link>
          )}
        </div>
      </div>
      {/*  */}
    </section>
  );
}

export default BannerSecond;
