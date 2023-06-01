import React from "react";

export default async function WebSearchPage({ searchParams }) {
  const resposne = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.GOOGLE_SEARCH_KEY}&cx=${process.env.GOOGLE_CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  const data = await resposne.json();

  const result = data.items;
  return <>{result && result.map((item) => <h1>{item.title}</h1>)}</>;
}
