import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homescreen from '../components/Homescreen';
import PostDetails from '../components/Postdetails';
const MainRoutes = () => {
  return (
    <Router>

    <Routes>

 <Route path="/" element={<Homescreen/>}/>
 <Route path="/post/:id" element={<PostDetails/>} />
   
 </Routes>
 
 </Router>
  )
}

export default MainRoutes