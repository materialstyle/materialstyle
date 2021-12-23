/**
 * --------------------------------------------------------------------------
 * Material Style (v3.0.0-alpha1): select_field.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

import {
  getBaseColor, getPrimaryColor
} from '../src/utility.js'
import BaseComponent from 'bootstrap/js/src/base-component'
import EventHandler from 'bootstrap/js/src/dom/event-handler'
import {
  defineJQueryPlugin
} from 'bootstrap/js/src/util/index'

/**
 * --------------------------------------------------------------------------
 * Constants
 * --------------------------------------------------------------------------
 */

const NAME = 'selectfield'
const VERSION = '3.0.0-alpha1'
const DATA_KEY = 'ms.selectfield'
const EVENT_KEY = `.${DATA_KEY}`

const EVENT_FOCUS = `focus${EVENT_KEY}`
const EVENT_FOCUSOUT = `focusout${EVENT_KEY}`
const EVENT_CLICK = `click${EVENT_KEY}`
const EVENT_KEYUP = `keyup${EVENT_KEY}`

const EVENT_HIDDEN = 'hidden.bs.dropdown'
const EVENT_SHOWN = 'shown.bs.dropdown'

const CLASS_NAME_SELECT = 'form-select'
const CLASS_NAME_OUTLINED = 'form-floating--outlined'

const CLASS_NAME_SEARCHABLE = 'searchable'
const CLASS_NAME_MULTI_SELECT = 'multi-select'

const SELECTOR_DROPDOWN_ITEM = '.dropdown-item:not(.select-all):not(.btn-close)'
const SELECTOR_SELECT_ALL = '.select-all'

const LABEL_SCALE = 0.85

