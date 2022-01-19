'use strict'

const path = require('path')

module.exports = function(config) {
  config.set({
    basePath: '',
    port: 9876,
    colors: true,
    autoWatch: false,
    singleRun: true,
    concurrency: Number.POSITIVE_INFINITY,
    client: {
      clearContext: false
    },
    files: [
      {
        pattern: 'js/tests/unit/**/*.spec.js',
        watched: false
      }
    ],
    preprocessors: {
      'js/tests/unit/**/*.spec.js': ['webpack']
    },
    frameworks: ['jasmine', 'webpack'],
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-coverage-istanbul-reporter'
    ],
    exclude: [

    ],
    reporters: ['progress', 'coverage-istanbul'],
    coverageIstanbulReporter: {
      dir: path.resolve(__dirname, 'js/coverage/'),
      reports: ['lcov', 'text-summary'],
      thresholds: {
        emitWarning: false,
        global: {
          statements: 90,
          branches: 89,
          functions: 90,
          lines: 90
        }
      }
    },
    browsers: ['Chrome'],
    webpack: {
      cache: true,
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /.spec\.js$/,
            include: path.resolve(__dirname, 'js/tests/'),
            exclude: /node_modules/,
            use: { loader: 'babel-loader' }
          },
          {
            enforce: 'pre',
            test: /\.js$/,
            include: path.resolve(__dirname, 'js/src/'),
            exclude: /node_modules/,
            use: { loader: 'istanbul-instrumenter-loader', options: { esModules: true } },
          },
          {
            test: /\.js$/,
            include: /src/,
            exclude: /node_modules|tests/,
            use: { loader: 'babel-loader' }
          },
        ],
      },

    },
  })
}
