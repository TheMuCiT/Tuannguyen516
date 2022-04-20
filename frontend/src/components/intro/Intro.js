import React from 'react'

import { ReactComponent as IntroSVG } from '../../icons/Intro.svg'

import './intro.css'

const Intro = () => {
  const handleContactUs = () => {
    console.log('object')
    let Warum = document.getElementsByClassName('contactUsScroll')
    window.scroll({
      top: Warum[0].offsetTop - 100,
      behavior: 'smooth',
    })
  }
  return (
    <div className='componentFirst'>
      <div className='componentSecond'>
        <div className='intro'>
          <div className='introLeft'>
            <div className='introTitle'>Buchhaltung und Personal- Management für KMUs in der Zentralschweiz..</div>
            <div className='introText'>
              Konzentriere dich auf deine Kernkompetenzen – ich übernehme Buchhaltung, Personal-Management und
              Administration.
            </div>
            <div className='introButton' onClick={handleContactUs}>
              Kostenloses Beratungsgespräch vereinbaren
            </div>
          </div>
          <div className='introRight'>
            <IntroSVG className='introSVG' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Intro
