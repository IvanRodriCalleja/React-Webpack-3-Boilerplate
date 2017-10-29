const merge = require('webpack-merge');
const PATHS = require('./paths');
const { devServer, hotModuleLoader, sourceMap } = require('./config');

module.exports = merge([
    devServer(),
    hotModuleLoader(),
    sourceMap({ sourceMapType: 'cheap-module-eval-source-map' })
]);