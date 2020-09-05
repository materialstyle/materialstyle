/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): text_field.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import $ from 'jquery'
import {getAccentColor, getPrimaryColor} from '../js/utility.js'

/**
 * --------------------------------------------------------------------------
 * Constants
 * --------------------------------------------------------------------------
 */

const NAME = 'select'
const VERSION = '2.0.0'
const DATA_KEY = 'ms.select'
const JQUERY_NO_CONFLICT = $.fn[NAME]

const EVENT_HIDDEN = 'hidden.bs.dropdown'
const EVENT_SHOWN = 'shown.bs.dropdown'

const CLASS_NAME_SELECT = 'ms-select'
const CLASS_NAME_SELECT_OUTLINE = 'ms-select-outline'

const CLASS_NAME_STATIC_LABEL = 'static-label'
const CLASS_NAME_FLOATING_LABEL = 'floating-label'
const CLASS_NAME_FLOATING_LABEL_ACTIVE = 'floating-label-active'

const CLASS_NAME_SEARCHABLE = 'searchable'
const CLASS_NAME_MULTI_SELECT = 'multi-select'

const SELECTOR_CHECKBOX = '.select-items .custom-control-input'
const SELECTOR_SELECT_ALL_CHECKBOX = '.select-all-container .custom-control-input'

class Select {
    constructor(element) {
        this._element = element
        this._select = element.querySelector('.form-control')
        this._selectClass = element.className.includes(CLASS_NAME_SELECT_OUTLINE) ? CLASS_NAME_SELECT_OUTLINE : CLASS_NAME_SELECT

        this._primaryColor = getPrimaryColor(element)
        this._accentColor = getAccentColor(element)

        this._label = element.querySelector('label')
        this._labelClass = ''

        if (this._label != null) {
            this._labelClass = this._label.className.includes(CLASS_NAME_FLOATING_LABEL) ? CLASS_NAME_FLOATING_LABEL : CLASS_NAME_STATIC_LABEL
        }

        this._prepend = element.querySelector('.prepend')
        this._append = element.querySelector('.append')

        this._isSearchable = element.className.includes(CLASS_NAME_SEARCHABLE) ? true : false
        this._multiSelectEnabled = element.className.includes(CLASS_NAME_MULTI_SELECT) ? true : false

        this._options = this.createOptions()

        this.initSelect()

        this.addEventListeners()
    }

    static get VERSION() {
        return VERSION
    }

