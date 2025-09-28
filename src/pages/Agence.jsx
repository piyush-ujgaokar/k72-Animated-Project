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
<div className='parent  bg-black'>
       <div id='page1' className='py-1'>
    <div ref={imageDiv} className='absolute h-[20vw] w-[15vw] top-[12vw] left-[30vw] rounded-3xl overflow-hidden'>
        <img ref={imageRef} className='w-full h-full object-cover' src="public/images/img-1.jpg" alt="" />
    </div>
     <div className='relative font-[font2]'>
        <div className='mt-[55vh]'>
            <h1 className='text-[20vw] leading-[17vw] uppercase text-center'>Soixan7e <br />    
            Douze</h1>
            </div>

        <div className=' pl-[44%] mt-20'>
            <p className='text-[3.5vw]'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité nourrit notre créativité. On reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.</p>
        </div>
    </div>
   </div>
   <div id='page2' className="section2 h-screen">



   </div>
</div>
  )
}

export default Agence