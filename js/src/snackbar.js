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

const SNACKBAR_VISIBLE_DURATION = 3000
const SNACKBAR_VISIBLE_DELAY = 200

const waitingQueue = []
const runningQueue = []
let activeSnackbar

Object.defineProperty(waitingQueue, 'pushToWaitingQueue', {
  value(...args) {
    if (runningQueue.length) {
      waitingQueue.push(args[0])
    } else {
      runningQueue.pushToRunningQueue(args[0])
    }
  }
})

Object.defineProperty(runningQueue, 'pushToRunningQueue', {
  value(...args) {
    activeSnackbar = args[0]
    activeSnackbar.addClass('show')
    runningQueue.push(activeSnackbar)

    setTimeout(() => {
      activeSnackbar.removeClass('show')
      runningQueue.removeFromRunningQueue(activeSnackbar)
    }, activeSnackbar[0].dataset.snackbarVisibleDuration)
  }
})

Object.defineProperty(runningQueue, 'removeFromRunningQueue', {
  value() {
    if (waitingQueue.length) {
      setTimeout(() => {
        runningQueue.shift()
        runningQueue.pushToRunningQueue(waitingQueue.shift())
      }, SNACKBAR_VISIBLE_DELAY)
    } else {
      runningQueue.shift()
    }
  }
})

class Snackbar {
  constructor(element, elementIsASnackbar, duration) {
    this._element = element

    if (elementIsASnackbar) {
      this._snackbar = element
      this._snackbar.dataset.snackbarVisibleDuration = duration
    } else {
      this._snackbar = element.dataset.target

      if (document.querySelector(this._snackbar) !== null) {
        document.querySelector(this._snackbar).dataset.snackbarVisibleDuration = duration
        this.addEventListeners()
      }
    }
  }

  static get VERSION() {
    return VERSION
  }

  static _jQueryInterface(config, duration = SNACKBAR_VISIBLE_DURATION) {
    return this.each(function () {
      const $element = $(this)
      let data = $element.data(DATA_KEY_SNACKBAR)

      if (!data || typeof data !== 'undefined' && data._duration !== duration) {
        if (typeof config === 'string' && config === 'show') {
          data = new Snackbar(this, true, duration)
        } else {
          data = new Snackbar(this, false, duration)
        }

        $element.data(DATA_KEY_SNACKBAR, data)
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        } else {
          data[config]()
        }
      }
    })
  }

  show() {
    waitingQueue.pushToWaitingQueue($(this._snackbar))
  }

  addEventListeners() {
    $(this._element).on('click', (event) => {
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
