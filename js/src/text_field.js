/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0-alpha1): text_field.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  getBaseColor, getPrimaryColor
} from '../src/utility.js'
import BaseComponent from 'bootstrap/js/src/base-component'
import {
  defineJQueryPlugin
} from 'bootstrap/js/src/util/index'

/**
 * --------------------------------------------------------------------------
 * Constants
 * --------------------------------------------------------------------------
 */

const NAME = 'textfield'
const VERSION = '3.0.0-alpha1'

const CLASS_NAME_TEXTFIELD = 'form-control'
const CLASS_NAME_TEXTFIELD_OUTLINE = '--outline'

const NOTCH_BEFORE_WIDTH = '.75rem'
const LABEL_SCALE = 0.85

class TextField extends BaseComponent {
  constructor(element) {
    super(element)
    this._element = element
    this._textField = element.querySelector(`.${CLASS_NAME_TEXTFIELD}`)

    if (this._textField) {
      this._isOutlineVariant = this._textField.className.includes(CLASS_NAME_TEXTFIELD_OUTLINE)

      this._element.style.setProperty('--text-field-base-color', getBaseColor(element))
      this._element.style.setProperty('--text-field-primary-color', getPrimaryColor(element))

      this._label = element.querySelector('label')

      this._inputGroup = element.closest('.input-group')

      if (this._inputGroup) {
        this._prepend = this._inputGroup.querySelector('.prepend')
        this._append = this._inputGroup.querySelector('.append')
      }

      this.initTextFields()
      this.addFontsReadyEvent()
    }
  }

  static get NAME() {
    return NAME
  }

  static get VERSION() {
    return VERSION
  }

  static jQueryInterface(config) {
    return this.each(function () {
      const data = TextField.getOrCreateInstance(this)

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config](this)
      }
    })
  }

  initTextFields() {
    if (this._isOutlineVariant) {
      this.addNotch()
    } else {
      this.addRipple()
    }
  }

  redraw() {
    this.addFontsReadyEvent()
  }

  addRipple() {
    const ripple = document.createElement('div')
    ripple.className = 'm-line-ripple'

    this._ripple = ripple
    this._textField.after(ripple)
  }

  addNotch() {
    const notch = document.createElement('div')
    notch.className = 'm-notch'

    const notchBefore = document.createElement('div')
    notchBefore.className = 'm-notch-before'

    const notchBetween = document.createElement('div')
    notchBetween.className = 'm-notch-between'

    const notchAfter = document.createElement('div')
    notchAfter.className = 'm-notch-after'

    if (this._label !== null) {
      notchBetween.appendChild(this._label)
    }

    notch.appendChild(notchBefore)
    notch.appendChild(notchBetween)
    notch.appendChild(notchAfter)

    this._textField.after(notch)
    this._notch = notch

    if (this._label) {
      this._element.style.setProperty('--label-transformed-margin-right', `-${this._label.offsetWidth - this._label.offsetWidth * LABEL_SCALE}px`)
    }
  }

  addFontsReadyEvent() {
    document.fonts.ready.then(() => {
      if (this._inputGroup) {
        if (this._prepend) {
          this._element.style.setProperty('--prepend-width', `-${this._prepend.offsetWidth}px`)
          this._element.style.setProperty('--label-translate-x', `calc(${this._prepend.offsetWidth}px - ${NOTCH_BEFORE_WIDTH})`)
        }
        if (this._append) {
          this._element.style.setProperty('--append-width', `-${this._append.offsetWidth}px`)
        }
      }
    })
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(TextField)

export default TextField
