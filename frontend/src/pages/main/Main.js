import React, { useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import Animation from '../../components/animation/Animation'

import Intro from '../../components/intro/Intro'
import NieWieder from '../../components/nieWieder/NieWieder'
import Deine from '../../components/deine/Deine'
import Dein from '../../components/dein/Dein'
import Deine2 from '../../components/deine/Deine2'
import Effizienz from '../../components/effizienz/Effizienz'
import Steps from '../../components/steps/Steps'
import User from '../../components/user/User'
import FAQ from '../../components/faq/FAQ'
import ContactUs from '../../components/navbar/ContactUs'

import './main.css'

const Main = () => {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return (
    <div className='main'>
      <Intro />
      <NieWieder />
      <Deine />
      <Dein />
      <Deine2 />
      <Effizienz />
      <Steps />
      <User />
      <FAQ />
      <ContactUs />
      <Animation />
    </div>
  )
}

export default Main
