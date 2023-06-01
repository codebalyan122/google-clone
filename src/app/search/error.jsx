"use client";

import { useEffect } from "react";

export default function error({ error, reset }) {
  useEffect(() => {
    console.log(error);
  }, [error]);
  return (
    <div className="flex flex-col justify-center items-center py-10">
      <h1 className="text-3xl mb-4 ">something went Wrong</h1>
      <button onClick={() => reset()} className="text-blue-500">
        Try Again
      </button>
    </div>
  );
}
