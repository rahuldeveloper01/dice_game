import React from 'react'
import { BrowserRouter, Routes,Route } from 'react-router-dom'
import HomePage from '../components/homepage/HomePage'
import StartGame from '../components/dice/StartGame'
import Images from '../setimages/Images'


 const AllRoutes = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/start-game" element={<StartGame/>}/>
       <Route path='/images' element={<Images/>}/>
    </Routes>
    </BrowserRouter>
  )
}

export default AllRoutes