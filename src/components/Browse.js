import React from 'react'
import { Header } from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

export const Browse = () => {

  const showSearchView = useSelector((store)=>store.gptSearch.showGptSearch)

  useNowPlayingMovies()
  usePopularMovies()
  return (
    <div>
      <Header></Header>
      {showSearchView ? <GptSearch></GptSearch> : <><MainContainer></MainContainer>
        <SecondaryContainer></SecondaryContainer></>}
    </div>
  )
}
