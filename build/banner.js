'use strict'

const pkg = require('../package.json')
const year = new Date().getFullYear()

function getBanner(pluginFilename) {
  return `/*!
  * Material Style${pluginFilename ? ` ${pluginFilename}` : ''} v${pkg.version} (${pkg.homepage})
  * Copyright 2018-${year} ${pkg.author}
  * Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)  
  * This a fork of Bootstrap: Initial license below
  * 
  * Bootstrap${pluginFilename ? ` ${pluginFilename}` : ''} v5.2.0-beta1 (https://getbootstrap.com/)
  * Copyright 2011-${year} The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */`
}

module.exports = getBanner
