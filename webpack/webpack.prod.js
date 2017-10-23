const merge = require("webpack-merge");
const PATHS = require("./paths");
const webpack = require("webpack");

const { sourceMap, imgMinify } = require("./config");

module.exports = merge([
    {
        entry: PATHS.appFolder,
    },
    sourceMap({ sourceMapType: "source-map" }),
    imgMinify()
]);