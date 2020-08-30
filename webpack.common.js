const path = require("path");
const webpack = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

webpackConfig = {
    entry: {
        alert: "./src/js/alert.js",
        button: "./src/js/button.js",
        carousel: "./src/js/carousel.js",
        collapse: "./src/js/collapse.js",
        drawer: "./src/js/drawer.js",
        dropdown: "./src/js/dropdown.js",
        file_input: "./src/js/file_input.js",
        modal: "./src/js/modal.js",
        navbar: "./src/js/navbar.js",
        popover: "./src/js/popover.js",
        scrollspy: "./src/js/scrollspy.js",
        tab: "./src/js/tab.js",
        toast: "./src/js/toast.js",
        tooltip: "./src/js/tooltip.js",
        utility: "./src/js/utility.js",
        ripple: "./src/js/ripple.js",
        select: "./src/js/select.js",
        shape: "./src/js/shape.js",
        snackbar: "./src/js/snackbar.js",
        spinner: "./src/js/spinner.js",
        rainbow: "./src/js/rainbow.js",
        text_field: "./src/js/text_field.js",
        material_style: "./src/js/material_style.js"
    },
    devtool: "source-map",
    output: {
        path: path.resolve(__dirname, "material-style"),
        filename: chunkData => {
            let chunkName = chunkData.chunk.name;

            if (chunkName === "material_style") {
                return "dist/js/material-style.min.js";
            } else {
                return "js/" + chunkName + ".js";
            }

        },
        publicPath: "/",
        library: "materialstyle",
        libraryTarget: "umd",
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, "src/js"),
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, "src/scss"),
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
            moduleFilename: chunkData => {
                let chunkName = chunkData.name;

                if (chunkName === "material_style") {
                    return "dist/css/material-style.min.css";
                } else {
                    return "css/" + chunkName + ".css";
                }
            },

            // chunkFilename: "[name].css"
        }),
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            Popper: ["popper.js", "default"],
            select2: "select2"
        })
    ],
    externals: {
        jquery: "jQuery",
        // jquery: {
        //     commonjs: 'jquery',
        //     commonjs2: 'jquery',
        //     amd: 'jquery',
        //     umd: 'jquery',
        //     root: '$'
        // },
    }
};

module.exports = webpackConfig;
