import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Router } from 'react-router-dom'

import Home from './components/pages/Home'
function App() {

  return (
   <Router>
    <NavTabs />
    <Routes>
      < Route path="/" element={<Home />} />

    </Routes>
   </Router>

  )
  }
export default App
