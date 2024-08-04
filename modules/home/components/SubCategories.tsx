import Image from "next/image";
import { Category } from "../types";
import Link from "next/link";
import { paths } from "@/routes/paths";

type IProps = {
    categories: Category[];
};


const SubCategories: React.FC<IProps> = ({ categories }) => {
    console.log("tttttttttttttttt");
    console.log(categories[3].subCategoryList);

    return (
        <div className="categories-cont">
            <h2>اكتشف <span>ddd </span></h2>
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
            </div>
        </div>
    );
};

export default SubCategories;
