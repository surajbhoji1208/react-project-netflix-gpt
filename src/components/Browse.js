import React, { useEffect } from 'react'
import { Header } from './Header'
import { API_OPTION } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

export const Browse = () => {

  /**fetch data from api and strore the data in redux */
  const dispatch = useDispatch()
  const getNowPlayingMovies = async ()=>
  {
    const data = await fetch( 'https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTION)
    const json = await data.json()
    console.log(json.results);
    dispatch(addNowPlayingMovies)
  }

  useEffect(()=>{
    getNowPlayingMovies()
  },[])
  return (
    <div>
      <Header></Header>
    </div>
  )
}
