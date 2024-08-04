"use client";

import { useCallback, useState, useEffect } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import useClearQueries from "@/shared/hooks/useClearQueries";

type IDate = {
  startDate: number | "";
  endDate: number | "";
};

type IProps = {
  catId: string;
};

const DateFilter: React.FC<IProps> = ({ catId }) => {
  const [data, setData] = useState<IDate>({
    startDate: "",
    endDate: "",
  });
  const currentYear = new Date().getFullYear();

  const startYear = 1998;

  const years = Array.from(
    { length: currentYear - startYear + 1 },
    (_, index) => startYear + index
  );

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

  const handleDate = (e: any, key: string) => {
    const value = e.target.value;
    setData({ ...data, [key]: value });
  };

  useEffect(() => {
    if (
      !!data.startDate &&
      !!data.endDate &&
      data.endDate > data.startDate &&
      !!catId
    ) {
      const model = `${data.startDate},${data.endDate}`;
      router.push(pathname + "?" + createQueryString("model", model));
    } else {
      router.push(pathname + "?" + createQueryString("model", ""));
    }
  }, [data, catId]);

  useClearQueries();

  if (!catId) return null;

  return (
    <div className="grid gap-3 grid-cols-1 lg:grid-cols-2 mt-3">
      <div className="w-full">
        <select
          onChange={(event: any) => handleDate(event, "startDate")}
          id="select"
          name="select"
          className="mt-1 block w-full py-2 px-3 rounded-md shadow-sm focus:outline-none text-black"
        >
          <option value="">تاريخ البدء</option>
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>
      <div className="w-full">
        <select
          onChange={(event: any) => handleDate(event, "endDate")}
          id="select"
          name="select"
          className="mt-1 block w-full py-2 px-3 rounded-md shadow-sm focus:outline-none text-black"
        >
          <option value="">تاريخ الانتهاء</option>
          {years
            .filter((y: any) => y > data.startDate)
            .map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
        </select>
      </div>
    </div>
  );
};

export default DateFilter;
