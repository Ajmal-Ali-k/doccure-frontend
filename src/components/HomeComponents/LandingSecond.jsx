import React from "react";
import doctorImage from "../../Assets/doctor-img2.25a4c44d54b14fcc4ca9.png";
import { Link } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

function LandingSecond() {
  const doctor = false;
  return (
    <div>
      <div className="flex flex-col md:flex-row bg-[#EDF4FE]">
        <div className="w-full   md:w-[50%] p-4">
          <div className=" inset-0 flex items-center justify-center p-4">
            <div className=" mb-5 lg:p-12  ">
              <img src={doctorImage} alt="" />
            </div>
          </div>
        </div>

        <div className="  w-full    md:w-[50%] flex justify-center content-center">
          <div className="lg:p-28 p-10 ">
            <h1 className=" font-serif font-bold text-3xl">
              MEDICO FOR PRIVATE PRACTICES
            </h1>
            <h2 className="mt-4 font-serif  text-3xl">
              Are you a provider interested in
              <br />
              reaching new patients?
            </h2>
            {doctor ? (
              <Link to="/doctor">
                <span className="cursor-pointer  flex justify-center  mt-10 font-semibold text-xl w-52 bg-[#194569] p-2  text-white hover:text-black">
                  List Your Practice
                  <ArrowForwardIcon
                    style={{ marginLeft: "10px", marginTop: "5px" }}
                  />
                </span>
              </Link>
            ) : (
              <Link to="">
                <span className="cursor-pointer  flex justify-center  mt-10 font-semibold text-xl w-52 bg-[#194569] p-2  text-white hover:text-black">
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
      </div>
    </div>
  );
}

export default LandingSecond;
