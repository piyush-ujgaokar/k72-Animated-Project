import React from 'react'

const ProjectCards = (props) => {
  return (

      <>
          <div className='hover:rounded-[2.8vw] group relative transition-all overflow-hidden w-1/2 h-full'>
            <img className='w-full h-full object-cover' src={props.image1} alt="" />
              <div className='absolute flex items-center transition-all justify-center left-0 top-0 h-full w-full bg-black/10'>
                  <h2 className='uppercase opacity-0 group-hover:opacity-100  text-[4vw] font-[font2] border-2 px-3 pt-2 rounded-4xl border-white '>View Project</h2>
              </div>
          </div>
          <div className='hover:rounded-[2.8vw] group relative transition-all overflow-hidden w-1/2 h-full'>
            <img className='w-full h-full object-cover' src={props.image2} alt="" />
              <div className='absolute flex items-center transition-all justify-center left-0 top-0 h-full w-full bg-black/10'>
                  <h2 className='uppercase opacity-0 group-hover:opacity-100  text-[4vw] font-[font2] border-2 px-3 pt-2 rounded-4xl border-white '>View Project</h2>
              </div>
          </div>
      </>
  )
}

export default ProjectCards