import React from 'react'

import { ReactComponent as EffizienzSVG } from '../../icons/Effizienz.svg'

import './effizienz.css'

const Effizienz = () => {
  return (
    <div className='componentFirst effizienzAni'>
      <div className='componentSecond'>
        <div className='effizienz'>
          <div className='effizienzLeft'>
            <div className='effizienzSubTitle'>ÜBER MICH</div>
            <div className='effizienzTitle'>Effizienz macht mich glücklich</div>
            <div className='effizienzText'>
              Schon seit ich denken kann, bin ich ein Zahlenmensch. Effizienz und das Optimieren von Prozessen
              begeistern mich. Wo andere bei hohen Papier-Stapeln und Excel-Listen die Nase rümpfen, macht sich bei
              mir Vorfreude breit.
            </div>
            <div className='effizienzText'>
              Ich bringe aber nicht nur das kaufmännische Verständnis mit, sondern bin auch mit den Sorgen, Nöten
              und Wünschen von Kleinbetrieben in der Handwerksbranche vertraut.
            </div>
          </div>
          <div className='effizienzRight'>
            <EffizienzSVG className='EffizienzSVG' />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Effizienz
