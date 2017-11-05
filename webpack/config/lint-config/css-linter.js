const PATHS = require('../../paths');

module.exports = () => ({
    module: {
        rules: [
            {
                test: /\.scss$/,
                include: PATHS.appFolder,
                enforce: 'pre',
                loader: 'postcss-loader',
                options: {
                    plugins: () => ([
                        require('stylelint')()
                    ])
                }
            }
        ]
    }
});