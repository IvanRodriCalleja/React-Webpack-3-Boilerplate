module.exports = ({ include, exclude } = {}) => {
    return {
        include,
        exclude,
        test: /\.(png|jpg|svg|gif)$/,
        use: {
            loader: "file-loader",
            options: {
                name: "imgs/[name].[hash].[ext]"
            }
        }
    };
};
