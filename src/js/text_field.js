/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): text_field.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  getAccentColor, getPrimaryColor
} from '../js/utility.js'

import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * Constants
 * --------------------------------------------------------------------------
 */

const NAME = 'textfield'
const VERSION = '2.0.0'
const DATA_KEY = 'ms.textfield'
const JQUERY_NO_CONFLICT = $.fn[NAME]

const CLASS_NAME_TEXTFIELD = 'ms-text-field'
const CLASS_NAME_TEXTFIELD_OUTLINE = 'ms-text-field-outline'

const CLASS_NAME_STATIC_LABEL = 'static-label'
const CLASS_NAME_FLOATING_LABEL = 'floating-label'
const CLASS_NAME_FLOATING_LABEL_ACTIVE = 'floating-label-active'

const FLOATING_LABEL_SCALE = 0.75
const NOTCH_BETWEEN_PADDING_SUM = 10
const NOTCH_BETWEEN_PADDING_LEFT = 5
const NOTCH_BEFORE_WIDTH = 12

class TextField {
  constructor(element) {
    this._element = element
    this._textField = element.querySelector('.form-control')
    this._textFieldClass = element.className.includes(CLASS_NAME_TEXTFIELD_OUTLINE) ? CLASS_NAME_TEXTFIELD_OUTLINE : CLASS_NAME_TEXTFIELD
    this._inputLength = this._textField.value.length

    this._primaryColor = getPrimaryColor(element)
    this._accentColor = getAccentColor(element)

    this._label = element.querySelector('label')
    this._labelClass = ''

    if (this._label !== null) {
      this._labelClass = this._label.className.includes(CLASS_NAME_FLOATING_LABEL) ? CLASS_NAME_FLOATING_LABEL : CLASS_NAME_STATIC_LABEL
    }

    this._prepend = element.querySelector('.prepend')
    this._append = element.querySelector('.append')

    this.initTextFields()
    this.addEventListeners()
  }

  static get VERSION() {
    return VERSION
  }

