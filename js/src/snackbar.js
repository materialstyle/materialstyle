/**
 * --------------------------------------------------------------------------
 * Material Style snackbar.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import { defineJQueryPlugin } from './util/index.js'
import BaseComponent from './base-component.js'
import Manipulator from './dom/manipulator.js'
import { enableDismissTrigger } from './util/component-functions.js'

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

  static get Default() {
    return Default
  }

  static get DefaultType() {
    return DefaultType
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
    config = this._mergeConfigObj(config)
    config = this._configAfterMerge(config)

    this._typeCheckConfig(config)

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
