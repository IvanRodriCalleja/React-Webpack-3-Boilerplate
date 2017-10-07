const merge = require("webpack-merge");
const PATHS = require("./paths");
const { devServer, hotModuleLoader, sourceMap } = require('./config');

module.exports = merge([
    {
        entry: [
            "react-hot-loader/patch",
            "webpack-dev-server/client?http://localhost:8080",
            "webpack/hot/only-dev-server",
            PATHS.appFolder
        ]
    },
    devServer(),
    hotModuleLoader(),
    sourceMap({ sourceMapType: "cheap-module-eval-source-map" })
]);