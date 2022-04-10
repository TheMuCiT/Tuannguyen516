import React from 'react'

import nieWiederPNg from '../../icons/nieWieder.png'

import './nieWieder.css'

const NieWieder = () => {
  return (
    <div className='componentFirst'>
      <div className='componentSecond'>
        <div className='nieWieder'>
          <div className='nieWiederHeader'>
            <div className='nieWiederTitle'>Nie wieder Samstag im Büro verbringen</div>
            <img src={nieWiederPNg} alt='' className='nieWiederPNG' />
          </div>
          <div className='nieWiederMain'>
            <div className='nieWiederItem'>
              <div className='nieWiederItemLeft'>Deine Situation</div>
              <div className='nieWiederItemRight'>
                Als Inhaber:in deines KMUs arbeitest du an vorderster Front mit. Neben deinem Kerngeschäft, musst
                du dich aber noch um Buchhaltung, Personal-Management und Administration kümmern – oft wenn alle
                anderen Feierabend haben oder das Wochenende geniessen.
              </div>
            </div>

            <div className='nieWiederItem'>
              <div className='nieWiederItemLeft'>Das Problem</div>
              <div className='nieWiederItemRight'>
                Dazu musst du immer mit den neuesten Gesetzen und Vorschriften vertraut sein, um rechtliche
                Probleme zu vermeiden. Das Büro wird zum Synonym für Stress, Unsicherheit und enormen Zeitaufwand.
              </div>
            </div>

            <div className='nieWiederItem'>
              <div className='nieWiederItemLeft'>Die Lösung</div>
              <div className='nieWiederItemRight'>
                Für mich bedeutet Büro Effizienz, Spass und Spannung. Gerne nehme ich dir deine Büro-Belastung mit
                einem individuellen Wohlfühlpaket ab.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NieWieder
