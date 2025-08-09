import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Plus, X, Edit3, Save, Upload } from 'lucide-react';


export const CarouselDisplay = ({  }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

const images = [
  { url: "https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-banner-template_120329-5177.jpg?t=st=1754746479~exp=1754750079~hmac=3be327f53fe447f041b353c32617f190747e6f61a1778a00f0b5bd04ef2b3839&w=1480"  ,alt:"img1"},
  { url: "https://www.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_33724022.htm#fromView=keyword&page=1&position=0&uuid=e432ddf0-178f-4fc7-b6f7-951af219c1d2&query=E+Commerce+Banner" ,alt:"img12"},
  { url: "https://www.vecteezy.com/vector-art/2294859-flash-sale-web-banner-design-e-commerce-online-shopping-header-or-footer-banner"},
];
  // Auto-slide functionality
  useEffect(() => {
    if (images.length === 0) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  if (images.length === 0) {
    return (
      <div className="relative w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg">
        <p className="text-gray-500 text-lg">No images to display</p>
      </div>
    );
  }

  return (
    <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-lg group">
      {/* Images Container */}
      <div 
        className="flex transition-transform duration-500 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div key={index} className="w-full h-full flex-shrink-0">
            <img
              src={image.url}
              alt={image.alt || `Slide ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={goToPrevious}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label="Previous image"
      >
        <ChevronLeft size={24} />
      </button>
      
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-75 text-white p-2 rounded-full transition-all duration-200 opacity-0 group-hover:opacity-100"
        aria-label="Next image"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-200 ${
              index === currentIndex
                ? 'bg-white'
                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};