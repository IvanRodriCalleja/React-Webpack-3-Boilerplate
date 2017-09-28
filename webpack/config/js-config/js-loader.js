module.exports = ({ include, exclude } = {}) => {
    return {
        test: /\.(js|jsx)$/,
        loader: "babel-loader",
        include,
        exclude,
        options: {
            cacheDirectory: true
        }
    };
};