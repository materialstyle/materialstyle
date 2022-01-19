'use strict'

const path = require('path')
const {browsers} = require('./browsers')

const ENV = process.env
const BROWSERSTACK = Boolean(ENV.BROWSERSTACK)
const DEBUG = Boolean(ENV.DEBUG)

const frameworks = [
  'jasmine',
  'webpack'
]

const plugins = [
  'karma-jasmine',
  'karma-webpack',
  'karma-sourcemap-loader'
]

const reporters = ['progress']

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

const conf = {
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
}

if (BROWSERSTACK) {
  conf.hostname = ip.address()
  conf.browserStack = {
    username: ENV.BROWSER_STACK_USERNAME,
    accessKey: ENV.BROWSER_STACK_ACCESS_KEY,
    build: `materialstyle-${ENV.GITHUB_SHA ? ENV.GITHUB_SHA.slice(0, 7) + '-' : ''}${new Date().toISOString()}`,
    project: 'Material Style',
    retryLimit: 2
  }
  plugins.push('karma-browserstack-launcher', 'karma-jasmine-html-reporter')
  conf.customLaunchers = browsers
  conf.browsers = Object.keys(browsers)
  reporters.push('BrowserStack', 'kjhtml')
} else {
  frameworks.push('detectBrowsers')
  plugins.push(
    'karma-chrome-launcher',
    'karma-firefox-launcher',
    'karma-detect-browsers',
    'karma-coverage'
  )
  reporters.push('coverage')
  conf.detectBrowsers = detectBrowsers
  conf.coverageReporter = {
    dir: path.resolve(__dirname, 'js/coverage/'),
    reporters: [
      {type: 'lcov', subdir: 'report-lcov'},
      {type: 'text-summary'}
    ]
  }

  if (DEBUG) {
    conf.hostname = ip.address()
    plugins.push('karma-jasmine-html-reporter')
    reporters.push('kjhtml')
    conf.singleRun = false
    conf.autoWatch = true
  }
}

conf.frameworks = frameworks
conf.plugins = plugins
conf.reporters = reporters

module.exports = karmaConfig => {
  conf.logLevel = karmaConfig.LOG_ERROR
  karmaConfig.set(conf)
}
