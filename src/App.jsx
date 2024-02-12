import { useState } from 'react'

// import './App.css'
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import ProjectGallery from './components/pages/ProjectGallery'
import Header from './components/Header'
import Footer from './components/footer'

function App() {

  return (
    <>
   <Router>
    <Header />
    <Routes>
      < Route path="/" element={<Home />} />
      < Route path="/contact" element={<Contact />} />
      < Route path="/gallery" element={<ProjectGallery />} />
    </Routes>
   </Router>
   <Footer />
   </>
  )
  }
export default App