    static _jQueryInterface(config) {
        return this.each(function () {
            const $element = $(this)
            let data = $element.data(DATA_KEY)
            let shouldRedraw = true

            if (!data) {
                shouldRedraw = false

                data = new Select(this)
                $element.data(DATA_KEY, data)

                data._element.style.visibility = 'visible'
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

    createOptions() {
        let optionsArray = []
        let options = this._select.querySelectorAll('option')

        let selectItems = document.createElement('div')
        selectItems.className = 'select-items'

        for (let [, value] of  Object.entries(options)) {
            selectItems.appendChild(this.createCheckbox(value.text, value.value, value.selected))
            optionsArray.push({value: value.value, text: value.innerHTML, selected: value.selected})
        }

        this._selectItems = selectItems
        return optionsArray
    }

    initSelect() {
        this.createDropdown()
        this.showSelectedItems()
        this.addRippleOrBorder()
        this.setAddonHeight()

        if (this._selectClass == CLASS_NAME_SELECT_OUTLINE) {
            this.addNotch()
        }

        if (this._label != null) {
            this.initLabel()
        }
    }

    redraw() {
        this.setAddonHeight()

        if (this._selectClass == CLASS_NAME_SELECT_OUTLINE) {
            this._notch.style.height = this._selectedItem.offsetHeight + 'px'
            this._notchBetween.style.width = ((this._label.offsetWidth * 0.75) + 10) + 'px'
        }

        this.setLabelPosition()
    }

    createDropdown() {
        let dropdown = document.createElement('div')
        dropdown.className = 'dropdown'

        let selectedItem = document.createElement('div')
        selectedItem.className = 'selected-item dropdown-toggle'
        selectedItem.dataset.toggle = 'dropdown'

        let dropdownMenu = document.createElement('div')
        dropdownMenu.className = 'dropdown-menu'

        let form = document.createElement('form')

        dropdownMenu.appendChild(form)

        if (this._isSearchable) {
            form.appendChild(this.createSearchContainer())
        }

        if (this._multiSelectEnabled) {
            form.appendChild(this.createSelectAllContainer())
            form.appendChild(this._selectItems)
            dropdownMenu.appendChild(form)

            let closeButton = document.createElement('button')
            closeButton.className = 'btn btn-text-dark'
            closeButton.innerHTML = 'close'

            dropdownMenu.appendChild(closeButton)
        } else {
            form.appendChild(this._selectItems)
            dropdownMenu.appendChild(form)
        }

        dropdown.appendChild(selectedItem)
        dropdown.appendChild(dropdownMenu)

        this._dropdown = dropdown
        this._selectedItem = selectedItem

        this._element.insertBefore(this._dropdown, this._select)
    }

    createSearchContainer() {
        let searchContainer = ''

        if (this._isSearchable) {
            searchContainer = document.createElement('div')
            searchContainer.className = 'search-container m-0 p-0'

            let searchInput = document.createElement('input')
            searchInput.type = 'text'
            searchInput.placeholder = 'Search'
            searchInput.className = 'search-input form-control'

            searchContainer.appendChild(searchInput)
        }

        return searchContainer
    }

    createSelectAllContainer() {
        let selectAllContainer = ''

        if (this._multiSelectEnabled) {
            selectAllContainer = document.createElement('div')
            selectAllContainer.className = 'm-0 p-0 select-all-container'

            selectAllContainer.appendChild(this.createCheckbox('Select All', ''))
        }

        return selectAllContainer
    }

    createCheckbox(text, value, checked) {
        let checkbox = document.createElement('input')
        checkbox.setAttribute('type', 'checkbox')
        checkbox.className = 'custom-control-input'
        checkbox.id = 'check' + Date.now().toString(36) + Math.random().toString(36).substr(2)
        checkbox.value = value
        checkbox.checked = checked

        let label = document.createElement('label')
        label.className = 'custom-control-label'
        label.innerHTML = text
        label.setAttribute('for', checkbox.id)

        let customCheckbox = document.createElement('div')
        customCheckbox.className = 'custom-control custom-checkbox input-dark dropdown-item'

        if (checked && !this._multiSelectEnabled) {
            customCheckbox.classList.add('checked')
        }

        customCheckbox.appendChild(checkbox)
        customCheckbox.appendChild(label)

        return customCheckbox
    }

    showSelectedItems() {
        if (this._multiSelectEnabled) {
            this._selectedItem.innerHTML = this._options.map(option => {
                if (option.selected) {
                    return `<span class="badge badge-dark">${option.text}<span class="badge-close" aria-hidden="true" data-value="${option.value}">&times;</span></span>`
                }
            }).join('')

            let closeButton = this._selectedItem.querySelectorAll('.badge-close')

            for (let [, value] of  Object.entries(closeButton)) {
                value.addEventListener('click', event => {
                    event.preventDefault()
                    event.stopPropagation()
                    this.setSelectValue(event.target.dataset.value, false)
                })
            }

            if (this._notch !== null && this._notch) {
                this._notch.style.height = this._selectedItem.offsetHeight + 'px'
            }

        } else {
            this._selectedItem.innerHTML = this._options.map(option => {
                if (option.selected) {
                    return option.text
                }
            }).join('')
        }
    }

    addRippleOrBorder() {
        if (this._selectClass === CLASS_NAME_SELECT) {
            let ripple = document.createElement('div')
            ripple.className = 'ms-line-ripple'
            ripple.style.backgroundImage =
                'linear-gradient(' + this._accentColor + ', ' + this._accentColor + '), ' +
                'linear-gradient(' + this._primaryColor + ', ' + this._primaryColor + ')'

            this._ripple = ripple
            this._selectedItem.after(ripple)
        }
    }

    setAddonHeight() {
        if (this._prepend != null) {
            this._prepend.style.height = this._selectedItem.offsetHeight + 'px'
            this._selectedItem.style.paddingLeft = this._prepend.offsetWidth + 'px'
        }

        if (this._append != null) {
            this._append.style.height = this._selectedItem.offsetHeight + 'px'
            this._selectedItem.style.paddingRight = this._append.offsetWidth + 'px'
        }
    }

    addNotch() {
        let notch = document.createElement('div')
        notch.className = 'ms-notch'
        notch.style.height = this._selectedItem.offsetHeight + 'px'

        let notchBefore = document.createElement('div')
        notchBefore.className = 'ms-notch-before'
        notchBefore.style.borderColor = this._primaryColor

        let notchBetween = document.createElement('div')
        notchBetween.className = 'ms-notch-between width-auto'
        notchBetween.style.borderColor = this._primaryColor
        notchBetween.style.width = ((this._label.offsetWidth * 0.75) + 10) + 'px'

        if (this._label != null && this._labelClass == CLASS_NAME_STATIC_LABEL) {
            notchBetween.style.borderTopWidth = 0
        }

        notchBetween.appendChild(this._label)

        let notchAfter = document.createElement('div')
        notchAfter.className = 'ms-notch-after'
        notchAfter.style.borderColor = this._primaryColor

        notch.appendChild(notchBefore)
        notch.appendChild(notchBetween)
        notch.appendChild(notchAfter)

        this._element.insertBefore(notch, this._dropdown)

        this._notch = notch
        this._notchBefore = notchBefore
        this._notchBetween = notchBetween
        this._notchAfter = notchAfter
    }

    initLabel() {
        this.setLabelColor()
        this.setLabelPosition()
    }

    setLabelColor() {
        if (this._selectedItem.innerHTML.length) {
            this._label.style.color = this._accentColor

            if (this._selectClass === CLASS_NAME_SELECT_OUTLINE) {
                this._notchBetween.style.borderTopWidth = 0
            }
        } else {
            this._label.style.color = this._primaryColor

            if (this._selectClass === CLASS_NAME_SELECT_OUTLINE
                && this._labelClass == CLASS_NAME_FLOATING_LABEL
            ) {
                this._notchBetween.style.borderTopWidth = '1px'
            }
        }
    }

    setLabelPosition() {
        if (this._labelClass === CLASS_NAME_FLOATING_LABEL) {
            if (this._selectedItem.innerHTML.length) {
                this._label.classList.remove(CLASS_NAME_FLOATING_LABEL)
                this._label.classList.add(CLASS_NAME_FLOATING_LABEL_ACTIVE)

                if (this._prepend != null) {
                    if (this._selectClass === CLASS_NAME_SELECT_OUTLINE) {
                        this._label.style.transform = 'translate(0, -0.5rem) scale(0.75)'
                    } else {
                        this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 0.5rem) scale(0.75)`
                    }
                }

            } else {
                this._label.classList.remove(CLASS_NAME_FLOATING_LABEL_ACTIVE)
                this._label.classList.add(CLASS_NAME_FLOATING_LABEL)

                if (this._prepend != null) {
                    if (this._selectClass === CLASS_NAME_SELECT_OUTLINE) {
                        this._label.style.transform = `translate(${this._prepend.offsetWidth - 17}px, 1.2rem)`
                    } else {
                        this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 1.2rem)`
                    }
                }
            }
        } else {
            if (this._prepend != null) {
                if (this._selectClass === CLASS_NAME_SELECT) {
                    this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 0.5rem) scale(0.75)`
                }
            }
        }
    }

    handleFocus() {
        this._label.style.color = this._accentColor
        this._label.classList.remove(CLASS_NAME_FLOATING_LABEL)
        this._label.classList.add(CLASS_NAME_FLOATING_LABEL_ACTIVE)

        if (this._prepend != null) {
            if (this._selectClass === CLASS_NAME_SELECT_OUTLINE) {
                this._label.style.transform = 'translate(0, -0.5rem) scale(0.75)'
            } else {
                this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 0.5rem) scale(0.75)`
            }
        }

        if (this._selectClass === CLASS_NAME_SELECT_OUTLINE) {
            this._notchBetween.style.borderTopWidth = 0
            this._notch.classList.add('notch-active')
            this._notchBefore.style.borderColor = this._accentColor
            this._notchBetween.style.borderColor = this._accentColor
            this._notchAfter.style.borderColor = this._accentColor
        }
    }

    handleFocusOut() {
        if (this._label != null) {
            this.setLabelColor()
            this.setLabelPosition()
        }

        if (this._selectClass === CLASS_NAME_SELECT_OUTLINE) {
            this._notch.classList.remove('notch-active')
            this._notchBefore.style.borderColor = this._primaryColor
            this._notchBetween.style.borderColor = this._primaryColor
            this._notchAfter.style.borderColor = this._primaryColor
        }
    }

    setSelectValue(value, checked) {
        let index

        if (!this._multiSelectEnabled) {
            let selectedOptions = this._select.querySelectorAll('option')
            for (let i = 0; i < selectedOptions.length; i++) {
                if (selectedOptions[i].selected) {
                    selectedOptions[i].selected = false
                }
            }

            let checkboxes = this._dropdown.querySelectorAll(SELECTOR_CHECKBOX)
            for (let i = 0; i < checkboxes.length; i++) {
                checkboxes[i].checked = false
                checkboxes[i].closest('.custom-control').classList.remove('checked')
            }

            index = this._options.findIndex(o => o.selected == true)
            if (index != -1) {
                this._options[index].selected = false
            }
        }

        this._select.querySelector('option[value="' + value + '"]').selected = checked

        this._dropdown.querySelector('.custom-control-input[value="' + value + '"]').checked = checked

        if (checked) {
            this._dropdown.querySelector('.custom-control-input[value="' + value + '"]').closest('.custom-control').classList.add('checked')
        } else {
            this._dropdown.querySelector('.custom-control-input[value="' + value + '"]').closest('.custom-control').classList.remove('checked')
        }


        index = this._options.findIndex(o => o.value == value)
        this._options[index].selected = checked

        this.showSelectedItems()
    }

    search(value) {
        value = value.toLowerCase()

        $(this._dropdown.querySelectorAll('.select-items .custom-checkbox')).filter(function () {
            if ($(this).find('.custom-control-label').html().toLowerCase().indexOf(value) == -1) {
                $(this).hide()
            } else {
                $(this).show()
            }
        })
    }

    selectAll(checked) {
        let options = this._select.querySelectorAll('option')
        let checkboxes = this._dropdown.querySelectorAll(SELECTOR_CHECKBOX)

        for (let i = 0; i < options.length; i++) {
            options[i].selected = checked
        }

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = checked

            if (checked) {
                checkboxes[i].closest('.custom-control').classList.add('checked')
            } else {
                checkboxes[i].closest('.custom-control').classList.remove('checked')
            }
        }

        this._options.map(option => option.selected = checked)

        this.showSelectedItems()
    }

    addEventListeners() {
        $(this._dropdown).on(EVENT_SHOWN, () => this.handleFocus())
        $(this._dropdown).on(EVENT_HIDDEN, () => this.handleFocusOut())

        $(this._label).on('click', (event) => {
            event.preventDefault()
            event.stopPropagation()
            $(this._selectedItem).dropdown('toggle')
        })

        $(this._dropdown).find(SELECTOR_SELECT_ALL_CHECKBOX).on('change', (event) => {
            this.selectAll($(event.target).is(':checked'))
        })

        $(this._dropdown).find('.search-input').on('keyup', (event) => {
            this.search($(event.target).val())
        })

        $(this._dropdown).find(SELECTOR_CHECKBOX).on('change', (event) => {
            this.setSelectValue($(event.target).val(), $(event.target).is(':checked'))

            if (!this._multiSelectEnabled) {
                $(this._selectedItem).dropdown('toggle')
            }
        })

        $(this._select).on('change', (event) => {
            if (!this._multiSelectEnabled) {
                this.setSelectValue($(event.target).val(), true)
            } else {
                let selectValue = $(event.target).val()

                for (let [, value] of  Object.entries(this._options)) {
                    if (selectValue.includes(value.value)) {
                        this.setSelectValue(value.value, true)
                    } else {
                        this.setSelectValue(value.value, false)
                    }
                }
            }
        })
    }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

$.fn[NAME] = Select._jQueryInterface
$.fn[NAME].Constructor = Select
$.fn[NAME].noConflict = () => {
    $.fn[NAME] = JQUERY_NO_CONFLICT
    return Select._jQueryInterface
}

export default Select
