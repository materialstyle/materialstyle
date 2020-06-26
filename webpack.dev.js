const path = require("path");
const webpack = require("webpack");
const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "src/examples"),
        port: 3000,
        hot: true,
        watchContentBase: true,
        liveReload: true,
        open: true,
        overlay: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});
