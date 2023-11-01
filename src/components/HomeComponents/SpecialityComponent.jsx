import React, { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";
const SpecialityComponent = () => {
  const slides = [
    {
      name: "Ajmal Ali",
      url: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2620&q=80",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dicta autem quisquam neque molestiae pariatur accusantium ea harum tenetur,",
    },
    {
      name: "munavir",
      url: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dicta autem quisquam neque molestiae pariatur accusantium ea harum tenetur,",
    },
    {
      name: "unais",
      url: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2672&q=80",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dicta autem quisquam neque molestiae pariatur accusantium ea harum tenetur,",
    },

    {
      name: "Kiran",
      url: "https://images.unsplash.com/photo-1512756290469-ec264b7fbf87?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2253&q=80",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dicta autem quisquam neque molestiae pariatur accusantium ea harum tenetur,",
    },
    {
      name: "riyas",
      url: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2671&q=80",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores dicta autem quisquam neque molestiae pariatur accusantium ea harum tenetur,",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };
  return (
    <section className=" flex  max-container">
      <div className="max-w-[1400px] h-[380px] w-full m-auto p-5 relative group ">
        <div className="flex gap-10 h-80  justify-center items-center flex-col md:flex-row">
          <img
            src={slides[currentIndex].url}
            alt="image"
            className="rounded-full w-72 h-72 object-cover"
          />
          <div className="flex flex-col w-2/3">
            <h1 className="t text-2xl font-bold text-gray-900">Testimonials</h1>
            <h2 className="text-4xl font-extrabold text-sky-400">
              What is Our Clients say
            </h2>
            <p className="pt-3">{slides[currentIndex].desc}</p>
          </div>
        </div>
        {/* <div
          style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
          className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
        ></div> */}
        {/* Left Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>
        {/* Right Arrow */}
        <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>
        <div className="flex top-4 justify-center py-2">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className="text-2xl cursor-pointer"
            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialityComponent;
