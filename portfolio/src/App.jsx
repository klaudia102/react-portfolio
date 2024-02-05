import { useState } from 'react'

import './App.css'
import { Router } from 'react-router-dom'

import Home from './components/pages/Home'
import Contact from './components/pages/Contact'
import ProjectGallery from './components/pages/ProjectGallery'

function App() {

  return (
   <Router>
    <NavTabs />
    <Routes>
      < Route path="/" element={<Home />} />
      < Route path="/contact" element={<Contact />} />
      < Route path="/gallery" element={<ProjectGallery />} />
    </Routes>
   </Router>

  )
  }
export default App
