import { getData } from "@/modules/home/api";
import Carousel from "@/modules/home/components/Carousel";
import { Data } from "@/modules/home/types";
import Categories from "@/modules/home/components/Categories";
import SubCategory from "@/modules/home/components/Categories";
import Title from "@/shared/components/Title";
import Header from './../modules/home/components/Header';
import products from './products/page';
import Category from "@/modules/categories/components/Category";
import All from "@/modules/all/components/All";
import Footer from "@/modules/home/components/Footer";

const Home = async () => {
  const { data } = (await getData()) as Data;
  
  
  return (
    <div className="bg">
      <Header/>
      <div 
      className="container mx-auto px-4 h-screen"
      >
        {/* <Title links={[{ title: "الاقسام" }]} /> */}
        <Carousel banners={data.banners} />
        <Categories categories={data.categories}  />
        {/* <Category category={data.category}/> */}

        {/* <SubCategory categories={data.categories}  /> */}
        {/* <All all={data.all}/>  */}
        
        <Footer></Footer>
        
      </div>
    </div>
  );
};

export default Home;
