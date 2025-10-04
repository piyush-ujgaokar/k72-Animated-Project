import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomtext = () => {
  return (
    <div className='flex justify-center h-32 items-center font-[font2] gap-5'>

        <p className='absolute lg:w-80 w-75 font-[font1]  lg:text-sm text-sm lg:leading-5 leading-5 right-0 lg:bottom-40 bottom-30'>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;K72 is an agency that buildings brands from every angle. Today, Tomorrow and years from now. We think the best sparks fly           when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We're          transparent, honest and say what we mean, and when we believe in something, we're all in.
        </p>

        <div className=' lg:h-24 h-12 flex lg:px-[2vw] px-[3vw] pt-1  hover:border-[#D3FD50] hover:text-[#D3FD50]  items-center justify-center uppercase lg:border-3 border-2 border-white rounded-full'>
            <Link className='lg:text-[6vw] text-[8vw] ' to='/projects'>Projects</Link> </div>

        <div className=' lg:h-24 h-12  lg:px-[2vw] px-[3vw] pt-1 hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center justify-center uppercase lg:border-3 border-2 border-white rounded-full'> <Link className='lg:text-[6vw] text-[8vw] ' to='/agence'>Agence</Link> </div>
    </div>
  )
}

export default HomeBottomtext