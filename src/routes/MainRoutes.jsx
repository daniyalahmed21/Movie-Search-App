import React from 'react'
import { Route, Routes } from 'react-router'
import Home from '../pages/Home'
import MovieDetails from '../pages/MovieDetails'
import NotFound from '../pages/NotFound'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/movie/:id' element={<MovieDetails/>}/>
            <Route path='*' element={<NotFound/>}/>
        </Routes>
    </div>
  )
}

export default MainRoutes