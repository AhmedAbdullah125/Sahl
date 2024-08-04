"use client"; // Error components must be Client Components

import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
    console.log({ error });
  }, [error]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg">
      <h1 className="text-black text-3xl">حدث خطأ ما</h1>
      <button
        className="bg-primary text-black px-2 py-1 rounded"
        onClick={() => reset()}
      >
        حاول مجددا
      </button>
    </div>
  );
}
