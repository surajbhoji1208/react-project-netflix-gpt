import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle'
import VideoBackground from './VideoBackground'

function MainContainer() {
    const movie = useSelector((store)=>store.movies?.nowPlayingMovies)
    console.log("8:",movie);
    if(!movie) return

    const firstMovie = movie.results[0]
    console.log("firstMovie=>",firstMovie);
    
    const {original_title,overview} = firstMovie
  return (
    <div>
        <VideoTitle title={original_title} overview={overview}></VideoTitle>
        <VideoBackground movieId={firstMovie.id}></VideoBackground>

    </div>
  )
}

export default MainContainer