"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import { AiOutlineSearch, AiOutlineClose } from "react-icons/ai";
import { BsFillMicFill } from "react-icons/bs";

export default function HomeSearch() {
  const [searchInput, setsearchInput] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();
    if (!searchInput.trim()) return;
    router.push(`/search/web?searchTerm=${searchInput}`);
  }
  async function randomSearch() {
    setLoading(true);
    const res = await fetch("https://random-word-api.herokuapp.com/word");
    const json = await res.json();
    const data = await json[0];
    if (!data) return;
    router.push(`/search/web?searchTerm=${data}`);
    setLoading(false);
  }
  return (
    <>
      <form
        onSubmit={(e) => handleSubmit(e)}
        className="flex w-full mt-5 mx-auto max-w-[90%]
       border-gray-200 border px-5 py-3 
       rounded-full hover:shadow-md transition-shadow focus-within:shadow-md items-center sm:max-w-xl lg:max-w-2xl"
      >
        <AiOutlineSearch className="text-xl text-gray-500 mr-3 select-none" />
        <input
          type="text"
          className=" flex-grow focus:outline-none"
          value={searchInput}
          onChange={(e) => setsearchInput(e.target.value)}
        />

        <BsFillMicFill
          className="text-lg cursor-pointer"
          onClick={() => startRecognition()}
        />
      </form>
      <div className=" flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4 justify-center mt-8">
        <button className="btn" onClick={handleSubmit}>
          Google Search
        </button>
        <button
          className="btn flex items-center justify-center disabled:opacity-80"
          onClick={() => randomSearch()}
          disabled={loading}
        >
          {loading ? (
            <img
              src="spinner.svg"
              alt="loading..."
              className="h-6 text-center "
            />
          ) : (
            "I'm Feeling Lucky"
          )}
        </button>
      </div>
    </>
  );
}
