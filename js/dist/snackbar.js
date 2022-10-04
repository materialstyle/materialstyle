/*!
  * Material Style snackbar.js v3.0.0 (https://materialstyle.github.io/)
  * Copyright 2018-2022 Neeraj Kumar Das (https://github.com/nkdas91)
  * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)  
  * This a fork of Bootstrap: Initial license below
  * 
  * Bootstrap snackbar.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./util/index'), require('./base-component'), require('./dom/manipulator'), require('./util/component-functions')) :
  typeof define === 'function' && define.amd ? define(['./util/index', './base-component', './dom/manipulator', './util/component-functions'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Snackbar = factory(global.Index, global.BaseComponent, global.Manipulator, global.ComponentFunctions));
})(this, (function (index, BaseComponent, Manipulator, componentFunctions) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);
  const Manipulator__default = /*#__PURE__*/_interopDefaultLegacy(Manipulator);

  /**
   * --------------------------------------------------------------------------
   * Material Style (v3.0.0): snackbar.js
   * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * Constants
   */

  const NAME = 'snackbar';
  const SNACKBAR_VISIBLE_DURATION = 3000;
  const SNACKBAR_VISIBLE_DELAY = 200;
  const Default = {
    autoClose: true,
    visibleDuration: SNACKBAR_VISIBLE_DURATION
  };
  const DefaultType = {
    autoClose: 'boolean',
    visibleDuration: 'number'
  };
  /**
   * Queue implementation
   */

  const waitingQueue = [];
  const runningQueue = [];
  let activeSnackbar;
  Object.defineProperty(waitingQueue, 'pushToWaitingQueue', {
    value(...args) {
      if (runningQueue.length) {
        waitingQueue.push(args[0]);
      } else {
        runningQueue.pushToRunningQueue(args[0]);
      }
    }

  });
  Object.defineProperty(runningQueue, 'pushToRunningQueue', {
    value(...args) {
      activeSnackbar = args[0];
      activeSnackbar.classList.add('show');
      runningQueue.push(activeSnackbar);

      if (activeSnackbar.dataset.bsAutoClose === 'true') {
        setTimeout(() => {
          activeSnackbar.classList.remove('show');
          runningQueue.removeFromRunningQueue(activeSnackbar);
        }, activeSnackbar.dataset.bsVisibleDuration);
      }
    }

  });
  Object.defineProperty(runningQueue, 'removeFromRunningQueue', {
    value() {
      if (waitingQueue.length) {
        setTimeout(() => {
          runningQueue.shift();
          runningQueue.pushToRunningQueue(waitingQueue.shift());
        }, SNACKBAR_VISIBLE_DELAY);
      } else {
        runningQueue.shift();
      }
    }

  });
  /**
   * Class definition
   */

  class Snackbar extends BaseComponent__default.default {
    constructor(element, config) {
      super(element);
      this._config = this._getConfig(config);
      this._element.dataset.bsVisibleDuration = this._config.visibleDuration;
      this._element.dataset.bsAutoClose = this._config.autoClose;
      waitingQueue.pushToWaitingQueue(this._element);
    }

    static get Default() {
      return Default;
    }

    static get DefaultType() {
      return DefaultType;
    }

    static get NAME() {
      return NAME;
    }

    static jQueryInterface(config) {
      return this.each(function () {
        Snackbar.getOrCreateInstance(this, config);
      });
    }

    _getConfig(config) {
      config = { ...Default,
        ...Manipulator__default.default.getDataAttributes(this._element),
        ...(typeof config === 'object' ? config : {})
      };
      config = this._mergeConfigObj(config);
      config = this._configAfterMerge(config);

      this._typeCheckConfig(config);

      return config;
    }

    close() {
      activeSnackbar.classList.remove('show');
      runningQueue.removeFromRunningQueue(activeSnackbar);
    }

  }
  /**
   * Data API implementation
   */


  componentFunctions.enableDismissTrigger(Snackbar, 'close');
  /**
   * jQuery
   */

  index.defineJQueryPlugin(Snackbar);

  return Snackbar;

}));
//# sourceMappingURL=snackbar.js.map
