const merge = require("webpack-merge");
const PATHS = require("./paths");
const SpriteLoaderPlugin = require("svg-sprite-loader/plugin");
const { htmlWebpackPlugin, jsLoader, imgLoader, svgSpriteLoader } = require("./config");

console.log("yeeee", merge([
    {
        output: {
            path: PATHS.outputFolder,
            filename: "[name].[hash].js"
        },
        resolve: {
            extensions: [".js", ".jsx"]
        },        
    },
    jsLoader({ include: PATHS.appFolder, exclude: [/node_modules/] }),
    imgLoader({ exclude: [/node_modules/, /\**\icons\**/] }),
    svgSpriteLoader({ include: /\**\icons\**/ }),
    htmlWebpackPlugin({ template: PATHS.indexTemplate }),
    
]))
module.exports = merge([
    {
        output: {
            path: PATHS.outputFolder,
            filename: "[name].[hash].js"
        },
        resolve: {
            extensions: [".js", ".jsx"]
        },        
    },
    jsLoader({ include: PATHS.appFolder, exclude: [/node_modules/] }),
    imgLoader({ exclude: [/node_modules/, /\**\icons\**/] }),
    svgSpriteLoader({ include: /\**\icons\**/ }),
    htmlWebpackPlugin({ template: PATHS.indexTemplate }),
    
]);
