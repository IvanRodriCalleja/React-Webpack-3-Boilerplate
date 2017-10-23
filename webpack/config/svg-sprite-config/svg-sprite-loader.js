const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");

module.exports = ({ include, exclude } = {}) =>({
   
    module: {
        rules: [
            {
                include,
                exclude,
                test: /\.svg$/,
                loader: "svg-sprite-loader",
                options: {
                    extract: true,
                    spriteFilename: "./svgSprite/images.svg"
                }
            }
        ]
    },
    plugins: [
        new SpriteLoaderPlugin()
    ]
});