const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  optimization: {
    minimizer: [
      new TerserPlugin({
        test: /\.min\.js/g,
        parallel: true,
        chunkFilter: chunk => {
          return true;
        }
      }),
      new OptimizeCssAssetsPlugin({
        assetNameRegExp: /\.min\.css$/g,
        cssProcessorPluginOptions: {
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
* Material Style v2.0.1 (https://materialstyle.github.io/)
* Copyright 2018-2020 Material Style
* Licensed under MIT (https://github.com/materialstyle/materialstyle/blob/master/LICENSE)
*
* Bootstrap v4.5.0 (https://getbootstrap.com/)
* Copyright 2011-2020 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
* Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
*/`
    })
  ]
});
