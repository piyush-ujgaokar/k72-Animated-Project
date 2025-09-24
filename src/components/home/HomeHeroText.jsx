import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font-[font1] text-center pt-5'>
        <div className='text-[10vw] uppercase leading-[9vw] flex justify-center items-center '>L'étincelle</div>

        <div className='text-[10vw] uppercase leading-[9vw] flex justify-center items-center '>
            qui
            <div className='h-[8vw] w-[15vw] -mt-52 rounded-full overflow-hidden'>
                <Video/>
            </div>génère</div>

        <div className='text-[10vw] uppercase leading-[9vw] '>la créativité</div>
    </div>
  )
}

export default HomeHeroText