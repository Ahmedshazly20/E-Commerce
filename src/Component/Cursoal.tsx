import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// استيراد ملفات الـCSS الخاصة بـSwiper
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const CarouselDisplay = () => {
  const images = [
    { url: "https://res.cloudinary.com/dpftryij5/image/upload/v1754833015/photocomposition-horizontal-shopping-banner-with-woman-big-smartphone_23-2151201773_tanr5b.jpg", alt: "Black Friday Sale" },
    { url: "https://res.cloudinary.com/dpftryij5/image/upload/v1754832857/laptop_x1qs15_232025.jpg", alt: "E-Commerce Banner" },
    { url: "https://res.cloudinary.com/dpftryij5/image/upload/v1754833015/shopping-online-on-mobile-phone-application-or-website-concept-digital-marketing-promotion-smartphone-as-a-store-3d-illustration-vector_jbxocd.jpg", alt: "Flash Sale" },
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
      className="mySwiper w-full h-[60vh] pt-[10px] mb-[40px] rounded-lg "
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