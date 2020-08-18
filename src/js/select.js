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

const CLASS_NAME_SELECT = 'ms-select'
const CLASS_NAME_SELECT_OUTLINE = 'ms-select-outline'

const CLASS_NAME_STATIC_LABEL = 'static-label'
const CLASS_NAME_FLOATING_LABEL = 'floating-label'
const CLASS_NAME_FLOATING_LABEL_ACTIVE = 'floating-label-active'

const CLASS_NAME_SEARCHABLE = 'searchable'
const CLASS_NAME_MULTI_SELECT = 'multi-select'

class Select {
    constructor(element) {
        this._element = element
        this._inputField = element.querySelector('.form-control')
        this._inputFieldClass = element.className.includes(CLASS_NAME_SELECT_OUTLINE) ? CLASS_NAME_SELECT_OUTLINE : CLASS_NAME_SELECT

        this._primaryColor = getPrimaryColor(element)
        this._accentColor = getAccentColor(element)

        this._inputLabel = element.querySelector('label')
        this._inputLabelClass = ''

        if (this._inputLabel != null) {
            this._inputLabelClass = this._inputLabel.className.includes(CLASS_NAME_FLOATING_LABEL) ? CLASS_NAME_FLOATING_LABEL : CLASS_NAME_STATIC_LABEL
        }

        this._prepend = element.querySelector('.prepend')
        this._append = element.querySelector('.append')

        this._isSearchable = element.className.includes(CLASS_NAME_SEARCHABLE) ? true : false
        this._multiSelectEnabled = element.className.includes(CLASS_NAME_MULTI_SELECT) ? true : false
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

                data['initSelect']()

                $(data._dropdown).on("shown.bs.dropdown", function(){
                    data['handleFocus']()
                })

                $(data._dropdown).on("hidden.bs.dropdown", function(){
                    data['handleFocusOut']()
                })

                $(data._inputLabel).on('click', function (event) {
                    event.stopPropagation()
                    $(data._selectedItem).dropdown('toggle')
                })

                $(data._dropdown).find('.select-items .custom-control-input').on('change', function () {
                    let isChecked = $(this).is(":checked")

                    if (!data._multiSelectEnabled) {
                        let checkboxes = data._dropdown.querySelectorAll('.select-items .custom-control-input')

                        for (let i = 0; i < checkboxes.length; i++) {
                            checkboxes[i].checked = false
                            checkboxes[i].closest('.custom-control').classList.remove('checked')
                        }

                        this.checked = isChecked
                        this.closest('.custom-control').classList.add('checked')
                    }

                    data['selectItem']($(this).val(), $(this).closest('.custom-control').find('.custom-control-label').html(), isChecked)

                    if (!data._multiSelectEnabled) {
                        $(data._selectedItem).dropdown('toggle')
                    }
                })

                $(data._dropdown).find('.select-all-container .custom-control-input').on('change', function () {
                    data['selectAll']($(this).is(":checked"))
                })

                $(data._dropdown).find('.search-input').on('keyup', function (event) {
                    data['search']($(this).val())
                })

                data._element.style.visibility = 'visible'
            }

