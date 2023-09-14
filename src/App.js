import React, { useEffect } from 'react'
import WebFont from 'webfontloader';
import { Routes, Route } from 'react-router-dom'
import { Home } from './pages'
import { Navbar, Footer } from './layout/'


const App = () => {

  useEffect(() => {
    WebFont.load({
      google: { families: ['Inter', 'Roboto', "El Messiri", 'sans-serif', "Mulish"] }
    });
  }, [])

  
  return (<>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
    </Routes>
    <Footer />
  </>
  )
}

export default App