import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomtext = () => {
  return (
    <div className='flex justify-center h-32 items-center font-[font2] gap-5'>

        <div className=' h-24 flex px-[2vw] hover:border-[#D3FD50] hover:text-[#D3FD50]  items-center justify-center uppercase border-3 border-white rounded-full'>
            <Link className='text-[6vw] ' to='/projects'>Projects</Link> </div>

        <div className=' h-24 px-[2vw] hover:border-[#D3FD50] hover:text-[#D3FD50] flex items-center justify-center uppercase border-3 border-white rounded-full'> <Link className='text-[6vw] ' to='/agence'>Agence</Link> </div>
    </div>
  )
}

export default HomeBottomtext