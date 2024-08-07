import { getData } from "@/modules/home/api";
import Carousel from "@/modules/home/components/Carousel";
import { Data } from "@/modules/home/types";
import Categories from "@/modules/home/components/Categories";
import SubCategory from "@/modules/home/components/Categories";
import Title from "@/shared/components/Title";
import Header from "./../modules/home/components/Header";
import products from "./products/page";
import Category from "@/modules/categories/components/Category";
import All from "@/modules/all/components/All";
import Footer from "@/modules/home/components/Footer";
import DownloadApp from "@/modules/home/components/DownloadApp";

const Home = async () => {
  const { data } = (await getData()) as Data;

  return (
    <>
      <Header />
      <div className="bg">
        <div className="container mx-auto px-4">
          {/* <Title links={[{ title: "الاقسام" }]} /> */}
          <Carousel banners={data.banners} />
          <Categories categories={data.categories} />
          {/* <Category category={data.category}/> */}

          {/* <SubCategory categories={data.categories}  /> */}
          {/* <All all={data.all}/>  */}
        </div>
          <DownloadApp />
          <Footer/>
      </div>
    </>
  );
};

export default Home;
