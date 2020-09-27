/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): navbar.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

function setMsContainerPadding() {
  const fixedTop = document.querySelector('.fixed-top')
  const containerPadding = 15

  if (fixedTop !== null) {
    const msContainer = document.querySelector('.m-container')
    if (msContainer !== null) {
      msContainer.style.paddingTop = `${fixedTop.offsetHeight + containerPadding}px`
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
