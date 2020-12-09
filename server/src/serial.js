
const SerialPort = require('serialport')
const Readline = require('@serialport/parser-readline')

const port = new SerialPort('/dev/ttyUSB0', {
    baudRate: 19200
})

const parser = port.pipe(new Readline({ delimiter: '\r\n' }))
parser.on('data', handle_serial_incoming)

function handle_serial_incoming(message) {
    message = message.trim()
    console.log(message)
    // if (connection) {
    //     connection.send(message)
    // }
}


// module.exports = app;
