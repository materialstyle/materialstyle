import {getAccentColor, getPrimaryColor} from '../js/util.js';

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
        this._inputLabelClass = this._inputLabel.className.includes(CLASS_NAME_FLOATING_LABEL) ? CLASS_NAME_FLOATING_LABEL : CLASS_NAME_STATIC_LABEL

        this._iconLeft = element.querySelector('.icon-left')
        this._iconRight = element.querySelector('.icon-right')
    }

    static get VERSION() {
        return VERSION
    }

    static _jQueryInterface(config) {
        return this.each(function () {
            const $element = $(this)
            let data = $element.data(DATA_KEY)

            if (!data) {
                data = new TextField(this)
                $element.data(DATA_KEY, data)

                data['initTextFields']()
                data['initLabel']()
                data['changeLabelColor']()
                data['changeLabelPosition']()
                data['changeTextFieldColor']()
                data['initInputGroup']()

                if (data._inputFieldClass == CLASS_NAME_TEXTFIELD_OUTLINE) {
                    data._notch.style.height = data._inputField.offsetHeight + 'px';
                }

                $(data._inputField).on('change', function () {
                    data._inputValueLength = data._inputField.value.length
                });

                $(data._inputField).focus(function () {
                    data['handleFocus']()
                });

                $(data._inputField).focusout(function () {
                    data['handleFocusOut']()
                });

                $(data._inputLabel).on('click', function () {
                    if (data._inputLabel.className.includes(CLASS_NAME_FLOATING_LABEL)) {
                        data._inputField.focus();
                    }
                });

                data._element.style.visibility = 'visible';
            }
        })
    }

    initTextFields() {
        if (this._inputFieldClass == CLASS_NAME_TEXTFIELD) {
            let ripple = document.createElement('div');
            ripple.className = 'ms-line-ripple';

            this._ripple = ripple;
            this._inputField.after(ripple);
        }
    }

    initLabel() {
        if (this._inputFieldClass == CLASS_NAME_TEXTFIELD_OUTLINE) {
            let notch = document.createElement('div');
            notch.className = 'ms-notch';

            let notchBefore = document.createElement('div');
            notchBefore.className = 'ms-notch-before';
            notchBefore.style.borderColor = this._primaryColor;

            let notchLabel = document.createElement('div');
            notchLabel.className = 'ms-notch-label width-auto';
            notchLabel.style.borderColor = this._primaryColor;
            notchLabel.style.width = ((this._inputLabel.offsetWidth * 0.75) + 10) + 'px';
            if (this._inputLabelClass == CLASS_NAME_STATIC_LABEL) {
                notchLabel.style.borderTopWidth = 0;
            }

            let notchAfter = document.createElement('div');
            notchAfter.className = 'ms-notch-after';
            notchAfter.style.borderColor = this._primaryColor;

            // Wrap notchLabel around label
            this._inputLabel.parentNode.insertBefore(notchLabel, this._inputLabel);
            notchLabel.appendChild(this._inputLabel);

            // Wrap notch around notchBefore, notchLabel and notchAfter
            notchLabel.parentNode.insertBefore(notchBefore, notchLabel);
            notchLabel.parentNode.insertBefore(notchAfter, notchLabel);
            notchLabel.parentNode.insertBefore(notch, notchLabel);

            notch.appendChild(notchBefore);
            notch.appendChild(notchLabel);
            notch.appendChild(notchAfter);

            this._notch = notch;
            this._notchBefore = notchBefore;
            this._notchLabel = notchLabel;
            this._notchAfter = notchAfter;
        }
    }

    changeLabelColor() {
        if (this._inputValueLength) {
            this._inputLabel.style.color = this._accentColor;
            if (this._inputFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
                this._notchLabel.style.borderTopWidth = 0;
            }
        } else {
            this._inputLabel.style.color = this._primaryColor;
            if (this._inputFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE
                && this._inputLabelClass == CLASS_NAME_FLOATING_LABEL
            ) {
                this._notchLabel.style.borderTopWidth = '1px';
            }
        }
    }

    changeLabelPosition() {
        if (this._inputLabelClass === CLASS_NAME_FLOATING_LABEL) {
            if (this._inputValueLength) {
                this._inputLabel.classList.remove(CLASS_NAME_FLOATING_LABEL)
                this._inputLabel.classList.add(CLASS_NAME_FLOATING_LABEL_ACTIVE)
            } else {
                this._inputLabel.classList.remove(CLASS_NAME_FLOATING_LABEL_ACTIVE)
                this._inputLabel.classList.add(CLASS_NAME_FLOATING_LABEL)
            }
        }
    }

    changeTextFieldColor() {
        if (this._inputFieldClass === CLASS_NAME_TEXTFIELD) {
            this._ripple.style.backgroundImage =
                'linear-gradient(' + this._accentColor + ', ' + this._accentColor + '), ' +
                'linear-gradient(' + this._primaryColor + ', ' + this._primaryColor + ')';
        } else {
            this._inputField.style.borderColor = this._primaryColor;
        }
    };

    handleFocus() {
        this._inputLabel.style.color = this._accentColor;
        this._inputLabel.classList.remove(CLASS_NAME_FLOATING_LABEL);
        this._inputLabel.classList.add(CLASS_NAME_FLOATING_LABEL_ACTIVE);

        if (this._inputFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
            this._inputField.style.borderColor = this._accentColor;
            this._inputField.style.boxShadow = 'inset 0 0 1px 1px ' + this._accentColor;
            this._notchLabel.style.borderTopWidth = 0;
            this._notch.classList.add('notch-active');
            this._notchBefore.style.borderColor = this._accentColor;
            this._notchLabel.style.borderColor = this._accentColor;
            this._notchAfter.style.borderColor = this._accentColor;
        }
    };

    handleFocusOut() {
        this.changeLabelColor();
        this.changeLabelPosition();

        if (this._inputFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
            this._inputField.style.borderColor = this._primaryColor;
            this._inputField.style.boxShadow = 'none';
            this._notch.classList.remove('notch-active');
            this._notchBefore.style.borderColor = this._primaryColor;
            this._notchLabel.style.borderColor = this._primaryColor;
            this._notchAfter.style.borderColor = this._primaryColor;
        }
    }

    initInputGroup() {
        if (this._iconLeft != null) {
            this._iconLeft.style.height = this._inputField.offsetHeight + 'px';
        }

        if (this._iconRight != null) {
            this._iconRight.style.height = this._inputField.offsetHeight + 'px';
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
