import React from 'react'

import { ReactComponent as Deine1SVG } from '../../icons/Deine1SVG.svg'

import './deine.css'

const Deine = () => {
  return (
    <div className='componentFirst deineBC'>
      <Deine1SVG className='deineBCSVG' />
      <div className='componentSecond deineSecond'>
        <div className='deine'>
          <div className='deineTitle'>WIESO ERFOLGREICHE GESCHÄFTSFÜHRER:INNEN IHR BÜRO NICHT SELBST MACHEN.</div>

          <div className='deineTitleBig'>Deine Vorteile</div>

          <div className='deineLineContainer'>
            <div className='deineLine' />
            <div className='deineLineNumber'>
              <div className='deineLineNumberValue'>1</div>
            </div>
            <div className='deineLineNumber'>
              <div className='deineLineNumberValue'>2</div>
            </div>
            <div className='deineLineNumber'>
              <div className='deineLineNumberValue'>3</div>
            </div>
          </div>
          <div className='deineContainer'>
            <div className='deineItem'>
              <div className='deineMobileNumber'>
                <div className='deineLineNumber'>
                  <div className='deineLineNumberValue'>1</div>
                </div>
              </div>

              <div className='deineItemTitle'>Mehr Freizeit</div>
              <div className='deineItemText'>
                Mehr Freizeit. Nutze den Feierabend und das Wochenende wie du es willst, anstatt im Büro zu sitzen.
              </div>
            </div>

            <div className='deineItem'>
              <div className='deineMobileNumber'>
                <div className='deineLineNumber'>
                  <div className='deineLineNumberValue'>2</div>
                </div>
              </div>
              <div className='deineItemTitle'>Mehr Sicherheit</div>
              <div className='deineItemText'>
                Sei gewiss, dass jedes Dokument den aktuellen Gesetzen und neuesten Regulationen folgt.
              </div>
            </div>

            <div className='deineItem'>
              <div className='deineMobileNumber'>
                <div className='deineLineNumber'>
                  <div className='deineLineNumberValue'>3</div>
                </div>
              </div>
              <div className='deineItemTitle'>Mehr Effizienz</div>
              <div className='deineItemText'>
                Lasse Prozesse optimieren, spare Zeit und erhöhe dabei den Betrag unter dem Strich.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deine
