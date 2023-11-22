import React from "react";
import { faqs } from "../../../data/faq";
import FaqItem from "./FaqItem";

const FaqList = () => {

  return (
    <ul className="mt-[38px]">

      {faqs.map((item, index) => (
        <FaqItem items={item} key={index} />
      ))}
    </ul>
  );
};

export default FaqList;
