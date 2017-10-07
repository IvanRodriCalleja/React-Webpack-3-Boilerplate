const PATHS = require("./paths");
const { htmlWebpackPlugin, jsLoader } = require("./config");

const plugins = [
    htmlWebpackPlugin({ template: PATHS.indexTemplate })
];

module.exports = {
    output: {
        path: PATHS.outputFolder,
        filename: "[name].[hash].js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    module: {
        rules: [
            jsLoader({ include: PATHS.appFolder, exclude: [/node_modules/] })
        ]
    },
    plugins: plugins
}