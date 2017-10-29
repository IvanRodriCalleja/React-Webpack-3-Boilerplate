module.exports = {
    chunkSplitter: require('./bundle-config/chunk-splitter'),
    devServer: require('./devServer-config/devServer'),
    fontLoader: require('./font-config/font-loader'),
    fontMin: require('./font-config/font-min'),
    hotModuleLoader: require('./hotModule-cofig/hotModule-config'),
    htmlWebpackPlugin: require('./html-config/html-plugin'),
    imgLoader: require('./img-config/img-loader'),
    imgMinify: require('./img-config/img-minify'),
    jsLoader: require('./js-config/js-loader'),
    sourceMap: require('./sourceMap-config/sourceMaps'),
    svgSpriteLoader: require('./svg-sprite-config/svg-sprite-loader')
};