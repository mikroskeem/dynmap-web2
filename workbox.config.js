module.exports = function(options) {
    let newOptions = {
        importWorkboxFrom: 'local',
        cacheId: 'faineant',
        swDest: 'static/js/service-worker.js',
        importsDirectory: 'static/js'
    }

    return Object.assign(options, newOptions);
}