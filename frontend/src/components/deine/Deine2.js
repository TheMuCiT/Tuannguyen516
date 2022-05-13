import React from 'react'

import { ReactComponent as Deine1SVG } from '../../icons/Deine2SVG.svg'

import './deine.css'

const Deine2 = () => {
  return (
    <div className='componentFirst deineBC'>
      <Deine1SVG className='deineBCSVG2' />
      <div className='componentSecond deineSecond'>
        <div className='deine'>
          <div className='deineTitleBig'>Drei Schritte zu einer tollen Zusammenarbeit</div>

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
              <div className='deineItemTitle'>Kennenlernen</div>
              <div className='deineItemText'>
                Ich mache mich mit deinem Unternehmen, deinen Bedürfnissen und deinen Prozessen vertraut.
              </div>
            </div>

            <div className='deineItem'>
              <div className='deineMobileNumber'>
                <div className='deineLineNumber'>
                  <div className='deineLineNumberValue'>2</div>
                </div>
              </div>
              <div className='deineItemTitle'>Optimieren</div>
              <div className='deineItemText'>
                Wo Potenzial da ist, optimiere ich Prozesse mit deinem Einverständnis.
              </div>
            </div>

            <div className='deineItem'>
              <div className='deineMobileNumber'>
                <div className='deineLineNumber'>
                  <div className='deineLineNumberValue'>3</div>
                </div>
              </div>
              <div className='deineItemTitle'>Umsetzen</div>
              <div className='deineItemText'>
                Ich setze selbstständig um, was wir abgemacht haben und stehe dir bei allen Anliegen zur Seite.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Deine2
