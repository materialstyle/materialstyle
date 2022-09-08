/*!
  * Material Style text-field.js v3.0.0 (https://materialstyle.github.io/)
  * Copyright 2018-2022 Neeraj Kumar Das (https://github.com/nkdas91)
  * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)  
  * This a fork of Bootstrap: Initial license below
  * 
  * Bootstrap text-field.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('./util/color'), require('./base-component'), require('./util/index')) :
  typeof define === 'function' && define.amd ? define(['./util/color', './base-component', './util/index'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.TextField = factory(global.Color, global.BaseComponent, global.Index));
})(this, (function (color, BaseComponent, index) { 'use strict';

  const _interopDefaultLegacy = e => e && typeof e === 'object' && 'default' in e ? e : { default: e };

  const BaseComponent__default = /*#__PURE__*/_interopDefaultLegacy(BaseComponent);

  /**
   * --------------------------------------------------------------------------
   * Material Style (v3.0.0): text_field.js
   * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  /**
   * --------------------------------------------------------------------------
   * Constants
   * --------------------------------------------------------------------------
   */

  const NAME = 'textfield';
  const VERSION = '3.0.0';
  const CLASS_NAME_FLOATING = 'form-floating';
  const CLASS_NAME_FLOATING_OUTLINED = 'form-floating-outlined';
  const LABEL_SCALE = 0.85;

  class TextField extends BaseComponent__default.default {
    constructor(element) {
      super(element);
      this._textField = element;
      this._formFloating = element.closest(`.${CLASS_NAME_FLOATING}`);

      if (this._textField && this._formFloating) {
        this.initTextFields();
        this.addFontsReadyEvent();
      }
    }

    static get NAME() {
      return NAME;
    }

    static get VERSION() {
      return VERSION;
    }

    static jQueryInterface(config) {
      return this.each(function () {
        const data = TextField.getOrCreateInstance(this);

        if (typeof config === 'string') {
          if (typeof data[config] === 'undefined') {
            throw new TypeError(`No method named "${config}"`);
          }

          data[config](this);
        }
      });
    }

    initTextFields() {
      this._formFloating.style.setProperty('--form-field-base-color', color.getBaseColor(this._formFloating));

      this._formFloating.style.setProperty('--form-field-primary-color', color.getPrimaryColor(this._formFloating));

      this._label = this._formFloating.querySelector('label');
      this._inputGroup = this._formFloating.closest('.input-group');

      if (this._inputGroup) {
        if (this._formFloating.className.includes(CLASS_NAME_FLOATING_OUTLINED)) {
          this._inputGroup.classList.add('has-form-floating-outlined');
        } else {
          this._inputGroup.classList.add('has-form-floating');
        }
      }

      this._formFloatingWithIcon = this._formFloating.closest('.form-floating-with-icon');

      if (this._formFloatingWithIcon) {
        this._prepend = this._formFloatingWithIcon.querySelector('.prepend');
        this._append = this._formFloatingWithIcon.querySelector('.append');
      }

      if (this._prepend) {
        this._label.style.paddingLeft = 0;
      }

      if (this._formFloating.className.includes(CLASS_NAME_FLOATING_OUTLINED)) {
        this.addNotch();
      } else {
        this.addRipple();
      }
    }

    redraw() {
      if (this._label) {
        this._formFloating.style.setProperty('--label-floating-margin-right', `-${this._label.offsetWidth - this._label.offsetWidth * LABEL_SCALE}px`);
      }

      this.addFontsReadyEvent();
    }

    addRipple() {
      const ripple = document.createElement('div');
      ripple.className = 'm-line-ripple';
      this._ripple = ripple;

      this._textField.after(ripple);
    }

    addNotch() {
      const notch = document.createElement('div');
      notch.className = 'm-notch';
      const notchBefore = document.createElement('div');
      notchBefore.className = 'm-notch-before';
      const notchBetween = document.createElement('div');
      notchBetween.className = 'm-notch-between';
      const notchAfter = document.createElement('div');
      notchAfter.className = 'm-notch-after';
      notch.append(notchBefore);
      notch.append(notchBetween);
      notch.append(notchAfter);

      this._textField.after(notch);

      this._notch = notch;

      if (this._label) {
        notchBetween.append(this._label);

        this._formFloating.style.setProperty('--label-floating-margin-right', `-${this._label.offsetWidth - this._label.offsetWidth * LABEL_SCALE}px`);
      }
    }

    addFontsReadyEvent() {
      document.fonts.ready.then(() => {
        if (this._formFloatingWithIcon) {
          if (this._prepend) {
            this._prepend.style.height = `${this._textField.offsetHeight}px`;

            this._formFloating.style.setProperty('--prepend-width', `${this._prepend.offsetWidth}px`);
          }

          if (this._append) {
            this._append.style.height = `${this._textField.offsetHeight}px`;

            this._formFloating.style.setProperty('--append-width', `${this._append.offsetWidth}px`);
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


  index.defineJQueryPlugin(TextField);

  return TextField;

}));
//# sourceMappingURL=text-field.js.map
