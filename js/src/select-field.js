/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0): select_field.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  getBaseColor, getPrimaryColor
} from './util/color'
import BaseComponent from './base-component'
import EventHandler from './dom/event-handler'
import Dropdown from './dropdown'
import {
  defineJQueryPlugin
} from './util/index'

/**
 * --------------------------------------------------------------------------
 * Constants
 * --------------------------------------------------------------------------
 */

const NAME = 'selectfield'
const VERSION = '3.0.0'
const DATA_KEY = 'bs.selectfield'
const EVENT_KEY = `.${DATA_KEY}`

const EVENT_FOCUS = `focus${EVENT_KEY}`
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`
const EVENT_CLICK = `click${EVENT_KEY}`
const EVENT_KEYUP = `keyup${EVENT_KEY}`

const EVENT_HIDDEN = 'hidden.bs.dropdown'
const EVENT_SHOWN = 'shown.bs.dropdown'

const CLASS_NAME_FLOATING = 'form-floating'
const CLASS_NAME_FLOATING_OUTLINED = 'form-floating-outlined'

const CLASS_NAME_SEARCHABLE = 'searchable'
const CLASS_NAME_MULTI_SELECT = 'multi-select'

const SELECTOR_DROPDOWN_ITEM = '.dropdown-item:not(.select-all):not(.btn-close)'
const SELECTOR_SELECT_ALL = '.select-all'

const LABEL_SCALE = 0.85

class SelectField extends BaseComponent {
  constructor(element) {
    super(element)
    this._select = element
    this._formFloating = element.closest(`.${CLASS_NAME_FLOATING}`)

    if (this._select && this._formFloating) {
      this.initSelect()
      this._setListeners()
    }
  }

  static get NAME() {
    return NAME
  }

  static get VERSION() {
    return VERSION
  }

  static jQueryInterface(config) {
    return this.each(function () {
      const data = SelectField.getOrCreateInstance(this)

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`)
        }

        data[config]()
      }
    })
  }

  initSelect() {
    this._select.tabIndex = -1

    this._isSearchable = Boolean(this._formFloating.className.includes(CLASS_NAME_SEARCHABLE))
    this._multiSelectEnabled = Boolean(this._formFloating.className.includes(CLASS_NAME_MULTI_SELECT))

    this._formFloating.style.setProperty('--form-field-base-color', getBaseColor(this._formFloating))
    this._formFloating.style.setProperty('--form-field-primary-color', getPrimaryColor(this._formFloating))

    this._label = this._formFloating.querySelector('label')
    this._inputGroup = this._formFloating.closest('.input-group')

    if (this._inputGroup) {
      if (this._formFloating.className.includes(CLASS_NAME_FLOATING_OUTLINED)) {
        this._inputGroup.classList.add('has-form-floating-outlined')
      } else {
        this._inputGroup.classList.add('has-form-floating')
      }
    }

    this._formFloatingWithIcon = this._formFloating.closest('.form-floating-with-icon')

    if (this._formFloatingWithIcon) {
      this._prepend = this._formFloatingWithIcon.querySelector('.prepend')
      this._append = this._formFloatingWithIcon.querySelector('.append')
    }

    if (this._prepend) {
      this._label.style.paddingLeft = 0
    }

    this.createDropdownMenu()
    this.createDropdown()
    this.showSelectedItems()

    if (this._formFloating.className.includes(CLASS_NAME_FLOATING_OUTLINED)) {
      this.addNotch()
    } else {
      this.addRipple()
    }

    if (this._label) {
      this.toggleLabelState()
    }
  }

  redraw() {
    if (this._label) {
      this.toggleLabelState()
      this._formFloating.style.setProperty('--label-floating-margin-right', `-${this._label.offsetWidth - (this._label.offsetWidth * LABEL_SCALE)}px`)
    }

    this.addFontsReadyEvent()
  }

  rebuild() {
    this._options = []
    this._dropdownMenu.innerHTML = ''

    this.createDropdownMenu()
    this.showSelectedItems()
    this.redraw()
    this._setListeners()
  }

  createDropdownMenu() {
    let dropdownMenu = this._dropdownMenu

    if (dropdownMenu === undefined) {
      dropdownMenu = document.createElement('div')
      dropdownMenu.className = 'dropdown-menu'
    }

    if (this._isSearchable) {
      dropdownMenu.append(this.createSearchContainer())
    }

    if (this._multiSelectEnabled) {
      dropdownMenu.append(this.createDropdownItems('Select All', '', false, true))
    }

    const optionsArray = []
    const options = this._select.querySelectorAll('option')

    for (const [, value] of Object.entries(options)) {
      dropdownMenu.append(this.createDropdownItems(value.text, value.value, value.selected))
      optionsArray.push({
        value: value.value,
        text: value.innerHTML,
        selected: value.selected
      })
    }

    this._options = optionsArray

    if (this._multiSelectEnabled) {
      const closeButton = document.createElement('button')
      closeButton.type = 'button'
      closeButton.className = 'btn-close dropdown-item w-100'
      closeButton.ariaLabel = 'Close'

      this._closeButton = closeButton
      dropdownMenu.append(closeButton)
    }

    this._dropdownMenu = dropdownMenu
  }

  createDropdown() {
    const dropdown = document.createElement('div')
    dropdown.className = 'dropdown'

    const selectedItem = document.createElement('button')
    selectedItem.type = 'button'
    selectedItem.className = 'btn btn-select dropdown-toggle text-start shadow-none'
    selectedItem.dataset.bsToggle = 'dropdown'
    selectedItem.dataset.bsAutoClose = 'outside'

    if (this._select.disabled) {
      selectedItem.disabled = true
    }

    dropdown.append(selectedItem)
    dropdown.append(this._dropdownMenu)

    this._dropdown = dropdown
    this._selectedItem = selectedItem

    this._select.after(this._dropdown)

    this._dropdownInstance = Dropdown.getOrCreateInstance(this._selectedItem)
  }

  createSearchContainer() {
    const searchInput = document.createElement('input')
    searchInput.type = 'search'
    searchInput.placeholder = 'Search'
    searchInput.className = 'search-input'
    searchInput.autocomplete = 'off'

    return searchInput
  }

  createDropdownItems(text, value, checked, isSelectAllButton = false) {
    const dropdownItem = document.createElement('button')
    dropdownItem.type = 'button'
    dropdownItem.className = 'dropdown-item d-flex align-items-center'
    dropdownItem.dataset.bsValue = value
    dropdownItem.dataset.bsChecked = false

    if (isSelectAllButton) {
      dropdownItem.classList.add('select-all')
    }

    if (this._multiSelectEnabled) {
      const checkmark = document.createElement('span')
      checkmark.className = 'checkmark me-1'

      const label = document.createElement('span')
      label.className = 'dropdown-text'
      label.innerHTML = text

      dropdownItem.append(checkmark)
      dropdownItem.append(label)
    } else {
      dropdownItem.innerHTML = text
      if (checked) {
        dropdownItem.classList.add('checked')
        dropdownItem.dataset.bsChecked = true
      }
    }

    return dropdownItem
  }

  showSelectedItems() {
    if (this._multiSelectEnabled) {
      this._selectedItem.innerHTML = this._options.map(option => {
        if (option.selected) {
          return `<span class="badge bg-dark d-inline-flex align-items-center p-1 m-1">${option.text}<button type="button" class="btn-close btn-close-white ms-1" aria-hidden="true" data-bs-value="${option.value}"></button></span>`
        }

        return ''
      }).join('')

      const closeButton = this._selectedItem.querySelectorAll('.btn-close')

      for (const [, value] of Object.entries(closeButton)) {
        EventHandler.on(value, EVENT_CLICK, event => {
          this._dropdownInstance.show()
          this.selectOne(event.target.dataset.bsValue, false)
        })
      }
    } else {
      this._selectedItem.innerHTML = this._options.map(option => {
        if (option.selected) {
          return option.text
        }

        return ''
      }).join('')
    }
  }

  addRipple() {
    const ripple = document.createElement('div')
    ripple.className = 'm-line-ripple'

    this._ripple = ripple
    this._dropdown.after(ripple)
  }

  addNotch() {
    const notch = document.createElement('div')
    notch.className = 'm-notch'

    const notchBefore = document.createElement('div')
    notchBefore.className = 'm-notch-before'

    const notchBetween = document.createElement('div')
    notchBetween.className = 'm-notch-between'

    const notchAfter = document.createElement('div')
    notchAfter.className = 'm-notch-after'

    notch.append(notchBefore)
    notch.append(notchBetween)
    notch.append(notchAfter)

    this._dropdown.after(notch)
    this._notch = notch

    if (this._label) {
      notchBetween.append(this._label)
      this._formFloating.style.setProperty('--label-floating-margin-right', `-${this._label.offsetWidth - (this._label.offsetWidth * LABEL_SCALE)}px`)
    }
  }

  toggleLabelState() {
    if (this._selectedItem.innerHTML.length) {
      this._dropdown.classList.add('float')
    } else {
      this._dropdown.classList.remove('float')
    }
  }

  handleFocusOut() {
    if (!this._selectedItem.classList.contains('show')) {
      this.toggleLabelState()
    }
  }

  selectOne(value, checked) {
    if (!this._multiSelectEnabled) {
      const selectedOptions = this._select.querySelectorAll('option')
      for (const selectedOption of selectedOptions) {
        if (selectedOption.selected) {
          selectedOption.selected = false
        }
      }
    }

    this._select.querySelector(`option[value="${value}"]`).selected = checked

    this._select.dispatchEvent(new Event('change', {
      bubbles: true
    }))
  }

  selectAll(checked) {
    const options = this._select.querySelectorAll('option')

    for (const option of options) {
      option.selected = checked
    }

    this._select.dispatchEvent(new Event('change', {
      bubbles: true
    }))
  }

  setSelectValue(value, checked) {
    let index

    if (!this._multiSelectEnabled) {
      const dropdownItems = this._dropdown.querySelectorAll(SELECTOR_DROPDOWN_ITEM)
      for (const dropdownItem of dropdownItems) {
        dropdownItem.dataset.bsChecked = false
        dropdownItem.classList.remove('checked')
      }

      index = this._options.findIndex(o => o.selected === true)
      if (index !== -1) {
        this._options[index].selected = false
      }
    }

    this._dropdown.querySelector(`.dropdown-item[data-bs-value="${value}"]`).dataset.bsChecked = checked

    if (checked) {
      this._dropdown.querySelector(`.dropdown-item[data-bs-value="${value}"]`).classList.add('checked')
    } else {
      this._dropdown.querySelector(`.dropdown-item[data-bs-value="${value}"]`).classList.remove('checked')
    }

    index = this._options.findIndex(o => o.value === value)
    this._options[index].selected = checked

    this.showSelectedItems()
  }

  search(value) {
    value = value.toLowerCase()

    const dropdownItems = this._dropdown.querySelectorAll(SELECTOR_DROPDOWN_ITEM)

    for (const [, item] of Object.entries(dropdownItems)) {
      let optionText = ''

      optionText = this._multiSelectEnabled ? item.querySelector('.dropdown-text').innerHTML : item.innerHTML

      if (!optionText.toLowerCase().includes(value)) {
        item.classList.add('d-none')
        item.classList.remove('d-flex')
      } else {
        item.classList.add('d-flex')
        item.classList.remove('d-none')
      }
    }
  }

  _setListeners() {
    EventHandler.on(this._selectedItem, EVENT_FOCUS, () => this._dropdown.classList.add('float'))
    EventHandler.on(this._selectedItem, EVENT_FOCUSOUT, () => this.handleFocusOut())
    EventHandler.on(this._dropdown, EVENT_SHOWN, () => this._dropdown.classList.add('float'))
    EventHandler.on(this._dropdown, EVENT_HIDDEN, () => this.handleFocusOut())

    EventHandler.on(this._dropdown.querySelector(SELECTOR_SELECT_ALL), EVENT_CLICK, event => {
      const checked = event.target.dataset.bsChecked !== 'true'
      event.target.dataset.bsChecked = checked

      if (checked) {
        event.target.classList.add('checked')
      } else {
        event.target.classList.remove('checked')
      }

      this.selectAll(checked)
    })

    EventHandler.on(this._dropdown.querySelector('.search-input'), EVENT_KEYUP, event => {
      this.search(event.target.value)
    })

    EventHandler.on(this._dropdown.querySelector('.search-input'), 'search', event => {
      this.search(event.target.value)
    })

    const dropdownItems = this._dropdown.querySelectorAll(SELECTOR_DROPDOWN_ITEM)

    for (const [, value] of Object.entries(dropdownItems)) {
      EventHandler.on(value, EVENT_CLICK, event => {
        if (this._multiSelectEnabled) {
          this.selectOne(event.target.dataset.bsValue, event.target.dataset.bsChecked !== 'true')
        } else {
          this.selectOne(event.target.dataset.bsValue, true)

          this._dropdownInstance.toggle()
        }
      })
    }

    if (this._closeButton !== undefined) {
      EventHandler.on(this._closeButton, EVENT_CLICK, () => {
        this._dropdownInstance.toggle()
      })
    }

    EventHandler.on(this._select, 'change', event => {
      if (this._multiSelectEnabled) {
        const selectValue = new Set([...event.target.options].filter(option => option.selected).map(option => option.value))
        let allSelected = true

        for (const [, value] of Object.entries(this._options)) {
          if (selectValue.has(value.value)) {
            this.setSelectValue(value.value, true)
          } else {
            this.setSelectValue(value.value, false)
            allSelected = false
          }
        }

        const selectAllButton = this._dropdown.querySelector(SELECTOR_SELECT_ALL)
        if (allSelected) {
          selectAllButton.classList.add('checked')
          selectAllButton.dataset.bsChecked = true
        } else {
          selectAllButton.classList.remove('checked')
          selectAllButton.dataset.bsChecked = false
        }
      } else {
        this.setSelectValue(event.target.value, true)
      }

      this.handleFocusOut()
    })

    this.addFontsReadyEvent()
  }

  addFontsReadyEvent() {
    document.fonts.ready.then(() => {
      if (this._formFloatingWithIcon) {
        if (this._prepend) {
          this._prepend.style.height = `${this._selectedItem.offsetHeight}px`
          this._formFloating.style.setProperty('--prepend-width', `${this._prepend.offsetWidth}px`)
        }

        if (this._append) {
          this._append.style.height = `${this._selectedItem.offsetHeight}px`
          this._formFloating.style.setProperty('--append-width', `${this._append.offsetWidth}px`)
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

defineJQueryPlugin(SelectField)

export default SelectField
