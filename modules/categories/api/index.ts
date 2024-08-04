import { url } from "@/config/url";

export const getData = async (id: number) => {
  const res = await fetch(`https://sahlsale.work/api/advertisements/categories?category_id=${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
