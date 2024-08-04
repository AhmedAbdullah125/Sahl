import { url } from "@/config/url";

export const getData = async () => {
  const res = await fetch(`https://sahlsale.work/api/advertisements/super_category`);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
