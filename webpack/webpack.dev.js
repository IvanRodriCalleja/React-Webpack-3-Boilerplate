const merge = require("webpack-merge");
const { devServer } = require('./config');

module.exports = merge([
    devServer()
]);