/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0-alpha1): snackbar.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  defineJQueryPlugin,
  typeCheckConfig
} from 'bootstrap/js/src/util/index'
import BaseComponent from 'bootstrap/js/src/base-component'
import Manipulator from 'bootstrap/js/src/dom/manipulator'
import {
  enableDismissTrigger
} from 'bootstrap/js/src/util/component-functions'

/**
 * Constants
 */

const NAME = 'snackbar'

const SNACKBAR_VISIBLE_DURATION = 3000
const SNACKBAR_VISIBLE_DELAY = 200

const Default = {
  autoClose: true,
  visibleDuration: SNACKBAR_VISIBLE_DURATION
}

const DefaultType = {
  autoClose: 'boolean',
  visibleDuration: 'number'
}

/**
 * Queue implementation
 */

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

    if (activeSnackbar.dataset.bsAutoClose === 'true') {
      setTimeout(() => {
        activeSnackbar.classList.remove('show')
        runningQueue.removeFromRunningQueue(activeSnackbar)
      }, activeSnackbar.dataset.bsVisibleDuration)
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

/**
 * Class definition
 */

class Snackbar extends BaseComponent {
  constructor(element, config) {
    super(element)

    this._config = this._getConfig(config)
    this._element.dataset.bsVisibleDuration = this._config.visibleDuration
    this._element.dataset.bsAutoClose = this._config.autoClose

    waitingQueue.pushToWaitingQueue(this._element)
  }

  static get NAME() {
    return NAME
  }

  static jQueryInterface(config) {
    return this.each(function () {
      Snackbar.getOrCreateInstance(this, config)
    })
  }

  _getConfig(config) {
    config = {
      ...Default,
      ...Manipulator.getDataAttributes(this._element),
      ...typeof config === 'object' ? config : {}
    }
    typeCheckConfig(NAME, config, DefaultType)
    return config
  }

  close() {
    activeSnackbar.classList.remove('show')
    runningQueue.removeFromRunningQueue(activeSnackbar)
  }
}

/**
 * Data API implementation
 */

enableDismissTrigger(Snackbar, 'close')

/**
 * jQuery
 */

defineJQueryPlugin(Snackbar)

export default Snackbar
