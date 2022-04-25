/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0-alpha1): rainbow.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from './base-component'
import EventHandler from './dom/event-handler'
import SelectorEngine from './dom/selector-engine'
import {
  defineJQueryPlugin
} from './util/index'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'rainbow'
const VERSION = '3.0.0-alpha1'
const DATA_KEY = 'bs.rainbow'
const EVENT_KEY = `.${DATA_KEY}`
const DATA_API_KEY = '.data-api'
const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`

class Rainbow extends BaseComponent {
  constructor(element) {
    super(element)
    this._element = element
    this.initRainbow()
  }

  static get NAME() {
    return NAME
  }

  static get VERSION() {
    return VERSION
  }

  static jQueryInterface() {
    return this.each(function () {
      Rainbow.getOrCreateInstance(this)
    })
  }

  initRainbow() {
    const colorBars = this._element.querySelectorAll('.color-bar')
    const barCount = colorBars.length

    for (let i = 0; i < barCount; i++) {
      colorBars[i].style.animation = `m-rainbow ${barCount}s cubic-bezier(0.165, 0.84, 0.44, 1) ${i}s infinite`
    }
  }
}

EventHandler.on(window, EVENT_LOAD_DATA_API, () => {
  for (const el of SelectorEngine.find('.progress-bar-rainbow')) {
    Rainbow.getOrCreateInstance(el)
  }
})

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Rainbow)

export default Rainbow
