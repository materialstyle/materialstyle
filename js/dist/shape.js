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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
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

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _src_utility_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): shape.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */




/**
 * --------------------------------------------------------------------------
 * Constants
 * --------------------------------------------------------------------------
 */

const NAME = 'shape';
const VERSION = '2.0.0';
const DATA_KEY = 'ms.shape';
const JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];

const DIVISOR = 2;

class Shape {
  constructor(element) {
    this._element = element;
    this._topLeftAngle = element.querySelector('.angle-top-left');
    this._topRightAngle = element.querySelector('.angle-top-right');
    this._bottomLeftAngle = element.querySelector('.angle-bottom-left');
    this._bottomRightAngle = element.querySelector('.angle-bottom-right');
    this.initShape();
  }

  static get VERSION() {
    return VERSION;
  }

  static _jQueryInterface() {
    return this.each(function () {
      const $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      let data = $element.data(DATA_KEY);

      if (!data) {
        data = new Shape(this);
        $element.data(DATA_KEY, data);

        data._element.style.visibility = 'visible';
      }
    });
  }

  initShape() {
    this.setShapeColor();
    this.setShapeSize();
    this.setShapeOutline();
  }

  setShapeColor() {
    let shapeColor = this._element.className.match(/shape-parent-bg-[^\s]+/);

    if (shapeColor) {
      shapeColor = shapeColor[0].replace('shape-parent-', '');

      if (this._topLeftAngle) {
        this._topLeftAngle.classList.add(shapeColor);
      }
      if (this._topRightAngle) {
        this._topRightAngle.classList.add(shapeColor);
      }
      if (this._bottomLeftAngle) {
        this._bottomLeftAngle.classList.add(shapeColor);
      }
      if (this._bottomRightAngle) {
        this._bottomRightAngle.classList.add(shapeColor);
      }
    }
  }

  setShapeSize() {
    let bottomLeftWidth = 0;
    let bottomRightWidth = 0;
    let topLeftWidth = 0;
    let topRightWidth = 0;

    if (this._topLeftAngle) {
      topLeftWidth = this._topLeftAngle.className.match(/size-[^\s]+/);
      if (topLeftWidth) {
        topLeftWidth = parseInt(topLeftWidth[0].replace('size-', ''), 10);
      }
    }

    if (this._topRightAngle) {
      topRightWidth = this._topRightAngle.className.match(/size-[^\s]+/);
      if (topRightWidth) {
        topRightWidth = parseInt(topRightWidth[0].replace('size-', ''), 10);
      }
    }

    if (this._bottomLeftAngle) {
      bottomLeftWidth = this._bottomLeftAngle.className.match(/size-[^\s]+/);
      if (bottomLeftWidth) {
        bottomLeftWidth = parseInt(bottomLeftWidth[0].replace('size-', ''), 10);
      }
    }

    if (this._bottomRightAngle) {
      bottomRightWidth = this._bottomRightAngle.className.match(/size-[^\s]+/);

      if (bottomRightWidth) {
        bottomRightWidth = parseInt(bottomRightWidth[0].replace('size-', ''), 10);
      }
    }

    if (topLeftWidth) {
      this._topLeftAngle.style.top = `${-(topLeftWidth / DIVISOR)}px`;
      this._topLeftAngle.style.left = `${-(topLeftWidth / DIVISOR)}px`;
      this._topLeftAngle.style.width = `${topLeftWidth}px`;
      this._topLeftAngle.style.height = `${topLeftWidth}px`;
    }

    if (topRightWidth) {
      this._topRightAngle.style.top = `${-(topRightWidth / DIVISOR)}px`;
      this._topRightAngle.style.right = `${-(topRightWidth / DIVISOR)}px`;
      this._topRightAngle.style.width = `${topRightWidth}px`;
      this._topRightAngle.style.height = `${topRightWidth}px`;
    }

    if (bottomLeftWidth) {
      this._bottomLeftAngle.style.bottom = `${-(bottomLeftWidth / DIVISOR)}px`;
      this._bottomLeftAngle.style.left = `${-(bottomLeftWidth / DIVISOR)}px`;
      this._bottomLeftAngle.style.width = `${bottomLeftWidth}px`;
      this._bottomLeftAngle.style.height = `${bottomLeftWidth}px`;
    }

    if (bottomRightWidth) {
      this._bottomRightAngle.style.bottom = `${-(bottomRightWidth / DIVISOR)}px`;
      this._bottomRightAngle.style.right = `${-(bottomRightWidth / DIVISOR)}px`;
      this._bottomRightAngle.style.width = `${bottomRightWidth}px`;
      this._bottomRightAngle.style.height = `${bottomRightWidth}px`;
    }
  }

  setShapeOutline() {
    let shapeOutline;

    const cardOutline = this._element.querySelector('[class*="card-outline-"]');
    const btnOutline = this._element.querySelector('[class*="btn-outline-"]');

    if (cardOutline) {
      shapeOutline = cardOutline.className.match(/card-outline-[^\s]+/);
      shapeOutline = shapeOutline[0].replace('card-outline-', '');
    }

    if (btnOutline) {
      shapeOutline = btnOutline.className.match(/btn-outline-[^\s]+/);
      shapeOutline = shapeOutline[0].replace('btn-outline-', '');
    }

    if (shapeOutline) {
      shapeOutline = Object(_src_utility_js__WEBPACK_IMPORTED_MODULE_1__["getColor"])(shapeOutline);

      const borderBottom = `1px solid ${shapeOutline}`;

      if (this._topLeftAngle) {
        this._topLeftAngle.style.borderBottom = borderBottom;
      }
      if (this._topRightAngle) {
        this._topRightAngle.style.borderBottom = borderBottom;
      }
      if (this._bottomLeftAngle) {
        this._bottomLeftAngle.style.borderBottom = borderBottom;
      }
      if (this._bottomRightAngle) {
        this._bottomRightAngle.style.borderBottom = borderBottom;
      }
    }
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Shape._jQueryInterface;
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Shape;
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = () => {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Shape._jQueryInterface;
};

/* harmony default export */ __webpack_exports__["default"] = (Shape);

/***/ })

/******/ });
});
//# sourceMappingURL=shape.js.map