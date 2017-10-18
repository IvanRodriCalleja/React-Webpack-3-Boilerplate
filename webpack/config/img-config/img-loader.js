module.exports = ({ include, exclude } = {}) => ({
    module: {
        rules: [
            {
                include,
                exclude,
                test: /\.(png|jpg|svg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "imgs/[name].[hash].[ext]"
                    }
                }
            }
        ]
    }
});
