export interface Ad {
  id: number;
  title: string;
  note: string;
  price: string;
  model: string;
  city_id: number | null;
  city_title: string;
  category_id: string;
  category_title: string;
  image: string;
  fav: boolean;
  cat: string;
}

export type Advertisements = {
  count_total: number;
  nextPageUrl: string | null;
  pages: number;
  data_count: number;
  data: Ad[];
};

export interface Data {
  data: {
    banners: Banner[];
    second_banners: Banner[];
    fixed_ads: Ad[];
    advertisements: Advertisements;
  };
}

interface Banner {
  id: number;
  cat_id: number;
  product_id: number;
  views?: number;
  url: string;
  image: string;
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

export interface Filters {
  data: {
    banners: Banner[];
    second_banners: Banner[];
    third_banners: Banner[];
    categories: Category[];
  };
}
