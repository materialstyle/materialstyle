/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0): spinner.js
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

const NAME = 'spinner'
const VERSION = '3.0.0'
const DATA_KEY = 'ms.spinner'

class Spinner extends BaseComponent {
  constructor(element) {
    super(element)
    this._element = element
    this.initSpinner()
  }

  static get NAME() {
    return NAME
  }

  static get VERSION() {
    return VERSION
  }

  static jQueryInterface() {
    return this.each(function () {
      Spinner.getOrCreateInstance(this)
    })
  }

  initSpinner() {
    this._element.innerHTML = '<div class="animate-loader">' +
      '<svg class="circular" viewBox="25 25 50 50">' +
      '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4">' +
      '</svg>' +
      '</div>'
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Spinner)

export default Spinner
