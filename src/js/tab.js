import 'bootstrap/js/dist/tab'

/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): tab.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'tab'
const VERSION = '2.0.0'
const DATA_KEY_TAB = 'ms.tab'
const JQUERY_NO_CONFLICT = $.fn[NAME]

class Tab {
    constructor(element) {
        this._element = element
        this.initTab()
    }

    static get VERSION() {
        return VERSION
    }

    static _jQueryInterface(config) {
        return this.each(function () {
            const $element = $(this)
            let data = $element.data(DATA_KEY_TAB)
            let shouldRedraw = true

            if (!data) {
                shouldRedraw = false

                data = new Tab(this)
                $element.data(DATA_KEY_TAB, data)

                data._element.style.visibility = 'visible'

                $(data._element).find('.nav-item').on('mousedown, mouseup', function () {
                    data['setIndicatorPosition'](this)
                })

                $(window).resize(function () {
                    data['setIndicatorPositionOnResize'](this)
                })
            }

            if (typeof config === 'string') {
                if (typeof data[config] === 'undefined') {
                    throw new TypeError(`No method named "${config}"`)
                } else if (config === 'redraw' && shouldRedraw) {
                    data[config]()
                }
            }
        })
    }

    initTab() {
        let indicatorLeft = 0, indicatorWidth = 0, indicatorTop = 0

        let activeItem = this._element.querySelector('.nav-link.active')

        if (activeItem == null) {
            activeItem = this._element.querySelector('.nav-item')
        } else {
            activeItem = activeItem.closest('.nav-item')
        }

        if (activeItem != null) {
            indicatorLeft = activeItem.offsetLeft + 'px'
            indicatorTop = (activeItem.offsetTop + activeItem.offsetHeight - 2) + 'px'
            indicatorWidth = activeItem.offsetWidth + 'px'
        }

        let activeIndicator = document.createElement('span')
        activeIndicator.className = 'active-indicator'
        activeIndicator.style.left = indicatorLeft
        activeIndicator.style.top = indicatorTop
        activeIndicator.style.width = indicatorWidth

        this._activeIndicator = activeIndicator

        this._element.appendChild(activeIndicator)
    }

    redraw() {
        this.setIndicatorPositionOnResize()
    }

    setIndicatorPosition(target) {
        this._activeIndicator.style.left = target.offsetLeft + 'px'
        this._activeIndicator.style.top = (target.offsetTop + target.offsetHeight - 2) + 'px'
        this._activeIndicator.style.width = target.offsetWidth + 'px'
    }

    setIndicatorPositionOnResize() {
        let indicatorLeft = 0, indicatorWidth = 0, indicatorTop = 0

        let activeItem = this._element.querySelector('.nav-link.active')

        if (activeItem == null) {
            activeItem = this._element.querySelector('.nav-item')
        } else {
            activeItem = activeItem.closest('.nav-item')
        }

        if (activeItem != null) {
            indicatorLeft = activeItem.offsetLeft + 'px'
            indicatorTop = (activeItem.offsetTop + activeItem.offsetHeight - 2) + 'px'
            indicatorWidth = activeItem.offsetWidth + 'px'
        }

        this._activeIndicator.style.left = indicatorLeft
        this._activeIndicator.style.top = indicatorTop
        this._activeIndicator.style.width = indicatorWidth
    }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = Tab._jQueryInterface
$.fn[NAME].Constructor = Tab
$.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Tab._jQueryInterface
}

export default Tab
