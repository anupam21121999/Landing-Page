import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Home from './Components/home/Home';
import About from './Components/about/About';
import Feature from './Components/feature/Feature';
import Blog from './Components/blog/Blog';
import Contact from './Components/contact/Contact';
import Navbar from './Components/navbar/Navbar';

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/About" element={<About/>}></Route>
          <Route exact path="/Feature" element={<Feature/>}></Route>
          <Route exact path="/Blog" element={<Blog/>}></Route>
          <Route exact path="/Contact" element={<Contact/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App