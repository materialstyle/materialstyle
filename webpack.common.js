const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

webpackConfig = {
  entry: {
    Alert: './js/src/alert.js',
    Button: './js/src/button.js',
    Carousel: './js/src/carousel.js',
    Collapse: './js/src/collapse.js',
    Drawer: './js/src/drawer.js',
    Dropdown: './js/src/dropdown.js',
    FileInput: './js/src/file_input.js',
    Modal: './js/src/modal.js',
    Navbar: './js/src/navbar.js',
    Popover: './js/src/popover.js',
    // Scrollspy: './js/src/scrollspy.js',
    // Tab: './js/src/tab.js',
    // Toast: './js/src/toast.js',
    // Tooltip: './js/src/tooltip.js',
    // Utility: './js/src/utility.js',
    Ripple: './js/src/ripple.js',
    // SelectField: './js/src/select_field.js',
    // Shape: './js/src/shape.js',
    // Snackbar: './js/src/snackbar.js',
    // Spinner: './js/src/spinner.js',
    // Rainbow: './js/src/rainbow.js',
    // TextField: './js/src/text_field.js',
    // Util: './js/src/util.js',
    materialstyle: './js/src/material_style.js'
  },
  devtool: 'source-map',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: chunkData => {
      let chunkName = chunkData.chunk.name;

      if (chunkName === 'materialstyle') {
        return 'js/materialstyle.min.js';
      } else {
        return '../js/dist/' + (chunkName.split(/(?=[A-Z])/).join('_').toLowerCase()) + '.js';
      }
    },
    publicPath: '/dist/',
    library: {
      name: '[name]',
      type: 'umd',
      export: 'default'
    },
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'js/src'),
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.scss$/,
        include: path.resolve(__dirname, 'scss'),
        use: [
          'style-loader',
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('sass')
            },
          }
        ]
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/materialstyle.min.css'
    }),
    new webpack.ProvidePlugin({
      Popper: 'popper.js'
    })
  ],
  externals: {
    'popper.js': {
      commonjs: 'popper.js',
      commonjs2: 'popper.js',
      amd: 'popper.js',
      root: 'Popper',
    },
  }
};

module.exports = webpackConfig;
