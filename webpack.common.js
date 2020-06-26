const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const {CleanWebpackPlugin} = require("clean-webpack-plugin");

webpackConfig = {
    entry: {
        alert: './src/js/alert.js',
        button: './src/js/button.js',
        carousel: './src/js/carousel.js',
        collapse: './src/js/collapse.js',
        dropdown: './src/js/dropdown.js',
        modal: './src/js/modal.js',
        popover: './src/js/popover.js',
        scrollspy: './src/js/scrollspy.js',
        tab: './src/js/tab.js',
        toast: './src/js/toast.js',
        tooltip: './src/js/tooltip.js',
        util: './src/js/util.js',
        list: './src/js/list.js',
        progress_bar: './src/js/progress_bar.js',
        ripple: './src/js/ripple.js',
        select: './src/js/select.js',
        shape: './src/js/shape.js',
        sidebar: './src/js/sidebar.js',
        snackbar: './src/js/snackbar.js',
        text_field: './src/js/text_field.js',
        material_style: './src/js/material_style.js'
    },
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, "material-style"),
        filename: chunkData => {
            let chunkName = chunkData.chunk.name;

            if (chunkName === "material_style") {
                return "dist/js/material-style.min.js";
            } else {
                return "js/" + chunkName + '.js';
            }

        },
        publicPath: "/",
        library: '$ms',
        libraryTarget: 'umd',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                include: path.resolve(__dirname, 'src/js'),
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, 'src/scss'),
                use: [
                    "style-loader",
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    {
                        loader: 'sass-loader',
                        options: {
                            implementation: require('sass')
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
                    return "css/" + chunkName + '.css';
                }
            },

            // chunkFilename: "[name].css"
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            Popper: ['popper.js', 'default'],
            select2: 'select2'
        })
    ],
    externals: {
        jquery: 'jQuery',
        select2: 'select2'
    }
};

webpackConfig.plugins.push(
    new HtmlWebpackPlugin({
        inject: false,
        hash: true,
        template: "./src/examples/alert.html",
        filename: "examples/alert.html"
    })
);

module.exports = webpackConfig;
