import React from 'react'

function VideoTitle({title,overview}) {
  return (
    <div className='pt-[20%] px-24  w-screen aspect-video absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-6xl font-bold'>{title}</h1>
        <p className='py-6 text-lg w-1/4'>{overview}</p>
        <div>
            <button className='mr-5 bg-white text-black p-4 px-12 text-xl  rounded-lg hover:opacity-35'>Play</button>
            <button  className=' bg-gray-500 text-white p-4 px-12 text-xl opacity-50 rounded-lg'>More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle