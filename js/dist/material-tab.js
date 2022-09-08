/*!
  * Material Style material-tab.js v3.0.0 (https://materialstyle.github.io/)
  * Copyright 2018-2022 Neeraj Kumar Das (https://github.com/nkdas91)
  * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)  
  * This a fork of Bootstrap: Initial license below
  * 
  * Bootstrap material-tab.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./tab'), require('./dom/event-handler'), require('./util/index')) :
  typeof define === 'function' && define.amd ? define(['./tab', './dom/event-handler', './util/index'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.MaterialTab = factory(global.Tab, global.EventHandler, global.Index));
})(this, (function (Tab, EventHandler, index) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const Tab__default = /*#__PURE__*/_interopDefaultLegacy(Tab);
  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);

  /**
   * --------------------------------------------------------------------------
   * Material Style (v3.0.0): material-tab.js
   * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = 'materialtab';
  const VERSION = '3.0.0';
  const ENTER_KEY_CODE = 13;
  const SPACE_KEY_CODE = 32;
  const INDICATOR_HEIGHT = 2;

  class MaterialTab extends Tab__default.default {
    constructor(element) {
      super(element);
      this._element = element;
      this.initTab();

      this._setListeners();
    }

    static get NAME() {
      return NAME;
    }

    static get VERSION() {
      return VERSION;
    }

    static jQueryInterface(config) {
      return this.each(function () {
        const data = MaterialTab.getOrCreateInstance(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config]();
        }
      });
    }

    initTab() {
      let indicatorLeft = 0;
      let indicatorTop = 0;
      let indicatorWidth = 0;

      let activeItem = this._element.querySelector('.nav-link.active');

      activeItem = activeItem === null ? this._element.querySelector('.nav-item') : activeItem.closest('.nav-item');

      if (activeItem !== null) {
        indicatorLeft = `${activeItem.offsetLeft}px`;
        indicatorTop = `${activeItem.offsetTop + activeItem.offsetHeight - INDICATOR_HEIGHT}px`;
        indicatorWidth = `${activeItem.offsetWidth}px`;
      }

      const activeIndicator = document.createElement('span');
      activeIndicator.className = 'active-indicator';
      activeIndicator.style.left = indicatorLeft;
      activeIndicator.style.top = indicatorTop;
      activeIndicator.style.width = indicatorWidth;
      this._activeIndicator = activeIndicator;

      this._element.append(activeIndicator);

      this._element.style.visibility = 'visible';
    }

    redraw() {
      this.setIndicatorPositionOnResize();
    }

    setIndicatorPosition(target) {
      this._activeIndicator.style.left = `${target.offsetLeft}px`;
      this._activeIndicator.style.top = `${target.offsetTop + target.offsetHeight - INDICATOR_HEIGHT}px`;
      this._activeIndicator.style.width = `${target.offsetWidth}px`;
    }

    setIndicatorPositionOnResize() {
      let indicatorLeft = 0;
      let indicatorTop = 0;
      let indicatorWidth = 0;

      let activeItem = this._element.querySelector('.nav-link.active');

      activeItem = activeItem === null ? this._element.querySelector('.nav-item') : activeItem.closest('.nav-item');

      if (activeItem !== null) {
        indicatorLeft = `${activeItem.offsetLeft}px`;
        indicatorTop = `${activeItem.offsetTop + activeItem.offsetHeight - INDICATOR_HEIGHT}px`;
        indicatorWidth = `${activeItem.offsetWidth}px`;
      }

      this._activeIndicator.style.left = indicatorLeft;
      this._activeIndicator.style.top = indicatorTop;
      this._activeIndicator.style.width = indicatorWidth;
    }

    _setListeners() {
      const navItems = this._element.querySelectorAll('.nav-item');

      for (const [, value] of Object.entries(navItems)) {
        EventHandler__default.default.on(value, 'mouseup', () => {
          this.setIndicatorPosition(value);
        });
        EventHandler__default.default.on(value, 'keyup', event => {
          if (event.code === 'Enter' || event.keyCode === ENTER_KEY_CODE || event.code === 'Space' || event.keyCode === SPACE_KEY_CODE) {
            this.setIndicatorPosition(value);
          }
        });
      }

      EventHandler__default.default.on(window, 'resize', () => this.setIndicatorPositionOnResize());
    }

  }
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  index.defineJQueryPlugin(MaterialTab);

  return MaterialTab;

}));
//# sourceMappingURL=material-tab.js.map
