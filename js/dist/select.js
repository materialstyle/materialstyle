(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("jQuery"));
	else if(typeof define === 'function' && define.amd)
		define(["jQuery"], factory);
	else if(typeof exports === 'object')
		exports["materialstyle"] = factory(require("jQuery"));
	else
		root["materialstyle"] = factory(root["jQuery"]);
})(window, function(__WEBPACK_EXTERNAL_MODULE__0__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 31);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 2:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getColor", function() { return getColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAccentColor", function() { return getAccentColor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPrimaryColor", function() { return getPrimaryColor; });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): utility.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */


const getColor = color => {
  const label = jquery__WEBPACK_IMPORTED_MODULE_0___default()(`<label class="text-${color}"></label>`).hide().appendTo('body');
  color = label.css('color');
  label.remove();

  return color;
};

const getAccentColor = element => {
  let accent = element.className.match(/accent-[^\s]+/);
  let accentColor = '#2196F3';

  if (accent) {
    accent = accent[0].replace('accent-', '');
    accentColor = getColor(accent);
  }

  return accentColor;
};

const getPrimaryColor = element => {
  let primary = element.className.match(/primary-[^\s]+/);
  let primaryColor = '#212121';

  if (primary) {
    primary = primary[0].replace('primary-', '');
    primaryColor = getColor(primary);
  }

  return primaryColor;
};



/***/ }),

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_utility_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_1__);
/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): text_field.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */





/**
 * --------------------------------------------------------------------------
 * Constants
 * --------------------------------------------------------------------------
 */

const NAME = 'select';
const VERSION = '2.0.0';
const DATA_KEY = 'ms.select';
const JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME];

const EVENT_HIDDEN = 'hidden.bs.dropdown';
const EVENT_SHOWN = 'shown.bs.dropdown';

const CLASS_NAME_SELECT = 'ms-select';
const CLASS_NAME_SELECT_OUTLINE = 'ms-select-outline';

const CLASS_NAME_STATIC_LABEL = 'static-label';
const CLASS_NAME_FLOATING_LABEL = 'floating-label';
const CLASS_NAME_FLOATING_LABEL_ACTIVE = 'floating-label-active';

const CLASS_NAME_SEARCHABLE = 'searchable';
const CLASS_NAME_MULTI_SELECT = 'multi-select';

const SELECTOR_CHECKBOX = '.select-items .custom-control-input';
const SELECTOR_SELECT_ALL_CHECKBOX = '.select-all-container .custom-control-input';

const FLOATING_LABEL_SCALE = 0.75;
const NOTCH_BETWEEN_PADDING_SUM = 10;
const NOTCH_BETWEEN_PADDING_LEFT = 5;
const NOTCH_BEFORE_WIDTH = 12;
const TO_STRING_BASE = 36;
const SUBSTR_INDEX = 2;

class Select {
  constructor(element) {
    this._element = element;
    this._select = element.querySelector('.form-control');
    this._selectClass = element.className.includes(CLASS_NAME_SELECT_OUTLINE) ? CLASS_NAME_SELECT_OUTLINE : CLASS_NAME_SELECT;

    this._primaryColor = Object(_src_utility_js__WEBPACK_IMPORTED_MODULE_0__["getPrimaryColor"])(element);
    this._accentColor = Object(_src_utility_js__WEBPACK_IMPORTED_MODULE_0__["getAccentColor"])(element);

    this._label = element.querySelector('label');
    this._labelClass = '';

    if (this._label !== null) {
      this._labelClass = this._label.className.includes(CLASS_NAME_FLOATING_LABEL) ? CLASS_NAME_FLOATING_LABEL : CLASS_NAME_STATIC_LABEL;
    }

    this._prepend = element.querySelector('.prepend');
    this._append = element.querySelector('.append');

    this._isSearchable = Boolean(element.className.includes(CLASS_NAME_SEARCHABLE));
    this._multiSelectEnabled = Boolean(element.className.includes(CLASS_NAME_MULTI_SELECT));

    this._options = this.createOptions();

    this.initSelect();
    this.addEventListeners();
  }

