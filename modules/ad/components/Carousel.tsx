"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
import { AdImage } from "../types";

type IProps = {
  images: AdImage[];
};

const Carousel: React.FC<IProps> = ({ images }) => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      autoplay={{ delay: 3000 }}
      modules={[Autoplay, Pagination]}
      pagination={{ clickable: true }}
    >
      {images.map((img) => (
        <SwiperSlide key={img.id}>
          <Image
            src={img.image}
            width="0"
            height="0"
            sizes="100vw"
            className="w-full sm:object-contain object-cover h-80"
            alt="AD"
          />
        </SwiperSlide>
        
      ))}
      
    </Swiper>
  );
};

export default Carousel;
