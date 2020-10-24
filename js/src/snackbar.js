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

const SELECTOR_DISMISS = '[data-dismiss="snackbar"]'

const SNACKBAR_VISIBLE_DURATION = 3000
const SNACKBAR_VISIBLE_DELAY = 200

const Default = {
  autoClose: true,
  visibleDuration: SNACKBAR_VISIBLE_DURATION
}

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

    if (activeSnackbar[0].dataset.autoClose === 'true') {
      setTimeout(() => {
        activeSnackbar.removeClass('show')
        runningQueue.removeFromRunningQueue(activeSnackbar)
      }, activeSnackbar[0].dataset.visibleDuration)
    }
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
  constructor(element, config) {
    this._element = element
    this._element.dataset.visibleDuration = config.visibleDuration
    this._element.dataset.autoClose = config.autoClose

    if (this._element.querySelector(SELECTOR_DISMISS) !== null) {
      this._element.querySelector(SELECTOR_DISMISS).addEventListener('click', () => this.handleDismiss())
    }
  }

  static get VERSION() {
    return VERSION
  }

  static _jQueryInterface(config) {
    return this.each(function () {
      const $element = $(this)
      let data = $element.data(DATA_KEY_SNACKBAR)

      const _config = Object.assign(
        {},
        Default,
        $element.data(),
        typeof config === 'object' && config ? config : {}
      )

      if (!data) {
        data = new Snackbar(this, _config)
        $element.data(DATA_KEY_SNACKBAR, data)
      }

      waitingQueue.pushToWaitingQueue($(data._element))
    })
  }

  handleDismiss() {
    activeSnackbar.removeClass('show')
    runningQueue.removeFromRunningQueue(activeSnackbar)
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
