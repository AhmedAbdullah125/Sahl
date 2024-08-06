import { getData } from "@/modules/ad/api";
import { Data } from "@/modules/ad/types";
import Carousel from "@/modules/ad/components/Carousel";
import { FaWhatsapp } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import Title from "@/shared/components/Title";
import { paths } from "@/routes/paths";
import { Metadata } from "next";
import { removeCountryCode } from "@/shared/utils/removeCountryCode";
import { adjustPrice } from "@/shared/utils/adjustPrice";
import { removeZeros } from "@/shared/utils/removeZeros";
import Header from "@/modules/home/components/Header";
import Footer from "@/modules/home/components/Footer";

interface IParams {
  params: {
    categoryId: number;
    categoryName: string;
    subCategoryId: number;
    subCategoryName: string;
    adId: number;
  };
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const { data } = (await getData(params.adId)) as Data;

  return {
    title: `سهل سيل: أفضل موقع لعرض وبيع سيارات في الكويت | تجدد قائمة الاعلانات يوميًا | ${data.title}`,
    description: data.note,
  };
}

const Ad = async ({ params }: IParams) => {
  const { data } = (await getData(params.adId)) as Data;

  const categoryTitle = decodeURIComponent(params.categoryName);
  const subCategoryTitle = decodeURIComponent(params.subCategoryName);

  return (
    <>
      <Header />
      <div className="bg">

        <div className="container mx-auto px-4">
          <Title
            links={[
              { title: "الاقسام", path: paths.home },
              {
                title: categoryTitle,
                path: paths.getCategory(params.categoryId, params.categoryName),
              },
              {
                title: subCategoryTitle,
                path: paths.getAds(
                  params.categoryId,
                  params.categoryName,
                  params.subCategoryId,
                  params.subCategoryName
                ),
              },
              { title: data.title },
            ]}
          />
          <div className="preview row">
            <div className="swiper-inpreview col-md-6 col-sm-12 col-xs-12">

              <Carousel images={data.images} />
              <div className="detaills">
              <h2 className="h1-inside-review">{data.cat}</h2>
              <h3 className="text-primary text-xl my-2">{adjustPrice(data.price)}</h3>
              <h3 className="text-black text-lg my-2"> نشر بتاريخ: {data.date}</h3>
              </div>
            </div>
            <div className="text col-md-6 col-sm-12 col-xs-12">
              <p className="h1-inside-review">الوصف</p>
              <p className="text-black text-lg py-2">{data.note}</p>
              <div className="flex pb-2">
                {data.whats && (
                  <a
                    target="_blank"
                    href={`https://Wa.me/${removeZeros(data.whats)}`}
                    className="flex w-44 justify-center items-center bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded md:ml-5 ml-2 mt-3"
                  >
                    <FaWhatsapp className="text-xl" />
                    <span className="mr-2">{removeCountryCode(data.whats)}</span>
                  </a>
                )}
                {data.phone && (
                  <a
                    href={`tel:${data.phone}`}
                    className="flex w-44 justify-center items-center bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded mt-3"
                  >
                    <FaPhoneAlt />
                    <span className="mr-2">{removeCountryCode(data.phone)}</span>
                  </a>
                )}
              </div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Ad;
