const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = ({ include, exclude } = {}) =>({
   
    module: {
        rules: [
            {
                test: /\.svg$/,
                loader: "svg-sprite-loader",
                include,
                options: {
                    extract: true,
                    spriteFilename: "icons-sprite.svg"
                }
            }
        ]
    },
    plugins: [
        new SpriteLoaderPlugin()
    ]
});