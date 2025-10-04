import React from 'react'
import videos from '/videos/k72.mp4'

const Video = () => {
  return (
    <div className='w-full overflow-hidden h-full'>
           <video className='h-full overflow-hidden loop w-full object-cover' autoPlay loop muted src={videos}></video>
    </div>
  )
}

export default Video