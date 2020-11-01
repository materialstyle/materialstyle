/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.2): file_input.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'fileinput'
const VERSION = '2.0.2'
const DATA_KEY = 'ms.fileinput'
const JQUERY_NO_CONFLICT = $.fn[NAME]

class FileInput {
  constructor(element) {
    this._element = element
    this._fileInput = element.querySelector('input[type=file]')
    this._button = element.querySelector('.btn-file')
    this._fileList = element.querySelector('.files')
    this._multipleSupport = typeof this._fileInput.multiple !== 'undefined'
    this.addEventListeners()
  }

  static get VERSION() {
    return VERSION
  }

  static _jQueryInterface() {
    return this.each(function () {
      const $element = $(this)
      let data = $element.data(DATA_KEY)

      if (!data) {
        data = new FileInput(this)
        $element.data(DATA_KEY, data)
      }
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

  addEventListeners() {
    $(this._button).on('click', (event) => {
      event.stopImmediatePropagation()
      this.handleButtonClick()
    })

    $(this._fileInput).on('change', () => {
      this.handleFileChange()
    })
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = FileInput._jQueryInterface
$.fn[NAME].Constructor = FileInput
$.fn[NAME].noConflict = () => {
  $.fn[NAME] = JQUERY_NO_CONFLICT
  return FileInput._jQueryInterface
}

export default FileInput
