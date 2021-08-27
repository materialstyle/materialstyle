const path = require('path');
const webpack = require('webpack');
const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');
const Components = require('./components.js');

webpackConfig = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: path.join(__dirname, 'examples'),
    port: 3005,
    hot: false,
    watchContentBase: true,
    liveReload: true,
    open: true,
    overlay: true,
    injectClient: false
  },
  module: {
    rules: [
      { test: /\.hbs$/, loader: "handlebars-loader" },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, 'examples')
    })
  ]
});

Components.forEach(function (component) {
  webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
      inject: false,
      hash: true,
      alwaysWriteToDisk: true,
      template: './views/' + component + '.hbs',
      filename: component + '.html',
      title: component
    })
  );
});

module.exports = webpackConfig;
