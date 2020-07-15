const NAME = 'spinner'
const VERSION = '2.0.0'
const DATA_KEY_SPINNER = 'ms.spinner'
const JQUERY_NO_CONFLICT = $.fn[NAME]

class Spinner {
    constructor(element) {
        this._element = element
    }

    static get VERSION() {
        return VERSION
    }

    static _jQueryInterface(config) {
        return this.each(function () {
            const $element = $(this)
            let data = $element.data(DATA_KEY_SPINNER)

            if (!data) {
                data = new Spinner(this)
                $element.data(DATA_KEY_SPINNER, data)

                data['initSpinner']()
            }
        })
    }

    initSpinner() {
        this._element.innerHTML = '<div class="animate-loader">' +
            '<svg class="circular" viewBox="25 25 50 50">' +
            '<circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="4">' +
            '</svg>' +
            '</div>';
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
