const merge = require('webpack-merge');
const commonConfiguration = require('./webpack/webpack.common');

console.warn("host", process.env.HOST);

module.exports = env => { 
    return merge(commonConfiguration, require(`./webpack/webpack.${env}`));
};