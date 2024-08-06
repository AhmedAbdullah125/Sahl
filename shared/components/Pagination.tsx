"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import useClearQueries from "../hooks/useClearQueries";

type IProps = {
  pages: number;
  selectedPage: number;
};

const Pagination: React.FC<IProps> = ({ pages, selectedPage }) => {
  const searchParams: any = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();
  useClearQueries();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams);
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  const windowSize = 10; // Number of pages to show in the window
  const currentPage = selectedPage || 1;
  const startPage = Math.max(1, currentPage - Math.floor(windowSize / 2));
  const endPage = Math.min(pages, startPage + windowSize - 1);

  const handleClick = (page: number) => {
    if (page) {
      router.push(pathname + "?" + createQueryString("page", `${page}`));
    } else {
      router.push(pathname + "?" + createQueryString("page", ""));
    }
  };

  return (
    <nav
      aria-label="Page navigation"
      className="flex justify-center rounded-md mt-3"
    >
      <ul className="inline-flex -space-x-px text-sm">
        {Array.from(
          { length: endPage - startPage + 1 },
          (_, i) => i + startPage
        ).map((page, index) => (
          <li key={page}>
            <span
              style={{ cursor: "pointer" }}
              onClick={() => handleClick(page)}
              className={`flex items-center justify-center ${
                index === 0 ? "rounded-lg" : ""
              } ${
                index === endPage - startPage
                  ? "rounded-tl-lg rounded-bl-lg"
                  : ""
              } px-3 h-8 leading-tight ${
                page == currentPage ? "bg-primary text-white " : "bg-white"
              } text-black hover:bg-primary`}
            >
              {page}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
