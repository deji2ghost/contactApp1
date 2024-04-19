import { useEffect, useState } from 'react'
import './App.css'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
import { Contactpage } from './pages/Contactpage'

function App() {               

  return (
    <div className=''>
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />}/>
          <Route path='/contact' element={<Contactpage/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
