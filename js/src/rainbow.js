/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0-alpha1): rainbow.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  defineJQueryPlugin
} from 'bootstrap/js/src/util/index'
import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'rainbow'
const VERSION = '3.0.0-alpha1'
const DATA_KEY = 'ms.rainbow'

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
    const colorBars = this._element.querySelectorAll('.m-bar')
    const barCount = colorBars.length

    for (let i = 0; i < barCount; i++) {
      colorBars[i].style.animation = `m-rainbow ${barCount}s cubic-bezier(0.165, 0.84, 0.44, 1) ${i}s infinite`
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Rainbow)

export default Rainbow
