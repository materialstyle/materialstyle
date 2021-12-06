/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0-alpha1): drawer.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  defineJQueryPlugin
} from 'bootstrap/js/src/util/index'
import EventHandler from 'bootstrap/js/src/dom/event-handler'
import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * --------------------------------------------------------------------------
 * Constants
 * --------------------------------------------------------------------------
 */

const NAME = 'drawer'
const VERSION = '3.0.0-alpha1'
const DATA_KEY = 'ms.drawer'
const EVENT_KEY = `.${DATA_KEY}`

const EVENT_CLICK = `click${EVENT_KEY}`

const CLASS_NAME_AUTO_HIDE = 'auto-hide'
const CLASS_NAME_SWITCHED = '--switched'
const CLASS_BACKDROP = 'drawer-backdrop'
const TOGGLE_AT_WIDTH = 1280

class Drawer extends BaseComponent {
  constructor(element) {
    super(element)
    this._element = element
    this._backDrop = this.createBackDrop()
    this._drawerToggler = document.querySelector('.drawer-toggler')
    this._drawerHeader = element.querySelector('.drawer-header')
    this._drawerBody = element.querySelector('.drawer-body')

    this.initDrawer()
    this._setListeners()
  }

  static get NAME() {
    return NAME
  }

  static get VERSION() {
    return VERSION
  }

  static jQueryInterface() {
    return this.each(function () {
      Drawer.getOrCreateInstance(this)
    })
  }

  createBackDrop() {
    if (document.querySelector(`.${CLASS_BACKDROP}`) === null) {
      const backDrop = document.createElement('div')
      backDrop.className = CLASS_BACKDROP
      backDrop.style.display = 'none'
      document.querySelector('body').append(backDrop)

      return backDrop
    }

    return document.querySelector(`.${CLASS_BACKDROP}`)
  }

  initDrawer() {
    let drawerHeaderHeight = '100vh'
    if (this._drawerHeader !== null) {
      drawerHeaderHeight = this._drawerHeader.offsetHeight
    }

    if (this._drawerBody !== null) {
      this._drawerBody.style.height = `calc(100vh - ${drawerHeaderHeight}px)`
    }

    if (this._element.className.includes(CLASS_NAME_AUTO_HIDE)) {
      this.toggle()
    }
  }

  show() {
    this._backDrop.style.display = 'block'
    this._element.style.transform = 'none'
  }

  hide() {
    this._backDrop.style.display = 'none'

    if (!this._element.className.includes(CLASS_NAME_AUTO_HIDE)) {
      this._element.style.transform = 'translateX(-100%)'
    }
  }

  toggle() {
    if (window.innerWidth < TOGGLE_AT_WIDTH) {
      if (this._element.className.includes(CLASS_NAME_AUTO_HIDE)) {
        this._element.classList.add(CLASS_NAME_SWITCHED)
        this._element.classList.remove(CLASS_NAME_AUTO_HIDE)
        this._element.style.transform = 'translateX(-100%)'
      }

      this._backDrop.style.display = 'none'

      if (this._drawerToggler !== null) {
        this._drawerToggler.style.display = 'block'
      }
    } else {
      if (this._element.className.includes(CLASS_NAME_SWITCHED)) {
        this._element.classList.remove(CLASS_NAME_SWITCHED)
        this._element.classList.add(CLASS_NAME_AUTO_HIDE)
        this._element.style.transform = 'none'
      }

      if (this._drawerToggler !== null) {
        this._drawerToggler.style.display = 'none'
      }
    }
  }

  _setListeners() {
    EventHandler.on(this._drawerToggler, EVENT_CLICK, () => this.show())

    EventHandler.on(document, EVENT_CLICK, (event) => {
      if (event.target !== this._element &&
        event.target !== this._drawerToggler &&
        !this._element.contains(event.target)
      ) {
        this.hide()
      }
    })

    const links = this._element.querySelectorAll('.nav-link')

    for (const [, value] of Object.entries(links)) {
      if (!value.dataset.bsToggle) {
        value.addEventListener('click', (event) => {
          this.hide()
        })
      }
    }

    window.addEventListener('resize', () => {
      if (this._element.className.includes(CLASS_NAME_AUTO_HIDE) || this._element.className.includes(CLASS_NAME_SWITCHED)) {
        this.toggle()
      }
    })

    this._element.querySelector('.btn-close').addEventListener('click', () => {
      this.hide()
    })
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Drawer)

export default Drawer
