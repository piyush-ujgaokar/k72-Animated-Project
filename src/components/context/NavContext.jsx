import React, { createContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

export const navBarContext=createContext()
export const navColorContext=createContext()


const NavContext = ({children}) => {

    const [navOpen, setNavOpen] = useState(false)
    const [navColor, setNavColor] = useState('white')


   const locate= useLocation()
  console.log(locate.pathname);

  useEffect(function(){
    if(locate.pathname=='/projects' || locate.pathname=='/agence'){
      setNavColor('black')
    }else{
       setNavColor('white')
    }
  },[locate])
  

  return (
    <div>
       <navBarContext.Provider value={[navOpen, setNavOpen]}>
            <navColorContext.Provider value={[navColor,setNavColor]}>
              {children}
            </navColorContext.Provider>
       </navBarContext.Provider>
    </div>
  )
}

export default NavContext