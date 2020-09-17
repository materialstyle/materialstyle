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
/******/ 	return __webpack_require__(__webpack_require__.s = 30);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 30:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): ripple.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */



/**
 * ------------------------------------------------------------------------
 * Constants
 * ------------------------------------------------------------------------
 */

const NAME = 'ripple';
const VERSION = '2.0.0';
const DATA_KEY_RIPPLE = 'ms.ripple';
const JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];

const DIVISOR = 2;

class Ripple {
  constructor(element) {
    this._element = element;
    this.addRipple();
    this.addEventListeners();
  }

  static get VERSION() {
    return VERSION;
  }

  static _jQueryInterface() {
    return this.each(function () {
      const $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      let data = $element.data(DATA_KEY_RIPPLE);

      if (!data) {
        data = new Ripple(this);
        $element.data(DATA_KEY_RIPPLE, data);
      }
    });
  }

  addRipple() {
    const maxDimension = Math.max(this._element.offsetWidth, this._element.offsetHeight);

    const ripple = document.createElement('span');
    ripple.className = 'ms-ripple';
    ripple.style.width = `${maxDimension}px`;
    ripple.style.height = `${maxDimension}px`;

    if (this._element.querySelector('.ms-ripple') === null) {
      this._element.appendChild(ripple);
    }

    this._ripple = ripple;
  }

  handleMouseDown(event) {
    this._ripple.classList.remove('animate');

    const elementPosition = this._element.getBoundingClientRect();

    const offset = {
      top: elementPosition.top + window.scrollY,
      left: elementPosition.left + window.scrollX
    };

    const x = event.pageX - offset.left - this._ripple.offsetWidth / DIVISOR;
    const y = event.pageY - offset.top - this._ripple.offsetHeight / DIVISOR;

    this._ripple.style.top = `${y}px`;
    this._ripple.style.left = `${x}px`;

    this._ripple.classList.remove('stop-animate');
    this._ripple.setAttribute('data-mousedown', 'true');
    this._ripple.setAttribute('data-animationstate', 'running');
    this._ripple.classList.add('animate');

    if (this._element.querySelector('.animate') !== null) {
      this._element.querySelector('.animate').addEventListener('animationend', e => {
        if (e.target.getAttribute('data-mousedown') === 'false') {
          e.target.classList.remove('animate');
        } else {
          e.target.setAttribute('data-animationstate', 'stopped');
        }
      });
    }
  }

  handleMouseUpMouseMove() {
    const animate = this._element.querySelector('.animate');

    if (animate !== null) {
      animate.setAttribute('data-mousedown', 'false');

      if (animate.getAttribute('data-animationstate') === 'stopped') {
        animate.classList.remove('animate');
      }
    }
  }

  addEventListeners() {
    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on('mousedown', event => {
      this.handleMouseDown(event);
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on('mouseup', () => {
      this.handleMouseUpMouseMove();
    });

    jquery__WEBPACK_IMPORTED_MODULE_0___default()(this._element).on('mousemove', () => {
      this.handleMouseUpMouseMove();
    });
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Ripple._jQueryInterface;
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Ripple;
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = () => {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Ripple._jQueryInterface;
};

/* harmony default export */ __webpack_exports__["default"] = (Ripple);

/***/ })

/******/ });
});
//# sourceMappingURL=ripple.js.map