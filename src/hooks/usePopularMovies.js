import{ useEffect } from 'react'
import { API_OPTION } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addPopularMovies } from '../utils/moviesSlice'

const usePopularMovies =()=>{
      /**fetch data from api and strore the data in redux */
  const dispatch = useDispatch()
  const popularMovies = useSelector((store)=>store.movies.popularMovies)
  const getNowPlayingMovies = async ()=>
  {
    const data = await fetch( 'https://api.themoviedb.org/3/movie/popular?page=1',API_OPTION)
    const json = await data.json()
    dispatch(addPopularMovies(json))
  }

  useEffect(()=>{
    popularMovies &&  getNowPlayingMovies()
  },[])
}

export default usePopularMovies