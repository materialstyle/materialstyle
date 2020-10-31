/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): drawer.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * Constants
 * --------------------------------------------------------------------------
 */

const NAME = 'drawer'
const VERSION = '2.0.0'
const DATA_KEY = 'ms.drawer'
const JQUERY_NO_CONFLICT = $.fn[NAME]

const CLASS_NAME_VISIBLE = 'drawer-visible'
const CLASS_NAME_SWITCHED = '--switched'
const CLASS_NAME_FIXED = 'drawer-fixed'
const CLASS_SHADE = 'm-shade'
const TOGGLE_AT_WIDTH = 1280

class Drawer {
  constructor(element) {
    this._element = element
    this._shade = this.createShade()
    this._hamburger = document.querySelector('.drawer-toggle')
    this._drawerHeader = element.querySelector('.drawer-header')
    this._footer = document.querySelector('footer')
    this._navBar = document.querySelector('.navbar')

    this.initDrawer()
    this.addEventListeners()
  }

  static get VERSION() {
    return VERSION
  }

  static _jQueryInterface() {
    return this.each(function () {
      const $element = $(this)
      let data = $element.data(DATA_KEY)

      if (!data) {
        data = new Drawer(this)
        $element.data(DATA_KEY, data)
      }
    })
  }

  createShade() {
    if (document.querySelector(`.${CLASS_SHADE}`) === null) {
      const shade = document.createElement('div')
      shade.className = CLASS_SHADE
      shade.style.display = 'none'
      document.querySelector('body').append(shade)

      return shade
    }

    return document.querySelector(`.${CLASS_SHADE}`)
  }

  initDrawer() {
    if (this._element.className.includes(CLASS_NAME_VISIBLE) && this._element.className.includes(CLASS_NAME_FIXED)) {
      const fixedSideNavBg = this._element.className.match(/bg-[^\s]+/)

      const fixed = document.createElement('div')
      fixed.className = `m-fixed ${fixedSideNavBg}`

      const children = this._element.childNodes

      for (const [, value] of Object.entries(children)) {
        fixed.appendChild(value)
      }

      this._element.appendChild(this._drawerHeader)
      this._element.appendChild(fixed)

      this._fixed = fixed
    }

    let navbarHeight = '56px'
    if (this._navBar !== null) {
      navbarHeight = this._navBar.offsetHeight
    }

    if (this._drawerHeader !== null) {
      this._drawerHeader.style.height = `${navbarHeight}px`
    }

    if (this._element.className.includes(CLASS_NAME_FIXED) && this._fixed !== null) {
      this._fixed.style.top = `${navbarHeight}px`
      this._fixed.style.height = `calc(100vh - ${navbarHeight}px)`
    }

    if (this._element.className.includes(CLASS_NAME_VISIBLE)) {
      this.toggle()
    }
  }

  show() {
    this._shade.style.display = 'block'
    this._element.style.left = 0
  }

  hide() {
    this._shade.style.display = 'none'

    if (!this._element.className.includes(CLASS_NAME_VISIBLE)) {
      this._element.style.left = '-350px'
    }
  }

  toggle() {
    if ($(window).innerWidth() < TOGGLE_AT_WIDTH) {
      if (this._element.className.includes(CLASS_NAME_VISIBLE)) {
        this._element.classList.add(CLASS_NAME_SWITCHED)
        this._element.classList.remove(CLASS_NAME_VISIBLE)
        this._element.style.left = '-350px'
      }

      this._shade.style.display = 'none'

      if (this._hamburger !== null) {
        this._hamburger.style.display = 'block'
      }

      if (this._footer !== null) {
        this._footer.style.marginLeft = 0
      }
    } else {
      if (this._element.className.includes(CLASS_NAME_SWITCHED)) {
        this._element.classList.remove(CLASS_NAME_SWITCHED)
        this._element.classList.add(CLASS_NAME_VISIBLE)
        this._element.style.left = 0
      }

      if (this._hamburger !== null) {
        this._hamburger.style.display = 'none'
      }

      if (this._footer !== null && this._element.className.includes(CLASS_NAME_VISIBLE) && this._element.className.includes(CLASS_NAME_FIXED)) {
        this._footer.style.marginLeft = '250px'
      }
    }
  }

  addEventListeners() {
    this._hamburger.addEventListener('click', () => this.show())

    document.addEventListener('click', (event) => {
      if (event.target !== this._element &&
        event.target !== this._hamburger &&
        !this._element.contains(event.target)
      ) {
        this.hide()
      }
    })

    const links = this._element.querySelectorAll('.nav-link')

    for (const [, value] of Object.entries(links)) {
      let show = true

      value.addEventListener('click', (event) => {
        const subMenuContainer = event.target.closest('.nav-item').nextElementSibling
        let subMenu = null

        if (subMenuContainer !== null) {
          subMenu = subMenuContainer.querySelector('.sub-menu')
        }

        if (subMenu !== null) {
          const subMenuHeight = subMenu.offsetHeight

          if (show) {
            subMenu.style.marginTop = 0
            show = false

            if (event.target.className.includes('sub-menu-link')) {
              event.target.querySelector('.material-icons').innerHTML = 'keyboard_arrow_up'
            }
          } else {
            subMenu.style.marginTop = `-${subMenuHeight}px`
            show = true

            if (event.target.className.includes('sub-menu-link')) {
              event.target.querySelector('.material-icons').innerHTML = 'keyboard_arrow_down'
            }
          }
        }

        if (!event.target.className.includes('sub-menu-link')) {
          this.hide()
        }
      })
    }

    window.addEventListener('resize', () => {
      if (this._element.className.includes(CLASS_NAME_VISIBLE) || this._element.className.includes(CLASS_NAME_SWITCHED)) {
        this.toggle()
      }

      let navbarHeight = '56px'
      if (this._navBar !== null) {
        navbarHeight = this._navBar.offsetHeight
      }

      if (this._drawerHeader !== null) {
        this._drawerHeader.style.height = `${navbarHeight}px`
      }

      if (this._fixed !== null && this._fixed !== undefined) {
        this._fixed.style.top = `${navbarHeight}px`
        this._fixed.style.height = `calc(100vh - ${navbarHeight}px)`
      }
    })

    this._element.querySelector('.drawer-close-btn').addEventListener('click', () => {
      this.hide()
    })

    if (this._element.querySelector('.nav-link.active') !== null && this._element.querySelector('.nav-link.active').closest('.sub-menu-container') !== null) {
      this._element.querySelector('.nav-link.active').closest('.sub-menu-container').previousElementSibling.querySelector('.sub-menu-link').click()
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = Drawer._jQueryInterface
$.fn[NAME].Constructor = Drawer
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return Drawer._jQueryInterface
}

export default Drawer

$(() => {
  $('.drawer').drawer()
})
