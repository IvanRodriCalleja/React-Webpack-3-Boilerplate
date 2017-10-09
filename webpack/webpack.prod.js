const merge = require("webpack-merge");
const PATHS = require("./paths");
const webpack = require("webpack");

const { sourceMap, imgMinify } = require("./config");

module.exports = merge([
    {
        entry: PATHS.appFolder,
        plugins: [
            new webpack.optimize.CommonsChunkPlugin({
                name: "vendor",
                minChunks: ({ resource }) => /node_modules/.test(resource)
            })
        ],
        module: {
            rules: [imgMinify()]
        }
    },
    sourceMap({ sourceMapType: "source-map" })
]);