class SelectField extends BaseComponent {
  constructor(element) {
    super(element)
    this._element = element
    this._select = element.querySelector(`.${CLASS_NAME_SELECT}`)

    if (this._select) {
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

    this._isSearchable = Boolean(this._element.className.includes(CLASS_NAME_SEARCHABLE))
    this._multiSelectEnabled = Boolean(this._element.className.includes(CLASS_NAME_MULTI_SELECT))

    this._element.style.setProperty('--form-field-base-color', getBaseColor(this._element))
    this._element.style.setProperty('--form-field-primary-color', getPrimaryColor(this._element))

    this._label = this._element.querySelector('label')
    this._inputGroup = this._element.closest('.input-group')

    if (this._inputGroup) {
      this._prepend = this._inputGroup.querySelector('.prepend')
      this._append = this._inputGroup.querySelector('.append')
    }

    if (this._prepend) {
      this._label.style.paddingLeft = 0
    }

    this.createDropdownMenu()
    this.createDropdown()
    this.showSelectedItems()

    if (this._element.className.includes(CLASS_NAME_OUTLINED)) {
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
      this._element.style.setProperty('--label-floating-margin-right', `-${this._label.offsetWidth - this._label.offsetWidth * LABEL_SCALE}px`)
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
      dropdownMenu.appendChild(this.createSearchContainer())
    }

    if (this._multiSelectEnabled) {
      dropdownMenu.appendChild(this.createDropdownItems('Select All', '', false, true))
    }

    const optionsArray = []
    const options = this._select.querySelectorAll('option')

    for (const [, value] of Object.entries(options)) {
      dropdownMenu.appendChild(this.createDropdownItems(value.text, value.value, value.selected))
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
      dropdownMenu.appendChild(closeButton)
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

    dropdown.appendChild(selectedItem)
    dropdown.appendChild(this._dropdownMenu)

    this._dropdown = dropdown
    this._selectedItem = selectedItem

    this._select.after(this._dropdown)

    this._dropdownInstance = materialstyle.Dropdown.getOrCreateInstance(this._selectedItem)
  }

  createSearchContainer() {
    const searchInput = document.createElement('input')
    searchInput.type = 'search'
    searchInput.placeholder = 'Search'
    searchInput.className = 'search-input form-control'
    searchInput.autocomplete = 'off'

    return searchInput
  }

  createDropdownItems(text, value, checked, isSelectAllButton = false) {
    const dropdownItem = document.createElement('button')
    dropdownItem.type = 'button'
    dropdownItem.className = 'dropdown-item d-flex align-items-center'
    dropdownItem.dataset.value = value
    dropdownItem.dataset.checked = false

    if (isSelectAllButton) {
      dropdownItem.classList.add('select-all')
    }

    if (this._multiSelectEnabled) {
      const checkmark = document.createElement('span')
      checkmark.className = 'checkmark me-1'

      const label = document.createElement('span')
      label.className = 'dropdown-text'
      label.innerHTML = text

      dropdownItem.appendChild(checkmark)
      dropdownItem.appendChild(label)
    } else {
      dropdownItem.innerHTML = text
      if (checked) {
        dropdownItem.classList.add('checked')
        dropdownItem.dataset.checked = true
      }
    }

    return dropdownItem
  }

  showSelectedItems() {
    if (this._multiSelectEnabled) {
      this._selectedItem.innerHTML = this._options.map((option) => {
        if (option.selected) {
          return `<span class="badge rounded-pill bg-dark d-inline-flex align-items-center me-1">${option.text}<button type="button" class="btn-close btn-close-white ms-1" aria-hidden="true" data-value="${option.value}"></button></span>`
        }
        return ''
      }).join('')

      const closeButton = this._selectedItem.querySelectorAll('.btn-close')

      for (const [, value] of Object.entries(closeButton)) {
        EventHandler.on(value, EVENT_CLICK, (event) => {
          this._dropdownInstance.show()
          this.selectOne(event.target.dataset.value, false)
        })
      }
    } else {
      this._selectedItem.innerHTML = this._options.map((option) => {
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

    notch.appendChild(notchBefore)
    notch.appendChild(notchBetween)
    notch.appendChild(notchAfter)

    this._dropdown.after(notch)
    this._notch = notch

    if (this._label) {
      notchBetween.appendChild(this._label)
      this._element.style.setProperty('--label-floating-margin-right', `-${this._label.offsetWidth - this._label.offsetWidth * LABEL_SCALE}px`)
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
      for (let i = 0; i < selectedOptions.length; i++) {
        if (selectedOptions[i].selected) {
          selectedOptions[i].selected = false
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

    for (let i = 0; i < options.length; i++) {
      options[i].selected = checked
    }

    this._select.dispatchEvent(new Event('change', {
      bubbles: true
    }))
  }

  setSelectValue(value, checked) {
    let index

    if (!this._multiSelectEnabled) {
      const dropdownItems = this._dropdown.querySelectorAll(SELECTOR_DROPDOWN_ITEM)
      for (let i = 0; i < dropdownItems.length; i++) {
        dropdownItems[i].dataset.checked = false
        dropdownItems[i].classList.remove('checked')
      }

      index = this._options.findIndex((o) => o.selected === true)
      if (index !== -1) {
        this._options[index].selected = false
      }
    }

    this._dropdown.querySelector(`.dropdown-item[data-value="${value}"]`).dataset.checked = checked

    if (checked) {
      this._dropdown.querySelector(`.dropdown-item[data-value="${value}"]`).classList.add('checked')
    } else {
      this._dropdown.querySelector(`.dropdown-item[data-value="${value}"]`).classList.remove('checked')
    }

    index = this._options.findIndex((o) => o.value === value)
    this._options[index].selected = checked

    this.showSelectedItems()
  }

  search(value) {
    value = value.toLowerCase()

    const dropdownItems = this._dropdown.querySelectorAll(SELECTOR_DROPDOWN_ITEM)

    for (const [, item] of Object.entries(dropdownItems)) {
      let optionText = ''

      if (this._multiSelectEnabled) {
        optionText = item.querySelector('.dropdown-text').innerHTML
      } else {
        optionText = item.innerHTML
      }

      if (optionText.toLowerCase().indexOf(value) === -1) {
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

    EventHandler.on(this._dropdown.querySelector(SELECTOR_SELECT_ALL), EVENT_CLICK, (event) => {
      const checked = event.target.dataset.checked !== 'true'
      event.target.dataset.checked = checked

      if (checked) {
        event.target.classList.add('checked')
      } else {
        event.target.classList.remove('checked')
      }

      this.selectAll(checked)
    })

    EventHandler.on(this._dropdown.querySelector('.search-input'), EVENT_KEYUP, (event) => {
      this.search(event.target.value)
    })

    EventHandler.on(this._dropdown.querySelector('.search-input'), 'search', (event) => {
      this.search(event.target.value)
    })

    const dropdownItems = this._dropdown.querySelectorAll(SELECTOR_DROPDOWN_ITEM)

    for (const [, value] of Object.entries(dropdownItems)) {
      EventHandler.on(value, EVENT_CLICK, (event) => {
        if (this._multiSelectEnabled) {
          this.selectOne(event.target.dataset.value, event.target.dataset.checked !== 'true')
        } else {
          this.selectOne(event.target.dataset.value, true)

          this._dropdownInstance.toggle()
        }
      })
    }

    if (this._closeButton !== undefined) {
      EventHandler.on(this._closeButton, EVENT_CLICK, () => {
        this._dropdownInstance.toggle()
      })
    }

    EventHandler.on(this._select, 'change', (event) => {
      if (this._multiSelectEnabled) {
        const selectValue = [...event.target.options].filter((option) => option.selected).map((option) => option.value)
        let allSelected = true

        for (const [, value] of Object.entries(this._options)) {
          if (selectValue.includes(value.value)) {
            this.setSelectValue(value.value, true)
          } else {
            this.setSelectValue(value.value, false)
            allSelected = false
          }
        }

        const selectAllButton = this._dropdown.querySelector(SELECTOR_SELECT_ALL)
        if (allSelected) {
          selectAllButton.classList.add('checked')
          selectAllButton.dataset.checked = true
        } else {
          selectAllButton.classList.remove('checked')
          selectAllButton.dataset.checked = false
        }
      } else {
        this.setSelectValue(event.target.value, true)
      }
    })

    this.addFontsReadyEvent()
  }

  addFontsReadyEvent() {
    document.fonts.ready.then(() => {
      if (this._inputGroup) {
        if (this._prepend) {
          this._prepend.style.height = `${this._selectedItem.offsetHeight}px`
          this._element.style.setProperty('--prepend-width', `${this._prepend.offsetWidth}px`)
        }
        if (this._append) {
          this._append.style.height = `${this._selectedItem.offsetHeight}px`
          this._element.style.setProperty('--append-width', `${this._append.offsetWidth}px`)
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
