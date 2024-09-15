import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from './Component/Homepage'



const App = () => {
  return (
    <div className='h-full w-screen  m-0 p-0 overflow-x-hidden '>
      
      <Routes>
        <Route path='/' element={<Homepage />}/>
      </Routes>
      
      
    </div>
  )
}

export default App
