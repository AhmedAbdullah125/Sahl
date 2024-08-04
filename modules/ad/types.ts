export interface AdImage {
  id: number;
  image: string;
}

export interface Data {
  data: {
    id: number;
    title: string;
    note: string;
    price: string;
    city_id: number | null;
    city_title: string;
    category_id: string;
    category_title: string;
    date: string;
    exp_date: string | null;
    phone: string;
    whats: string;
    user_id: number;
    user_name: string;
    user_image: string;
    model: string;
    views: number;
    cat: string;
    fav: boolean;
    image: string;
    images: AdImage[];
  };
}