  static get VERSION() {
    return VERSION;
  }

  static _jQueryInterface(config) {
    return this.each(function () {
      const $element = jquery__WEBPACK_IMPORTED_MODULE_1___default()(this);
      let data = $element.data(DATA_KEY);
      let shouldRedraw = true;

      if (!data) {
        shouldRedraw = false;

        data = new Select(this);
        $element.data(DATA_KEY, data);

        data._element.style.visibility = 'visible';
      }

      if (typeof config === 'string') {
        if (typeof data[config] === 'undefined') {
          throw new TypeError(`No method named "${config}"`);
        } else if (config === 'redraw' && shouldRedraw) {
          data[config]();
        }
      }
    });
  }

  createOptions() {
    const optionsArray = [];
    const options = this._select.querySelectorAll('option');

    const selectItems = document.createElement('div');
    selectItems.className = 'select-items';

    for (const [, value] of Object.entries(options)) {
      selectItems.appendChild(this.createCheckbox(value.text, value.value, value.selected));
      optionsArray.push({
        value: value.value,
        text: value.innerHTML,
        selected: value.selected
      });
    }

    this._selectItems = selectItems;
    return optionsArray;
  }

  initSelect() {
    this.createDropdown();
    this.showSelectedItems();

    if (this._selectClass === CLASS_NAME_SELECT) {
      this.addRipple();
    } else {
      this.addNotch();
    }

    this.setAddonHeight();

    if (this._label !== null) {
      this.initLabel();
    }
  }

  redraw() {
    this.setAddonHeight();

    if (this._selectClass === CLASS_NAME_SELECT_OUTLINE) {
      this._notch.style.height = `${this._selectedItem.offsetHeight}px`;
      this._notchBetween.style.width = `${this._label.offsetWidth * FLOATING_LABEL_SCALE + NOTCH_BETWEEN_PADDING_SUM}px`;
    }

    this.setLabelPosition();
  }

  createDropdown() {
    const dropdown = document.createElement('div');
    dropdown.className = 'dropdown';

    const selectedItem = document.createElement('div');
    selectedItem.className = 'selected-item dropdown-toggle';
    selectedItem.dataset.toggle = 'dropdown';

    const dropdownMenu = document.createElement('div');
    dropdownMenu.className = 'dropdown-menu';

    const form = document.createElement('form');

    dropdownMenu.appendChild(form);

    if (this._isSearchable) {
      form.appendChild(this.createSearchContainer());
    }

    if (this._multiSelectEnabled) {
      form.appendChild(this.createSelectAllContainer());
      form.appendChild(this._selectItems);
      dropdownMenu.appendChild(form);

      const closeButton = document.createElement('button');
      closeButton.className = 'btn btn-text-dark';
      closeButton.innerHTML = 'close';

      dropdownMenu.appendChild(closeButton);
    } else {
      form.appendChild(this._selectItems);
      dropdownMenu.appendChild(form);
    }

    dropdown.appendChild(selectedItem);
    dropdown.appendChild(dropdownMenu);

    this._dropdown = dropdown;
    this._selectedItem = selectedItem;

    this._element.insertBefore(this._dropdown, this._select);
  }

  createSearchContainer() {
    let searchContainer = '';

    if (this._isSearchable) {
      searchContainer = document.createElement('div');
      searchContainer.className = 'search-container m-0 p-0';

      const searchInput = document.createElement('input');
      searchInput.type = 'text';
      searchInput.placeholder = 'Search';
      searchInput.className = 'search-input form-control';

      searchContainer.appendChild(searchInput);
    }

    return searchContainer;
  }

