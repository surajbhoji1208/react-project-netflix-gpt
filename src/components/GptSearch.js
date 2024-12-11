import React from 'react'
import { GptSearchBar } from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
  return (
    
    <div>
        <div className='fixed -z-20'>
        <img src={BG_URL} alt='image'></img>
      </div>
        <GptSearchBar></GptSearchBar>
        <GptMovieSuggestions></GptMovieSuggestions>
  </div>
  )
}

export default GptSearch