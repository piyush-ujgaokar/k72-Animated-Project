import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useContext, useRef } from 'react'
import {navBarContext} from '../context/NavContext'

const FullScreenNav = () => {   

    const [navOpen,setNavOpen]=useContext(navBarContext)
    console.log(navOpen);
    
    
    const fullNavLinksRef = useRef(null)

    const fullScreenRef = useRef(null)


    function gsapAnimation(){
        const tl=gsap.timeline()
        
              tl.to('.fullScreennav',{
                    display:'block',
                })
        
        tl.to('.stairring',{
            delay:0.2,
            height:'100%',
            stagger:{
                amount:-0.2
            }
        })
        tl.to('.nav',{
            opacity:1
        })

        tl.to('.link',{
            opacity:1,
            rotateX:0,
            stagger:{
                amount:0.2
            }
        })
    }
    function gsapAnimationReverse(){
        const tl=gsap.timeline()

        tl.to('.link',{
            opacity:0,
            rotateX:90,
            stagger:{
                amount:0.2
            }
        })
        tl.to('.nav',{
            opacity:0
        })
        tl.to('.stairring',{
            height:0,
            stagger:{
                amount:0.1
            }
        })

          tl.to('.fullScreennav',{
                display:'none',
            })
    }


    useGSAP(function(){
        if(navOpen){
          
            gsapAnimation()
        }else{
          
            gsapAnimationReverse()
        }
    },[navOpen])


  return (
    <div ref={fullScreenRef} id='fullScreennav' className='fullScreennav hidden h-screen z-50 overflow-hidden w-full absolute'>

        <div className='h-screen w-full fixed'>
            <div ref={fullNavLinksRef} className='h-screen w-full flex'>
                <div className='stairring h-full w-1/5 bg-black '></div>
                <div className='stairring h-full w-1/5 bg-black '></div>
                <div className='stairring h-full w-1/5 bg-black '></div>
                <div className='stairring h-full w-1/5 bg-black '></div>
                <div className='stairring h-full w-1/5 bg-black '></div>
            </div>
        </div>

     <div ref={fullNavLinksRef} className='relative'>
        <div className='nav flex items-start p-3 justify-between'>
        <div className='p-1'>
          <div className='w-32'>
            <svg className='w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
            <path fill='white' fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
            </svg>
         </div>
      </div>
      <div onClick={()=>{
        setNavOpen(false)
      }} className='h-28 w-28 relative cursor-pointer'>
        <div className='h-38 w-0.5 absolute -rotate-45 origin-top bg-[#D3FD50]'></div>
        <div className='h-38 w-0.5 absolute right-0 rotate-45 origin-top bg-[#D3FD50]'></div>
      </div>
        </div>

        <div className='py-5'>
            <div className='link origin-top border-t-1 relative  border-white  '>
                <h1 className='font-[font2] leading-[0.8] text-[8vw] uppercase pt-5 text-center'>Projects</h1>
                <div className='moveLink flex absolute gap-[32vw] text-black bg-[#D3FD50] top-0'>
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
            <div className='link origin-top border-t-1 relative  border-white  '>
                <h1 className='font-[font2] leading-[0.8] text-[8vw] uppercase pt-5 text-center'>Agence</h1>
                <div className='moveLink flex absolute gap-[32vw] text-black bg-[#D3FD50] top-0'>
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
            <div className='link origin-top border-t-1 relative  border-white  '>
                <h1 className='font-[font2] leading-[0.8] text-[8vw] uppercase pt-5 text-center'>Contact</h1>
                <div className='moveLink flex absolute gap-[32vw] text-black bg-[#D3FD50] top-0'>
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
            <div className='link origin-top border-t-1 border-y-1 relative  border-white  '>
                <h1 className='font-[font2] leading-[0.8] text-[8vw] uppercase pt-5 text-center'>Blogue</h1>
                <div className='moveLink flex absolute gap-[32vw] text-black bg-[#D3FD50] top-0'>
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
    </div>
  )
}

export default FullScreenNav