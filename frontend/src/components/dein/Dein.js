import React from 'react'

import nieWiederPNg from '../../icons/nieWieder.png'

import { ReactComponent as ArrowSVG } from '../../icons/Dein.svg'
import { ReactComponent as DeinStarSVG } from '../../icons/DeinStar.svg'
import { ReactComponent as StepsLeftSVG } from '../../icons/StepsLeft.svg'
import { ReactComponent as StepsRightSVG } from '../../icons/StepsRight.svg'

import './dein.css'

const Dein = () => {
  const handleContactUs = () => {
    console.log('object')
    let Warum = document.getElementsByClassName('contactUsScroll')
    window.scroll({
      top: Warum[0].offsetTop - 100,
      behavior: 'smooth',
    })
  }
  return (
    <div className='componentFirst deinAni'>
      <StepsLeftSVG className='stepsLeftSVG' />
      <StepsRightSVG className='stepsRightSVG' />
      <div className='componentSecond'>
        <div className='dein'>
          <div className='nieWiederHeader'>
            <div className='nieWiederTitle'>Dein individuelles Wohlfühlpaket</div>
            <img src={nieWiederPNg} alt='' className='nieWiederPNG' />
          </div>
          <div className='deinTitle'>
            Jedes Unternehmen hat andere Bedürfnisse und Mittel. Gemeinsam finden wir heraus, mit welchen
            Dienstleistungen ich dich am besten unterstützen kann.
          </div>

          <div className='deinContainer'>
            <div className='deinItem'>
              <div className='deinItemIcon'>
                <ArrowSVG />
              </div>
              <div className='deinItemText'>Finanzbuchhaltung (Hauptbuch)</div>
            </div>

            <div className='deinItem'>
              <div className='deinItemIcon'>
                <ArrowSVG />
              </div>
              <div className='deinItemText'>Anlagebuchhaltung</div>
            </div>

            <div className='deinItem'>
              <div className='deinItemIcon'>
                <ArrowSVG />
              </div>
              <div className='deinItemText'>Liquiditätsplan</div>
            </div>

            <div className='deinItem'>
              <div className='deinItemIcon'>
                <ArrowSVG />
              </div>
              <div className='deinItemText'>Lohnbuchhaltung</div>
            </div>

            <div className='deinItem'>
              <div className='deinItemIcon'>
                <ArrowSVG />
              </div>
              <div className='deinItemText'>MWST-Abrechnungen</div>
            </div>

            <div className='deinItem'>
              <div className='deinItemIcon'>
                <ArrowSVG />
              </div>
              <div className='deinItemText'>Auswertungen : Reportings, Controlling</div>
            </div>

            <div className='deinItem'>
              <div className='deinItemIcon'>
                <ArrowSVG />
              </div>
              <div className='deinItemText'>Debitorenbuchhaltung</div>
            </div>

            <div className='deinItem'>
              <div className='deinItemIcon'>
                <ArrowSVG />
              </div>
              <div className='deinItemText'>Steuererklärungen</div>
            </div>

            <div className='deinItem'>
              <div className='deinItemIcon'>
                <ArrowSVG />
              </div>
              <div className='deinItemText'>Verwaltung e-banking Zugriffe/Berechtigungen</div>
            </div>

            <div className='deinItem'>
              <div className='deinItemIcon'>
                <ArrowSVG />
              </div>
              <div className='deinItemText'>Inkasso</div>
            </div>

            <div className='deinItem'>
              <div className='deinItemIcon'>
                <ArrowSVG />
              </div>
              <div className='deinItemText'>Budget</div>
            </div>

            <div className='deinItem'>
              <div className='deinItemIcon'>
                <ArrowSVG />
              </div>
              <div className='deinItemText'>Jahres-, Quartals- und Monatsabschlüsse</div>
            </div>

            <div className='deinItem'>
              <div className='deinItemIcon'>
                <ArrowSVG />
              </div>
              <div className='deinItemText'>Kreditorenbuchhaltung</div>
            </div>

            <div className='deinItem'>
              <div className='deinItemIcon'>
                <ArrowSVG />
              </div>
              <div className='deinItemText'>Finanzplan</div>
            </div>
          </div>

          <div className='deinFooter'>
            <div className='deinFooterTitle'>
              Lass uns einen <span className='deinFooterSpan'> Kaffee trinken</span> und{' '}
              <span className='deinFooterSpan'>herausfinden</span>, wie ich dich unterstützen kann
            </div>
            <div className='deinFooterButton' onClick={handleContactUs}>
              Kostenloses Beratungsgespräch vereinbaren
            </div>
            <DeinStarSVG className='deinFooterSVG' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dein
