import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'

import Navbar from './components/navbar/Navbar'
import Main from './pages/main/Main'
import Privacy from './pages/privacy/Privacy'
import Imprint from './pages/imprint/Imprint'
import Footer from './components/footer/Footer'

import { ReactComponent as ArrowSVG } from './icons/Arrow.svg'

const App = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/Imprint' element={<Imprint />} />
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
      <Footer />
      <div className='GoToTop' onClick={handleScrollToTop}>
        <ArrowSVG />
      </div>
    </BrowserRouter>
  )
}

export default App
