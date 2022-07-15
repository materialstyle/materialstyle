/* eslint-env node */

'use strict'

module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        loose: true,
        bugfixes: true,
        modules: false
      }
    ]
  ]
}
