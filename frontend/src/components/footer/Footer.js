import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import emailjs from '@emailjs/browser'

import { ReactComponent as Close } from '../../icons/Close.svg'

import './footer.css'
const Footer = () => {
  let navigate = useNavigate()
  const handleWarum = () => {
    if (window.location.pathname === '/') {
      let Warum = document.getElementsByClassName('deineBC')
      window.scroll({
        top: Warum[0].offsetTop - 100,
        behavior: 'smooth',
      })
    } else {
      navigate('../', { replace: true })
    }
  }
  const handleDienstleistungen = () => {
    if (window.location.pathname === '/') {
      let Dienstleistungen = document.getElementsByClassName('deinAni')
      window.scroll({
        top: Dienstleistungen[0].offsetTop - 100,
        behavior: 'smooth',
      })
    } else {
      navigate('../', { replace: true })
    }
  }
  const handleArbeitsablauf = () => {
    if (window.location.pathname === '/') {
      let Arbeitsablauf = document.getElementsByClassName('deineBC')
      window.scroll({
        top: Arbeitsablauf[1].offsetTop - 100,
        behavior: 'smooth',
      })
    } else {
      navigate('../', { replace: true })
    }
  }
  const handleWerte = () => {
    if (window.location.pathname === '/') {
      let Werte = document.getElementsByClassName('effizienzAni')
      window.scroll({
        top: Werte[0].offsetTop - 100,
        behavior: 'smooth',
      })
    } else {
      navigate('../', { replace: true })
    }
  }
  const handleFAQs = () => {
    if (window.location.pathname === '/') {
      let FAQs = document.getElementsByClassName('faqBC')
      window.scroll({
        top: FAQs[0].offsetTop,
        behavior: 'smooth',
      })
    } else {
      navigate('../', { replace: true })
    }
  }

  const handleContactUs = () => {
    setForm(true)
  }

  const handlePrivacy = () => {
    navigate('../privacy')
  }

  const handleImprint = () => {
    navigate('../imprint')
  }

  const [form, setForm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [subject, setSubject] = useState('')

  const [sent, setSent] = useState(false)

  const [validName, setValidName] = useState(true)
  const [validEmail, setValidEmail] = useState(true)
  const [validMessage, setValidMessage] = useState(true)
  const [validSubject, setValidSubject] = useState(true)

  const handleSchedule = () => {
    setForm(!form)
  }

  useEffect(() => {
    if (validEmail && validMessage && validName && validSubject) {
      SendEmail()
    }
    //eslint-disable-next-line
  }, [validEmail, validName, validMessage, validSubject])

  useEffect(() => {
    setTimeout(() => {
      if (sent) {
        setSent(false)
      }
    }, 1000)
  }, [sent])

  const handleApply = (e) => {
    setValidName(false)
    const emailRegex = /\S+@\S+\.\S+/
    if (name.length < 2) {
      setValidName(false)
    } else {
      setValidName(true)
    }

    if (emailRegex.test(email)) {
      setValidEmail(true)
    } else {
      setValidEmail(false)
    }

    if (message.length < 10 || message.length > 150) {
      setValidMessage(false)
    } else {
      setValidMessage(true)
    }
    if (subject.length < 10 || message.length > 30) {
      setValidSubject(false)
    } else {
      setValidSubject(true)
    }

    setSent(false)
  }

  const SendEmail = () => {
    if (name.length === 0 && email.length === 0 && message.length === 0 && subject.length === 0) {
      setValidEmail(true)
      setValidMessage(true)
      setValidName(true)
      setValidSubject(true)
      return
    }
    const value = {
      name: name,
      email: email,
      message: message,
      subject: subject,
    }
    setName('')
    setEmail('')
    setMessage('')
    setSubject('')

    emailjs.send('service_2riiyyp', 'template_enncsum', value, '5AgxOxIqxk5lMtmL2').then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
        setSent(true)
        setForm(false)
      },
      function (err) {
        console.log('FAILED...', err)
      }
    )
  }

  return (
    <>
      <div className='footerBC componentFirst'>
        <div className='footerMain componentSecond'>
          <div className='footerMainLeft'>
            <div className='footerMainLeftLogo'>
              <div className='footerLogoContent'>
                <div className='footerLogoTitle'>Buchhaltung und Personal-Management f??r KMUs</div>
                <div className='footerLogoText'>
                  Konzentriere dich auf deine Kernkompetenzen ??? ich ??bernehme Buchhaltung, Personal-Management und
                  Administration.
                </div>
              </div>
            </div>
          </div>
          <div className='footerMainRight'>
            <div className='footerMainRightItem'>
              <div className='footerMainRightItemText' onClick={handleWarum}>
                Deine Vorteile
              </div>
              <div className='footerMainRightItemText' onClick={handleDienstleistungen}>
                Dienstleistungen
              </div>
              <div className='footerMainRightItemText' onClick={handleArbeitsablauf}>
                Arbeitsablauf
              </div>
              <div className='footerMainRightItemText' onClick={handleWerte}>
                ??ber mich
              </div>
              <div className='footerMainRightItemText' onClick={handleFAQs}>
                FAQs
              </div>
            </div>
            <div className='footerMainRightItem'>
              <div className='footerMainRightItemTitle'>Info</div>
              <div className='NoLink'>
                <div className='footerMainRightItemText' onClick={handlePrivacy}>
                  Datenschutz
                </div>
              </div>
              <div className='NoLink'>
                <div className='footerMainRightItemText' onClick={handleImprint}>
                  Impressum
                </div>
              </div>
              <div className='NoLink'>
                <div className='footerMainRightItemText' onClick={handleContactUs}>
                  Kontakt
                </div>
              </div>
            </div>
            <div className='footerMainRightItem'>
              <div className='footerMainRightItemTitle'>Kontakt</div>
              <div className='footerMainRightItemTextNo'>andrea.soler@finanzfachkraft.ch</div>
              <div className='footerMainRightItemTextNo'>+41 41 932 18 38</div>
              <div className='footerMainRightItemTextNo'>Bodenmatte 3, 6062 Wilen (Sarnen)</div>
            </div>
          </div>
        </div>
      </div>
      <div className='footerBC componentFirst'>
        <div className='footerMain2 componentSecond'>
          <div className='footerBottom'>
            <div className='footerBottomText'></div>
            <div className='footerBottomLeft'></div>
            <div className='footerBottomCenter'>
              <div className='footerBottomText'>?? finanzfachkraft.ch - Alle Reche vorbehalten </div>
            </div>
            <div className='footerBottomRight'></div>
          </div>
        </div>
      </div>
      {form && (
        <>
          <div className='fromBC' />
          <div className='mainContactUsForm'>
            <div className='formHeader'>
              <div className='formHeaderLeft'></div>
              <div className='formHeaderCenter'>Kontaktformular</div>
              <div className='formHeaderRight'>
                <div className='formClose' onClick={handleSchedule}>
                  <Close />
                </div>
              </div>
            </div>
            <div className='mainContactUsFormInputHalf'>
              <div className='mainContactUsFormInput'>
                <div className='mainContactUsFormInputTitle'>
                  {validName ? (
                    'Name*'
                  ) : (
                    <>
                      Name* <span className='contactUsNotValidValue'> Name to short</span>
                    </>
                  )}
                </div>
                <div
                  className={validName ? 'mainContactUsFormInputBox' : 'mainContactUsFormInputBox contactBorder'}
                >
                  <input
                    type='text'
                    placeholder='Name'
                    className='contactUsInput'
                    name='name'
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                  />
                </div>
              </div>
              <div className='mainContactUsFormInput'>
                <div className='mainContactUsFormInputTitle'>
                  {validEmail ? (
                    'E-Mail*'
                  ) : (
                    <>
                      E-Mail*<span className='contactUsNotValidValue'> Wrong email address</span>
                    </>
                  )}
                </div>
                <div
                  className={validEmail ? 'mainContactUsFormInputBox' : 'mainContactUsFormInputBox contactBorder'}
                >
                  <input
                    type='email'
                    placeholder='E-Mail'
                    className='contactUsInput'
                    name='email'
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className='mainContactUsFormInput'>
              <div className='mainContactUsFormInputTitle'>
                {validSubject ? (
                  'Betreff*'
                ) : (
                  <>
                    Betreff*
                    <span className='contactUsNotValidValue'>
                      {' '}
                      The subject should be between 10 and 30 symbols
                    </span>
                  </>
                )}
              </div>
              <div
                className={validSubject ? 'mainContactUsFormInputBox' : 'mainContactUsFormInputBox contactBorder'}
              >
                <input
                  type='text'
                  placeholder='In welchen Bereichen kann ich dir helfen?'
                  className='contactUsInput'
                  name='subject'
                  value={subject}
                  onChange={(event) => setSubject(event.target.value)}
                />
              </div>
            </div>
            <div className='mainContactUsFormInput'>
              <div className='mainContactUsFormInputTitle'>
                {validMessage ? (
                  'Nachricht*'
                ) : (
                  <>
                    Nachricht*
                    <span className='contactUsNotValidValue'>
                      {' '}
                      The message should be between 10 and 150 symbols
                    </span>
                  </>
                )}
              </div>
              <div
                className={
                  validMessage
                    ? 'mainContactUsFormInputBox mainMessage'
                    : 'mainContactUsFormInputBox mainMessage contactBorder'
                }
              >
                <textarea
                  type='text'
                  placeholder='Nachricht'
                  className='contactUsInput'
                  name='message'
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>
            </div>
            <div className='contactUsButton'>
              <div className='contactUsButtonContainer' onClick={handleApply}>
                Nachricht senden
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Footer