            if (config === 'redraw' && shouldRedraw) {
                data['reDrawSelects']()
            }
        })
    }

    initSelect() {
        this.createDropdown()
        this.showSelectedItems()
        this.addRippleOrBorder()
        this.setAddonHeight()

        if (this._inputFieldClass == CLASS_NAME_SELECT_OUTLINE) {
            this.addNotch()
        }

        if (this._inputLabel != null) {
            this.initLabel()
        }
    }

    reDrawSelects() {
        this.setAddonHeight()

        if (this._inputFieldClass == CLASS_NAME_SELECT_OUTLINE) {
            this._notch.style.height = this._selectedItem.offsetHeight + 'px'
            this._notchBetween.style.width = ((this._inputLabel.offsetWidth * 0.75) + 10) + 'px'
        }
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
            form.appendChild(this.createSelectItems())
            dropdownMenu.appendChild(form)

            let closeButton = document.createElement('button')
            closeButton.className = 'btn btn-text-dark'
            closeButton.innerHTML = 'close'

            dropdownMenu.appendChild(closeButton)
        } else {
            form.appendChild(this.createSelectItems())
            dropdownMenu.appendChild(form)
        }

        dropdown.appendChild(selectedItem)
        dropdown.appendChild(dropdownMenu)

        this._dropdown = dropdown
        this._selectedItem = selectedItem

        this._element.insertBefore(this._dropdown, this._inputField)
    }

    createSearchContainer() {
        let searchContainer = ''

        if (this._isSearchable) {
            searchContainer = document.createElement('div')
            searchContainer.className = 'search-container m-0 p-0'

            let searchInput = document.createElement('input')
            searchInput.type = 'text'
            searchInput.placeholder = 'Search'
            searchInput.className = `search-input form-control`

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

    createSelectItems() {
        let selectItems = document.createElement('div')
        selectItems.className = 'select-items'

        let options = this._inputField.querySelectorAll('option')
        let selected = []
        let optionsState = []

        for (let i = 0; i < options.length; i++) {
            selectItems.appendChild(this.createCheckbox(options[i].innerHTML, options[i].value, options[i].selected))

            if (options[i].selected) {
                selected.push(options[i].innerHTML)
            }

            optionsState.push({
                value: options[i].value,
                text: options[i].innerHTML,
                selected: options[i].selected
            })
        }

        this._options = optionsState

        return selectItems
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
        customCheckbox.className = `custom-control custom-checkbox input-dark dropdown-item`

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
                    return `<span class="badge badge-primary">${option.text}</span>`
                }
            }).join('')
        } else {
            this._selectedItem.innerHTML = this._options.map(option => {
                if (option.selected) {
                    return option.text
                }
            }).join('')
        }
    }

    addRippleOrBorder() {
        if (this._inputFieldClass === CLASS_NAME_SELECT) {
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
        }

        if (this._append != null) {
            this._append.style.height = this._selectedItem.offsetHeight + 'px'
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
        notchBetween.style.width = ((this._inputLabel.offsetWidth * 0.75) + 10) + 'px'

        if (this._inputLabel != null && this._inputLabelClass == CLASS_NAME_STATIC_LABEL) {
            notchBetween.style.borderTopWidth = 0
        }

        notchBetween.appendChild(this._inputLabel)

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
            this._inputLabel.style.color = this._accentColor

            if (this._inputFieldClass === CLASS_NAME_SELECT_OUTLINE) {
                this._notchBetween.style.borderTopWidth = 0
            }
        } else {
            this._inputLabel.style.color = this._primaryColor

            if (this._inputFieldClass === CLASS_NAME_SELECT_OUTLINE
                && this._inputLabelClass == CLASS_NAME_FLOATING_LABEL
            ) {
                this._notchBetween.style.borderTopWidth = '1px'
            }
        }
    }

    setLabelPosition() {
        if (this._inputLabelClass === CLASS_NAME_FLOATING_LABEL) {
            if (this._selectedItem.innerHTML.length) {
                this._inputLabel.classList.remove(CLASS_NAME_FLOATING_LABEL)
                this._inputLabel.classList.add(CLASS_NAME_FLOATING_LABEL_ACTIVE)
            } else {
                this._inputLabel.classList.remove(CLASS_NAME_FLOATING_LABEL_ACTIVE)
                this._inputLabel.classList.add(CLASS_NAME_FLOATING_LABEL)
            }
        }
    }

    handleFocus() {
        this._inputLabel.style.color = this._accentColor
        this._inputLabel.classList.remove(CLASS_NAME_FLOATING_LABEL)
        this._inputLabel.classList.add(CLASS_NAME_FLOATING_LABEL_ACTIVE)

        if (this._inputFieldClass === CLASS_NAME_SELECT_OUTLINE) {
            this._notchBetween.style.borderTopWidth = 0
            this._notch.classList.add('notch-active')
            this._notchBefore.style.borderColor = this._accentColor
            this._notchBetween.style.borderColor = this._accentColor
            this._notchAfter.style.borderColor = this._accentColor
        }
    }

    handleFocusOut() {
        if (this._inputLabel != null) {
            this.setLabelColor()
            this.setLabelPosition()
        }

        if (this._inputFieldClass === CLASS_NAME_SELECT_OUTLINE) {
            this._notch.classList.remove('notch-active')
            this._notchBefore.style.borderColor = this._primaryColor
            this._notchBetween.style.borderColor = this._primaryColor
            this._notchAfter.style.borderColor = this._primaryColor
        }
    }

    selectItem(value, text, checked) {
        let index

        if (!this._multiSelectEnabled) {
            let selectedOptions = this._inputField.querySelectorAll('option')

            for (let i = 0; i < selectedOptions.length; i++) {
                if (selectedOptions[i].selected) {
                    selectedOptions[i].selected = false
                }
            }

            index = this._options.findIndex(o => o.selected == true)

            if (index != -1) {
                this._options[index].selected = false
            }
        }

        this._inputField.querySelector('option[value="' + value + '"]').selected = checked

        index = this._options.findIndex(o => o.value == value)
        this._options[index].selected = checked

        this.showSelectedItems()
    }

    search(value) {
        value = value.toLowerCase()

        $(this._dropdown.querySelectorAll('.select-items .custom-checkbox')).filter(function() {
            if ($(this).find('.custom-control-label').html().toLowerCase().indexOf(value) == -1) {
                $(this).hide()
            } else {
                $(this).show()
            }
        })
    }

    selectAll(checked) {
        let options = this._inputField.querySelectorAll('option')
        let checkboxes = this._dropdown.querySelectorAll('.select-items .custom-control-input')

        for (let i = 0; i < options.length; i++) {
            options[i].selected = checked
        }

        for (let i = 0; i < checkboxes.length; i++) {
            checkboxes[i].checked = checked
        }

        this._options.map(option => option.selected = checked)

        this.showSelectedItems()
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
