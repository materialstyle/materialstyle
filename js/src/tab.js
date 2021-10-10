import 'bootstrap/js/src/tab'

/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0): tab.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  defineJQueryPlugin
} from 'bootstrap/js/src/util/index'
import EventHandler from 'bootstrap/js/src/dom/event-handler'
import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'tab'
const VERSION = '3.0.0'
const DATA_KEY = 'ms.tab'

const INDICATOR_HEIGHT = 2

class Tab extends BaseComponent {
  constructor(element) {
    super(element)
    this._element = element
    this.initTab()
    this._setListeners()
  }

  static get NAME() {
    return NAME
  }

  static get VERSION() {
    return VERSION
  }

  static jQueryInterface(config) {
    return this.each(function () {
      const data = Tab.getOrCreateInstance(this)

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }
        data[config]()
      }
    })
  }

  initTab() {
    let indicatorLeft = 0
    let indicatorTop = 0
    let indicatorWidth = 0

    let activeItem = this._element.querySelector('.nav-link.active')

    if (activeItem === null) {
      activeItem = this._element.querySelector('.nav-item')
    } else {
      activeItem = activeItem.closest('.nav-item')
    }

    if (activeItem !== null) {
      indicatorLeft = `${activeItem.offsetLeft}px`
      indicatorTop = `${activeItem.offsetTop + activeItem.offsetHeight - INDICATOR_HEIGHT}px`
      indicatorWidth = `${activeItem.offsetWidth}px`
    }

    const activeIndicator = document.createElement('span')
    activeIndicator.className = 'active-indicator'
    activeIndicator.style.left = indicatorLeft
    activeIndicator.style.top = indicatorTop
    activeIndicator.style.width = indicatorWidth

    this._activeIndicator = activeIndicator

    this._element.appendChild(activeIndicator)

    this._element.style.visibility = 'visible'
  }

  redraw() {
    this.setIndicatorPositionOnResize()
  }

  setIndicatorPosition(target) {
    this._activeIndicator.style.left = `${target.offsetLeft}px`
    this._activeIndicator.style.top = `${target.offsetTop + target.offsetHeight - INDICATOR_HEIGHT}px`
    this._activeIndicator.style.width = `${target.offsetWidth}px`
  }

  setIndicatorPositionOnResize() {
    let indicatorLeft = 0
    let indicatorTop = 0
    let indicatorWidth = 0

    let activeItem = this._element.querySelector('.nav-link.active')

    if (activeItem === null) {
      activeItem = this._element.querySelector('.nav-item')
    } else {
      activeItem = activeItem.closest('.nav-item')
    }

    if (activeItem !== null) {
      indicatorLeft = `${activeItem.offsetLeft}px`
      indicatorTop = `${activeItem.offsetTop + activeItem.offsetHeight - INDICATOR_HEIGHT}px`
      indicatorWidth = `${activeItem.offsetWidth}px`
    }

    this._activeIndicator.style.left = indicatorLeft
    this._activeIndicator.style.top = indicatorTop
    this._activeIndicator.style.width = indicatorWidth
  }

  _setListeners() {
    const navItems = this._element.querySelectorAll('.nav-item')

    for (const [, value] of Object.entries(navItems)) {
      EventHandler.on(value, 'mousedown', (event) => {
        this.setIndicatorPosition(value)
      })
    }

    EventHandler.on(window, 'resize', () => this.setIndicatorPositionOnResize())
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Tab)

export default Tab
