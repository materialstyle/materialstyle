/*!
  * Material Style color.js v3.0.0 (https://materialstyle.github.io/)
  * Copyright 2018-2022 Neeraj Kumar Das (https://github.com/nkdas91)
  * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)  
  * This a fork of Bootstrap: Initial license below
  * 
  * Bootstrap color.js v5.2.2 (https://getbootstrap.com/)
  * Copyright 2011-2022 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.Color = {}));
})(this, (function (exports) { 'use strict';

  /**
   * --------------------------------------------------------------------------
   * Material Style (v3.0.0): color.js
   * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
   * --------------------------------------------------------------------------
   */
  const getColor = color => {
    const label = document.createElement('label');
    label.className = `text-${color}`;
    label.style.display = 'none';
    document.querySelector('body').append(label);
    const style = getComputedStyle(label);
    color = style.color;
    label.remove();
    return color;
  };

  const getBaseColor = element => {
    let base = element.className.match(/base-\S+/);
    let baseColor = '#757575';

    if (base) {
      base = base[0].replace('base-', '');
      baseColor = getColor(base);
    }

    return baseColor;
  };

  const getPrimaryColor = element => {
    let primary = element.className.match(/primary-\S+/);
    let primaryColor = '#0d6efd';

    if (primary) {
      primary = primary[0].replace('primary-', '');
      primaryColor = getColor(primary);
    }

    return primaryColor;
  };

  exports.getBaseColor = getBaseColor;
  exports.getColor = getColor;
  exports.getPrimaryColor = getPrimaryColor;

  Object.defineProperties(exports, { __esModule: { value: true }, [Symbol.toStringTag]: { value: 'Module' } });

}));
//# sourceMappingURL=color.js.map
