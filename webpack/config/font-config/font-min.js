const FontminPlugin = require('fontmin-webpack')

module.exports = () => ({
    plugins: [
        new FontminPlugin({
            autodetect: true,
          }) 
    ]
})