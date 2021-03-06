const merge = require('webpack-merge');
const commonConfiguration = require('./webpack/webpack.common');

module.exports = env => { 
    return merge(commonConfiguration, require(`./webpack/webpack.${env}`));
};