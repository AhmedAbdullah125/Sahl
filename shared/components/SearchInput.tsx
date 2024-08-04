"use client";

import useSearch from "@/shared/hooks/useSearch";
import useClearQueries from "../hooks/useClearQueries";

type IProps = {
  fixed?: boolean;
};

const SearchInput: React.FC<IProps> = ({ fixed }) => {
  const { searchValue, handleSearch } = useSearch();
  useClearQueries();

  return (
    <div className={`flex items-center w-full ${fixed ? "fixed" : ""}`}>
      <input
        type="text"
        placeholder="بحث..."
        value={searchValue}
        onChange={(e: any) => handleSearch(e.target.value)}
        className="w-full text-black px-4 py-2  rounded-md focus:outline-none"
      />
    </div>
  );
};

export default SearchInput;