  createSelectAllContainer() {
    let selectAllContainer = '';

    if (this._multiSelectEnabled) {
      selectAllContainer = document.createElement('div');
      selectAllContainer.className = 'm-0 p-0 select-all-container';

      selectAllContainer.appendChild(this.createCheckbox('Select All', ''));
    }

    return selectAllContainer;
  }

  createCheckbox(text, value, checked) {
    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.className = 'custom-control-input';
    checkbox.id = `check${Date.now().toString(TO_STRING_BASE)}${Math.random().toString(TO_STRING_BASE).substr(SUBSTR_INDEX)}`;
    checkbox.value = value;
    checkbox.checked = checked;

    const label = document.createElement('label');
    label.className = 'custom-control-label';
    label.innerHTML = text;
    label.setAttribute('for', checkbox.id);

    const customCheckbox = document.createElement('div');
    customCheckbox.className = 'custom-control custom-checkbox input-dark dropdown-item';

    if (checked && !this._multiSelectEnabled) {
      customCheckbox.classList.add('checked');
    }

    customCheckbox.appendChild(checkbox);
    customCheckbox.appendChild(label);

    return customCheckbox;
  }

  showSelectedItems() {
    if (this._multiSelectEnabled) {
      this._selectedItem.innerHTML = this._options.map(option => {
        if (option.selected) {
          return `<span class="badge badge-dark">${option.text}<span class="badge-close" aria-hidden="true" data-value="${option.value}">&times;</span></span>`;
        }
        return '';
      }).join('');

      const closeButton = this._selectedItem.querySelectorAll('.badge-close');

      for (const [, value] of Object.entries(closeButton)) {
        value.addEventListener('click', event => {
          event.preventDefault();
          event.stopPropagation();
          this.setSelectValue(event.target.dataset.value, false);
        });
      }

      if (this._notch !== null && this._notch) {
        this._notch.style.height = `${this._selectedItem.offsetHeight}px`;
      }
    } else {
      this._selectedItem.innerHTML = this._options.map(option => {
        if (option.selected) {
          return option.text;
        }
        return '';
      }).join('');
    }
  }

  addRipple() {
    const ripple = document.createElement('div');
    ripple.className = 'ms-line-ripple';
    ripple.style.backgroundImage = `linear-gradient(${this._accentColor}, ${this._accentColor}), ` + `linear-gradient(${this._primaryColor}, ${this._primaryColor})`;

    this._ripple = ripple;
    this._selectedItem.after(ripple);
  }

  setAddonHeight() {
    if (this._prepend !== null) {
      this._prepend.style.height = `${this._selectedItem.offsetHeight}px`;
      this._selectedItem.style.paddingLeft = `${this._prepend.offsetWidth}px`;
    }

    if (this._append !== null) {
      this._append.style.height = `${this._selectedItem.offsetHeight}px`;
      this._selectedItem.style.paddingRight = `${this._append.offsetWidth}px`;
    }
  }

  addNotch() {
    const notch = document.createElement('div');
    notch.className = 'ms-notch';
    notch.style.height = `${this._selectedItem.offsetHeight}px`;

    const notchBefore = document.createElement('div');
    notchBefore.className = 'ms-notch-before';
    notchBefore.style.borderColor = this._primaryColor;

    const notchBetween = document.createElement('div');
    notchBetween.className = 'ms-notch-between width-auto';
    notchBetween.style.borderColor = this._primaryColor;

    if (this._label === null) {
      notchBetween.style.padding = 0;
    } else {
      notchBetween.style.width = `${this._label.offsetWidth * FLOATING_LABEL_SCALE + NOTCH_BETWEEN_PADDING_SUM}px`;

      if (this._labelClass === CLASS_NAME_STATIC_LABEL) {
        notchBetween.style.borderTopWidth = 0;
      }

      notchBetween.appendChild(this._label);
    }

    const notchAfter = document.createElement('div');
    notchAfter.className = 'ms-notch-after';
    notchAfter.style.borderColor = this._primaryColor;

    notch.appendChild(notchBefore);
    notch.appendChild(notchBetween);
    notch.appendChild(notchAfter);

    this._element.insertBefore(notch, this._dropdown);

    this._notch = notch;
    this._notchBefore = notchBefore;
    this._notchBetween = notchBetween;
    this._notchAfter = notchAfter;
  }

