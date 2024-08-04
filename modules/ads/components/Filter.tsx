"use client";

import { useCallback, useEffect, useState } from "react";
import { Category, SubCategory } from "../types";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useClearQueries from "@/shared/hooks/useClearQueries";

type IProps = {
  filters: Category[];
};

const Filters: React.FC<IProps> = ({ filters }) => {
  const [subCategoryList, setSubCategoryList] = useState<SubCategory[]>([]);
  const [selectedFilter, setSelectedFilter] = useState<string>("");

  const searchParams: any = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const handleSelectFilter = (event: any, isSubCategory: boolean) => {
    let catId = event.target.value;
    if (isSubCategory && event.target.value === "") {
      catId = selectedFilter;
    }

    if (catId) {
      router.push(pathname + "?" + createQueryString("catId", catId));
    } else {
      router.push(pathname + "?" + createQueryString("catId", ""));
    }
  };

  const handleChange = (event: any) => {
    const selected = filters.find(
      (filter) => filter.id === Number(event.target.value)
    );
    handleSelectFilter(event, false);
    if (selected) {
      setSubCategoryList(selected.subCategoryList);
      setSelectedFilter(`${selected.id}`);
    }
  };

  useClearQueries();

  return (
    <div
      className={`grid gap-3 grid-cols-1 ${
        subCategoryList.length ? "lg:grid-cols-2" : "lg:grid-cols-1"
      } mt-3`}
    >
      <div className="w-full">
        <label className="block text-sm font-medium text-black">الصنف</label>
        <select
          onChange={handleChange}
          id="select"
          name="select"
          className="mt-1 block w-full py-2 px-3 rounded-md shadow-sm focus:outline-none text-black"
        >
          <option value="">الكل</option>
          {filters.map((filter) => (
            <option key={filter.id} value={filter.id}>
              {filter.title}
            </option>
          ))}
        </select>
      </div>

      {!!subCategoryList.length && (
        <div className="w-full">
          <label className="block text-sm font-medium text-black">
            الصنف الفرعي
          </label>
          <select
            onChange={(event: any) => handleSelectFilter(event, true)}
            id="select"
            name="select"
            className="mt-1 block w-full py-2 px-3 rounded-md shadow-sm focus:outline-none text-black"
          >
            <option value="">الكل</option>
            {subCategoryList.map((filter) => (
              <option key={filter.id} value={filter.id}>
                {filter.title}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default Filters;
