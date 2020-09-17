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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
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

/***/ 36:
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

const NAME = 'textfield';
const VERSION = '2.0.0';
const DATA_KEY = 'ms.textfield';
const JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME];

const CLASS_NAME_TEXTFIELD = 'ms-text-field';
const CLASS_NAME_TEXTFIELD_OUTLINE = 'ms-text-field-outline';

const CLASS_NAME_STATIC_LABEL = 'static-label';
const CLASS_NAME_FLOATING_LABEL = 'floating-label';
const CLASS_NAME_FLOATING_LABEL_ACTIVE = 'floating-label-active';

const FLOATING_LABEL_SCALE = 0.75;
const NOTCH_BETWEEN_PADDING_SUM = 10;
const NOTCH_BETWEEN_PADDING_LEFT = 5;
const NOTCH_BEFORE_WIDTH = 12;

class TextField {
  constructor(element) {
    this._element = element;
    this._textField = element.querySelector('.form-control');
    this._textFieldClass = element.className.includes(CLASS_NAME_TEXTFIELD_OUTLINE) ? CLASS_NAME_TEXTFIELD_OUTLINE : CLASS_NAME_TEXTFIELD;
    this._inputLength = this._textField.value.length;

    this._primaryColor = Object(_src_utility_js__WEBPACK_IMPORTED_MODULE_0__["getPrimaryColor"])(element);
    this._accentColor = Object(_src_utility_js__WEBPACK_IMPORTED_MODULE_0__["getAccentColor"])(element);

    this._label = element.querySelector('label');
    this._labelClass = '';

    if (this._label !== null) {
      this._labelClass = this._label.className.includes(CLASS_NAME_FLOATING_LABEL) ? CLASS_NAME_FLOATING_LABEL : CLASS_NAME_STATIC_LABEL;
    }

    this._prepend = element.querySelector('.prepend');
    this._append = element.querySelector('.append');

    this.initTextFields();
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

        data = new TextField(this);
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

  initTextFields() {
    if (this._textFieldClass === CLASS_NAME_TEXTFIELD) {
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

    if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
      this._notch.style.height = `${this._textField.offsetHeight}px`;
      this._notchBetween.style.width = `${this._label.offsetWidth * FLOATING_LABEL_SCALE + NOTCH_BETWEEN_PADDING_SUM}px`;
    }
  }

  addRipple() {
    const ripple = document.createElement('div');
    ripple.className = 'ms-line-ripple';
    ripple.style.backgroundImage = `linear-gradient(${this._accentColor}, ${this._accentColor}), ` + `linear-gradient(${this._primaryColor}, ${this._primaryColor})`;

    this._ripple = ripple;
    this._textField.after(ripple);
  }

  setAddonHeight() {
    if (this._prepend !== null) {
      this._prepend.style.height = `${this._textField.offsetHeight}px`;
      this._textField.style.paddingLeft = `${this._prepend.offsetWidth}px`;
    }

    if (this._append !== null) {
      this._append.style.height = `${this._textField.offsetHeight}px`;
      this._textField.style.paddingRight = `${this._append.offsetWidth}px`;
    }
  }

  addNotch() {
    const notch = document.createElement('div');
    notch.className = 'ms-notch';
    notch.style.height = `${this._textField.offsetHeight}px`;

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

    this._element.insertBefore(notch, this._textField);

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
    if (this._inputLength) {
      this._label.style.color = this._accentColor;

      if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
        this._notchBetween.style.borderTopWidth = 0;
      }
    } else {
      this._label.style.color = this._primaryColor;

      if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE && this._labelClass === CLASS_NAME_FLOATING_LABEL) {
        this._notchBetween.style.borderTopWidth = '1px';
      }
    }
  }

  setLabelPosition() {
    if (this._labelClass === CLASS_NAME_FLOATING_LABEL) {
      if (this._inputLength) {
        this._label.classList.remove(CLASS_NAME_FLOATING_LABEL);
        this._label.classList.add(CLASS_NAME_FLOATING_LABEL_ACTIVE);

        if (this._prepend !== null) {
          if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
            this._label.style.transform = `translate(0, -0.5rem) scale(${FLOATING_LABEL_SCALE})`;
          } else {
            this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 0.5rem) scale(${FLOATING_LABEL_SCALE})`;
          }
        }
      } else {
        this._label.classList.remove(CLASS_NAME_FLOATING_LABEL_ACTIVE);
        this._label.classList.add(CLASS_NAME_FLOATING_LABEL);

        if (this._prepend !== null) {
          if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
            this._label.style.transform = `translate(${this._prepend.offsetWidth - (NOTCH_BEFORE_WIDTH + NOTCH_BETWEEN_PADDING_LEFT)}px, 1.2rem)`;
          } else {
            this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 1.2rem)`;
          }
        }
      }
    } else if (this._prepend !== null) {
      if (this._textFieldClass === CLASS_NAME_TEXTFIELD) {
        this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 0.5rem) scale(${FLOATING_LABEL_SCALE})`;
      }
    }
  }

  handleFocus() {
    this._element.classList.add('active');

    if (this._label !== null) {
      this._label.style.color = this._accentColor;
      this._label.classList.remove(CLASS_NAME_FLOATING_LABEL);
      this._label.classList.add(CLASS_NAME_FLOATING_LABEL_ACTIVE);

      if (this._prepend !== null) {
        if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
          this._label.style.transform = `translate(0, -0.5rem) scale(${FLOATING_LABEL_SCALE})`;
        } else {
          this._label.style.transform = `translate(${this._prepend.offsetWidth}px, 0.5rem) scale(${FLOATING_LABEL_SCALE})`;
        }
      }
    }

    if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
      this._notchBetween.style.borderTopWidth = 0;
      this._notch.classList.add('notch-active');
      this._notchBefore.style.borderColor = this._accentColor;
      this._notchBetween.style.borderColor = this._accentColor;
      this._notchAfter.style.borderColor = this._accentColor;
    }
  }

  handleFocusOut() {
    this._element.classList.remove('active');

    if (this._label !== null) {
      this.setLabelColor();
      this.setLabelPosition();
    }

    if (this._textFieldClass === CLASS_NAME_TEXTFIELD_OUTLINE) {
      this._notch.classList.remove('notch-active');
      this._notchBefore.style.borderColor = this._primaryColor;
      this._notchBetween.style.borderColor = this._primaryColor;
      this._notchAfter.style.borderColor = this._primaryColor;
    }
  }

  addEventListeners() {
    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._textField).on('change', () => {
      this._inputLength = this._textField.value.length;
    });

    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._textField).on('focus', () => {
      this.handleFocus();
    });

    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._textField).on('focusout', () => {
      this.handleFocusOut();
    });

    jquery__WEBPACK_IMPORTED_MODULE_1___default()(this._label).add(this._prepend).add(this._append).on('click', () => {
      this._textField.focus();
    });
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME] = TextField._jQueryInterface;
jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME].Constructor = TextField;
jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME].noConflict = () => {
  jquery__WEBPACK_IMPORTED_MODULE_1___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return TextField._jQueryInterface;
};

/* harmony default export */ __webpack_exports__["default"] = (TextField);

/***/ })

/******/ });
});
//# sourceMappingURL=text_field.js.map