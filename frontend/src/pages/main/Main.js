import React from 'react'
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

import './main.css'

const Main = () => {
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
      <Animation />
    </div>
  )
}

export default Main
