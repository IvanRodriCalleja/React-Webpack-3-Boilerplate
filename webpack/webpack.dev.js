const merge = require('webpack-merge');
const { devServer, hotModuleLoader, cssLoader, sourceMap } = require('./config');
const PATHS = require('./paths')

module.exports = merge([
    {
        entry: {
            app: [PATHS.appFolder ]       
        }
    },
    devServer(),
    hotModuleLoader(),
    sourceMap({ sourceMapType: 'cheap-module-eval-source-map' }),
    cssLoader()
]);