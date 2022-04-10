import React from 'react'

import { ReactComponent as IntroSVG } from '../../icons/Intro.svg'

import './intro.css'

const Intro = () => {
  return (
    <div className='componentFirst'>
      <div className='componentSecond'>
        <div className='intro'>
          <div className='introLeft'>
            <div className='introTitle'>
              Buchhaltung und Personal- Management für KMUs in Obwalden, Nidwalden und Luzern.
            </div>
            <div className='introText'>
              Konzentriere dich auf deine Kernkompetenzen – ich übernehme Buchhaltung,Personal-Management und
              Administration.
            </div>
            <div className='introButton'>Kostenloses Beratungsgespräch vereinbaren</div>
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
