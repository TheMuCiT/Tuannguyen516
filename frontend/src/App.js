import React from 'react'
import Navbar from './components/navbar/Navbar'
import Main from './pages/main/Main'
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
    <>
      <Navbar />
      <Main />
      <Footer />
      <div className='GoToTop' onClick={handleScrollToTop}>
        <ArrowSVG />
      </div>
    </>
  )
}

export default App
