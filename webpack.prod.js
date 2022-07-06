/* eslint-env node */

'use strict'

const webpack = require('webpack')
const { merge } = require('webpack-merge')
const common = require('./webpack.common.js')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.min\.js(\?.*)?$/i,
        parallel: true
      }),
      new CssMinimizerPlugin({
        test: /\.min\.css$/i,
        parallel: true,
        minimizerOptions: {
          preset: ['default']
        }
      })
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      raw: true,
      banner:
        `/*!
* Material Style v3.0.0-alpha1 (https://materialstyle.github.io/)
* Copyright 2018-2022 Material Style
* Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
*
* Bootstrap v5.2.0-beta1 (https://getbootstrap.com/)
* Copyright 2011-2022 The Bootstrap Authors
* Copyright 2011-2022 Twitter, Inc.
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
*/`
    })
  ]
})
