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

                data['initTab']()

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
        this.addActiveIndicators()

        if (this._element.querySelector('.nav-link.active')) {
            this._element.querySelector('.nav-link.active').closest('.nav-item').querySelector('.active-indicator').classList.add('ms-tab-active')
        }

        let leftValue = 0

        if (this._element.querySelector('.ms-tab-active')) {
            leftValue = this._element.querySelector('.ms-tab-active').closest('.nav-item').offsetLeft
        }

        let count = 1
        let activeIndicators = this._element.querySelectorAll('.active-indicator')
        for (let i = 0; i < activeIndicators.length; i++) {
            this._element.dataset.indicatorPosition = count++
            this._element.style.transform = 'translateX(0px) scale(1, 1)'
        }

        this._element.dataset.leftValue = leftValue
    }

    addActiveIndicators() {
        let navItems = this._element.querySelectorAll('.nav-item')

        for (let i = 0; i < navItems.length; i++) {
            let activeIndicator = document.createElement('span')
            activeIndicator.className = 'active-indicator'

            navItems[i].appendChild(activeIndicator)
        }
    }

    handleMouseDown(target) {
        if (target.querySelector('.ms-tab-active') == null) {
            let leftValue = target.closest('.nav-tabs').dataset.leftValue

            if (target.closest('.nav-tabs').querySelector('.ms-tab-active')
                && (target.querySelector('.active-indicator').dataset.indicatorPosition
                > target.closest('.nav-tabs').querySelector('.ms-tab-active').dataset.indicatorPosition)
            ) {
                leftValue = '-' + (target.offsetLeft - leftValue)
            } else {
                leftValue = leftValue - target.offsetLeft
            }

            target.querySelector('.active-indicator').style.transform = 'translateX(' + leftValue + 'px) scale(1, 1)'
        }
    }

    handleMouseUp(target) {
        let leftValue = target.offsetLeft

        if (target.closest('.nav-tabs').querySelector('.ms-tab-active')) {
            target.closest('.nav-tabs').querySelector('.ms-tab-active').classList.remove('ms-tab-active')
        }

        let activeIndicator = target.querySelector('.active-indicator')
        activeIndicator.classList.add('ms-tab-active')
        activeIndicator.style.transform = 'translateX(0px) scale(1, 1)'

        target.closest('.nav-tabs').dataset.leftValue = leftValue
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
