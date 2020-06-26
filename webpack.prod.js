const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const TerserPlugin = require("terser-webpack-plugin");

module.exports = merge(common, {
    mode: "production",
    optimization: {
        minimizer: [
            new TerserPlugin({
                test: /\.min\.js/g,
                parallel: true,
                chunkFilter: chunk => {
                    // Exclude uglification for the `vendor` chunk
                    if (chunk.name === "vendor") {
                        return false;
                    }

                    return true;
                }
            }),
            new OptimizeCssAssetsPlugin({
                assetNameRegExp: /\.min\.css$/g,
                cssProcessorPluginOptions: {
                    preset: ["default", {discardComments: {removeAll: true}}]
                }
            })
        ]
    }
});
