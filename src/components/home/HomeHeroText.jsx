import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] mt-[40vh] lg:mt-0  text-center pt-5'>
        <div className='lg:text-[9vw] text-[12vw] uppercase lg:leading-[9vw] leading-[13vw] flex justify-center items-center '>the spark for</div>

        <div className='lg:text-[9vw] text-[12vw] uppercase lg:leading-[9vw] leading-[13vw] flex justify-center items-center '>
            All
            <div className='h-[8vw] w-[15vw] rounded-full overflow-hidden'>
                <Video/>
            </div>Thing's</div>

        <div className='lg:text-[9vw] text-[12vw] uppercase lg:leading-[9vw] leading-[13vw] '>Creative</div>
    </div>
  )
}

export default HomeHeroText