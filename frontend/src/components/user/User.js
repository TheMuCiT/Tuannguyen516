import React, { useState } from 'react'

import { ReactComponent as Stars } from '../../icons/stars.svg'

import nieWiederPNg from '../../icons/nieWieder.png'

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

  const handleContactUs = () => {
    console.log('object')
    let Warum = document.getElementsByClassName('contactUsScroll')
    window.scroll({
      top: Warum[0].offsetTop - 100,
      behavior: 'smooth',
    })
  }

  return (
    <div className='componentFirst userAni'>
      <div className='componentSecond'>
        <div className='user'>
          <div className='nieWiederHeader'>
            <div className='nieWiederTitle'>Was meine Klient:innen über mich sagen</div>
            <img src={nieWiederPNg} alt='' className='nieWiederPNG' />
          </div>
          <div className='userMain'>
            <div className='userLeft'>
              <div className='userLeftList'>
                <div className={one ? 'userLeftItem selected' : 'userLeftItem'} onClick={handleFirst}>
                  <div className='userLeftItemIMG'>
                    <img
                      src='https://cdn.shopify.com/s/files/1/0558/8634/8336/files/sanitaerheld-donat_540x.jpg?v=1649074199'
                      alt='Error'
                      className='userLeftItemIMGPNG'
                    />
                  </div>

                  <div className='userLeftItemText'>
                    <div className='userLeftItemTextHeader'>Donat Bachofner</div>
                    <div className='userLeftItemTextAbout'>Geschäftsführer, Comfortfloor Schweiz AG</div>
                  </div>
                </div>
                <div className={two ? 'userLeftItem selected' : 'userLeftItem'} onClick={handleSecond}>
                  <div className='userLeftItemIMG'>
                    <img src='https://i.ibb.co/5v9Kz83/tuan.jpg' alt='Error' className='userLeftItemIMGPNG' />
                  </div>

                  <div className='userLeftItemText'>
                    <div className='userLeftItemTextHeader'>Tuan Nguyen</div>
                    <div className='userLeftItemTextAbout'>Leitung E-Commerce, Sanitär Schweiz GmbH</div>
                  </div>
                </div>
                <div className={three ? 'userLeftItem selected' : 'userLeftItem'} onClick={handleThird}>
                  <div className='userLeftItemIMG'>
                    <img
                      src='https://img.myloview.de/fototapeten/waist-up-portrait-of-mature-bald-man-smiling-at-camera-while-standing-with-arms-crossed-and-posing-confidently-leaning-against-wall-copy-space-700-197212859.jpg'
                      alt='Error'
                      className='userLeftItemIMGPNG'
                    />
                  </div>

                  <div className='userLeftItemText'>
                    <div className='userLeftItemTextHeader'>Henry Kramer</div>
                    <div className='userLeftItemTextAbout'>Geschäftsführer, EM Baununternehmung AG</div>
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
                      ' Andrea ist sich nicht zu schade, auch in Bereichen mit anzupacken welche welche nicht reine Treuhandaufgaben sind. Genau das, was ein KMU braucht: Zuverlässig, speditiv und lösungsorientiert.'
                    }
                  </>
                ) : (
                  <>
                    Andrea hat die Finanzbuchhaltung mehrerer Gesellschaften geführt. Zu Ihren Aufgaben gehörten:
                    Anlagenbuchhaltungen, MWST, Abschlusse, Steuererklärungen, Lohnbuchhaltung und Personalwesen.
                    Ebenfalls hat sie sich um die Kommunikation mit externen Parteien und allgemeine
                    Administrationsaufgaben gekümmert. Andrea ist bestens qualifiziert für diese Aufgaben und ist
                    in der Lage mit ihrem breiten Fachwissen und analytischem Denken angemessene Lösungen auf einem
                    professionellem Niveau umzusetzen. Auch in angespannten Situationen bleibt sie ruhig und
                    handelt besonnen und überlegt.
                    <br />
                    <br />
                    {
                      ' Wir attestieren Andrea eine hohe Effizienz und eine aussergewöhnliche Leistungsbereitschaft. Wir schätzen zudem ihre Loyalität, Vertrauenswürdigkeit und Diskretion.'
                    }
                  </>
                )}
              </div>
            </div>
          </div>
          <div className='deinFooterButton' onClick={handleContactUs}>
            Kostenloses Beratungsgespräch vereinbaren
          </div>
        </div>
      </div>
    </div>
  )
}

export default User
