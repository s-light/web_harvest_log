module.exports.config    = {
    // 10seconds
    retryDelay: 10000,

    // scale
    // baudRate: 19200,
    // port: '/dev/ttyUSB0', // linux
    // port: 'COM3', // windows

    // arduino dev
    port: '/dev/ttyACM0',
    baudRate: 115200,
}

module.exports.handleMessage = function (message) {
    const result = {
        totalWeight: 0,
        scaleStable: false,
        scaleUnit: 'kg'
    }
    // result.totalWeight =
    // result.totalWeight =
    return result
}
