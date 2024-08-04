export interface SubCategory {
  id: number;
  title: string;
  image: string;
  add_price: string;
  fix_price: string;
  model: boolean;
  address: boolean;
  subCategory: number;
}

export interface Category {
  id: number;
  title: string;
  image: string;
  add_price: string;
  fix_price: string;
  model: boolean;
  address: boolean;
  subCategory: number;
  subCategoryList: SubCategory[];
}

export interface Data {
  data: {
    banners: any[];
    second_banners: any[];
    third_banners: any[];
    categories: Category[];
  };
}
