import Image from "next/image";
import { Category } from "../types";
import Link from "next/link";
import { paths } from "@/routes/paths";

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
    <div className="py-3">
      <h2 className="text-center text-primary  text-3xl">{category.title}</h2>
      <div className="grid gap-4 grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mt-4">
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
            <div className="card rounded-full  overflow-hidden max-h-32 max-w-32 h-32 w-32 sm:max-h-40 sm:max-w-40 sm:h-40 sm:w-40 flex items-center justify-center">
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
            <h3 className="text-center text-black mt-3 md:text-xl text-md">
              {subCategory.title}
            </h3>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
