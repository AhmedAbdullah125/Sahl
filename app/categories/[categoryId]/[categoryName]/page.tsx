import { getData } from "@/modules/categories/api";
import { Data } from "@/modules/categories/types";
import Category from "@/modules/categories/components/Category";
import { paths } from "@/routes/paths";
import Title from "@/shared/components/Title";
import { Metadata } from "next";

interface IParams {
  params: { categoryId: number; categoryName: string };
}

export async function generateMetadata({ params }: IParams): Promise<Metadata> {
  const title = decodeURIComponent(params.categoryName);

  return {
    title: `سهل سيل: أفضل موقع لعرض وبيع سيارات في الكويت | تجدد قائمة الاعلانات يوميًا | ${title}`,
    description:
      "ابحث وتصفح العروض المميزة على سهل سيل، أفضل موقع لعرض وشراء السيارات في الكويت. نقدم مجموعة متنوعة من السيارات المعتمدة والموثوقة للبيع، بما في ذلك سيارات مستعملة وجديدة من جميع الموديلات والأنواع. احصل على أفضل صفقات السيارات وفرص الشراء المثالية. قم ببيع سيارتك بسهولة من خلال نشر إعلانك معنا. انضم إلى سهل سيل اليوم واحصل على تجربة تسوق مميزة وموثوقة.",
  };
}

const Categories = async ({ params }: IParams) => {
  const { data } = (await getData(params.categoryId)) as Data;
  const title = decodeURIComponent(params.categoryName);

  return (
    <div className="bg">
      <div className="container mx-auto px-4 min-h-screen">
        <Title links={[{ title: "الاقسام", path: paths.home }, { title }]} />
        {data.categories.map((category) => (
          <Category
            category={category}
            key={category.id}
            superCategoryId={params.categoryId}
            superCategoryName={params.categoryName}
          />
        ))}
      </div>
    </div>
  );
};

export default Categories;
