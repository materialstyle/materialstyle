/*!
  * Material Style navbar.js v3.0.0 (https://materialstyle.github.io/)
  * Copyright 2018-2022 Neeraj Kumar Das (https://github.com/nkdas91)
  * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)  
  * This a fork of Bootstrap: Initial license below
  * 
  * Bootstrap navbar.js v5.2.0 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
  typeof define === 'function' && define.amd ? define(factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Navbar = factory());
})(this, (function () { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Material Style (v3.0.0): navbar.js
   * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  class Navbar {
    constructor() {
      this.addEventListeners();
    }

    setNavbarFixedHeight() {
      const navbarFixed = document.querySelector('.navbar[class*="fixed-"]');

      if (navbarFixed !== null) {
        document.body.style.setProperty('--navbar-fixed-height', `${navbarFixed.offsetHeight}px`);
      }
    }

    addEventListeners() {
      document.addEventListener('DOMContentLoaded', () => {
        this.setNavbarFixedHeight();
      });
      window.addEventListener('resize', () => {
        this.setNavbarFixedHeight();
      }, {
        passive: true
      });
      let prevScrollpos = window.pageYOffset;
      window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;

        if (prevScrollpos > currentScrollPos) {
          if (document.querySelector('.navbar.auto-hide')) {
            document.querySelector('.navbar.auto-hide').classList.remove('hide');
          }
        } else if (document.querySelector('.navbar.auto-hide')) {
          document.querySelector('.navbar.auto-hide').classList.add('hide');
        }

        prevScrollpos = currentScrollPos;
      }, {
        passive: true
      });
    }

  }

  (() => new Navbar())();

  return Navbar;

}));
//# sourceMappingURL=navbar.js.map
