module.exports = {
    chunkSplitter: require('./bundle-config/chunk-splitter'),
    cssAutoprefix: require('./css-config/css-autoprefix'),
    cssExtract: require('./css-config/css-extract'),
    cssLoader: require('./css-config/css-loader'),
    cssMinify: require('./css-config/css-minify'),
    devServer: require('./devServer-config/devServer'),
    enviromentVariable: require('./enviroment-config/enviroment-variable'),
    fontLoader: require('./font-config/font-loader'),
    fontMin: require('./font-config/font-min'),
    hotModuleLoader: require('./hotModule-cofig/hotModule-config'),
    htmlWebpackPlugin: require('./html-config/html-plugin'),
    imgLoader: require('./img-config/img-loader'),
    imgMinify: require('./img-config/img-minify'),
    jsLoader: require('./js-config/js-loader'),
    jsMinify: require('./js-config/js-minify'),
    sourceMap: require('./sourceMap-config/sourceMaps'),
    svgSpriteLoader: require('./svg-sprite-config/svg-sprite-loader')
};