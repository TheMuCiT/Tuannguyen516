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

  window.addEventListener('resize', WindowChange)
  return (
    <div className='navbar'>
      <div className='navbarMobile'>
        <div className='navbarCenterIcon'>
          <div className='navbarMobileTopRight '>Life of Circle</div>
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
                <div className='navbarCenterLink opacity7'>About</div>
                <div className='navbarCenterLink opacity7'>Warum Wir</div>
                <div className='navbarCenterLink opacity7'>Dienstleistungen</div>
                <div className='navbarCenterLink opacity7'>Arbeitsablauf</div>
                <div className='navbarCenterLink opacity7'>Werte</div>
                <div className='navbarCenterLink opacity7'>FAQs</div>
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
          <div className='navbarCenterItem'>About</div>
          <div className='navbarCenterItem'>Warum Wir</div>
          <div className='navbarCenterItem'>Dienstleistungen</div>
          <div className='navbarCenterItem'>Arbeitsablauf</div>
          <div className='navbarCenterItem'>Werte</div>
          <div className='navbarCenterItem'>FAQs</div>
        </div>
        <div className='navbarRight'>
          <div className='navbarRightButton'>Schedule Video Call</div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