  static _jQueryInterface(config) {
    return this.each(function () {
      const $element = $(this)
      let data = $element.data(DATA_KEY)
      let shouldRedraw = true

      if (!data) {
        shouldRedraw = false

        data = new TextField(this)
        $element.data(DATA_KEY, data)

        data._element.style.visibility = 'visible'
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        } else if (config === 'redraw' && shouldRedraw) {
          data[config]()
        }
      }
    })
  }

  initTextFields() {
    if (this._textFieldClass === CLASS_NAME_TEXTFIELD) {
      this.addRipple()
    } else {
      this.addNotch()
    }

    this.setAddonHeight()

    if (this._label !== null) {
      this.initLabel()
    }
  }

  redraw() {
    this.setAddonHeight()

    if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
      this._notch.style.height = `${this._textField.offsetHeight}px`
      this._notchBetween.style.width = `${this._label.offsetWidth * FLOATING_LABEL_SCALE + NOTCH_BETWEEN_PADDING_SUM}px`
    }
  }

  addRipple() {
    const ripple = document.createElement('div')
    ripple.className = 'ms-line-ripple'
    ripple.style.backgroundImage =
      `linear-gradient(${this._accentColor}, ${this._accentColor}), ` +
      `linear-gradient(${this._primaryColor}, ${this._primaryColor})`

    this._ripple = ripple
    this._textField.after(ripple)
  }

  setAddonHeight() {
    if (this._prepend !== null) {
      this._prepend.style.height = `${this._textField.offsetHeight}px`
      this._textField.style.paddingLeft = `${this._prepend.offsetWidth}px`
    }

    if (this._append !== null) {
      this._append.style.height = `${this._textField.offsetHeight}px`
      this._textField.style.paddingRight = `${this._append.offsetWidth}px`
    }
  }

  addNotch() {
    const notch = document.createElement('div')
    notch.className = 'ms-notch'
    notch.style.height = `${this._textField.offsetHeight}px`

    const notchBefore = document.createElement('div')
    notchBefore.className = 'ms-notch-before'
    notchBefore.style.borderColor = this._primaryColor

    const notchBetween = document.createElement('div')
    notchBetween.className = 'ms-notch-between width-auto'
    notchBetween.style.borderColor = this._primaryColor

    if (this._label === null) {
      notchBetween.style.padding = 0
    } else {
      notchBetween.style.width = `${this._label.offsetWidth * FLOATING_LABEL_SCALE + NOTCH_BETWEEN_PADDING_SUM}px`

      if (this._labelClass === CLASS_NAME_STATIC_LABEL) {
        notchBetween.style.borderTopWidth = 0
      }

      notchBetween.appendChild(this._label)
    }

    const notchAfter = document.createElement('div')
    notchAfter.className = 'ms-notch-after'
    notchAfter.style.borderColor = this._primaryColor

    notch.appendChild(notchBefore)
    notch.appendChild(notchBetween)
    notch.appendChild(notchAfter)

    this._element.insertBefore(notch, this._textField)

    this._notch = notch
    this._notchBefore = notchBefore
    this._notchBetween = notchBetween
    this._notchAfter = notchAfter
  }

  initLabel() {
    this.setLabelColor()
    this.setLabelPosition()
  }

  setLabelColor() {
    if (this._inputLength) {
      this._label.style.color = this._accentColor

      if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
        this._notchBetween.style.borderTopWidth = 0
      }
    } else {
      this._label.style.color = this._primaryColor

      if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE &&
        this._labelClass === CLASS_NAME_FLOATING_LABEL
      ) {
        this._notchBetween.style.borderTopWidth = '1px'
      }
    }
  }

  setLabelPosition() {
    if (this._labelClass === CLASS_NAME_FLOATING_LABEL) {
      if (this._inputLength) {
        this._label.classList.remove(CLASS_NAME_FLOATING_LABEL)
        this._label.classList.add(CLASS_NAME_FLOATING_LABEL_ACTIVE)

        if (this._prepend !== null) {
          if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
            this._label.style.transform = `translate(0, -0.5rem) scale(${FLOATING_LABEL_SCALE})`
          } else {
            this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 0.5rem) scale(${FLOATING_LABEL_SCALE})`
          }
        }
      } else {
        this._label.classList.remove(CLASS_NAME_FLOATING_LABEL_ACTIVE)
        this._label.classList.add(CLASS_NAME_FLOATING_LABEL)

        if (this._prepend !== null) {
          if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
            this._label.style.transform = `translate(${this._prepend.offsetWidth - (NOTCH_BEFORE_WIDTH + NOTCH_BETWEEN_PADDING_LEFT)}px, 1.2rem)`
          } else {
            this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 1.2rem)`
          }
        }
      }
    } else if (this._prepend !== null) {
      if (this._textFieldClass === CLASS_NAME_TEXTFIELD) {
        this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 0.5rem) scale(${FLOATING_LABEL_SCALE})`
      }
    }
  }

  handleFocus() {
    this._element.classList.add('active')

    if (this._label !== null) {
      this._label.style.color = this._accentColor
      this._label.classList.remove(CLASS_NAME_FLOATING_LABEL)
      this._label.classList.add(CLASS_NAME_FLOATING_LABEL_ACTIVE)

      if (this._prepend !== null) {
        if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
          this._label.style.transform = `translate(0, -0.5rem) scale(${FLOATING_LABEL_SCALE})`
        } else {
          this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 0.5rem) scale(${FLOATING_LABEL_SCALE})`
        }
      }
    }

    if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
      this._textField.style.borderColor = this._accentColor
      this._textField.style.boxShadow = `inset 0 0 1px 1px ${this._accentColor}`

      this._notchBetween.style.borderTopWidth = 0
      this._notch.classList.add('notch-active')
      this._notchBefore.style.borderColor = this._accentColor
      this._notchBetween.style.borderColor = this._accentColor
      this._notchAfter.style.borderColor = this._accentColor
    }
  }

  handleFocusOut() {
    this._element.classList.remove('active')

    if (this._label !== null) {
      this.setLabelColor()
      this.setLabelPosition()
    }

    if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
      this._textField.style.borderColor = this._primaryColor
      this._textField.style.boxShadow = 'none'
      this._notch.classList.remove('notch-active')
      this._notchBefore.style.borderColor = this._primaryColor
      this._notchBetween.style.borderColor = this._primaryColor
      this._notchAfter.style.borderColor = this._primaryColor
    }
  }

  addEventListeners() {
    $(this._textField).on('change', () => {
      this._inputLength = this._textField.value.length
    })

    $(this._textField).on('focus', () => {
      this.handleFocus()
    })

    $(this._textField).on('focusout', () => {
      this.handleFocusOut()
    })

    $(this._label).add(this._prepend).add(this._append).on('click', () => {
      this._textField.focus()
    })
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = TextField._jQueryInterface
$.fn[NAME].Constructor = TextField
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return TextField._jQueryInterface
}

export default TextField
