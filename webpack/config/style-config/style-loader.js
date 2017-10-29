const ExtractTextPlugin = require('extract-text-webpack-plugin');
const extractSass = new ExtractTextPlugin({
    filename: './styles/[name].[hash].css',
    disable: process.env.NODE_ENV === 'dev'
})

module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                exclude: /node_modules/,
                use: extractSass.extract({
                    fallback: 'style-loader',
                    use: [
                        {
                            loader: 'css-loader',
                            options: {
                                modules: true,
                            }
                        },
                        {
                            loader: 'postcss-loader',
                            options: {
                                ident: 'postcss',
                                plugins: (loader) => [
                                    require('postcss-import')({ root: loader.resourcePath}),
                                    require('postcss-cssnext')(),
                                    require('cssnano')({
                                        preset: [
                                            'default',
                                            {
                                                discardComments: {
                                                    removeAll: true
                                                }
                                            }
                                        ]
                                    })
                                ]
                            }
                        },
                        'sass-loader'
                    ]   
                })
            }
        ]
    },
    plugins: [ extractSass ]
})