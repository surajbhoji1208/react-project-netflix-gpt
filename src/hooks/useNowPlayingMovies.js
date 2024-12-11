import{ useEffect } from 'react'
import { API_OPTION } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addNowPlayingMovies } from '../utils/moviesSlice'

const useNowPlayingMovies =()=>{
      /**fetch data from api and strore the data in redux */
  const dispatch = useDispatch()
  const nowPlayingMovies = useSelector((store)=>store.movies.nowPlayingMovies)
  const getNowPlayingMovies = async ()=>
  {
    const data = await fetch( 'https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTION)
    const json = await data.json()
    dispatch(addNowPlayingMovies(json))
  }

  useEffect(()=>{
    nowPlayingMovies && getNowPlayingMovies()
  },[])
}

export default useNowPlayingMovies