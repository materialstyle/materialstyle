/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0-alpha1): snackbar.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import BaseComponent from 'bootstrap/js/src/base-component'
import {
  defineJQueryPlugin
} from 'bootstrap/js/src/util/index'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'snackbar'
const VERSION = '3.0.0-alpha1'

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
    activeSnackbar.classList.add('show')
    runningQueue.push(activeSnackbar)

    if (activeSnackbar.dataset.autoClose === 'true') {
      setTimeout(() => {
        activeSnackbar.classList.remove('show')
        runningQueue.removeFromRunningQueue(activeSnackbar)
      }, activeSnackbar.dataset.visibleDuration)
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

class Snackbar extends BaseComponent {
  constructor(element, config) {
    super(element)
    this._element = element
    this._element.dataset.visibleDuration = config.visibleDuration
    this._element.dataset.autoClose = config.autoClose

    if (this._element.querySelector(SELECTOR_DISMISS) !== null) {
      this._element.querySelector(SELECTOR_DISMISS).addEventListener('click', () => this.handleDismiss())
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
      const _config = {
        ...Default,
        ...this.dataset,
        ...typeof config === 'object' && config ? config : {}
      }

      const s = Snackbar.getOrCreateInstance(this, _config)

      waitingQueue.pushToWaitingQueue(s._element)
    })
  }

  handleDismiss() {
    activeSnackbar.classList.remove('show')
    runningQueue.removeFromRunningQueue(activeSnackbar)
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(Snackbar)

export default Snackbar
