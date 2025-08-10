import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// استيراد ملفات الـCSS الخاصة بـSwiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const CarouselDisplay = () => {
  const images = [
    { url: "https://img.freepik.com/free-psd/black-friday-super-sale-facebook-cover-banner-template_120329-5177.jpg?t=st=1754746479~exp=1754750079~hmac=3be327f53fe447f041b353c32617f190747e6f61a1778a00f0b5bd04ef2b3839&w=1480", alt: "Black Friday Sale" },
    { url: "https://www.freepik.com/free-photo/shopping-concept-close-up-portrait-young-beautiful-attractive-redhair-girl-smiling-looking-camera_33724022.htm#fromView=keyword&page=1&position=0&uuid=e432ddf0-178f-4fc7-b6f7-951af219c1d2&query=E+Commerce+Banner", alt: "E-Commerce Banner" },
    { url: "https://www.vecteezy.com/vector-art/2294859-flash-sale-web-banner-design-e-commerce-online-shopping-header-or-footer-banner", alt: "Flash Sale" },
  ];

  if (images.length === 0) {
    return (
      <div className="relative w-full h-96 bg-gray-200 flex items-center justify-center rounded-lg shadow-lg">
        <p className="text-gray-500 text-lg">No images to display</p>
      </div>
    );
  }

  return (

    <Swiper
      modules={[Pagination, Navigation, Autoplay]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      loop={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      className="mySwiper w-full h-[90vh] mb-[250px] rounded-lg shadow-lg"
    >
      {images.map((image, index) => (
        <SwiperSlide key={index}>
          <img
            src={image.url}
            alt={image.alt || `Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};