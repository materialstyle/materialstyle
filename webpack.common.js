const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

webpackConfig = {
    entry: {
        alert: "./js/src/alert.js",
        button: "./js/src/button.js",
        carousel: "./js/src/carousel.js",
        collapse: "./js/src/collapse.js",
        drawer: "./js/src/drawer.js",
        dropdown: "./js/src/dropdown.js",
        file_input: "./js/src/file_input.js",
        modal: "./js/src/modal.js",
        navbar: "./js/src/navbar.js",
        popover: "./js/src/popover.js",
        scrollspy: "./js/src/scrollspy.js",
        tab: "./js/src/tab.js",
        toast: "./js/src/toast.js",
        tooltip: "./js/src/tooltip.js",
        utility: "./js/src/utility.js",
        ripple: "./js/src/ripple.js",
        select_field: "./js/src/select_field.js",
        shape: "./js/src/shape.js",
        snackbar: "./js/src/snackbar.js",
        spinner: "./js/src/spinner.js",
        rainbow: "./js/src/rainbow.js",
        text_field: "./js/src/text_field.js",
        material_style: "./js/src/material_style.js"
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: chunkData => {
            let chunkName = chunkData.chunk.name;

            if (chunkName === "material_style") {
                return "js/materialstyle.min.js";
            } else {
                return "../js/dist/" + chunkName + ".js";
            }
        },
        publicPath: "dist",
        library: "materialstyle",
        libraryTarget: "umd",
        globalObject: "this"
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "js/src"),
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, "scss"),
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            implementation: require("sass")
                        },
                    }
                ]
            },
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new MiniCssExtractPlugin({
            moduleFilename: () => {
              return "css/materialstyle.min.css";
            }
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Popper: ["popper.js", "default"]
        })
    ],
    externals: {
        jquery: "jQuery"
    }
};

module.exports = webpackConfig;
