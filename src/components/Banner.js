import React, { useState } from "react";
import {
  BsFillArrowLeftCircleFill,
  BsFillArrowRightCircleFill,
} from "react-icons/bs";

const Banner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  // data
  const datas = [
    "https://amazonproone.vercel.app/static/media/img2.bc1bdb910ead16c65197.jpg",
    "https://amazonproone.vercel.app/static/media/img5.aa945e25375bfdee385f.jpg",
    "https://amazonproone.vercel.app/static/media/img3.c80809bb40bee5c34372.jpg",
    "https://amazonproone.vercel.app/static/media/img1.efb3d39101f7ef77d616.jpg",
  ];
  // prev and next
  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1);
  };

  return (
    <div className="w-full h-auto overflow-x-hidden ">
      <div className="w-screen h-[650px] relative">
        <div
          style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
          className="w-[400vw] h-full flex transition-transform duration-1000"
        >
          <img
            src={datas[0]}
            className="w-screen h-full object-cover"
            alt="ImgOne"
            loading="priority"
          />
          <img
            src={datas[1]}
            className="w-screen h-full object-cover"
            alt="ImgTwo"
          />
          <img
            src={datas[2]}
            className="w-screen h-full object-cover"
            alt="ImgThree"
          />
          <img
            src={datas[3]}
            className="w-screen h-full object-cover"
            alt="ImgFour"
          />
        </div>
        {/* icon container */}
        <div className="absolute w-fit left-0 right-0 mx-auto flex gap-8 bottom-44">
          <div
            onClick={prevSlide}
            className="w-14 h-12 border-[1px] rounded-full border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <BsFillArrowLeftCircleFill />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 border-[1px] rounded-full border-gray-700 flex items-center justify-center hover:cursor-pointer hover:bg-gray-700 hover:text-white active:bg-gray-900 duration-300"
          >
            <BsFillArrowRightCircleFill />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
