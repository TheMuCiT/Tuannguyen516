import React from 'react'
import { useNavigate } from 'react-router-dom'

import './footer.css'
const Footer = () => {
  let navigate = useNavigate()
  const handleWarum = () => {
    if (window.location.pathname === '/') {
      let Warum = document.getElementsByClassName('deineBC')
      window.scroll({
        top: Warum[0].offsetTop - 100,
        behavior: 'smooth',
      })
    } else {
      navigate('../', { replace: true })
    }
  }
  const handleDienstleistungen = () => {
    if (window.location.pathname === '/') {
      let Dienstleistungen = document.getElementsByClassName('deinAni')
      window.scroll({
        top: Dienstleistungen[0].offsetTop - 100,
        behavior: 'smooth',
      })
    } else {
      navigate('../', { replace: true })
    }
  }
  const handleArbeitsablauf = () => {
    if (window.location.pathname === '/') {
      let Arbeitsablauf = document.getElementsByClassName('deineBC')
      window.scroll({
        top: Arbeitsablauf[1].offsetTop - 100,
        behavior: 'smooth',
      })
    } else {
      navigate('../', { replace: true })
    }
  }
  const handleWerte = () => {
    if (window.location.pathname === '/') {
      let Werte = document.getElementsByClassName('effizienzAni')
      window.scroll({
        top: Werte[0].offsetTop - 100,
        behavior: 'smooth',
      })
    } else {
      navigate('../', { replace: true })
    }
  }
  const handleFAQs = () => {
    if (window.location.pathname === '/') {
      let FAQs = document.getElementsByClassName('faqBC')
      window.scroll({
        top: FAQs[0].offsetTop,
        behavior: 'smooth',
      })
    } else {
      navigate('../', { replace: true })
    }
  }

  const handleContactUs = () => {
    if (window.location.pathname === '/') {
      console.log('object')
      let Warum = document.getElementsByClassName('contactUsScroll')
      window.scroll({
        top: Warum[0].offsetTop - 100,
        behavior: 'smooth',
      })
    } else {
      navigate('../', { replace: true })
    }
  }

  const handlePrivacy = () => {
    navigate('../privacy')
  }

  const handleImprint = () => {
    navigate('../imprint')
  }

  return (
    <>
      <div className='footerBC componentFirst'>
        <div className='footerMain componentSecond'>
          <div className='footerMainLeft'>
            <div className='footerMainLeftLogo'>
              <div className='footerLogoContent'>
                <div className='footerLogoTitle'>Buchhaltung und Personal-Management für KMUs</div>
                <div className='footerLogoText'>
                  Konzentriere dich auf deine Kernkompetenzen – ich übernehme Buchhaltung, Personal-Management und
                  Administration.
                </div>
              </div>
            </div>
          </div>
          <div className='footerMainRight'>
            <div className='footerMainRightItem'>
              <div className='footerMainRightItemText' onClick={handleWarum}>
                Deine Vorteile
              </div>
              <div className='footerMainRightItemText' onClick={handleDienstleistungen}>
                Dienstleistungen
              </div>
              <div className='footerMainRightItemText' onClick={handleArbeitsablauf}>
                Arbeitsablauf
              </div>
              <div className='footerMainRightItemText' onClick={handleWerte}>
                Über mich
              </div>
              <div className='footerMainRightItemText' onClick={handleFAQs}>
                FAQs
              </div>
            </div>
            <div className='footerMainRightItem'>
              <div className='footerMainRightItemTitle'>Info</div>
              <div className='NoLink'>
                <div className='footerMainRightItemText' onClick={handlePrivacy}>
                  Datenschutz
                </div>
              </div>
              <div className='NoLink'>
                <div className='footerMainRightItemText' onClick={handleImprint}>
                  Impressum
                </div>
              </div>
              <div className='NoLink'>
                <div className='footerMainRightItemText' onClick={handleContactUs}>
                  Kontakt
                </div>
              </div>
            </div>
            <div className='footerMainRightItem'>
              <div className='footerMainRightItemTitle'>Kontakt</div>
              <div className='footerMainRightItemTextNo'>andrea.soler@finanzfachkraft.ch</div>
              <div className='footerMainRightItemTextNo'>+41 79 697 79 07</div>
              <div className='footerMainRightItemTextNo'>Bodenmatte 3, 6062 Wilen (Sarnen)</div>
            </div>
          </div>
        </div>
      </div>
      <div className='footerBC componentFirst'>
        <div className='footerMain2 componentSecond'>
          <div className='footerBottom'>
            <div className='footerBottomText'></div>
            <div className='footerBottomLeft'></div>
            <div className='footerBottomCenter'>
              <div className='footerBottomText'>© finanzfachkraft.ch - Alle Reche vorbehalten </div>
            </div>
            <div className='footerBottomRight'></div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
