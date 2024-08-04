export type Banner = {
  cat_id: number;
  id: number;
  image: string;
  product_id: number;
  url: string;
  views: number;
};

export type SubCategory = {
  add_price: string;
  ads: number;
  fix_price: string;
  id: number;
  image: string;
  model: boolean;
  subCategory: number;
  title: string;
};

export type Category = {
  id: number;
  image: string;
  subCategoryList: SubCategory[];
  title: string;
  add_price: string;
  fix_price: string;
  model: boolean;
  address: boolean;
  subCategory: number;
};

export interface Data {
  data: {
    categories: Category[];
    banners: Banner[];
  };
}

