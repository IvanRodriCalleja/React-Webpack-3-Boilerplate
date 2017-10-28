module.exports = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                include,
                exclude,
                options: {
                    cacheDirectory: true
                }
            }
        ]
    }
});