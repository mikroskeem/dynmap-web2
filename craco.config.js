const SriPlugin = require('webpack-subresource-integrity');
const CleanAfterEmitWebpackPlugin = require('clean-after-emit-webpack-plugin');
const CracoWorkboxPlugin = require('craco-workbox');

module.exports = {
    plugins: [
        {
            plugin: CracoWorkboxPlugin
        }
    ],
    webpack: {
        configure: {
            output: {
                crossOriginLoading: 'anonymous',
            },
        },
        plugins: [
            new SriPlugin({
                hashFuncNames: ['sha256', 'sha384'],
                enabled: process.env.NODE_ENV === 'production'
            }),
            new CleanAfterEmitWebpackPlugin({
                paths: [
                    `${__dirname}/build/**/*.map`,
                    `${__dirname}/build/static/js/workbox-v*/workbox-*.dev*`,
                    `${__dirname}/build/static/js/workbox-v*/workbox-google-analytics*`
                ]
            })
        ]
    }
}