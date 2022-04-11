import React, { useState } from 'react'

import { ReactComponent as Stars } from '../../icons/stars.svg'

import nieWiederPNg from '../../icons/nieWieder.png'

import Person1 from '../../icons/Ellipse4.png'
import Person2 from '../../icons/Ellipse5.png'
import Person3 from '../../icons/Ellipse6.png'

import './user.css'

const User = () => {
  const [one, setOne] = useState(true)
  const [two, setTwo] = useState(false)
  const [three, setThree] = useState(false)

  const handleFirst = () => {
    setOne(true)
    setTwo(false)
    setThree(false)
  }

  const handleSecond = () => {
    setOne(false)
    setTwo(true)
    setThree(false)
  }

  const handleThird = () => {
    setOne(false)
    setTwo(false)
    setThree(true)
  }

  return (
    <div className='componentFirst userAni'>
      <div className='componentSecond'>
        <div className='user'>
          <div className='nieWiederHeader'>
            <div className='nieWiederTitle'>Nie wieder Samstag im Büro verbringen</div>
            <img src={nieWiederPNg} alt='' className='nieWiederPNG' />
          </div>
          <div className='userMain'>
            <div className='userLeft'>
              <div className='userLeftList'>
                <div className={one ? 'userLeftItem selected' : 'userLeftItem'} onClick={handleFirst}>
                  <div className='userLeftItemIMG'>
                    <img src={Person1} alt='Error' className='userLeftItemIMGPNG' />
                  </div>

                  <div className='userLeftItemText'>
                    <div className='userLeftItemTextHeader'>Ahmet T.</div>
                    <div className='userLeftItemTextAbout'>Sales Manager, Slack</div>
                  </div>
                </div>
                <div className={two ? 'userLeftItem selected' : 'userLeftItem'} onClick={handleSecond}>
                  <div className='userLeftItemIMG'>
                    <img src={Person2} alt='Error' className='userLeftItemIMGPNG' />
                  </div>

                  <div className='userLeftItemText'>
                    <div className='userLeftItemTextHeader'>Özgür F.</div>
                    <div className='userLeftItemTextAbout'>Head of Sales, Asana</div>
                  </div>
                </div>
                <div className={three ? 'userLeftItem selected' : 'userLeftItem'} onClick={handleThird}>
                  <div className='userLeftItemIMG'>
                    <img src={Person3} alt='Error' className='userLeftItemIMGPNG' />
                  </div>

                  <div className='userLeftItemText'>
                    <div className='userLeftItemTextHeader'>Hande K.</div>
                    <div className='userLeftItemTextAbout'>Sales Team Leader</div>
                  </div>
                </div>
              </div>
            </div>

            <div className='userRight'>
              <div className='userTitle'>
                {one
                  ? 'Andrea ist sehr lösungsorientiert'
                  : two
                  ? 'Andrea Solèr unterstützt uns'
                  : 'Andrea Solèr unterstützt uns '}
              </div>
              <Stars className='userRightStar' />
              <div className='userRightText'>
                {one ? (
                  <>
                    Andrea ist sehr lösungsorientiert, flexibel und kann auch weiterhelfen bei Themen welche nicht
                    nur die Buchhaltung betreffen. Sie hat ein breites und fundiertes Wissen und hat uns auch bei
                    Personalthemen (Jobinseraten, Arbeitszeugnissen, usw.)
                    <br />
                    <br /> Sowie auch bei Versicherungsthemen sehr weitergeholfen. Ich kann Andrea nur empfehlen
                    für alle, welche sich auf Ihr Kerngeschäft konzentrieren möchten und den Rest in guten Händen
                    wissen wollen.
                  </>
                ) : two ? (
                  <>
                    Andrea Solèr unterstützt uns schon seit der Firmengründung von A bis Z. Sie hat nicht nur die
                    ganze Gründung tatkräftig begleitet, sondern sich auch um alle administrativen Arbeiten und
                    Prozesse gekümmert. Sie hat also nicht nur das komplette Aufsetzen der Buchhaltung übernommen,
                    sondern sich z.B. auch um Arbeitsverträge, Personalreglement, Stellenausschreibungen,
                    Versicherungsthemen usw. gekümmert.
                    <br />
                    <br />
                    {
                      ' Andrea ist sich nicht zu schade, auch in Bereichen mit anzupacken welche welche nicht reine Treuhandaufgaben sind. Genau das, was ein KMU braucht --> Zuverlässig, speditiv und lösungsorientiert.'
                    }
                  </>
                ) : (
                  <>
                    Andrea Solèr unterstützt uns schon seit der Firmengründung von A bis Z. Sie hat nicht nur die
                    ganze Gründung tatkräftig begleitet, sondern sich auch um alle administrativen Arbeiten und
                    Prozesse gekümmert. Sie hat also nicht nur das komplette Aufsetzen der Buchhaltung übernommen,
                    sondern sich z.B. auch um Arbeitsverträge, Personalreglement, Stellenausschreibungen,
                    Versicherungsthemen usw. gekümmert.
                    <br />
                    <br />
                    {
                      ' Andrea ist sich nicht zu schade, auch in Bereichen mit anzupacken welche welche nicht reine Treuhandaufgaben sind. Genau das, was ein KMU braucht --> Zuverlässig, speditiv und lösungsorientiert.'
                    }
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
