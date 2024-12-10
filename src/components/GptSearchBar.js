import React, { useRef } from "react";
import openai from "../utils/Openai";
import { API_OPTION } from "../utils/constants";

export const GptSearchBar = () => {
  const useInputRed = useRef()
  const handleGptSearch = async ()=>
  {
    const query = 'Act as a movie renomination system and suggest some movie based on the query: '+useInputRed.current.value + " Only give me 5 movie as a result like the example result given ahead. eg res: Gadar,Race2,Animal,Don2,DR.Doom"
    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
          { role: "user", content:query }
      ],
  });
    console.log(completion.choices[0].message?.content);
    if(!completion.choices){return "No result found"}
    const getMovies = completion.choices[0].message?.content.split(',')
    
    const data  = getMovies.map((movie)=>searchMovies(movie))
  }

  const searchMovies = async(movie)=>{

    const fetchMovie = await fetch(`https://api.themoviedb.org/3/search/${movie}?include_adult=false&page=1`,API_OPTION);

    const data = await fetchMovie.json()
    return data.results

  }

  return (
    <div className="pt-[10%] flex justify-center">
      <form className="w-1/2 bg-black grid grid-cols-12" onSubmit={(e)=>e.preventDefault()}>
        <input
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder="What would you like to watch today"
          ref={useInputRed}
        ></input>
        <button className="col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg" onClick={handleGptSearch}>
          Search
        </button>
      </form>
    </div>
  );
};
