"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Banner } from "../types";
import Image from "next/image";
import Header from "./Header";

type IProps = {
  banners: Banner[];
};


const Carousel: React.FC<IProps> = ({ banners }) => {
  
  return (
    <section className="banner-section">
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay={{ delay: 5000 }}
        modules={[Navigation, Autoplay, Pagination]}
        pagination={{ clickable: true }}
        navigation={true}
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
      </Swiper>
    </section>
  );
};

export default Carousel;
