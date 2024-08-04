"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Banner } from "../types";
import Image from "next/image";
import Header from "./Header";

type IProps = {
  banners: Banner[];
};


const Carousel: React.FC<IProps> = ({ banners }) => {
  
  return (
    <>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
      >
        {banners.map((banner) => (
          <SwiperSlide key={banner.id} >
            <a href={banner.url} target="_blank" className="swiper-img-cont">
              <img
                src={banner.image}
                
                // height="0"
                // sizes="100vw"
                className=""
                // className="w-full sm:object-contain object-cover h-80"
                alt="ad"
              />
            </a>
          </SwiperSlide>
        ))}
        <SwiperSlide>
            <a href="google.com" target="_blank" className="swiper-img-cont">
              <img
                src="https://static.q84sale.com/images/hero_section/Tm3ZTHTDsh1j@original.png"
                
                // height="0"
                // sizes="100vw"
                className=""
                // className="w-full sm:object-contain object-cover h-80"
                alt="ad"
              />
            </a>
          </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Carousel;
