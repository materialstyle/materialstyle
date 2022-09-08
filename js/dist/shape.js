/*!
  * Material Style shape.js v3.0.0 (https://materialstyle.github.io/)
  * Copyright 2018-2022 Neeraj Kumar Das (https://github.com/nkdas91)
  * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)  
  * This a fork of Bootstrap: Initial license below
  * 
  * Bootstrap shape.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./base-component'), require('./util/index')) :
  typeof define === 'function' && define.amd ? define(['./base-component', './util/index'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Shape = factory(global.BaseComponent, global.Index));
})(this, (function (BaseComponent, index) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Material Style (v3.0.0): shape.js
   * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * --------------------------------------------------------------------------
   * Constants
   * --------------------------------------------------------------------------
   */

  const NAME = 'shape';
  const VERSION = '3.0.0';
  const DIVISOR = 2;

  class Shape extends BaseComponent__default.default {
    constructor(element) {
      super(element);
      this._element = element;
      this._topLeftAngle = element.querySelector('.angle-top-left');
      this._topRightAngle = element.querySelector('.angle-top-right');
      this._bottomLeftAngle = element.querySelector('.angle-bottom-left');
      this._bottomRightAngle = element.querySelector('.angle-bottom-right');
      this.initShape();
    }

    static get NAME() {
      return NAME;
    }

    static get VERSION() {
      return VERSION;
    }

    static jQueryInterface() {
      return this.each(function () {
        Shape.getOrCreateInstance(this);
      });
    }

    initShape() {
      this.setShapeColor();
      this.setShapeSize();
    }

    setShapeColor() {
      let shapeColor = this._element.className.match(/shape-parent-bg-\S+/);

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
        topLeftWidth = this._topLeftAngle.className.match(/size-\S+/);

        if (topLeftWidth) {
          topLeftWidth = Number.parseInt(topLeftWidth[0].replace('size-', ''), 10);
        }
      }

      if (this._topRightAngle) {
        topRightWidth = this._topRightAngle.className.match(/size-\S+/);

        if (topRightWidth) {
          topRightWidth = Number.parseInt(topRightWidth[0].replace('size-', ''), 10);
        }
      }

      if (this._bottomLeftAngle) {
        bottomLeftWidth = this._bottomLeftAngle.className.match(/size-\S+/);

        if (bottomLeftWidth) {
          bottomLeftWidth = Number.parseInt(bottomLeftWidth[0].replace('size-', ''), 10);
        }
      }

      if (this._bottomRightAngle) {
        bottomRightWidth = this._bottomRightAngle.className.match(/size-\S+/);

        if (bottomRightWidth) {
          bottomRightWidth = Number.parseInt(bottomRightWidth[0].replace('size-', ''), 10);
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

  }
  /**
   * ------------------------------------------------------------------------
   * jQuery
   * ------------------------------------------------------------------------
   */


  index.defineJQueryPlugin(Shape);

  return Shape;

}));
//# sourceMappingURL=shape.js.map
