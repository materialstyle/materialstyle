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
        this._navItem = element.querySelectorAll('.nav-item')
        this.initTab()
    }

    static get VERSION() {
        return VERSION
    }

    static _jQueryInterface() {
        return this.each(function () {
            const $element = $(this)
            let data = $element.data(DATA_KEY_TAB)

            if (!data) {
                data = new Tab(this)
                $element.data(DATA_KEY_TAB, data)

                data._element.style.visibility = 'visible'

                $(data._navItem).on('mousedown', function () {
                    data['handleMouseDown'](this)
                })

                $(data._navItem).on('mouseup', function () {
                    data['handleMouseUp'](this)
                })
            }
        })
    }

    initTab() {
        let leftValue = 0

        for (let i = 0; i < this._navItem.length; i++) {
            let activeIndicator = document.createElement('span')
            activeIndicator.className = 'active-indicator'
            activeIndicator.dataset.indicatorPosition = i + 1
            activeIndicator.style.transform = 'translateX(0px) scale(1, 1)'

            if (this._navItem[i].querySelector('.nav-link.active')) {
                leftValue = this._navItem[i].offsetLeft
                this._activeIndicatorPosition = i + 1
            }

            this._navItem[i].appendChild(activeIndicator)
        }

        this._element.dataset.leftValue = leftValue
    }

    handleMouseDown(target) {
        if (target.querySelector('.nav-link.active') == null) {
            let leftValue = this._element.dataset.leftValue
            let indicatorPosition = target.querySelector('.active-indicator').dataset.indicatorPosition

            if (indicatorPosition > this._activeIndicatorPosition) {
                leftValue = '-' + (target.offsetLeft - leftValue)
            } else {
                leftValue = leftValue - target.offsetLeft
            }

            this._activeIndicatorPosition = indicatorPosition

            target.querySelector('.active-indicator').style.transform = 'translateX(' + leftValue + 'px) scale(1, 1)'
        }
    }

    handleMouseUp(target) {
        target.querySelector('.active-indicator').style.transform = 'translateX(0px) scale(1, 1)'

        let leftValue = target.offsetLeft
        this._element.dataset.leftValue = leftValue
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
