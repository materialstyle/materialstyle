/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): text_field.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'
import {getAccentColor, getPrimaryColor} from '../js/utility.js'

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

class TextField {
    constructor(element) {
        this._element = element
        this._inputField = element.querySelector('.form-control')
        this._inputFieldClass = element.className.includes(CLASS_NAME_TEXTFIELD_OUTLINE) ? CLASS_NAME_TEXTFIELD_OUTLINE : CLASS_NAME_TEXTFIELD
        this._inputValueLength = this._inputField.value.length

        this._primaryColor = getPrimaryColor(element)
        this._accentColor = getAccentColor(element)

        this._inputLabel = element.querySelector('label')
        this._inputLabelClass = ''

        if (this._inputLabel != null) {
            this._inputLabelClass = this._inputLabel.className.includes(CLASS_NAME_FLOATING_LABEL) ? CLASS_NAME_FLOATING_LABEL : CLASS_NAME_STATIC_LABEL
        }

        this._prepend = element.querySelector('.input-group-prepend')
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

                data['initTextFields']()

                $(data._inputField).on('change', function () {
                    data._inputValueLength = data._inputField.value.length
                })

                $(data._inputField).focus(function () {
                    data['handleFocus']()
                })

                $(data._inputField).focusout(function () {
                    data['handleFocusOut']()
                })

                $(data._inputLabel).on('click', function () {
                    if (data._inputLabel.className.includes(CLASS_NAME_FLOATING_LABEL)) {
                        data._inputField.focus()
                    }
                })

                data._element.style.visibility = 'visible'
            }

            if (config === 'redraw' && shouldRedraw) {
                data['reDrawTextFields']()
            }
        })
    }

    initTextFields() {
        this.addRippleOrBorder()
        this.addNotch()

        if (this._inputLabel != null) {
            this.initLabel()
        }
    }

    reDrawTextFields() {
        if (this._inputFieldClass == CLASS_NAME_TEXTFIELD_OUTLINE) {
            this._notch.style.height = this._inputField.offsetHeight + 'px'
            this._notchBetween.style.width = ((this._inputLabel.offsetWidth * 0.75) + 10) + 'px'
        }
    }

    addRippleOrBorder() {
        if (this._inputFieldClass === CLASS_NAME_TEXTFIELD) {
            let ripple = document.createElement('div')
            ripple.className = 'ms-line-ripple'
            ripple.style.backgroundImage =
                'linear-gradient(' + this._accentColor + ', ' + this._accentColor + '), ' +
                'linear-gradient(' + this._primaryColor + ', ' + this._primaryColor + ')'

            this._ripple = ripple

            if (this._inputField.closest('.input-group') !== null) {
                this._inputField.closest('.input-group').after(ripple)
            } else {
                this._inputField.after(ripple)
            }

        } else {
            this._inputField.style.borderColor = this._primaryColor
        }
    }

    addNotch() {
        if (this._inputFieldClass == CLASS_NAME_TEXTFIELD_OUTLINE) {
            let notch = document.createElement('div')
            notch.className = 'ms-notch'
            notch.style.height = this._inputField.offsetHeight + 'px'

            let notchBefore = document.createElement('div')
            notchBefore.className = 'ms-notch-before'
            notchBefore.style.borderColor = this._primaryColor

            let notchBetween = document.createElement('div')
            notchBetween.className = 'ms-notch-between width-auto'
            notchBetween.style.borderColor = this._primaryColor
            notchBetween.style.width = ((this._inputLabel.offsetWidth * 0.75) + 10) + 'px'

            if (this._inputLabel != null && this._inputLabelClass == CLASS_NAME_STATIC_LABEL) {
                notchBetween.style.borderTopWidth = 0
            }

            let notchAfter = document.createElement('div')
            notchAfter.className = 'ms-notch-after'
            notchAfter.style.borderColor = this._primaryColor

            // Wrap notchBetween around label
            this._inputLabel.parentNode.insertBefore(notchBetween, this._inputLabel)
            notchBetween.appendChild(this._inputLabel)

            // Wrap notch around notchBefore, notchBetween and notchAfter
            notchBetween.parentNode.insertBefore(notchBefore, notchBetween)
            notchBetween.parentNode.insertBefore(notchAfter, notchBetween)
            notchBetween.parentNode.insertBefore(notch, notchBetween)

            notch.appendChild(notchBefore)
            notch.appendChild(notchBetween)
            notch.appendChild(notchAfter)

            this._notch = notch
            this._notchBefore = notchBefore
            this._notchBetween = notchBetween
            this._notchAfter = notchAfter
        }
    }

    initLabel() {
        this.setLabelColor()
        this.setLabelPosition()
    }

    setLabelColor() {
        if (this._inputValueLength) {
            this._inputLabel.style.color = this._accentColor

            if (this._inputFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
                this._notchBetween.style.borderTopWidth = 0
            }
        } else {
            this._inputLabel.style.color = this._primaryColor

            if (this._inputFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE
                && this._inputLabelClass == CLASS_NAME_FLOATING_LABEL
            ) {
                this._notchBetween.style.borderTopWidth = '1px'
            }
        }
    }

    setLabelPosition() {
        if (this._inputLabelClass === CLASS_NAME_FLOATING_LABEL) {
            if (this._inputValueLength) {
                this._inputLabel.classList.remove(CLASS_NAME_FLOATING_LABEL)
                this._inputLabel.classList.add(CLASS_NAME_FLOATING_LABEL_ACTIVE)
            } else {
                this._inputLabel.classList.remove(CLASS_NAME_FLOATING_LABEL_ACTIVE)
                this._inputLabel.classList.add(CLASS_NAME_FLOATING_LABEL)
            }

            if (this._prepend != null && this._inputFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
                this._inputLabel.style.transform = `translate(${this._prepend.offsetWidth - 5}px, 1.2rem)`
            }
        }
    }

    handleFocus() {
        this._inputLabel.style.color = this._accentColor
        this._inputLabel.classList.remove(CLASS_NAME_FLOATING_LABEL)
        this._inputLabel.classList.add(CLASS_NAME_FLOATING_LABEL_ACTIVE)
        this._element.classList.add('active')

        if (this._inputFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
            this._inputField.style.borderColor = this._accentColor
            this._inputField.style.boxShadow = 'inset 0 0 1px 1px ' + this._accentColor
            this._notchBetween.style.borderTopWidth = 0
            this._notch.classList.add('notch-active')
            this._notchBefore.style.borderColor = this._accentColor
            this._notchBetween.style.borderColor = this._accentColor
            this._notchAfter.style.borderColor = this._accentColor
        }
    }

    handleFocusOut() {
        this._element.classList.remove('active')

        if (this._inputLabel != null) {
            this.setLabelColor()
            this.setLabelPosition()
        }

        if (this._inputFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
            this._inputField.style.borderColor = this._primaryColor
            this._inputField.style.boxShadow = 'none'
            this._notch.classList.remove('notch-active')
            this._notchBefore.style.borderColor = this._primaryColor
            this._notchBetween.style.borderColor = this._primaryColor
            this._notchAfter.style.borderColor = this._primaryColor
        }
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
