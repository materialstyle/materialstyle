/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0-alpha1): spinner.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from 'bootstrap/js/src/base-component'
import {
  defineJQueryPlugin
} from 'bootstrap/js/src/util/index'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'spinner'
const VERSION = '3.0.0-alpha1'

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
    this._element.innerHTML = '<svg class="circular" viewBox="25 25 50 50">' +
      '<circle class="path" cx="50" cy="50" r="20" fill="none">' +
      '</svg>'
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Spinner)

export default Spinner
