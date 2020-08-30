const path = require("path");
const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Components = require("./components.js");

webpackConfig = merge(common, {
    mode: "development",
    devServer: {
        contentBase: path.join(__dirname, "src/examples"),
        port: 3005,
        hot: false,
        watchContentBase: true,
        liveReload: true,
        open: true,
        overlay: true
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
});

Components.forEach(function (component) {
    webpackConfig.plugins.push(
        new HtmlWebpackPlugin({
            inject: false,
            hash: true,
            template: "./src/examples/" + component + ".html",
            filename: "examples/" + component + ".html"
        })
    );
});

module.exports = webpackConfig;
