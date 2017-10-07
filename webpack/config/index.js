module.exports = {
    devServer: require("./devServer-config/devServer"),
    hotModuleLoader: require('./hotModule-cofig/hotModule-config'),
    htmlWebpackPlugin: require("./html-config/html-plugin"),
    jsLoader: require("./js-config/js-loader"),
    sourceMap: require("./sourceMap-config/sourceMaps")
};