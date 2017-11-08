const WebpackMonitor = require('webpack-monitor')

module.exports = () => ({
    plugins: [
        new WebpackMonitor({
            capture: true,
            target: './monitor/myStatsStore.json',
            launch: true,
            port: 8081,
        })
    ]
})