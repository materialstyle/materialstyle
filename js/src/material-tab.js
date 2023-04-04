/**
 * --------------------------------------------------------------------------
 * Material Style (v3.1.0-alpha1): material-tab.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import Tab from './tab.js'
import EventHandler from './dom/event-handler.js'
import {
  defineJQueryPlugin
} from './util/index.js'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'materialtab'
const VERSION = '3.1.0-alpha1'

const ENTER_KEY_CODE = 13
const SPACE_KEY_CODE = 32
const INDICATOR_HEIGHT = 2

class MaterialTab extends Tab {
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
      const data = MaterialTab.getOrCreateInstance(this)

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

    activeItem = activeItem === null ? this._element.querySelector('.nav-item') : activeItem.closest('.nav-item')

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

    this._element.append(activeIndicator)

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

    activeItem = activeItem === null ? this._element.querySelector('.nav-item') : activeItem.closest('.nav-item')

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
      EventHandler.on(value, 'mouseup', () => {
        this.setIndicatorPosition(value)
      })

      EventHandler.on(value, 'keyup', event => {
        if (event.code === 'Enter' || event.keyCode === ENTER_KEY_CODE ||
          event.code === 'Space' || event.keyCode === SPACE_KEY_CODE
        ) {
          this.setIndicatorPosition(value)
        }
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

defineJQueryPlugin(MaterialTab)

export default MaterialTab
