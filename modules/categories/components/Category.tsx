import Image from "next/image";
import { Category } from "../types";
import Link from "next/link";
import { paths } from "@/routes/paths";
import Footer from "./../../home/components/Footer";
import Header from './../../home/components/Header';


type IProps = {
  category: Category;
  superCategoryId: number;
  superCategoryName: string;
};

const Category: React.FC<IProps> = ({
  category,
  superCategoryId,
  superCategoryName,
}) => {
  console.log("66666666666666666666666611111111111111111111");
  console.log(category);


  return (
    <>
    
      <div className="sub-cat">
        {/* <h2 className="text-center text-primary  text-3xl">{category.title}</h2> */}
        <div className="sub-cat-cont">
          {category.subCategoryList.map((subCategory) => (
            <Link
              href={paths.getAds(
                superCategoryId,
                superCategoryName,
                subCategory.id,
                subCategory.title
              )}

              key={subCategory.id}
              className="flex flex-col items-center"
            >
              <div className="card">
                <Image
                  src={subCategory.image}
                  width="0"
                  height="0"
                  sizes="100vw"
                  className="w-full object-cover h-auto"
                  alt={subCategory.title}
                />
              </div>
              {/* <p className="huge">ddddddddddddddddddddddddddddddddd</p> */}
              <h3 className="t-title">
                {subCategory.title}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Category;
