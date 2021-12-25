/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0-alpha1): navbar.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

function setMsContainerPadding() {
  const fixedTop = document.querySelector('.fixed-top')

  if (fixedTop !== null) {
    const mRoot = document.querySelector('.m-root')
    if (mRoot !== null) {
      mRoot.style.setProperty('--navbar-fixed-top-height', `${fixedTop.offsetHeight}px`)
    }
  }
}

document.addEventListener('DOMContentLoaded', () => {
  setMsContainerPadding()

  window.addEventListener('resize', () => {
    setMsContainerPadding()
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
  })
})
