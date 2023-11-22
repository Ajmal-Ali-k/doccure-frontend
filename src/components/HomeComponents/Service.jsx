import React from "react";
import { Link } from "react-router-dom";
import { FaChevronRight } from "react-icons/fa";
import heroimg1 from "../../Assets/images/icon01.png";
import heroimg2 from "../../Assets/images/icon02.png";
import heroimg3 from "../../Assets/images/icon03.png";

const Service = () => {
  return (
    <section className="max-container w-full px-5 mx-auto py-[75px]">
      <div className="mx-auto lg:w-[470px]">
        <h2 className="heading text-center">
          Providing the best medical services
        </h2>
        <p className="text__para text-center">
          world class care for everyone.Our health System offers unmatched,
          expert health care.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-[30px] mt-[30px] ">
        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={heroimg1} alt="" />
          </div>
          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Find a Doctor
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] text-center">
              world class health care for everyone.our health System offers
              unmatched ,expert health care. From the lab to the clinic.
            </p>
            <Link
              to="/doctors"
              className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
              <FaChevronRight className="group-hover:text-white w-6 h-5" />
            </Link>
          </div>
        </div>
        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={heroimg2} alt="" />
          </div>
          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Find a Location
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] text-center">
              world class health care for everyone.our health System offers
              unmatched ,expert health care. From the lab to the clinic.
            </p>
            <Link
              to="/doctors"
              className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
              <FaChevronRight className="group-hover:text-white w-6 h-5" />
            </Link>
          </div>
        </div>
        <div className="py-[30px] px-5">
          <div className="flex items-center justify-center">
            <img src={heroimg3} alt="" />
          </div>
          <div className="mt-[30px]">
            <h2 className="text-[26px] leading-9 text-headingColor font-[700] text-center">
              Book Appoinment
            </h2>
            <p className="text-[16px] leading-7 text-textColor font-[400] text-center">
              world class health care for everyone.our health System offers
              unmatched ,expert health care. From the lab to the clinic.
            </p>
            <Link
              to="/doctors"
              className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E] mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
              <FaChevronRight className="group-hover:text-white w-6 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service;
