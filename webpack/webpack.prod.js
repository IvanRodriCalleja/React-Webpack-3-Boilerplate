const merge = require('webpack-merge');
const PATHS = require('./paths');
const webpack = require('webpack');

const { sourceMap, imgMinify, fontMin } = require('./config');

module.exports = merge([
    sourceMap({ sourceMapType: 'source-map' }),
    imgMinify(),
    fontMin()
]);