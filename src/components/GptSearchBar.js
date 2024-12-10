import React, { useRef } from "react";

export const GptSearchBar = () => {
  const useInputRed = useRef()
  const handleGptSearch = ()=>
  {

  }

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder="What would you like to watch today"
        ></input>
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearch}>
          Search
        </button>
      </form>
    </div>
  );
};
