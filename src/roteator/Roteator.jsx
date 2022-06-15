import React from 'react'
import { Routes, Route } from 'react-router-dom'
import ArtistList from '../pages/artist/ArtistList'
import Login from '../pages/login/Login'
import Home from './../pages/home/Home'



const Roteator = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}></Route>
      <Route path="/artist" element={<ArtistList />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  )
}

export default Roteator