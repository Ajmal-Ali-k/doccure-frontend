import React from "react";
import faqImg from "../../Assets/images/faq-img.png";
import FaqList from "./faq/FaqList";

const Faq = () => {
  return (
    <section className="py-[75px]">
      <div className="flex justify-between gap-[50px] max-container mx-auto px-5 w-full">
        <div className="w-1/2 hidden md:block">
          <img src={faqImg} alt="" />
        </div>
        <div className="w-full md:w-1/2">
          <h2 className="heading">Most questions by our beloved patients</h2>
          <FaqList/>

        </div>
      </div>
    </section>
  );
};

export default Faq;
