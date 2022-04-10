import React, { useState } from 'react'

import { ReactComponent as ArrowSVG } from '../../icons/Arrow.svg'
import { ReactComponent as FaqSVG } from '../../icons/Faq.svg'

import nieWiederPNg from '../../icons/nieWieder.png'

import './faq.css'

const FAQ = () => {
  const [one, setOne] = useState(false)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)
  return (
    <div className='componentFirst faqBC'>
      <FaqSVG className='faqSVG' />
      <div className='componentSecond'>
        <div className='faq'>
          <div className='nieWiederHeader'>
            <div className='nieWiederTitle faqTitle'>Häufig gestellte Fragen. (FAQ)</div>
            <img src={nieWiederPNg} alt='' className='nieWiederPNG' />
          </div>
          <div className='faqContainer'>
            <div className='faqItem' onClick={() => setOne(!one)}>
              <div className='faqItemLeft'>
                <div className='faqItemNumber'>01.</div>
                <div className='faqItemTitle'>Welche Bereiche deckst du alles ab?</div>
              </div>
              <div className='faqItemRight'>ICON</div>
            </div>
            {one && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerTitle'>Welche Bereiche deckst du alles ab?</div>
                <div className='faqItemAnswerText'>
                  Gemeinsam erarbeiten wir, mit welchen Dienstleistungen ich dich am besten unterstützen kann und
                  kreieren daraus ein Wohlfühlpaket für dich. Diese Dienstleistungen beinhalten:
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
                    <div className='deinItemText'>{'Auswertungen --> Reportings, Controlling'}</div>
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
              </div>
            )}
            <div className='faqItem' onClick={() => setTwo(!two)}>
              <div className='faqItemLeft'>
                <div className='faqItemNumber'>02.</div>
                <div className='faqItemTitle'>Arbeitest du alleine oder hast duMitarbeiter:innen?</div>
              </div>
              <div className='faqItemRight'>ICON</div>
            </div>
            {two && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerTitle'>Arbeitest du alleine oder hast duMitarbeiter:innen?</div>
                <div className='faqItemAnswerText'>
                  Ich freue mich, dich und dein Unternehmen kennenzulernen. In einem unverbindlichen Gespräch
                  finden wir heraus, wie ich dich unterstützen kann.
                </div>
                <div className='deinFooterButton'>Kostenloses Beratungsgespräch vereinbaren</div>
              </div>
            )}
            <div className='faqItem' onClick={() => setThree(!three)}>
              <div className='faqItemLeft'>
                <div className='faqItemNumber'>03.</div>
                <div className='faqItemTitle'>Kannst du dich als externe Fachkraft überhaupt auf mein </div>
              </div>
              <div className='faqItemRight'>ICON</div>
            </div>
            {three && (
              <div className='faqItemAnswer'>
                <div className='faqItemAnswerTitle'>
                  Kannst du dich als externe Fachkraft überhaupt auf mein Unternehmen konzentrieren?
                </div>
                <div className='faqItemAnswerText'>
                  Ja, voll und ganz. Ich begrenze meine Anzahl Kund:innen, damit ich für alle vollumfänglich da
                  sein kann. Deshalb: Melde dich schnell!
                </div>
                <div className='deinFooterButton'>Kostenloses Beratungsgespräch vereinbaren</div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
