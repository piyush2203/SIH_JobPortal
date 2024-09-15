import React from 'react'
// import { BrowserRouter } from 'react-router-dom'
import {
  BrowserRouter,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Home from './Home';


const Homepage = () => {
  return (
    <div className='text-black h-full w-full overflow-x-hidden font-[poppins]'>
      <div>
        
        <div className='Navbar h-[10vh] w-full border-b-2 border-black flex items-center px-[2%] justify-between shadow-2xl'>
          <div className='logo flex items-center gap-2 '>
              <img src="/logo.png" alt="" className='h-[5vh] w-[7vh]'/>
              <h1 className='text-[1.8vw] text-black text-extrabold'>Skill Link</h1>
          </div>
          <div className='flex text-black gap-10'>
              <NavLink to="/" className="focus:text-green-600 hover:text-green-400" > Home</NavLink>
              <NavLink to="/Community" className="focus:text-green-600 hover:text-green-400" > Community</NavLink>
              <NavLink to="/Jobs-Internship" className="focus:text-green-600 hover:text-green-400"> Jobs/Internship</NavLink>
              <NavLink to="/Resume-builder" className="focus:text-green-600 hover:text-green-400"> Resume Builder</NavLink>
              <NavLink to="/AI-Mock-Interview" className="focus:text-green-600 hover:text-green-400"> AI Mock Interview</NavLink>
          </div>
          <div className='buttton flex'>
            <button className='bg-green-600 text-white py-2 px-6 rounded-lg'>Login/Signup</button>
          </div>
        </div>  

        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        
        
      </div>
    </div>
  )
}

export default Homepage
