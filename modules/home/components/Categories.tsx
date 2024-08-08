"use client";
import Image from "next/image";
import { Category } from "../types";
import Link from "next/link";
import { paths } from "@/routes/paths";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Banner } from "../types";
import Header from "./Header";
import { useRef } from "react";

type IProps = {
  categories: Category[];
};

const Categories: React.FC<IProps> = ({ categories }) => {
  let subb = categories[0].subCategoryList;
  return (
    <section className="explore-section">
      <div className="catgs">
        <div className="categories-cont">
          <h2 className="h2-title">
            اكتشف <span>اقسامنا </span>
          </h2>
          <div className="cat-boxes-cont">
            {categories.map((category) => (
              <Link
                href={paths.getCategory(category.id, category.title)}
                key={category.id}
                className="category"
              >
                <div className="img-cont">
                  <Image
                    src={category.image}
                    width="0"
                    height="0"
                    sizes="100vw"
                    className="w-full object-cover max-h-40 h-40"
                    alt={category.title}
                  />
                </div>
                <h2 className="text-center text-primary mt-1">
                  {category.title}
                </h2>
              </Link>
            ))}

            {/* {subb.map((sub) => (

              <div className="img-cont">
                <img
                  src={sub.image}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full object-cover max-h-40 h-40"
                  alt={sub.title}
                />
              </div>
            ))} */}
          </div>
        </div>
      </div>

      <section className="category-section store-cat">
        <div className="container">
          <div className="category-slider">
            <h2 className="h2-title">
              نماذج <span>الاعلانات</span>
            </h2>
            <Swiper
              spaceBetween={20}
              slidesPerView={4}
              autoplay={{ delay: 5000 }}
              modules={[Autoplay, Navigation, Pagination]}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                991: {
                  slidesPerView: 4,
                },
                768: {
                  slidesPerView: 4,
                },
                540: {
                  slidesPerView: 3,
                },
                100: {
                  slidesPerView: 2,
                },
              }}
            >
              <SwiperSlide>
                <div className="card-cont">
                  <Link href="/categories/2/محركات/subCategory/42/سيارات%20للبيع/ads">
                    <div className="card-img">
                      <img
                        src="https://www.usnews.com/cmsmedia/f5/4b/efa92f4c4dcebb2af996dfc4c01f/2023-lucid-air-1.jpg"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full object-cover max-h-40 h-40"
                      />
                    </div>
                    <div className="card-text">
                      <h4 className="card-name">امريكى</h4>
                      <h3 className="card-title">سيارات</h3>
                      {/* <h3 className="card-price">2300 دك</h3> */}
                      {/* <p className="huge">dddd</p> */}
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-cont">
                  <Link href="/categories/1/عقارات/subCategory/1103/للبيع/ads">
                    <div className="card-img">
                      <img
                        src="https://ibtkarre.com/wp-content/uploads/2023/06/%D8%A7%D9%81%D8%B6%D9%84-%D8%B4%D8%B1%D9%83%D8%A9-%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA-%D9%81%D9%8A-%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9-%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3.jpg"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full object-cover max-h-40 h-40"
                      />
                    </div>
                    <div className="card-text">
                      <h4 className="card-name">عقارات</h4>
                      <h3 className="card-title">فيلا</h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-cont">
                  <Link href="/categories/1/عقارات/subCategory/1103/للبيع/ads">
                    <div className="card-img">
                      <img
                        src="https://vid.alarabiya.net/images/2017/11/29/a6903cc4-0628-4f4e-aca7-63e5989ee177/a6903cc4-0628-4f4e-aca7-63e5989ee177_16x9_1200x676.jpg?width=372&format=jpg"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full object-cover max-h-40 h-40"
                      />
                    </div>
                    <div className="card-text">
                      <h4 className="card-name">عقارات</h4>
                      <h3 className="card-title">شقق</h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-cont">
                  <Link href="/categories/1/عقارات/subCategory/1103/للبيع/ads">
                    <div className="card-img">
                      <img
                        src="https://www.propertyfinder.eg/property/db44a9f5e589f73fe1e34022fa23bbbd/668/452/MODE/81ba8f/5661484-23d35o.jpg?ctr=eg"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full object-cover max-h-40 h-40"
                      />
                    </div>
                    <div className="card-text">
                      <h4 className="card-name">عقارات</h4>
                      <h3 className="card-title">بيت</h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-cont">
                  <Link href="/categories/11/الكترونيات">
                    <div className="card-img">
                      <img
                        src="https://hnsgsfp.imgix.net/9/images/detailed/98/New_Surface_Laptop_Go_3_FRONT.jpg?fit=fill&bg=0FFF&w=1536&h=900&auto=format,compress"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full object-cover max-h-40 h-40"
                      />
                    </div>
                    <div className="card-text">
                      <h4 className="card-name">الكرونيات</h4>
                      <h3 className="card-title">laptop</h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>

              <SwiperSlide>
                <div className="card-cont">
                  <Link href="/categories/11/الكترونيات">
                    <div className="card-img">
                      <img
                        src="https://cdn.mos.cms.futurecdn.net/LekCjjpyVoWeFAJwZ79Tzc-1200-80.jpg"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full object-cover max-h-40 h-40"
                      />
                    </div>
                    <div className="card-text">
                      <h4 className="card-name">الكرونيات</h4>
                      <h3 className="card-title">laptop</h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-cont">
                  <Link href="/categories/9/مقاولات%20وحرف">
                    <div className="card-img">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gKkNW4gEeyuH8R-bozNXCTO8rneGIotxjg&s"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full object-cover max-h-40 h-40"
                      />
                    </div>
                    <div className="card-text">
                      <h4 className="card-name">مقاولات وحرف</h4>
                      <h3 className="card-title">سباك</h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div className="card-cont">
                  <Link href="/categories/12/وظائف/subCategory/1219/وظائف/ads">
                    <div className="card-img">
                      <img
                        src="https://ongineering.com/images/jch-optimize/ng/images_Articles__Aziz_freelance__engineer.webp"
                        width="0"
                        height="0"
                        sizes="100vw"
                        className="w-full object-cover max-h-40 h-40"
                      />
                    </div>
                    <div className="card-text">
                      <h4 className="card-name">وظائف</h4>
                      <h3 className="card-title">وظائف</h3>
                    </div>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Categories;
