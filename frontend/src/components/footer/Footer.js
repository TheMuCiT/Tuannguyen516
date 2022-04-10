import React from 'react'

import './footer.css'
const Footer = () => {
  const handleFB = () => {
    window.open('')
  }

  return (
    <>
      <div className='footerBC componentFirst'>
        <div className='footerMain componentSecond'>
          <div className='footerMainLeft'>
            <div className='footerMainLeftLogo'>
              <div className='footerLogoContent'>
                <div className='footerLogoTitle'>Integrity is the foundation</div>
                <div className='footerLogoText'>
                  Ja, voll und ganz. Ich begrenze meine Anzahl Kund:innen, damit ich für alle vollumfänglich da
                  sein kann. Deshalb: Melde dich schnell!
                </div>
              </div>
            </div>
          </div>
          <div className='footerMainRight'>
            <div className='footerMainRightItem'>
              <div className='footerMainRightItemTitle'>Connect</div>
              <div className='footerMainRightItemText' onClick={handleFB}>
                Instagram
              </div>
              <div className='footerMainRightItemText' onClick={handleFB}>
                Facebook
              </div>
              <div className='footerMainRightItemText' onClick={handleFB}>
                Youtube
              </div>
            </div>
            <div className='footerMainRightItem'>
              <div className='footerMainRightItemTitle'>Connect</div>
              <div className='NoLink'>
                <div className='footerMainRightItemText'>Privacy Policy</div>
              </div>
              <div className='NoLink'>
                <div className='footerMainRightItemText'>Cookie Policy</div>
              </div>
            </div>
            <div className='footerMainRightItem'>
              <div className='footerMainRightItemTitle'>Connect</div>
              <div className='footerMainRightItemText'>Info@bold-themes.com</div>
              <div className='footerMainRightItemText'>60 East 65th Street, New York</div>
            </div>
          </div>
        </div>
      </div>
      <div className='footerBC componentFirst'>
        <div className='footerMain2 componentSecond'>
          <div className='footerBottom'>
            <div className='footerBottomText'></div>
            <div className='footerBottomLeft'>
              <div className='footerBottomText'>©2020 Finanz Fachkraft. All rights reserved</div>
            </div>
            <div className='footerBottomCenter'>
              <div className='footerBottomText'>TERMS PRIVACY POLICY</div>
            </div>
            <div className='footerBottomRight'>
              <div className='footerBottomText'>DESIGNED BY Feikkonas</div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer
