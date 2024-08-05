import { getData, getFilters } from "@/modules/ads/api";
import { Data, Filters } from "@/modules/ads/types";
import AdCard from "@/modules/ads/components/AdCard";
import SearchInput from "@/shared/components/SearchInput";
import SelectFilters from "@/modules/ads/components/Filter";
import Pagination from "@/shared/components/Pagination";
import Title from "@/shared/components/Title";
import { paths } from "@/routes/paths";
import { Metadata } from "next";
import DateFilter from "@/modules/ads/components/DateFilter";
import Header from "@/modules/home/components/Header";
import Footer from "@/modules/home/components/Footer";

interface IParams {
  params: {
    categoryId: number;
    categoryName: string;
    subCategoryId: number;
    subCategoryName: string;
  };
  searchParams: any;
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const title = decodeURIComponent(params.subCategoryName);

  return {
    title: `سهل سيل: أفضل موقع لعرض وبيع سيارات في الكويت | تجدد قائمة الاعلانات يوميًا | ${title}`,
    description:
      "ابحث وتصفح العروض المميزة على سهل سيل، أفضل موقع لعرض وشراء السيارات في الكويت. نقدم مجموعة متنوعة من السيارات المعتمدة والموثوقة للبيع، بما في ذلك سيارات مستعملة وجديدة من جميع الموديلات والأنواع. احصل على أفضل صفقات السيارات وفرص الشراء المثالية. قم ببيع سيارتك بسهولة من خلال نشر إعلانك معنا. انضم إلى سهل سيل اليوم واحصل على تجربة تسوق مميزة وموثوقة.",
  };
}

const Ads = async ({ params, searchParams }: IParams) => {
  const search = searchParams.searchValue || "";
  const catId = searchParams.catId || "";
  const selectedPage = searchParams.page || "1";
  const model = searchParams.model || "";

  const { data } = (await getData(
    catId || params.subCategoryId,
    search,
    selectedPage,
    model
  )) as Data;

  const { data: filters } = (await getFilters(params.subCategoryId)) as Filters;

  const title = decodeURIComponent(params.subCategoryName);
  const categoryTitle = decodeURIComponent(params.categoryName);
  return (
    <>
    <Header/>
    <div className="bg pb-4">
      <div className="container mx-auto px-4 min-h-screen">
        
        <Title
          links={[
            { title: "الاقسام", path: paths.home },
            {
              title: categoryTitle,
              path: paths.getCategory(params.categoryId, params.categoryName),
            },
            { title },
          ]}
        />

        <SearchInput />

        <SelectFilters filters={filters.categories} />

        <DateFilter catId={catId} />

        {data.fixed_ads.length === 0 &&
        data.advertisements.data.length === 0 ? (
          <div className="flex items-center justify-center h-64">
            <p className="text-primary text-center text-2xl">لا يوجد اعلانات</p>
          </div>
        ) : (
          <>
            <div className="grid gap-3 grid-cols-2 lg:grid-cols-6 mt-3">
              {data.fixed_ads.map((ad) => (
                <AdCard
                  isPinned
                  ad={ad}
                  key={ad.id}
                  superCategoryId={params.categoryId}
                  superCategoryName={params.categoryName}
                  subCategoryId={params.subCategoryId}
                  subCategoryName={params.subCategoryName}
                />
              ))}
              {data.advertisements.data.map((ad) => (
                <AdCard
                  ad={ad}
                  key={ad.id}
                  superCategoryId={params.categoryId}
                  superCategoryName={params.categoryName}
                  subCategoryId={params.subCategoryId}
                  subCategoryName={params.subCategoryName}
                />
              ))}
            </div>
            <Pagination
              pages={data.advertisements.pages}
              selectedPage={selectedPage}
            />
          </>
        )}
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Ads;
