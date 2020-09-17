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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__0__;

/***/ }),

/***/ 14:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/**
 * --------------------------------------------------------------------------
 * Material Style (v2.0.0): drawer.js
 * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */



/**
 * --------------------------------------------------------------------------
 * Constants
 * --------------------------------------------------------------------------
 */

const NAME = 'drawer';
const VERSION = '2.0.0';
const DATA_KEY = 'ms.drawer';
const JQUERY_NO_CONFLICT = jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME];

const CLASS_NAME_VISIBLE = 'drawer-visible';
const CLASS_NAME_SWITCHED = '--switched';
const CLASS_NAME_FIXED = 'drawer-fixed';
const CLASS_SHADE = 'ms-shade';
const TOGGLE_AT_WIDTH = 1280;

class Drawer {
  constructor(element) {
    this._element = element;
    this._shade = this.createShade();
    this._hamburger = document.querySelector('.drawer-toggle');
    this._drawerBrand = element.querySelector('.drawer-brand');
    this._footer = document.querySelector('footer');
    this._navBar = document.querySelector('.navbar');

    this.initDrawer();
    this.addEventListeners();
  }

  static get VERSION() {
    return VERSION;
  }

  static _jQueryInterface() {
    return this.each(function () {
      const $element = jquery__WEBPACK_IMPORTED_MODULE_0___default()(this);
      let data = $element.data(DATA_KEY);

      if (!data) {
        data = new Drawer(this);
        $element.data(DATA_KEY, data);
      }
    });
  }

  createShade() {
    if (document.querySelector(`.${CLASS_SHADE}`) === null) {
      const shade = document.createElement('div');
      shade.className = CLASS_SHADE;
      shade.style.display = 'none';
      document.querySelector('body').append(shade);

      return shade;
    }

    return document.querySelector(`.${CLASS_SHADE}`);
  }

  initDrawer() {
    if (this._element.className.includes(CLASS_NAME_VISIBLE) && this._element.className.includes(CLASS_NAME_FIXED)) {
      const fixedSideNavBg = this._element.className.match(/bg-[^\s]+/);

      const fixed = document.createElement('div');
      fixed.className = `ms-fixed ${fixedSideNavBg}`;

      const children = this._element.childNodes;

      for (const [, value] of Object.entries(children)) {
        fixed.appendChild(value);
      }

      this._element.appendChild(this._drawerBrand);
      this._element.appendChild(fixed);

      this._fixed = fixed;
    }

    let navbarHeight = '56px';
    if (this._navBar !== null) {
      navbarHeight = this._navBar.offsetHeight;
    }

    if (this._drawerBrand !== null) {
      this._drawerBrand.style.height = `${navbarHeight}px`;
    }

    if (this._element.className.includes(CLASS_NAME_FIXED) && this._fixed !== null) {
      this._fixed.style.top = `${navbarHeight}px`;
      this._fixed.style.height = `calc(100vh - ${navbarHeight}px)`;
    }

    if (this._element.querySelector('.nav-link.active') !== null) {
      this._element.querySelector('.nav-link.active').closest('.sub-menu-container').prev('.nav-item').find('> .sub-menu-link').trigger('click');
    }

    if (this._element.className.includes(CLASS_NAME_VISIBLE)) {
      this.toggle();
    }
  }

  show() {
    this._shade.style.display = 'block';
    this._element.style.left = 0;
  }

  hide() {
    this._shade.style.display = 'none';

    if (!this._element.className.includes(CLASS_NAME_VISIBLE)) {
      this._element.style.left = '-350px';
    }
  }

  toggle() {
    if (jquery__WEBPACK_IMPORTED_MODULE_0___default()(window).innerWidth() < TOGGLE_AT_WIDTH) {
      if (this._element.className.includes(CLASS_NAME_VISIBLE)) {
        this._element.classList.add(CLASS_NAME_SWITCHED);
        this._element.classList.remove(CLASS_NAME_VISIBLE);
        this._element.style.left = '-350px';
      }

      this._shade.style.display = 'none';

      if (this._hamburger !== null) {
        this._hamburger.style.display = 'block';
      }

      if (this._footer !== null) {
        this._footer.style.marginLeft = 0;
      }
    } else {
      if (this._element.className.includes(CLASS_NAME_SWITCHED)) {
        this._element.classList.remove(CLASS_NAME_SWITCHED);
        this._element.classList.add(CLASS_NAME_VISIBLE);
        this._element.style.left = 0;
      }

      if (this._hamburger !== null) {
        this._hamburger.style.display = 'none';
      }

      if (this._footer !== null && this._element.className.includes(CLASS_NAME_VISIBLE) && this._element.className.includes(CLASS_NAME_FIXED)) {
        this._footer.style.marginLeft = '250px';
      }
    }
  }

  addEventListeners() {
    this._hamburger.addEventListener('click', () => this.show());

    document.addEventListener('click', event => {
      if (event.target !== this._element && event.target !== this._hamburger && !this._element.contains(event.target)) {
        this.hide();
      }
    });

    const links = this._element.querySelectorAll('.nav-link');

    for (const [, value] of Object.entries(links)) {
      let show = true;

      value.addEventListener('click', event => {
        const subMenuContainer = event.target.closest('.nav-item').nextElementSibling;
        let subMenu = null;

        if (subMenuContainer !== null) {
          subMenu = subMenuContainer.querySelector('.sub-menu');
        }

        if (subMenu !== null) {
          const subMenuHeight = subMenu.offsetHeight;

          if (show) {
            subMenu.style.marginTop = 0;
            show = false;

            if (event.target.className.includes('sub-menu-link')) {
              event.target.querySelector('.material-icons').innerHTML = 'keyboard_arrow_up';
            }
          } else {
            subMenu.style.marginTop = `-${subMenuHeight}px`;
            show = true;

            if (event.target.className.includes('sub-menu-link')) {
              event.target.querySelector('.material-icons').innerHTML = 'keyboard_arrow_down';
            }
          }
        }

        if (!event.target.className.includes('sub-menu-link')) {
          this.hide();
        }
      });
    }

    window.addEventListener('resize', () => {
      if (this._element.className.includes(CLASS_NAME_VISIBLE) || this._element.className.includes(CLASS_NAME_SWITCHED)) {
        this.toggle();
      }

      let navbarHeight = '56px';
      if (this._navBar !== null) {
        navbarHeight = this._navBar.offsetHeight;
      }

      if (this._drawerBrand !== null) {
        this._drawerBrand.style.height = `${navbarHeight}px`;
      }

      if (this._fixed !== null && this._fixed !== undefined) {
        this._fixed.style.top = `${navbarHeight}px`;
        this._fixed.style.height = `calc(100vh - ${navbarHeight}px)`;
      }
    });

    this._element.querySelector('.drawer-close-btn').addEventListener('click', () => {
      this.hide();
    });
  }
}

/**
 * ------------------------------------------------------------------------
 * jQuery
 * ------------------------------------------------------------------------
 */

jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = Drawer._jQueryInterface;
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].Constructor = Drawer;
jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME].noConflict = () => {
  jquery__WEBPACK_IMPORTED_MODULE_0___default.a.fn[NAME] = JQUERY_NO_CONFLICT;
  return Drawer._jQueryInterface;
};

/* harmony default export */ __webpack_exports__["default"] = (Drawer);

jquery__WEBPACK_IMPORTED_MODULE_0___default()(() => {
  jquery__WEBPACK_IMPORTED_MODULE_0___default()('.drawer').drawer();
});

/***/ })

/******/ });
});
//# sourceMappingURL=drawer.js.map