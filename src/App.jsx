import React, { useRef } from 'react'
import { Link,Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Agence from './pages/Agence'
import Projects from './pages/Projectss'
import NavBar from './components/navigation/NavBar'
import FullScreenNav from './components/navigation/FullScreenNav'



const App = () => {

 


  return (
    <div>
      <NavBar/>
      {/* <FullScreenNav/> */}
    <div className='text-5xl'>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/agence' element={<Agence/>}/>
        <Route path='/projects' element={<Projects/>}/>
      </Routes>
    </div>
    
    </div>
  )
}

export default App