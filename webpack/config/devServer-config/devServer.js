module.exports = ({host, port} = {}) => {
    return {
        devServer: {
            host,
            port,
            historyApiFallback: true,
            open: true,
            stats: 'errors-only',
            overlay: {
                errors: true,
                warnings: true,
            },
            headers: {
                'Access-Control-Allow-Origin': '*'
            },
            watchOptions: {
                poll: true,
                ignored: [/node_modules/]
            }
        }
    }
}