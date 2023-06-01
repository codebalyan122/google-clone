import WebSearchResults from "@/src/components/WebSearchResults";
import Link from "next/link";
import React from "react";

export default async function WebSearchPage({ searchParams }) {
  await new Promise((resolve) => setTimeout(resolve, 10000));
  const resposne = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );

  if (!resposne.ok) {
    throw new Error("something went wrong");
  }
  const data = await resposne.json();

  const results = data.items;

  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-4 ">
        <h1 className="text-3xl mb-4">No Result found</h1>
        <p className="text-lg mb-3">
          Try search something else or go back to homePage
        </p>
        <Link href={"/"} className="text-blue-500">
          Home
        </Link>
      </div>
    );
  }
  return <>{results && <WebSearchResults results={data} />}</>;
}
