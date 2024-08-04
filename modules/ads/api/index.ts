import { url } from "@/config/url";

export const getData = async (
  id: string,
  searchValue: string,
  page: string,
  model: string
) => {
  const params = new URLSearchParams();
  params.append("cat_id", id);

  if (!!searchValue) {
    params.append("keyword", searchValue);
  }

  if (!!page) {
    params.append("page", page);
  }

  if (!!model) {
    params.append("model", model);
  }

  const res = await fetch(
    `https://sahlsale.work/api/advertisements/index/all?${params.toString()}`
  );

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};

export const getFilters = async (id: number) => {
  const res = await fetch(`${url}/advertisements/categories?parent_id=${id}`);
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
};
