/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): ripple.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'ripple'
const VERSION = '2.0.0'
const DATA_KEY_RIPPLE = 'ms.ripple'
const JQUERY_NO_CONFLICT = $.fn[NAME]

class Ripple {
  constructor(element) {
    this._element = element
    this.addRipple()
    this.addEventListeners()
  }

  static get VERSION() {
    return VERSION
  }

  static _jQueryInterface() {
    return this.each(function () {
      const $element = $(this)
      let data = $element.data(DATA_KEY_RIPPLE)

      if (!data) {
        data = new Ripple(this)
        $element.data(DATA_KEY_RIPPLE, data)
      }
    })
  }

  addRipple() {
    let maxDimension = Math.max(
      this._element.offsetWidth,
      this._element.offsetHeight
    )

    let ripple = document.createElement('span')
    ripple.className = 'ms-ripple'
    ripple.style.width = maxDimension + 'px'
    ripple.style.height = maxDimension + 'px'

    if (this._element.querySelector('.ms-ripple') == null) {
      this._element.appendChild(ripple)
    }

    this._ripple = ripple
  }

  handleMouseDown(event) {
    this._ripple.classList.remove('animate')

    let elementPosition = this._element.getBoundingClientRect()

    let offset = {
      top: elementPosition.top + window.scrollY,
      left: elementPosition.left + window.scrollX
    }

    let x = event.pageX - offset.left - this._ripple.offsetWidth / 2
    let y = event.pageY - offset.top - this._ripple.offsetHeight / 2

    this._ripple.style.top = y + 'px'
    this._ripple.style.left = x + 'px'

    this._ripple.classList.remove('stop-animate')
    this._ripple.setAttribute('data-mousedown', 'true')
    this._ripple.setAttribute('data-animationstate', 'running')
    this._ripple.classList.add('animate')

    if (this._element.querySelector('.animate') != null) {
      this._element.querySelector('.animate').addEventListener('animationend', function (e) {
        if ('false' == e.target.getAttribute('data-mousedown')) {
          e.target.classList.remove('animate')
        } else {
          e.target.setAttribute('data-animationstate', 'stopped')
        }
      })
    }
  }

  handleMouseUpMouseMove() {
    let animate = this._element.querySelector('.animate')

    if (animate != null) {
      animate.setAttribute('data-mousedown', 'false')

      if ('stopped' == animate.getAttribute('data-animationstate')) {
        animate.classList.remove('animate')
      }
    }
  }

  addEventListeners() {
    $(this._element).on('mousedown', event => {
      this.handleMouseDown(event)
    })

    $(this._element).on('mouseup', () => {
      this.handleMouseUpMouseMove()
    })

    $(this._element).on('mousemove', () => {
      this.handleMouseUpMouseMove()
    })
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = Ripple._jQueryInterface
$.fn[NAME].Constructor = Ripple
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return Ripple._jQueryInterface
}

export default Ripple
