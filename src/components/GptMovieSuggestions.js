import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const GptMovieSuggestions = () => {
  const {gptSearchMovies,movieResult} = useSelector((store)=>store.gptSearch)
  if(!gptSearchMovies) return null

  return (
    <div className='p-4 m-4 bg-black text-white opacity-80
    '>
      <div>
        {
          gptSearchMovies.map((movieName,index)=>(
            <MovieList key={movieName} title={movieName} movies={movieResult[index]}></MovieList>
          ))
        }
      </div>
    </div>
  )
}

export default GptMovieSuggestions