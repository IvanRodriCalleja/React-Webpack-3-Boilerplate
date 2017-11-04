const merge = require('webpack-merge');
const PATHS = require('./paths');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const { 
    htmlWebpackPlugin, 
    jsLoader, 
    imgLoader, 
    svgSpriteLoader,
    fontLoader
} = require('./config');


module.exports = merge([
    {
        entry: {
            ['app']: [PATHS.appFolder]
        },
        output: {
            path: PATHS.outputFolder,
            filename: '[name].[hash].js'
        },
        resolve: {
            extensions: ['.js', '.jsx']
        },        
    },
    jsLoader({ include: PATHS.appFolder, exclude: [/node_modules/] }),
    imgLoader({ exclude: /node_modules/ }),
    svgSpriteLoader(),
    fontLoader(),
    htmlWebpackPlugin({ template: PATHS.indexTemplate }), 
]);
