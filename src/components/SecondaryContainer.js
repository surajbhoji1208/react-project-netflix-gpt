import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

function SecondaryContainer() {
  const movies = useSelector((store)=>store.movies)
  return (
  movies.nowPlayingMovies &&(
    <div className='bg-black'>
    <div className='-mt-52 pl-12 relative z-20'>
    <MovieList title={"Now Playing"} movies = {movies.nowPlayingMovies}></MovieList>
     <MovieList title={"Trading"} movies = {movies.nowPlayingMovies}></MovieList>
     <MovieList title={"Popular Movies"} movies = {movies.popularMovies}></MovieList>
     <MovieList title={"Upcoming Movies"} movies = {movies.nowPlayingMovies}></MovieList>
     <MovieList title={"Horror"} movies = {movies.nowPlayingMovies}></MovieList>

    </div>
   </div>
  )
  )
}

export default SecondaryContainer