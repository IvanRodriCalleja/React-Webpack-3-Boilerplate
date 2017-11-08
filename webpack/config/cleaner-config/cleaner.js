const CleanWebpackPlugin = require('clean-webpack-plugin');
const PATHS = require('../../paths');
const path = require('path');

module.exports = () => ({
    plugins: [
        new CleanWebpackPlugin(
            [PATHS.outputFolder], 
            { 
                root: path.resolve(__dirname , '/'),
                exclude:  ['./monitor/myStatsStore.json'], 
            }
        )
    ]
})