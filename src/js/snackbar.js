/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): snackbar.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'snackbar'
const VERSION = '2.0.0'
const DATA_KEY_SNACKBAR = 'ms.snackbar'
const JQUERY_NO_CONFLICT = $.fn[NAME]

let waitingQueue = [], runningQueue = [], activeSnackbar

Object.defineProperty(waitingQueue, 'pushToWaitingQueue', {
    value: function () {
        if (runningQueue.length) {
            waitingQueue.push(arguments[0])
        } else {
            runningQueue.pushToRunningQueue(arguments[0])
        }
    }
})

Object.defineProperty(runningQueue, 'pushToRunningQueue', {
    value: function () {
        activeSnackbar = arguments[0]
        activeSnackbar.addClass('show')
        runningQueue.push(activeSnackbar)

        setTimeout(function () {
            activeSnackbar.removeClass('show')
            runningQueue.removeFromRunningQueue(activeSnackbar)
        }, 3000)
    }
})

Object.defineProperty(runningQueue, 'removeFromRunningQueue', {
    value: function () {
        if (waitingQueue.length) {
            setTimeout(function () {
                runningQueue.shift()
                runningQueue.pushToRunningQueue(waitingQueue.shift())
            }, 200)
        } else {
            runningQueue.shift()
        }
    }
})

class Snackbar {
    constructor(element) {
        this._element = element
        this._snackbar = element.dataset.target
        this.addEventListeners()
    }

    static get VERSION() {
        return VERSION
    }

    static _jQueryInterface() {
        return this.each(function () {
            const $element = $(this)
            let data = $element.data(DATA_KEY_SNACKBAR)

            if (!data) {
                data = new Snackbar(this)
                $element.data(DATA_KEY_SNACKBAR, data)
            }
        })
    }

    addEventListeners() {
        $(this._element).on('click', event => {
            event.stopImmediatePropagation()
            waitingQueue.pushToWaitingQueue($(this._snackbar))
        })
    }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = Snackbar._jQueryInterface
$.fn[NAME].Constructor = Snackbar
$.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Snackbar._jQueryInterface
}

export default Snackbar
