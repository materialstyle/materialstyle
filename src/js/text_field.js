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

        this._paddingLeft = this._iconLeft != null ? this._iconLeft.offsetWidth : 0
        this._paddingRight = this._iconRight != null ? this._iconRight.offsetWidth : 0
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

                data['changeLabelColor']()
                data['changeLabelPosition']()
                data['changeTextFieldColor']()
                data['initInputGroup']()

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

    changeLabelColor() {
        if (this._inputValueLength) {
            this._inputLabel.style.color = this._accentColor;
        } else {
            this._inputLabel.style.color = this._primaryColor;
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
            this._inputField.style.backgroundImage =
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
        }
    };

    handleFocusOut() {
        this.changeLabelColor();
        this.changeLabelPosition();

        if (this._inputFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
            this._inputField.style.borderColor = this._primaryColor;
            this._inputField.style.boxShadow = 'none';
        }
    }

    initInputGroup() {
        if (0 !== this._paddingLeft) {
            this._inputField.style.paddingLeft = this._paddingLeft + 'px';

            if (this._inputLabel.className.includes(CLASS_NAME_FLOATING_LABEL)) {
                this._inputLabel.style.transform = 'translate(' + this._paddingLeft + 'px, 30px)'
            }
        }

        if (0 !== this._paddingRight) {
            this._inputField.style.paddingRight = this._paddingRight + 'px';
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
