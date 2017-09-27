const PATHS = require("./paths");
const { htmlWebpackPlugin } = require("./config");

const plugins = [
    htmlWebpackPlugin({ template: PATHS.indexTemplate })
];

module.exports = {
    entry: PATHS.appFolder,
    output: {
        path: PATHS.outputFolder,
        filename: "[name].[hash].js"
    },
    resolve: {
        extensions: [".js", ".jsx"]
    },
    plugins: plugins
}