const merge = require("webpack-merge");
const { devServer, hotModuleLoader } = require('./config');

module.exports = merge([
    devServer(),
    hotModuleLoader()
]);