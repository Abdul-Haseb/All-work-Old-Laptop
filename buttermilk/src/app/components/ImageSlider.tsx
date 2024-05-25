"use client";
import React, { useEffect, useState } from "react";
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

const ImageSlider = () => {
  const [images, setImages] = useState([]);
  const [activeImg, setActiveImg] = useState(0);

  const handleFetchingImages = async () => {
    try {
      const response = await fetch(
        "https://picsum.photos/v2/list?page=2&limit=10"
      );
      const result = await response.json();

      if (result && result.length > 0) {
        setImages(result);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () =>
    setActiveImg(activeImg === images.length - 1 ? 0 : activeImg + 1);

  const handlePrev = () =>
    setActiveImg(activeImg === 0 ? images.length - 1 : activeImg - 1);

  useEffect(() => {
    handleFetchingImages();
  }, []);

  return (
    <div className="relative px-1 rounded-md shadow-lg">
      <FaAngleLeft
        onClick={handlePrev}
        className="absolute top-1/2 left-5  md:left-10 cursor-pointer hover:scale-110 transition-all duration-200 ease-in bg-white bg-opacity-30 hover:bg-opacity-90 w-12 p-2 h-12 rounded-full text-blue-500"
      />
      <div className="flex h-1/2 ">
        {images && images.length
          ? images.map((imag, index) => (
              <img
                key={imag.id}
                src={imag.download_url}
                className={`${activeImg === index ? "block" : "hidden"} object-cover rounded-md h-screen w-full`}
              />
            ))
          : null}
      </div>
      <FaAngleRight
        onClick={handleNext}
        className="absolute top-1/2 right-5 md:right-10 cursor-pointer hover:scale-110 transition-all duration-200 ease-in bg-white bg-opacity-30 hover:bg-opacity-90 w-12 h-12 p-2 rounded-full text-blue-500"
      />
    </div>
  );
};

export default ImageSlider;
