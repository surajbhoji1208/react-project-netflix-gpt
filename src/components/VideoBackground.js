import React, { useEffect } from 'react'
import { API_OPTION } from '../utils/constants'

function VideoBackground({movieId}) {

  const getMovieVideos =async ()=>{
    const data =await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTION)
    const json = await data.json();
    console.log("getMovieVideos=>",json);
    const filterData = json.results?.filter((video)=>video.type =='Trailer')
    const trailer = filterData?.length?filterData[0] :json.results[0]

  }
  useEffect(()=>{
    getMovieVideos()
  },[])
  return (
    <div>VedioBackgrouni</div>
  )
}

export default VideoBackground