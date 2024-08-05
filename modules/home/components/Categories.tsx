"use client";
import Image from "next/image";
import { Category } from "../types";
import Link from "next/link";
import { paths } from "@/routes/paths";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { Banner } from "../types";
import Header from "./Header";
import { useRef } from "react";

type IProps = {
  categories: Category[];
};

const Categories: React.FC<IProps> = ({ categories }) => {
  // console.log("22222222222");
  // console.log(categories[0]);
  let subb = categories[0].subCategoryList;
  return (
    <>
      <div className="catgs">
        <div className="categories-cont">
          <h2 className="h2-title">اكتشف <span>اقسامنا </span></h2>
          <div className="cat-boxes-cont">
            {categories.map((category) => (

              <Link href={paths.getCategory(category.id, category.title)} key={category.id} className="category">
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
                <h2 className="text-center text-primary mt-1">{category.title}</h2>
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
          <h2 className="h2-title">نماذج <span>الاعلانات</span></h2>
            <Swiper
              spaceBetween={50}
              slidesPerView={8}
              autoplay={{ delay: 5000 }}
              modules={[Autoplay, Pagination]}
              pagination={{ clickable: true }}
              navigation={true}
              breakpoints={{
                991: {
                    slidesPerView: 8,
                },
                768: {
                    slidesPerView: 6,
                },
                540: {
                    slidesPerView: 4,
                },
                100: {
                    slidesPerView: 2,
                },
            }}
            >

              <SwiperSlide >
                <div className="brand">
                  <Link href="/categories/2/محركات/subCategory/42/سيارات%20للبيع/ads" className="category-ancor">
                    <figure className="category-figure">
                      <img className="category-img img-fluid" alt="image1" src="https://www.usnews.com/cmsmedia/f5/4b/efa92f4c4dcebb2af996dfc4c01f/2023-lucid-air-1.jpg" />
                    </figure>
                    <span>سياره ماكلارين </span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="brand">
                  <Link href="/categories/2/محركات/subCategory/42/سيارات%20للبيع/ads" className="category-ancor">
                    <figure className="category-figure">
                      <img className="category-img img-fluid" alt="image1" src="https://imgd.aeplcdn.com/370x208/n/cw/ec/130591/fronx-exterior-right-front-three-quarter-109.jpeg?isig=0&q=80" />
                    </figure>
                    <span>سياره سوزوكى</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="brand">
                  <Link href="/categories/2/محركات/subCategory/42/سيارات%20للبيع/ads" className="category-ancor">
                    <figure className="category-figure">
                      <img className="category-img img-fluid" alt="image1" src="https://stimg.cardekho.com/images/carexteriorimages/630x420/Renault/KWID/10076/1717586320303/front-left-side-47.jpg?impolicy=resize&imwidth=480" />
                    </figure>
                    <span>رينوووو</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="brand">
                  <Link href="/categories/1/عقارات/subCategory/1103/للبيع/ads" className="category-ancor">
                    <figure className="category-figure">
                      <img className="category-img img-fluid" alt="image1" src="https://ibtkarre.com/wp-content/uploads/2023/06/%D8%A7%D9%81%D8%B6%D9%84-%D8%B4%D8%B1%D9%83%D8%A9-%D8%B9%D9%82%D8%A7%D8%B1%D8%A7%D8%AA-%D9%81%D9%8A-%D8%A7%D9%84%D8%AA%D8%AC%D9%85%D8%B9-%D8%A7%D9%84%D8%AE%D8%A7%D9%85%D8%B3.jpg" />
                    </figure>
                    <span>فيلا</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="brand">
                  <Link href="/categories/1/عقارات/subCategory/1103/للبيع/ads" className="category-ancor">
                    <figure className="category-figure">
                      <img className="category-img img-fluid" alt="image1" src="https://vid.alarabiya.net/images/2017/11/29/a6903cc4-0628-4f4e-aca7-63e5989ee177/a6903cc4-0628-4f4e-aca7-63e5989ee177_16x9_1200x676.jpg?width=372&format=jpg" />
                    </figure>
                    <span>شقق</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="brand">
                  <Link href="/categories/1/عقارات/subCategory/1103/للبيع/ads" className="category-ancor">
                    <figure className="category-figure">
                      <img className="category-img img-fluid" alt="image1" src="https://www.propertyfinder.eg/property/db44a9f5e589f73fe1e34022fa23bbbd/668/452/MODE/81ba8f/5661484-23d35o.jpg?ctr=eg" />
                    </figure>
                    <span>بيت</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="brand">
                  <Link href="/categories/11/الكترونيات" className="category-ancor">
                    <figure className="category-figure">
                      <img className="category-img img-fluid" alt="image1" src="https://m.media-amazon.com/images/I/314Rp+8XKWL._AC_SR300,300.jpg" />
                    </figure>
                    <span>ايفون</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="brand">
                  <Link href="/categories/11/الكترونيات" className="category-ancor">
                    <figure className="category-figure">
                      <img className="category-img img-fluid" alt="image1" src="https://hnsgsfp.imgix.net/9/images/detailed/98/New_Surface_Laptop_Go_3_FRONT.jpg?fit=fill&bg=0FFF&w=1536&h=900&auto=format,compress" />
                    </figure>
                    <span>laptop</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="brand">
                  <Link href="/categories/11/الكترونيات" className="category-ancor">
                    <figure className="category-figure">
                      <img className="category-img img-fluid" alt="image1" src="https://cdn.mos.cms.futurecdn.net/LekCjjpyVoWeFAJwZ79Tzc-1200-80.jpg" />
                    </figure>
                    <span>laptop</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="brand">
                  <Link href="/categories/9/مقاولات%20وحرف" className="category-ancor">
                    <figure className="category-figure">
                      <img className="category-img img-fluid" alt="image1" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2gKkNW4gEeyuH8R-bozNXCTO8rneGIotxjg&s" />
                    </figure>
                    <span>سباك</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="brand">
                  <Link href="/categories/12/وظائف" className="category-ancor">
                    <figure className="category-figure">
                      <img className="category-img img-fluid" alt="image1" src="https://ongineering.com/images/jch-optimize/ng/images_Articles__Aziz_freelance__engineer.webp" />
                    </figure>
                    <span>مهندس</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="brand">
                  <Link href="/categories/12/وظائف" className="category-ancor">
                    <figure className="category-figure">
                      <img className="category-img img-fluid" alt="image1" src="https://cdn.altibbi.com/cdn/cache/1000x500/image/2020/03/17/9f40f119864f12b73a8d24a2f94ac454.png.webp" />
                    </figure>
                    <span>طبيب</span>
                  </Link>
                </div>
              </SwiperSlide>
              <SwiperSlide >
                <div className="brand">
                  <Link href="/categories/12/وظائف" className="category-ancor">
                    <figure className="category-figure">
                      <img className="category-img img-fluid" alt="image1" src="https://png.pngtree.com/png-clipart/20231006/original/pngtree-arabic-language-teacher-png-image_13127584.png" />
                    </figure>
                    <span>مدرس</span>
                  </Link>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </section>
      {/* <div className='sahl-footer'>
        <div className="container footer-cont">
          <div className='sahl-info'>
            <img src="https://sahl.sa/wp-content/uploads/2023/10/logo.png" alt="logo" />
            <p>دائما مسرورين لخدمتك</p>
            <span>المنصة رقم 1 للإعلانات المبوبة في مصر بقت دوبيزل ، تقدر تبيع،تشتري وتلاقي كل اللي محتاجه. أحسن مكان علشان تشتري بيتك، تبيع عربيتك، أو تلاقي وظيقة في مصر هو دوبيزل. تواصل مع المالك مباشرة. أكتر من مليون إعلان. خيارات كتيرة.</span>
            <div className="social">
              <Link href="https://www.instagram.com/topest/?igsh=djhmaGJzZmIwOG1p"><i className="fa-brands fa-facebook"></i></Link>
              <Link href="https://www.instagram.com/q8h8/?igsh=NjltOHFlamQxMzZ1"><i className="fa-brands fa-instagram"></i></Link>
              <Link href="https://wa.me/96551481099"><i className="fa-brands fa-whatsapp"></i></Link>
            </div>
          </div>
          <div className="footer-categs">
            <div className="categs-cont">
              <h3>التصنيفات</h3>
              <div className="categs-items">
                {categories.map((category) => (
                  <Link href={paths.getCategory(category.id, category.title)}>{category.title}</Link>
                ))}
              </div>
            </div>
            <div className="footer-account">
              <h3>حسابى</h3>

              <div className="categs-items">
                <Link href="/account">معلومات الحساب</Link>
                <Link href="/account">قائمتى</Link>
                <Link href="/account">الاعلانات المفضله</Link>
                <Link href="/account">مدفوعاتى</Link>
                <Link href="/account">المتابعون</Link>
              </div>
            </div>
            <div className="footer-account">
              <h3>معلومات</h3>

              <div className="categs-items">
                <Link href="/account">عنا</Link>
                <Link href="/account">الشروط والأحكام</Link>
                <Link href="/account">سياسة ملف التعريف</Link>
                <Link href="/account">المدونة</Link>
              </div>
            </div>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default Categories;
