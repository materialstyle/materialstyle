/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0): file_input.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  defineJQueryPlugin
} from 'bootstrap/js/src/util/index'
import EventHandler from 'bootstrap/js/src/dom/event-handler'
import BaseComponent from 'bootstrap/js/src/base-component'
import Ripple from "./ripple";

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'fileinput'
const VERSION = '3.0.0'
const DATA_KEY = 'ms.fileinput'
const EVENT_KEY = `.${DATA_KEY}`

const EVENT_CLICK = `click${EVENT_KEY}`
const EVENT_CHANGE = `change${EVENT_KEY}`

class FileInput extends BaseComponent {
  constructor(element) {
    super(element)
    this._element = element
    this._fileInput = element.querySelector('input[type=file]')
    this._button = element.querySelector('.btn-file')
    this._fileList = element.querySelector('.files')
    this._multipleSupport = typeof this._fileInput.multiple !== 'undefined'
    this._setListeners()
  }

  static get NAME() {
    return NAME
  }

  static get VERSION() {
    return VERSION
  }

  static jQueryInterface() {
    return this.each(function () {
      FileInput.getOrCreateInstance(this)
    })
  }

  handleButtonClick() {
    this._fileInput.click()
  }

  handleFileChange() {
    const files = []
    let fileArr
    let filename = 'No file chosen'

    if (this._multipleSupport) {
      fileArr = this._fileInput.files
      for (
        let i = 0, len = fileArr.length;
        i < len;
        i++
      ) {
        files.push(fileArr[i].name)
      }
      filename = files.join(', ')
    } else {
      filename = this._fileInput.val().split('\\').pop()
    }

    if (filename === '') {
      filename = 'No file chosen'
    }

    this._fileList.innerHTML = filename
    this._fileList.setAttribute('title', filename)
  }

  _setListeners() {
    EventHandler.on(this._button, EVENT_CLICK, event => this.handleButtonClick(event))
    EventHandler.on(this._fileInput, EVENT_CHANGE, () => this.handleFileChange())
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

defineJQueryPlugin(FileInput)

export default FileInput
