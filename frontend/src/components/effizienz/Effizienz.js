import React from 'react'

import { ReactComponent as EffizienzSVG } from '../../icons/Effizienz.svg'

import './effizienz.css'

const Effizienz = () => {
  return (
    <div className='componentFirst'>
      <div className='componentSecond'>
        <div className='effizienz'>
          <div className='effizienzLeft'>
            <div className='effizienzSubTitle'>ÜBER MICH</div>
            <div className='effizienzTitle'>Effizienz macht mich glücklich</div>
            <div className='effizienzText'>
              Als Inhaber:in deines KMUs arbeitest du an vorderster Front mit. Neben deinem Kerngeschäft, musst du
              dich aber noch um Buchhaltung, Personal-Management und Administration kümmern – oft wenn alle anderen
              Feierabend haben oder das Wochenende geniessen.
            </div>
            <div className='effizienzText'>
              Dazu musst du immer mit den neuesten Gesetzen und Vorschriften vertraut sein, um rechtliche Probleme
              zu vermeiden. Das Büro wird zum Synonym für Stress, Unsicherheit und enormen Zeitaufwand.
            </div>
            <div className='effizienzText'>
              Für mich bedeutet Büro Effizienz, Spass und Spannung. Gerne nehme ich dir deine Büro-Belastung mit
              einem individuellen Wohlfühlpaket ab.
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
