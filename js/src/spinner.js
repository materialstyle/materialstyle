/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): spinner.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'spinner'
const VERSION = '2.0.0'
const DATA_KEY = 'ms.spinner'
const JQUERY_NO_CONFLICT = $.fn[NAME]

class Spinner {
  constructor(element) {
    this._element = element
    this.initSpinner()
  }

  static get VERSION() {
    return VERSION
  }

  static _jQueryInterface() {
    return this.each(function () {
      const $element = $(this)
      let data = $element.data(DATA_KEY)

      if (!data) {
        data = new Spinner(this)
        $element.data(DATA_KEY, data)
      }
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

$.fn[NAME] = Spinner._jQueryInterface
$.fn[NAME].Constructor = Spinner
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return Spinner._jQueryInterface
}

export default Spinner
