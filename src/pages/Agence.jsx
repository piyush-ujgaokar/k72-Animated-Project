import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {
    gsap.registerPlugin(ScrollTrigger)

    const imageDiv = useRef(null)
    const imageRef = useRef(null)


    const imageArr=[
        'public/images/img-1.jpg',
        'public/images/img-2.jpg',
        'public/images/img-3.jpg',
        'public/images/img-4.jpg',
        'public/images/img-5.jpg',
        'public/images/img-6.jpg',
        'public/images/img-7.jpg',
        'public/images/img-8.jpg',
        'public/images/img-9.jpg',
        'public/images/img-10.jpg',
        'public/images/img-11.jpg',
        'public/images/img-12.jpg',
        'public/images/img-13.jpg',
        'public/images/img-14.jpg',
    ]


    useGSAP(function(){
      gsap.to(imageDiv.current,{
           scrollTrigger:{
            trigger:imageDiv.current,
            // markers:true,
            start:"top 30%",
            end:"top -140%",
            pin:true,
            pinSpacing:true,
            pinReparent:true,
            pinType:'transform',
            scrub:true,
            anticipatePin:1,
            invalidateOnRefresh:true,
            onUpdate:(elem)=>{
                let imageIdx;
               if(elem.progress<1){
                imageIdx=Math.floor(elem.progress * imageArr.length)
               }else{
                imageIdx=imageArr.length-1
               }
                imageRef.current.src=imageArr[imageIdx]
                
                
            }
           }
      })
    })

  return (
<div className='parent  bg-white text-black'>
       <div id='page1' className='py-1'>
    <div ref={imageDiv} className='absolute bg-red-500 lg:h-[20vw] h-[18vh] lg:w-[15vw] w-[25vw] lg:top-[6vh] top-[10vh] left-[30vw] rounded-3xl overflow-hidden'>
        <img ref={imageRef} className='w-full h-full object-cover' src="/images/img-1.jpg" alt="" />
    </div>
     <div className='relative  font-[font2]'>
        <div className='lg:mt-[55vh] mt-[25vh]'>
            <h1 className='lg:text-[20vw] text-[16vw] font-[font2] leading-[17vw] uppercase text-center'>Soixan7e <br />    
            Douze</h1>
            </div>

        <div className=' lg:pl-[44%] pl-0 mt-20'>
            <p className='lg:text-[3.5vw] p-2 leading-tight text-[5vw]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that perspective to every brand story we help tell.</p>
        </div>
    </div>
   </div>
   <div id='page2' className="section2 h-screen">



   </div>
</div>
  )
}

export default Agence