/*!
  * Material Style rainbow.js v3.0.0 (https://materialstyle.github.io/)
  * Copyright 2018-2022 Neeraj Kumar Das (https://github.com/nkdas91)
  * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)  
  * This a fork of Bootstrap: Initial license below
  * 
  * Bootstrap rainbow.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./base-component'), require('./dom/event-handler'), require('./dom/selector-engine'), require('./util/index')) :
  typeof define === 'function' && define.amd ? define(['./base-component', './dom/event-handler', './dom/selector-engine', './util/index'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Rainbow = factory(global.BaseComponent, global.EventHandler, global.SelectorEngine, global.Index));
})(this, (function (BaseComponent, EventHandler, SelectorEngine, index) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  const EventHandler__default = /*#__PURE__*/_interopDefaultLegacy(EventHandler);
  const SelectorEngine__default = /*#__PURE__*/_interopDefaultLegacy(SelectorEngine);

  /**
   * --------------------------------------------------------------------------
   * Material Style (v3.0.0): rainbow.js
   * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * ------------------------------------------------------------------------
   * Constants
   * ------------------------------------------------------------------------
   */

  const NAME = 'rainbow';
  const VERSION = '3.0.0';
  const DATA_KEY = 'bs.rainbow';
  const EVENT_KEY = `.${DATA_KEY}`;
  const DATA_API_KEY = '.data-api';
  const EVENT_LOAD_DATA_API = `load${EVENT_KEY}${DATA_API_KEY}`;

  class Rainbow extends BaseComponent__default.default {
    constructor(element) {
      super(element);
      this._element = element;
      this.initRainbow();
    }

    static get NAME() {
      return NAME;
    }

    static get VERSION() {
      return VERSION;
    }

    static jQueryInterface() {
      return this.each(function () {
        Rainbow.getOrCreateInstance(this);
      });
    }

    initRainbow() {
      const colorBars = this._element.querySelectorAll('.color-bar');

      const barCount = colorBars.length;

      for (let i = 0; i < barCount; i++) {
        colorBars[i].style.animation = `m-rainbow ${barCount}s cubic-bezier(0.165, 0.84, 0.44, 1) ${i}s infinite`;
      }
    }

  }

  EventHandler__default.default.on(window, EVENT_LOAD_DATA_API, () => {
    for (const el of SelectorEngine__default.default.find('.progress-bar-rainbow')) {
      Rainbow.getOrCreateInstance(el);
    }
  });
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */

  index.defineJQueryPlugin(Rainbow);

  return Rainbow;

}));
//# sourceMappingURL=rainbow.js.map
