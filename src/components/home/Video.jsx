import React from 'react'

const Video = () => {
  return (
    <div className='w-full overflow-hidden h-full'>
           <video className='h-full overflow-hidden loop w-full object-cover' autoPlay loop muted src="public/videos/k72 Video-1.mp4"></video>
    </div>
  )
}

export default Video