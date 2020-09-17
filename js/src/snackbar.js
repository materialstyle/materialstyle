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
    }, SNACKBAR_VISIBLE_DURATION)
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
