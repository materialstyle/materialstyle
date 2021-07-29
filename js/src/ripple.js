/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.2): ripple.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  defineJQueryPlugin,
  getElementFromSelector,
  isDisabled
} from 'bootstrap/js/src/util/index'
import EventHandler from 'bootstrap/js/src/dom/event-handler'
import BaseComponent from 'bootstrap/js/src/base-component'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'ripple'
const DATA_KEY = 'ms.ripple'
const EVENT_KEY = `.${DATA_KEY}`

const EVENT_MOUSEDOWN = `mousedown${EVENT_KEY}`
const EVENT_MOUSEUP = `mouseup${EVENT_KEY}`
const EVENT_MOUSEMOVE = `mousemove${EVENT_KEY}`

const DIVISOR = 2

class Ripple extends BaseComponent {
  constructor(element) {
    super(element)
    this._element = element
    this.addRipple()
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
      const data = Ripple.getOrCreateInstance(this)

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config](this)
      }
    })
  }

  addRipple() {
    const maxDimension = Math.max(
      this._element.offsetWidth,
      this._element.offsetHeight
    )

    const rippleContainer = document.createElement('div')
    rippleContainer.className = 'm-ripple-container'

    const ripple = document.createElement('span')
    ripple.className = 'm-ripple'
    ripple.style.width = `${maxDimension}px`
    ripple.style.height = `${maxDimension}px`

    rippleContainer.appendChild(ripple)

    if (this._element.querySelector('.m-ripple') === null) {
      this._element.appendChild(rippleContainer)
    }

    this._ripple = ripple
  }

  handleMouseDown(event) {
    this._ripple.classList.remove('animate')

    const elementPosition = this._element.getBoundingClientRect()

    const offset = {
      top: elementPosition.top + window.scrollY,
      left: elementPosition.left + window.scrollX
    }

    const x = event.pageX - offset.left - this._ripple.offsetWidth / DIVISOR
    const y = event.pageY - offset.top - this._ripple.offsetHeight / DIVISOR

    this._ripple.style.top = `${y}px`
    this._ripple.style.left = `${x}px`

    this._ripple.classList.remove('stop-animate')
    this._ripple.setAttribute('data-mousedown', 'true')
    this._ripple.setAttribute('data-animationstate', 'running')
    this._ripple.classList.add('animate')

    if (this._element.querySelector('.animate') !== null) {
      this._element.querySelector('.animate').addEventListener('animationend', (e) => {
        if (e.target.getAttribute('data-mousedown') === 'false') {
          e.target.classList.remove('animate')
        } else {
          e.target.setAttribute('data-animationstate', 'stopped')
        }
      })
    }
  }

  handleMouseUpMouseMove() {
    const animate = this._element.querySelector('.animate')

    if (animate !== null) {
      animate.setAttribute('data-mousedown', 'false')

      if (animate.getAttribute('data-animationstate') === 'stopped') {
        animate.classList.remove('animate')
      }
    }
  }

  redraw() {
    const maxDimension = Math.max(
      this._element.offsetWidth,
      this._element.offsetHeight
    )

    this._ripple.style.width = `${maxDimension}px`
    this._ripple.style.height = `${maxDimension}px`
  }

  _setListeners() {
    EventHandler.on(this._element, EVENT_MOUSEDOWN, event => this.handleMouseDown(event))
    EventHandler.on(this._element, EVENT_MOUSEUP, () => this.handleMouseUpMouseMove())
    EventHandler.on(this._element, EVENT_MOUSEMOVE, () => this.handleMouseUpMouseMove())
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Ripple)

export default Ripple
