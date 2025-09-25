import React from 'react'

const FullScreenNav = () => {
  return (
    <div id='fullScreennav' className='h-screen py-40 w-full bg-green-300 absolute'>
        <div id='all-links'>
            <div className='link border-t-1 relative  border-white  '>
                <h1 className='font-[font2] leading-[0.8] text-[8vw] uppercase pt-5 text-center'>Projects</h1>
                <div className='flex absolute text-black bg-[#D3FD50] top-0'>
                    <div className='moveX flex items-center'>
                        <h2 className='whitespace-nowrap font-[font2] leading-[0.8] text-[8vw] uppercase pt-5 text-center'>Pour Tout Voir</h2>
                        <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="../../../public/images/navBar/img-1.jpg" alt="" />
                        <h2 className='whitespace-nowrap font-[font2] leading-[0.8] text-[8vw] uppercase pt-5 text-center'>Pour Tout Voir</h2>
                        <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="../../../public/images/navBar/img-3.jpg" alt="" />
                    </div>
                    <div className='moveX flex items-center'>
                        <h2 className='whitespace-nowrap font-[font2] leading-[0.8] text-[8vw] uppercase pt-5 text-center'>Pour Tout Voir</h2>
                        <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="../../../public/images/navBar/img-1.jpg" alt="" />
                        <h2 className='whitespace-nowrap font-[font2] leading-[0.8] text-[8vw] uppercase pt-5 text-center'>Pour Tout Voir</h2>
                        <img className='h-23 w-60 shrink-0 rounded-full object-cover' src="../../../public/images/navBar/img-3.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default FullScreenNav