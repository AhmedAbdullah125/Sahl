import { useCallback, useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useDebounce from "./useDebounce";

const useSearch = () => {
  const [searchValue, setSearchValue] = useState("");
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

  const handleSearch = (value: string) => {
    setSearchValue(value);
  };

  const debounceValue = useDebounce(searchValue, 1000);

  useEffect(() => {
    if (searchValue) {
      router.push(
        pathname + "?" + createQueryString("searchValue", searchValue)
      );
    } else {
      router.push(pathname + "?" + createQueryString("searchValue", ""));
    }
  }, [debounceValue]);

  useEffect(() => {
    router.replace(pathname + "?" + createQueryString("searchValue", ""));
  }, []);

  return { handleSearch, searchValue };
};

export default useSearch;
