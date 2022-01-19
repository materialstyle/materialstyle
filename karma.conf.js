'use strict'

const path = require('path')
const {browsers} = require('./browsers')

const ENV = process.env
const DEBUG = Boolean(ENV.DEBUG)

const detectBrowsers = {
  usePhantomJS: false,
  postDetection(availableBrowser) {
    // On CI just use Chrome
    if (ENV.CI === true) {
      return ['ChromeHeadless']
    }

    if (availableBrowser.includes('Chrome')) {
      return DEBUG ? ['Chrome'] : ['ChromeHeadless']
    }

    if (availableBrowser.includes('Chromium')) {
      return DEBUG ? ['Chromium'] : ['ChromiumHeadless']
    }

    if (availableBrowser.includes('Firefox')) {
      return DEBUG ? ['Firefox'] : ['FirefoxHeadless']
    }

    throw new Error('Please install Chrome, Chromium or Firefox')
  }
}

module.exports = function (config) {
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
      'js/tests/unit/**/*.spec.js': ['webpack', 'sourcemap']
    },
    frameworks: ['jasmine', 'webpack', 'detectBrowsers'],
    plugins: [
      'karma-webpack',
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-detect-browsers',
      'karma-coverage',
      'karma-sourcemap-loader'
    ],
    exclude: [],
    reporters: ['progress', 'coverage'],
    coverageReporter: {
      dir: path.resolve(__dirname, 'js/coverage/'),
      reporters: [
        {type: 'lcov', subdir: 'report-lcov'},
        {type: 'text-summary'}
      ]
    },
    detectBrowsers: detectBrowsers,
    customLaunchers: browsers,
    browsers: ['Chrome'],
    webpack: {
      mode: 'development',
      cache: true,
      devtool: 'inline-source-map',
      module: {
        rules: [
          {
            enforce: 'pre',
            test: /\.js$/,
            include: path.resolve(__dirname, 'js/src/'),
            exclude: /node_modules/,
            use: {
              loader: 'babel-loader',
              options: {
                "plugins": ["istanbul"]
              }
            }
          },
        ],
      },
    },
  })
}
