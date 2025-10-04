// import React from 'react'
// import ProjectCards from '../components/projects/ProjectCards'
// import { useGSAP } from '@gsap/react'
// import gsap from 'gsap'
// import { ScrollTrigger } from 'gsap/all'

// const Projects = () => {

//     const projects=[
//      {
//       image1:'../../public/images/projects/img-1.jpg',
//       image2:'../../public/images/projects/img-2.jpg',
//      },,
//      {
//       image1:'../../public/images/projects/img-3.jpg',
//       image2:'../../public/images/projects/img-4.jpg',
//      },
//       {
//       image1:'../../public/images/projects/img-5.jpg',
//       image2:'../../public/images/projects/img-6.jpg',
//       },
//       {
//        image1:'../../public/images/projects/img-7.jpg',
//       image2:'../../public/images/projects/img-8.jpg',
//       },
//      {
//        image1:'../../public/images/projects/img-9.jpg',
//       image2:'../../public/images/projects/img-10.jpg',
//      },
//     {
//       image1:'../../public/images/projects/img-11.jpg',
//       image2:'../../public/images/projects/img-12.jpg',
//     },
//     {
//       image1:'../../public/images/projects/img-13.jpg',
//       image2:'../../public/images/projects/img-14.jpg',
//     },
//     {
//       image1:'../../public/images/projects/img-15.jpg',
//       image2:'../../public/images/projects/img-16.jpg',
//     },
//     ]


//     gsap.registerPlugin(ScrollTrigger)

//     useGSAP(function(){
//         gsap.from('.hero',{
//         height:'100px',
//         stagger:{
//           amount:0.1
//         },
//         scrollTrigger:{
//             trigger:'.hero-parent',
//             markers:true,
//             start:'top 100%',
//             end:'top -180%',
//             scrub:true
//         }
//       })
      
//     })


//   return (
//   <div className='p-1 '>
//     <div className=' pt-[48vh] '>
//       <h2 className='font-[font2]  text-[13vw] uppercase text-black'>Projects</h2>
//     </div>

//       <div className='hero-parent -mt-5'>
//         {projects.map((elem,idx)=>{
//           return      <div key={idx} className='hero h-[550px] flex mb-2 gap-5 w-full '>
//                           <ProjectCards image1={elem.image1} image2={elem.image2} />
//                       </div>
//         })}
//       </div>

//   </div>
//   )
// }

// export default Projects











































































import React from 'react'
import ProjectCards from '../components/projects/ProjectCards'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Projects = () => {

     const projects=[
     {
      image1:'/images/projects/img-1.jpg',
      image2:'/images/projects/img-2.jpg',
     },,
     {
      image1:'/images/projects/img-3.jpg',
      image2:'/images/projects/img-4.jpg',
     },
      {
      image1:'./images/projects/img-5.jpg',
      image2:'/images/projects/img-6.jpg',
      },
      {
       image1:'/images/projects/img-7.jpg',
      image2:'/images/projects/img-8.jpg',
      },
     {
       image1:'/images/projects/img-9.jpg',
      image2:'/images/projects/img-10.jpg',
     },
    {
      image1:'/images/projects/img-11.jpg',
      image2:'/images/projects/img-12.jpg',
    },
    {
      image1:'/images/projects/img-13.jpg',
      image2:'/images/projects/img-14.jpg',
    },
    {
      image1:'/images/projects/img-15.jpg',
      image2:'/images/projects/img-16.jpg',
    },
    ]


  gsap.registerPlugin(ScrollTrigger)

useGSAP(() => {
  const heroes = gsap.utils.toArray(".hero");
  console.log(heroes);
  
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: ".lol",
      start: "top 41%",
      end: "+=" + (heroes.length + 1) * 500,
      scrub: true,
      // markers: true,
    }
  });

  heroes.forEach((el) => {
    tl.fromTo(
      el,
      { height: "70px", duration: 0.2, ease: "none" },
      { height: "540px", duration: 0.2, ease: "none" }
    );
  });
});



  return (
    <div className='main lg:p-2 p-1'>
      <div className='lg:pt-[42vh] pt-[50vh] '>
        <h2 className='font-[font2] lg:text-[12vw] text-[18vw] text-black uppercase'>work</h2>
      </div>
      <div className="lol lg:h-[600vh] h-[600vh]">
  {projects.map((elem, idx) => (
    <div key={idx} className="hero w-full mb-4 flex flex-col lg:flex-row gap-2">
      <ProjectCards image1={elem.image1} image2={elem.image2} />
    </div>
  ))}
</div>

    </div>
  )
}

export default Projects