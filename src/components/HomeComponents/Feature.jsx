import React from "react";
import { Link } from "react-router-dom";
import featureImg from "../../Assets/images/feature-img.png";

const Feature = () => {
  return (
    <section className="py-[75px]">
      <div className="max-container mx-auto w-full px-5">
        <div className="flex items-center justify-between flex-col lg:flex-row ">
          <div className="xl:w-[670px]">
            <h2 className="heading">
              Get Virtual Consultaion <br />
              anytime
            </h2>
            <ul className="pl-4">
              <li className="text__para">1.Schedule the appoinment directly</li>
              <li className="text__para">
                2.Search for your doctor here and contact their office
              </li>
              <li className="text__para">
                3.View our physicians who are accepting new patients,use the
                online scheduling tool to select an appointment on time
              </li>
            </ul>
            <Link to="/" className="btn">
              Learn More
            </Link>
          </div>
          <div className="relative z-10 xl:w-[770px] flex justify-center xl:justify-end mt-[50px] lg:mt-0">
            <img src={featureImg} className="w-3/4" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
