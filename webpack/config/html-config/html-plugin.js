const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = ({ template }) => ({
    plugins: [ 
        new HtmlWebpackPlugin({
            template,
            hash: true,
            minify: {
                collapseInlineTagWhitespace: true,
                collapseWhitespace: true,
                includeAutoGeneratedTags: false,
                keepClosingSlash: true,
                removeAttributeQuotes: true,
                removeComments: true,
                removeEmptyAttributes: true,
                useShortDoctype: true
            }
        })
    ]
});
