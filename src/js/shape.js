/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): shape.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'
import {getColor} from '../js/utility.js'

/**
 * --------------------------------------------------------------------------
 * Constants
 * --------------------------------------------------------------------------
 */

const NAME = 'shape'
const VERSION = '2.0.0'
const DATA_KEY = 'ms.shape'
const JQUERY_NO_CONFLICT = $.fn[NAME]

class Shape {
    constructor(element) {
        this._element = element
        this._topLeftAngle = element.querySelector('.angle-top-left')
        this._topRightAngle = element.querySelector('.angle-top-right')
        this._bottomLeftAngle = element.querySelector('.angle-bottom-left')
        this._bottomRightAngle = element.querySelector('.angle-bottom-right')
        this.initShape()
    }

    static get VERSION() {
        return VERSION
    }

    static _jQueryInterface() {
        return this.each(function () {
            const $element = $(this)
            let data = $element.data(DATA_KEY)

            if (!data) {
                data = new Shape(this)
                $element.data(DATA_KEY, data)

                data._element.style.visibility = 'visible'
            }
        })
    }

    initShape() {
        this.setShapeColor()
        this.setShapeSize()
        this.setShapeOutline()
    }

    setShapeColor() {
        let shapeColor = this._element.className.match(/shape-parent-bg-[^\s]+/)

        if (shapeColor) {
            shapeColor = shapeColor[0].replace('shape-parent-', '')

            if (this._topLeftAngle) {
                this._topLeftAngle.classList.add(shapeColor)
            }
            if (this._topRightAngle) {
                this._topRightAngle.classList.add(shapeColor)
            }
            if (this._bottomLeftAngle) {
                this._bottomLeftAngle.classList.add(shapeColor)
            }
            if (this._bottomRightAngle) {
                this._bottomRightAngle.classList.add(shapeColor)
            }
        }
    }

    setShapeSize() {
        let topLeftWidth = 0, topRightWidth = 0, bottomLeftWidth = 0, bottomRightWidth = 0

        if (this._topLeftAngle) {
            topLeftWidth = this._topLeftAngle.className.match(/size-[^\s]+/)
            if (topLeftWidth) {
                topLeftWidth = parseInt(topLeftWidth[0].replace('size-', ''))
            }
        }

        if (this._topRightAngle) {
            topRightWidth = this._topRightAngle.className.match(/size-[^\s]+/)
            if (topRightWidth) {
                topRightWidth = parseInt(topRightWidth[0].replace('size-', ''))
            }
        }

        if (this._bottomLeftAngle) {
            bottomLeftWidth = this._bottomLeftAngle.className.match(/size-[^\s]+/)
            if (bottomLeftWidth) {
                bottomLeftWidth = parseInt(bottomLeftWidth[0].replace('size-', ''))
            }
        }

        if (this._bottomRightAngle) {
            bottomRightWidth = this._bottomRightAngle.className.match(/size-[^\s]+/)

            if (bottomRightWidth) {
                bottomRightWidth = parseInt(bottomRightWidth[0].replace('size-', ''))
            }
        }

        if (topLeftWidth) {
            this._topLeftAngle.style.top = -(topLeftWidth / 2) + 'px'
            this._topLeftAngle.style.left = -(topLeftWidth / 2) + 'px'
            this._topLeftAngle.style.width = topLeftWidth + 'px'
            this._topLeftAngle.style.height = topLeftWidth + 'px'
        }

        if (topRightWidth) {
            this._topRightAngle.style.top = -(topRightWidth / 2) + 'px'
            this._topRightAngle.style.right = -(topRightWidth / 2) + 'px'
            this._topRightAngle.style.width = topRightWidth + 'px'
            this._topRightAngle.style.height = topRightWidth + 'px'
        }

        if (bottomLeftWidth) {
            this._bottomLeftAngle.style.bottom = -(bottomLeftWidth / 2) + 'px'
            this._bottomLeftAngle.style.left = -(bottomLeftWidth / 2) + 'px'
            this._bottomLeftAngle.style.width = bottomLeftWidth + 'px'
            this._bottomLeftAngle.style.height = bottomLeftWidth + 'px'
        }

        if (bottomRightWidth) {
            this._bottomRightAngle.style.bottom = -(bottomRightWidth / 2) + 'px'
            this._bottomRightAngle.style.right = -(bottomRightWidth / 2) + 'px'
            this._bottomRightAngle.style.width = bottomRightWidth + 'px'
            this._bottomRightAngle.style.height = bottomRightWidth + 'px'
        }
    }

    setShapeOutline() {
        let shapeOutline

        let cardOutline = this._element.querySelector('[class*="card-outline-"]')
        let btnOutline = this._element.querySelector('[class*="btn-outline-"]')

        if (cardOutline) {
            shapeOutline = cardOutline.className.match(/card-outline-[^\s]+/)
            shapeOutline = shapeOutline[0].replace('card-outline-', '')
        }

        if (btnOutline) {
            shapeOutline = btnOutline.className.match(/btn-outline-[^\s]+/)
            shapeOutline = shapeOutline[0].replace('btn-outline-', '')
        }

        if (shapeOutline) {
            shapeOutline = getColor(shapeOutline)

            let borderBottom = '1px solid ' + shapeOutline

            if (this._topLeftAngle) {
                this._topLeftAngle.style.borderBottom = borderBottom
            }
            if (this._topRightAngle) {
                this._topRightAngle.style.borderBottom = borderBottom
            }
            if (this._bottomLeftAngle) {
                this._bottomLeftAngle.style.borderBottom = borderBottom
            }
            if (this._bottomRightAngle) {
                this._bottomRightAngle.style.borderBottom = borderBottom
            }
        }
    }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = Shape._jQueryInterface
$.fn[NAME].Constructor = Shape
$.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Shape._jQueryInterface
}

export default Shape
