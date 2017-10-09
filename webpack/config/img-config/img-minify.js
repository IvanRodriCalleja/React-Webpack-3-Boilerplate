module.exports = ({ gifsicle, mozjpeg, pngquant, svgo, webp } = {}) => {
    const gifsicleDefault = {
        interlaced: true,
        optimizationLevel: 3
    };
    const mozjpegDefault = {
        quality: 100
    };
    const pngquantDefault = {
        quality: 100,
        speed: 4
    };
    const webpDefault = {
        quality: 100
    };
    const svgoDefault = {
        plugins: [
            {
                removeViewBox: false
            },
            {
                removeEmptyAttrs: false
            }
        ]
    };

    return {
        test: /\.(gif|png|jpe?g|svg|webp)$/i,
        use: {
            loader: "image-webpack-loader",
            options: {
                gifsicle: Object.assign(gifsicleDefault, gifsicle, {}),
                mozjpeg: Object.assign(mozjpegDefault, mozjpeg, {}),
                pngquant: Object.assign(pngquantDefault, pngquant, {}),
                svgo: Object.assign(svgoDefault, svgo, {}),
                webp: Object.assign(webpDefault, webp, {})
            }
        }
    };
};
