import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useEffect } from "react";

const useClearQueries = () => {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    router.replace(pathname);
  }, []);
};

export default useClearQueries;
