import React, { useEffect, useState } from 'react'

import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
import { ReactComponent as Close } from '../../icons/Close.svg'

import './navbar.css'
const Navbar = () => {
  const [Mobile, setMobile] = useState(false)
  useEffect(() => {
    WindowChange()
  }, [])

  const HandleMobileMenu = () => {
    setMobile(!Mobile)
  }

  const WindowChange = () => {
    if (window.innerWidth > 1050) {
      setMobile(false)
    }
  }

  const handleAbout = () => {
    let About = document.getElementsByClassName('nieWiederAni')
    window.scroll({
      top: About[0].offsetTop - 100,
      behavior: 'smooth',
    })
  }
  const handleWarum = () => {
    let Warum = document.getElementsByClassName('deineBC')
    window.scroll({
      top: Warum[0].offsetTop - 100,
      behavior: 'smooth',
    })
  }
  const handleDienstleistungen = () => {
    let Dienstleistungen = document.getElementsByClassName('deinAni')
    window.scroll({
      top: Dienstleistungen[0].offsetTop - 100,
      behavior: 'smooth',
    })
  }
  const handleArbeitsablauf = () => {
    let Arbeitsablauf = document.getElementsByClassName('deineBC')
    window.scroll({
      top: Arbeitsablauf[1].offsetTop - 100,
      behavior: 'smooth',
    })
  }
  const handleWerte = () => {
    let Werte = document.getElementsByClassName('effizienzAni')
    window.scroll({
      top: Werte[0].offsetTop - 100,
      behavior: 'smooth',
    })
  }
  const handleFAQs = () => {
    let FAQs = document.getElementsByClassName('faqBC')
    window.scroll({
      top: FAQs[0].offsetTop,
      behavior: 'smooth',
    })
  }

  window.addEventListener('resize', WindowChange)
  return (
    <div className='navbar'>
      <div className='navbarMobile'>
        <div className='navbarCenterIcon'>
          <div className='navbarMobileTopRight'>Life of Circle</div>
        </div>
      </div>
      <div className='navbarMobileButton'>
        <MobileMenu className={Mobile ? 'Mobile' : 'Mobile'} onClick={HandleMobileMenu} />
        <div className={Mobile ? 'navbarMobileContainerActive' : 'navbarMobileContainer'}>
          <div className={Mobile ? 'navbarMenu active' : 'navbarMenu'}>
            <div className='navbarMenuContainer'>
              <div className='navbarMobileTop'>
                <div className='navbarMobileTopRight menuOpen'>Life of Circle</div>
                <div className='navbarMobileTopLeft'>
                  <Close className='CloseIcon' onClick={HandleMobileMenu} />
                </div>
              </div>
              <div className='navbarMobileMain'>
                <div className='navbarCenterLink opacity7' onClick={handleAbout}>
                  About
                </div>
                <div className='navbarCenterLink opacity7' onClick={handleWarum}>
                  Warum Wir
                </div>
                <div className='navbarCenterLink opacity7' onClick={handleDienstleistungen}>
                  Dienstleistungen
                </div>
                <div className='navbarCenterLink opacity7' onClick={handleArbeitsablauf}>
                  Arbeitsablauf
                </div>
                <div className='navbarCenterLink opacity7' onClick={handleWerte}>
                  Werte
                </div>
                <div className='navbarCenterLink opacity7' onClick={handleFAQs}>
                  FAQs
                </div>
                <div className='navbarCenterLink navbarRightButton'>Schedule Video Call</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='navbarContainer'>
        <div className='navbarLeft'>
          <div className='navbarLeftLogo'>Life of Circle</div>
        </div>
        <div className='navbarCenter'>
          <div className='navbarCenterItem' onClick={handleAbout}>
            About
          </div>
          <div className='navbarCenterItem' onClick={handleWarum}>
            Warum Wir
          </div>
          <div className='navbarCenterItem' onClick={handleDienstleistungen}>
            Dienstleistungen
          </div>
          <div className='navbarCenterItem' onClick={handleArbeitsablauf}>
            Arbeitsablauf
          </div>
          <div className='navbarCenterItem' onClick={handleWerte}>
            Werte
          </div>
          <div className='navbarCenterItem' onClick={handleFAQs}>
            FAQs
          </div>
        </div>
        <div className='navbarRight'>
          <div className='navbarRightButton'>Schedule Video Call</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
