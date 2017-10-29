const merge = require('webpack-merge');
const PATHS = require('./paths');
const SpriteLoaderPlugin = require('svg-sprite-loader/plugin');
const { 
    htmlWebpackPlugin, 
    jsLoader, 
    imgLoader, 
    svgSpriteLoader,
    chunkSplitter,
    fontLoader,
    styleLoader 
} = require('./config');


module.exports = merge([
    {
        entry: [
            PATHS.appFolder
        ],
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
    chunkSplitter([
        {
            name: 'vendor',
            minChunks: ({ resource }) => /node_modules/.test(resource)
        }
    ]),
    styleLoader()
    
]);
