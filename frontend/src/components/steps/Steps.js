import React from 'react'

import { ReactComponent as Step1SVG } from '../../icons/Step1.svg'
import { ReactComponent as Step2SVG } from '../../icons/Step2.svg'
import { ReactComponent as Step3SVG } from '../../icons/Step3.svg'

import { ReactComponent as StepsLeftSVG } from '../../icons/StepsLeft.svg'
import { ReactComponent as StepsRightSVG } from '../../icons/StepsRight.svg'

import './steps.css'

const Steps = () => {
  return (
    <div className='componentFirst stepsAni'>
      <StepsLeftSVG className='stepsLeftSVG' />
      <StepsRightSVG className='stepsRightSVG' />
      <div className='componentSecond'>
        <div className='steps'>
          <div className='stepsItem'>
            <Step1SVG className='stepSVG' />
            <div className='stepsItemTitle'>Korrekt</div>
            <div className='stepsItemText'>Ich bewege mich streng im Rahmen aller Gesetze und Vorschriften.</div>
          </div>
          <div className='stepsItem'>
            <Step2SVG className='stepSVG' />
            <div className='stepsItemTitle'>Loyal</div>
            <div className='stepsItemText'>Ich handle in deinem Interesse und bin immer transparent.</div>
          </div>
          <div className='stepsItem'>
            <Step3SVG className='stepSVG' />
            <div className='stepsItemTitle'>Gelassen</div>
            <div className='stepsItemText'>Ich behalte in noch so schwierigen Situationen einen kühlen Kopf.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Steps
