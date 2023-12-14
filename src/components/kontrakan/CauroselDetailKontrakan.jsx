import React, { useState } from "react";
import { BiSolidChevronLeft, BiSolidChevronRight } from "react-icons/bi";
import { RxDotFilled } from "react-icons/rx";

function CarouselDetailKontrakan() {
  const slides = [
    {
      url: "/kontrakan1.png",
    },
    {
      url: "/kontrakan2.png",
    },
    {
      url: "/kontrakan3.png",
    },
    {
      url: "/kontrakan4.png",
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
    <div className="relative group flex items-center justify-center">
      <div
        style={{ backgroundImage: `url(${slides[currentIndex].url})` }}
        className="w-[1255px] h-[547px] bg-center bg-cover duration-500 rounded-[10px] "
      ></div>
      {/* Left Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-[20px] p-1 bg-black/20 text-white cursor-pointer">
        <BiSolidChevronLeft onClick={prevSlide} size={80} />
      </div>
      {/* Right Arrow */}
      <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-[20px] p-1 bg-black/20 text-white cursor-pointer">
        <BiSolidChevronRight onClick={nextSlide} size={80} />
      </div>
      <div className="flex justify-center bottom-0 py-4 absolute w-full gap-3">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer rounded-full ${
              slideIndex == currentIndex ? "bg-white" : "bg-gray-500"
            }`}
          >
            {/* <RxDotFilled className="text-gray-500" /> */}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CarouselDetailKontrakan;
