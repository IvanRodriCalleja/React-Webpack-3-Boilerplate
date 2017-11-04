const merge = require('webpack-merge');
const PATHS = require('./paths');
const webpack = require('webpack');
const glob = require('glob');
const CompresionPlugin = require('compression-webpack-plugin');

const { 
    sourceMap, 
    imgMinify, 
    fontMin, 
    cssExtract, 
    cssAutoprefix, 
    cssMinify,
    chunkSplitter,
    enviromentVariable,
    jsMinify,
    cleaner
 } = require('./config');

module.exports = merge([
    sourceMap({ sourceMapType: 'source-map' }),
    cleaner(),
    enviromentVariable(),
    chunkSplitter([
        {
            name: 'vendor',
            minChunks: ({ resource }) => /node_modules/.test(resource)
        }
    ]),
    jsMinify(),
    imgMinify(),
    fontMin(),
    cssExtract({ use: [
        {
            loader: 'css-loader',
            options: {
                importLoaders: 1,
                modules: true,
                localIdentName: 'rw3_[hash:base64:4]'
            }
        },
        cssAutoprefix(),
        'sass-loader'
    ]}),
    cssMinify({ paths: glob.sync(`${PATHS.appFolder}/**/*.js`) })
]);