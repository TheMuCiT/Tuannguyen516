import React, { useEffect, useState } from 'react'

import { ReactComponent as MobileMenu } from '../../icons/MobileMenu.svg'
import { ReactComponent as Close } from '../../icons/Close.svg'

import './navbar.css'
import './contactUs.css'

const Navbar = () => {
  const [form, setForm] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [sent, setSent] = useState(false)

  const [Enter, setEnter] = useState(false)

  const [validName, setValidName] = useState(true)
  const [validEmail, setValidEmail] = useState(true)
  const [validMessage, setValidMessage] = useState(true)

  const [Mobile, setMobile] = useState(false)
  useEffect(() => {
    WindowChange()
  }, [])

  const HandleMobileMenu = () => {
    setMobile(!Mobile)
  }

  const WindowChange = () => {
    if (window.innerWidth > 1050) {
      setMobile(false)
    }
  }

  const handleAbout = () => {
    let About = document.getElementsByClassName('nieWiederAni')
    window.scroll({
      top: About[0].offsetTop - 100,
      behavior: 'smooth',
    })
  }
  const handleWarum = () => {
    let Warum = document.getElementsByClassName('deineBC')
    window.scroll({
      top: Warum[0].offsetTop - 100,
      behavior: 'smooth',
    })
  }
  const handleDienstleistungen = () => {
    let Dienstleistungen = document.getElementsByClassName('deinAni')
    window.scroll({
      top: Dienstleistungen[0].offsetTop - 100,
      behavior: 'smooth',
    })
  }
  const handleArbeitsablauf = () => {
    let Arbeitsablauf = document.getElementsByClassName('deineBC')
    window.scroll({
      top: Arbeitsablauf[1].offsetTop - 100,
      behavior: 'smooth',
    })
  }
  const handleWerte = () => {
    let Werte = document.getElementsByClassName('effizienzAni')
    window.scroll({
      top: Werte[0].offsetTop - 100,
      behavior: 'smooth',
    })
  }
  const handleFAQs = () => {
    let FAQs = document.getElementsByClassName('faqBC')
    window.scroll({
      top: FAQs[0].offsetTop,
      behavior: 'smooth',
    })
  }

  const handleSchedule = () => {
    setForm(!form)
  }

  useEffect(() => {
    if (validEmail && validMessage && validName) {
      SendEmail()
    }
    //eslint-disable-next-line
  }, [validEmail, validName, validMessage, Enter])

  useEffect(() => {
    setTimeout(() => {
      if (sent) {
        setSent(false)
      }
    }, 2000)
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
    setSent(false)
    setEnter(!Enter)
  }

  const SendEmail = () => {
    if (name.length === 0 && email.length === 0 && message.length === 0) {
      setValidEmail(true)
      setValidMessage(true)
      setValidName(true)
      return
    }
    /*const value = {
      name: name,
      email: email,
      message: message,
    }*/
    setName('')
    setEmail('')
    setMessage('')

    /*emailjs.send('gmail', 'template_b47m5vw', value).then(
      function (response) {
        console.log('SUCCESS!', response.status, response.text)
        setSent(true)
      },
      function (err) {
        console.log('FAILED...', err)
      }
    )*/
  }

  window.addEventListener('resize', WindowChange)
  return (
    <>
      <div className='navbar'>
        <div className='navbarMobile'>
          <div className='navbarCenterIcon'>
            <div className='navbarMobileTopRight'>Life of Circle</div>
          </div>
        </div>
        <div className='navbarMobileButton'>
          <MobileMenu className={Mobile ? 'Mobile' : 'Mobile'} onClick={HandleMobileMenu} />
          <div className={Mobile ? 'navbarMobileContainerActive' : 'navbarMobileContainer'}>
            <div className={Mobile ? 'navbarMenu active' : 'navbarMenu'}>
              <div className='navbarMenuContainer'>
                <div className='navbarMobileTop'>
                  <div className='navbarMobileTopRight menuOpen'>Life of Circle</div>
                  <div className='navbarMobileTopLeft'>
                    <Close className='CloseIcon' onClick={HandleMobileMenu} />
                  </div>
                </div>
                <div className='navbarMobileMain'>
                  <div className='navbarCenterLink opacity7' onClick={handleAbout}>
                    About
                  </div>
                  <div className='navbarCenterLink opacity7' onClick={handleWarum}>
                    Warum Wir
                  </div>
                  <div className='navbarCenterLink opacity7' onClick={handleDienstleistungen}>
                    Dienstleistungen
                  </div>
                  <div className='navbarCenterLink opacity7' onClick={handleArbeitsablauf}>
                    Arbeitsablauf
                  </div>
                  <div className='navbarCenterLink opacity7' onClick={handleWerte}>
                    Werte
                  </div>
                  <div className='navbarCenterLink opacity7' onClick={handleFAQs}>
                    FAQs
                  </div>
                  <div className='navbarCenterLink navbarRightButton'>Schedule Video Call</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='navbarContainer'>
          <div className='navbarLeft'>
            <div className='navbarLeftLogo'>Life of Circle</div>
          </div>
          <div className='navbarCenter'>
            <div className='navbarCenterItem' onClick={handleAbout}>
              About
            </div>
            <div className='navbarCenterItem' onClick={handleWarum}>
              Warum Wir
            </div>
            <div className='navbarCenterItem' onClick={handleDienstleistungen}>
              Dienstleistungen
            </div>
            <div className='navbarCenterItem' onClick={handleArbeitsablauf}>
              Arbeitsablauf
            </div>
            <div className='navbarCenterItem' onClick={handleWerte}>
              Werte
            </div>
            <div className='navbarCenterItem' onClick={handleFAQs}>
              FAQs
            </div>
          </div>
          <div className='navbarRight'>
            <div className='navbarRightButton' onClick={handleSchedule}>
              Schedule Video Call
            </div>
          </div>
        </div>
      </div>
      {form && (
        <>
          <div className='fromBC' />
          <div className='mainContactUsForm'>
            <div className='formHeader'>
              <div className='formHeaderLeft'></div>
              <div className='formHeaderCenter'>Life of Circle</div>
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
                    'Full Name*'
                  ) : (
                    <>
                      Full Name* <span className='contactUsNotValidValue'> Name to short</span>
                    </>
                  )}
                </div>
                <div
                  className={validName ? 'mainContactUsFormInputBox' : 'mainContactUsFormInputBox contactBorder'}
                >
                  <input
                    type='text'
                    placeholder='Full Name'
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
                    'Email*'
                  ) : (
                    <>
                      Email*<span className='contactUsNotValidValue'> Wrong email address</span>
                    </>
                  )}
                </div>
                <div
                  className={validEmail ? 'mainContactUsFormInputBox' : 'mainContactUsFormInputBox contactBorder'}
                >
                  <input
                    type='email'
                    placeholder='Your email'
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
                {validMessage ? (
                  'Message*'
                ) : (
                  <>
                    Message*
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
                  placeholder='Message'
                  className='contactUsInput'
                  name='message'
                  value={message}
                  onChange={(event) => setMessage(event.target.value)}
                />
              </div>
            </div>
            <div className='contactUsButton'>
              <div className='contactUsButtonContainer' onClick={handleApply}>
                Submit
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )
}

export default Navbar
