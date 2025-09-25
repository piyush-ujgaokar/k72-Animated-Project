import React from 'react'
import Video from '../components/home/Video'
import HomeHeroText from '../components/home/HomeHeroText'
import HomeBottomtext from '../components/home/HomeBottomtext'

const Home = () => {
  return (
   <div>  

        <div className='w-screen h-screen fixed'>
            <Video/>
        </div>

        <div className='w-screen h-screen relative overflow-hidden flex flex-col justify-between'>
            <HomeHeroText/>
            <HomeBottomtext/>
        </div>
   </div>
  )
}

export default Home