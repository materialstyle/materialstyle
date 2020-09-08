/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): drawer.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'

/**
 * --------------------------------------------------------------------------
 * Constants
 * --------------------------------------------------------------------------
 */

const NAME = 'drawer'
const VERSION = '2.0.0'
const DATA_KEY = 'ms.drawer'
const JQUERY_NO_CONFLICT = $.fn[NAME]

const EVENT_HIDDEN = 'hidden.bs.dropdown'
const EVENT_SHOWN = 'shown.bs.dropdown'

const CLASS_NAME_DRAWER = 'drawer'
const CLASS_NAME_VISIBLE = '--visible'
const CLASS_NAME_SWITCHED = '--switched'
const CLASS_NAME_FIXED = '--fixed'
const ID_SHADE = 'ms-shade'

class Drawer {
    constructor(element) {
        this._element = element
        this._shade = this.createShade()
        this._hamburger = document.querySelector('.drawer-toggle')
        this._drawerBrand = element.querySelector('.drawer-brand')
        this._footer = document.querySelector('footer')
        this._navBar = document.querySelector('.navbar')

        this.initDrawer()
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
                data = new Drawer(this)
                $element.data(DATA_KEY, data)
            }
        })
    }

    createShade() {
        let shade = document.createElement('div')
        shade.id = ID_SHADE
        shade.style.display = 'none'
        document.querySelector('body').append(shade)

        return shade
    }

    initDrawer() {
        if (this._element.className.includes(CLASS_NAME_VISIBLE) && this._element.className.includes(CLASS_NAME_FIXED)) {
            let fixedSideNavBg = this._element.className.match(/bg-[^\s]+/)

            let fixed = document.createElement('div')
            fixed.className = 'ms-fixed ' + fixedSideNavBg

            let children = this._element.childNodes

            for (let [, value] of  Object.entries(children)) {
                fixed.appendChild(value)
            }

            this._element.appendChild(this._drawerBrand)
            this._element.appendChild(fixed)

            this._fixed = fixed
        }

        let navbarHeight = '56px'
        if (this._navBar != null) {
            navbarHeight = this._navBar.offsetHeight
        }

        if (this._drawerBrand != null) {
            this._drawerBrand.style.height = navbarHeight + 'px'
        }

        if (this._element.className.includes(CLASS_NAME_FIXED) && typeof(fixed) !== 'undefined') {
            fixed.style.top = navbarHeight + 'px'
            fixed.style.height = 'calc(100vh - ' + navbarHeight + 'px)'
        }

        if (this._element.querySelector('.nav-link.active') != null) {
            this._element.querySelector('.nav-link.active').closest('.sub-menu-container').prev('.nav-item').find('> .sub-menu-link').trigger('click')
        }

        if (this._element.className.includes(CLASS_NAME_VISIBLE)) {
            this.toggle()
        }
    }

    show() {
        this._shade.style.display = 'block'
        this._element.style.left = 0
    }

    hide() {
        this._shade.style.display = 'none'

        if (!this._element.className.includes(CLASS_NAME_VISIBLE)) {
            this._element.style.left = '-350px'
        }
    }

    toggle() {
        if ($(window).innerWidth() < 1281) {
            if (this._element.className.includes(CLASS_NAME_VISIBLE)) {
                this._element.classList.add(CLASS_NAME_SWITCHED)
                this._element.classList.remove(CLASS_NAME_VISIBLE)
                this._element.style.left = '-350px'
            }

            this._shade.style.display = 'none'

            if (this._hamburger != null) {
                this._hamburger.style.display = 'block'
            }

            if (this._footer != null) {
                this._footer.style.marginLeft = 0
            }
        } else {

            if (this._element.className.includes(CLASS_NAME_SWITCHED)) {
                this._element.classList.remove(CLASS_NAME_SWITCHED)
                this._element.classList.add(CLASS_NAME_VISIBLE)
                this._element.style.left = 0
            }

            if (this._hamburger != null) {
                this._hamburger.style.display = 'none'
            }

            if (this._footer != null && this._element.className.includes(CLASS_NAME_VISIBLE) && this._element.className.includes(CLASS_NAME_FIXED)) {
                this._footer.style.marginLeft = '250px'
            }
        }
    }

    addEventListeners() {
        this._hamburger.addEventListener('click', () => this.show())

        document.addEventListener('click', event => {
            if (event.target != this._element
                && event.target != this._hamburger
                && !this._element.contains(event.target)
            ) {
                this.hide()
            }
        })

        let links = this._element.querySelectorAll('.nav-link')

        for (let [, value] of  Object.entries(links)) {
            let clicker = true

            $(value).on('click', event => {
                let subMenu = $(event.target).parent().next('.sub-menu-container').find('.sub-menu')
                let subMenuHeight = subMenu.outerHeight()

                if (clicker) {
                    $(subMenu).css('margin-top', '0')
                    clicker = false

                    if ($(event.target).hasClass('sub-menu-link')) {
                        $(event.target).find('.material-icons').html('keyboard_arrow_down')
                    }
                } else if (!clicker) {
                    $(subMenu).css('margin-top', '-' + subMenuHeight + 'px')
                    clicker = true

                    if ($(event.target).hasClass('sub-menu-link')) {
                        $(event.target).find('.material-icons').html('keyboard_arrow_right')
                    }
                }

                if (!$(event.target).hasClass('sub-menu-link')) {
                    this.hide()
                }
            })
        }

        window.addEventListener('resize', () => {
            if (this._element.className.includes(CLASS_NAME_VISIBLE) || this._element.className.includes(CLASS_NAME_SWITCHED)) {
                this.toggle()
            }

            let navbarHeight = '56px'
            if (this._navBar != null) {
                navbarHeight = this._navBar.offsetHeight
            }

            if (this._drawerBrand != null) {
                this._drawerBrand.style.height = navbarHeight + 'px'
            }

            if (this._fixed != null) {
                this._fixed.style.top = navbarHeight + 'px'
                this._fixed.style.height = 'calc(100vh - ' + navbarHeight + 'px)'
            }
        })

        this._element.querySelector('.nav-close-btn').addEventListener('click', event => {
            this.hide()
        })
    }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = Drawer._jQueryInterface
$.fn[NAME].Constructor = Drawer
$.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Drawer._jQueryInterface
}

export default Drawer

$(function () {
    $('.drawer').drawer()
})