  initLabel() {
    this.setLabelColor();
    this.setLabelPosition();
  }

  setLabelColor() {
    if (this._selectedItem.innerHTML.length) {
      this._label.style.color = this._accentColor;

      if (this._selectClass === CLASS_NAME_SELECT_OUTLINE) {
        this._notchBetween.style.borderTopWidth = 0;
      }
    } else {
      this._label.style.color = this._primaryColor;

      if (this._selectClass === CLASS_NAME_SELECT_OUTLINE && this._labelClass === CLASS_NAME_FLOATING_LABEL) {
        this._notchBetween.style.borderTopWidth = '1px';
      }
    }
  }

  setLabelPosition() {
    if (this._labelClass === CLASS_NAME_FLOATING_LABEL) {
      if (this._selectedItem.innerHTML.length) {
        this._label.classList.remove(CLASS_NAME_FLOATING_LABEL);
        this._label.classList.add(CLASS_NAME_FLOATING_LABEL_ACTIVE);

        if (this._prepend !== null) {
          if (this._selectClass === CLASS_NAME_SELECT_OUTLINE) {
            this._label.style.transform = `translate(0, -0.5rem) scale(${FLOATING_LABEL_SCALE})`;
          } else {
            this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 0.5rem) scale(${FLOATING_LABEL_SCALE})`;
          }
        }
      } else {
        this._label.classList.remove(CLASS_NAME_FLOATING_LABEL_ACTIVE);
        this._label.classList.add(CLASS_NAME_FLOATING_LABEL);

        if (this._prepend !== null) {
          if (this._selectClass === CLASS_NAME_SELECT_OUTLINE) {
            this._label.style.transform = `translate(${this._prepend.offsetWidth - (NOTCH_BEFORE_WIDTH + NOTCH_BETWEEN_PADDING_LEFT)}px, 1.2rem)`;
          } else {
            this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 1.2rem)`;
          }
        }
      }
    } else if (this._prepend !== null) {
      if (this._selectClass === CLASS_NAME_SELECT) {
        this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 0.5rem) scale(${FLOATING_LABEL_SCALE})`;
      }
    }
  }

  handleFocus() {
    if (this._label !== null) {
      this._label.style.color = this._accentColor;
      this._label.classList.remove(CLASS_NAME_FLOATING_LABEL);
      this._label.classList.add(CLASS_NAME_FLOATING_LABEL_ACTIVE);

      if (this._prepend !== null) {
        if (this._selectClass === CLASS_NAME_SELECT_OUTLINE) {
          this._label.style.transform = `translate(0, -0.5rem) scale(${FLOATING_LABEL_SCALE})`;
        } else {
          this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 0.5rem) scale(${FLOATING_LABEL_SCALE})`;
        }
      }
    }

    if (this._selectClass === CLASS_NAME_SELECT_OUTLINE) {
      this._notchBetween.style.borderTopWidth = 0;
      this._notch.classList.add('notch-active');
      this._notchBefore.style.borderColor = this._accentColor;
      this._notchBetween.style.borderColor = this._accentColor;
      this._notchAfter.style.borderColor = this._accentColor;
    }
  }

  handleFocusOut() {
    if (this._label !== null) {
      this.setLabelColor();
      this.setLabelPosition();
    }

    if (this._selectClass === CLASS_NAME_SELECT_OUTLINE) {
      this._notch.classList.remove('notch-active');
      this._notchBefore.style.borderColor = this._primaryColor;
      this._notchBetween.style.borderColor = this._primaryColor;
      this._notchAfter.style.borderColor = this._primaryColor;
    }
  }

  setSelectValue(value, checked) {
    let index;

    if (!this._multiSelectEnabled) {
      const selectedOptions = this._select.querySelectorAll('option');
      for (let i = 0; i < selectedOptions.length; i++) {
        if (selectedOptions[i].selected) {
          selectedOptions[i].selected = false;
        }
      }

      const checkboxes = this._dropdown.querySelectorAll(SELECTOR_CHECKBOX);
      for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = false;
        checkboxes[i].closest('.custom-control').classList.remove('checked');
      }

      index = this._options.findIndex(o => o.selected === true);
      if (index !== -1) {
        this._options[index].selected = false;
      }
    }

    this._select.querySelector(`option[value="${value}"]`).selected = checked;

    this._dropdown.querySelector(`.custom-control-input[value="${value}"]`).checked = checked;

    if (checked) {
      this._dropdown.querySelector(`.custom-control-input[value="${value}"]`).closest('.custom-control').classList.add('checked');
    } else {
      this._dropdown.querySelector(`.custom-control-input[value="${value}"]`).closest('.custom-control').classList.remove('checked');
    }

    index = this._options.findIndex(o => o.value === value);
    this._options[index].selected = checked;

    this.showSelectedItems();
  }

  search(value) {
    value = value.toLowerCase();

    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._dropdown.querySelectorAll('.select-items .custom-checkbox')).each(function () {
      if (jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).find('.custom-control-label').html().toLowerCase().indexOf(value) === -1) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).hide();
      } else {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this).show();
      }
    });
  }

  selectAll(checked) {
    const options = this._select.querySelectorAll('option');
    const checkboxes = this._dropdown.querySelectorAll(SELECTOR_CHECKBOX);

    for (let i = 0; i < options.length; i++) {
      options[i].selected = checked;
    }

    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = checked;

      if (checked) {
        checkboxes[i].closest('.custom-control').classList.add('checked');
      } else {
        checkboxes[i].closest('.custom-control').classList.remove('checked');
      }
    }

    this._options.forEach(option => {
      option.selected = checked;
    });

    this.showSelectedItems();
  }

  addEventListeners() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._dropdown).on(EVENT_SHOWN, () => this.handleFocus());
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._dropdown).on(EVENT_HIDDEN, () => this.handleFocusOut());

    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._label).add(this._prepend).add(this._append).on('click', event => {
      event.preventDefault();
      event.stopPropagation();
      jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._selectedItem).dropdown('toggle');
    });

    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._dropdown).find(SELECTOR_SELECT_ALL_CHECKBOX).on('change', event => {
      this.selectAll(jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.target).is(':checked'));
    });

    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._dropdown).find('.search-input').on('keyup', event => {
      this.search(jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.target).val());
    });

    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._dropdown).find(SELECTOR_CHECKBOX).on('change', event => {
      this.setSelectValue(jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.target).val(), jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.target).is(':checked'));

      if (!this._multiSelectEnabled) {
        jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._selectedItem).dropdown('toggle');
      }
    });

    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._select).on('change', event => {
      if (!this._multiSelectEnabled) {
        this.setSelectValue(jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.target).val(), true);
      } else {
        const selectValue = jquery__WEBPACK_IMPORTED_MODULE_1___default()(event.target).val();

        for (const [, value] of Object.entries(this._options)) {
          if (selectValue.includes(value.value)) {
            this.setSelectValue(value.value, true);
          } else {
            this.setSelectValue(value.value, false);
          }
        }
      }
    });
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME] = Select._jQueryInterface;
jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME].Constructor = Select;
jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME].noConflict = () => {
  jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Select._jQueryInterface;
};

/* harmony default export */ __webpack_exports__["default"] = (Select);

/***/ })

/******/ });
});
//# sourceMappingURL=select.js.map