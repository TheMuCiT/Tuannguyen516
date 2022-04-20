import React from 'react'
import './animation.css'
const Animation = () => {
  window.onscroll = function () {
    if (window.location.pathname === '/') {
      scrollAnimation()
    }
  }

  const scrollAnimation = () => {
    let offset = 200
    let WindowsPosition = window.pageYOffset
    let windowBottomPosition = WindowsPosition + window.outerHeight
    let nieWieder = document.getElementsByClassName('nieWiederAni')
    let deineBC = document.getElementsByClassName('deineBC')
    let deinAni = document.getElementsByClassName('deinAni')
    let effizienzAni = document.getElementsByClassName('effizienzAni')
    let stepsAni = document.getElementsByClassName('stepsAni')
    let userAni = document.getElementsByClassName('userAni')
    let faqBC = document.getElementsByClassName('faqBC')

    let nieWiederPosition = windowBottomPosition - nieWieder[0].offsetTop - offset

    //opacity
    if (nieWieder[0].offsetTop < windowBottomPosition) {
      if (nieWiederPosition < 1) {
        nieWieder[0].style.opacity = nieWiederPosition
        nieWieder[0].style.transform = 'translateY(20%)'
      } else {
        nieWieder[0].style.opacity = 1
        nieWieder[0].style.transform = 'translateY(0%)'
      }
    } else {
      nieWieder[0].style.opacity = 0
    }

    let deineBCPosition = windowBottomPosition - deineBC[0].offsetTop - offset

    //opacity
    if (deineBC[0].offsetTop < windowBottomPosition) {
      if (deineBCPosition < 1) {
        deineBC[0].style.opacity = deineBCPosition
        deineBC[0].style.transform = 'translateY(20%)'
      } else {
        deineBC[0].style.opacity = 1
        deineBC[0].style.transform = 'translateY(0%)'
      }
    } else {
      deineBC[0].style.opacity = 0
    }

    let deinAniPosition = windowBottomPosition - deinAni[0].offsetTop - offset

    //opacity
    if (deinAni[0].offsetTop < windowBottomPosition) {
      if (deinAniPosition < 1) {
        deinAni[0].style.opacity = deinAniPosition
        deinAni[0].style.transform = 'translateY(20%)'
      } else {
        deinAni[0].style.opacity = 1
        deinAni[0].style.transform = 'translateY(0%)'
      }
    } else {
      deinAni[0].style.opacity = 0
    }

    let deineBC2Position = windowBottomPosition - deineBC[1].offsetTop - offset

    //opacity
    if (deineBC[1].offsetTop < windowBottomPosition) {
      if (deineBC2Position < 1) {
        deineBC[1].style.opacity = deineBC2Position
        deineBC[1].style.transform = 'translateY(20%)'
      } else {
        deineBC[1].style.opacity = 1
        deineBC[1].style.transform = 'translateY(0%)'
      }
    } else {
      deineBC[1].style.opacity = 0
    }

    let effizienzAniPosition = windowBottomPosition - effizienzAni[0].offsetTop - offset

    //opacity
    if (effizienzAni[0].offsetTop < windowBottomPosition) {
      if (effizienzAniPosition < 1) {
        effizienzAni[0].style.opacity = effizienzAniPosition
        effizienzAni[0].style.transform = 'translateY(20%)'
      } else {
        effizienzAni[0].style.opacity = 1
        effizienzAni[0].style.transform = 'translateY(0%)'
      }
    } else {
      effizienzAni[0].style.opacity = 0
    }

    let stepsAniPosition = windowBottomPosition - stepsAni[0].offsetTop - offset

    //opacity
    if (stepsAni[0].offsetTop < windowBottomPosition) {
      if (stepsAniPosition < 1) {
        stepsAni[0].style.opacity = stepsAniPosition
        stepsAni[0].style.transform = 'translateY(20%)'
      } else {
        stepsAni[0].style.opacity = 1
        stepsAni[0].style.transform = 'translateY(0%)'
      }
    } else {
      stepsAni[0].style.opacity = 0
    }

    let userAniPosition = windowBottomPosition - userAni[0].offsetTop - offset

    //opacity
    if (userAni[0].offsetTop < windowBottomPosition) {
      if (userAniPosition < 1) {
        userAni[0].style.opacity = userAniPosition
        userAni[0].style.transform = 'translateY(20%)'
      } else {
        userAni[0].style.opacity = 1
        userAni[0].style.transform = 'translateY(0%)'
      }
    } else {
      userAni[0].style.opacity = 0
    }

    let faqBCPosition = windowBottomPosition - faqBC[0].offsetTop - offset

    //opacity
    if (faqBC[0].offsetTop < windowBottomPosition) {
      if (faqBCPosition < 1) {
        faqBC[0].style.opacity = faqBCPosition
        faqBC[0].style.transform = 'translateY(20%)'
      } else {
        faqBC[0].style.opacity = 1
        faqBC[0].style.transform = 'translateY(0%)'
      }
    } else {
      faqBC[0].style.opacity = 0
    }
  }
  return <></>
}

export default Animation
