/**
 * --------------------------------------------------------------------------
 * Material Style (v3.1.0-alpha1): navbar.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

class Navbar {
  constructor() {
    this.addEventListeners()
  }

  setNavbarFixedHeight() {
    const navbarFixed = document.querySelector('.navbar[class*="fixed-"]')

    if (navbarFixed !== null) {
      document.body.style.setProperty('--navbar-fixed-height', `${navbarFixed.offsetHeight}px`)
    }
  }

  addEventListeners() {
    document.addEventListener('DOMContentLoaded', () => {
      this.setNavbarFixedHeight()
    })

    window.addEventListener('resize', () => {
      this.setNavbarFixedHeight()
    }, {
      passive: true
    })

    let prevScrollpos = window.pageYOffset
    window.addEventListener('scroll', () => {
      const currentScrollPos = window.pageYOffset

      if (prevScrollpos > currentScrollPos) {
        if (document.querySelector('.navbar.auto-hide')) {
          document.querySelector('.navbar.auto-hide').classList.remove('hide')
        }
      } else if (document.querySelector('.navbar.auto-hide')) {
        document.querySelector('.navbar.auto-hide').classList.add('hide')
      }

      prevScrollpos = currentScrollPos
    }, {
      passive: true
    })
  }
}

(() => new Navbar())()

export default Navbar
