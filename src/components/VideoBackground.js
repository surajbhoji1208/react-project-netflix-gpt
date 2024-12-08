import React, { useEffect } from 'react'
import { API_OPTION } from '../utils/constants'
import { useDispatch, useSelector } from 'react-redux'
import { addTrailerVideo } from '../utils/moviesSlice'

function VideoBackground({movieId}) {
  const trailerVideo = useSelector((store) => store.movies?.trailerVideo);
  const dispatch = useDispatch()
  const getMovieVideos =async ()=>{
    const data =await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTION)
    const json = await data.json();
    const filterData = json.results?.filter((video)=>video.type =='Trailer')
    const trailer = filterData?.length?filterData[0] :json.results[0]
    dispatch(addTrailerVideo(trailer))

  }
  useEffect(()=>{
    getMovieVideos()
  },[])
  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/FKBN1qAzW3s"+trailerVideo.key}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
}

export default VideoBackground