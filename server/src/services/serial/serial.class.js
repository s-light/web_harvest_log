const { Service } = require('feathers-memory');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

const serial_config = require('../../../../app_config/serial.js');

exports.Serial = class Serial extends Service {
    constructor(app, configKey){
        super(app, configKey);
        this.serialPort = null;
        this.parser = new Readline({
            delimiter: '\r\n',
            encoding: 'utf8'
        });
        this.connected = false;
        // this.retryDelay = 10000;
        // this.port = '/dev/ttyUSB0';
        // this.baudRate = 19200;
        // this.port = '/dev/ttyACM0';
        // this.baudRate = 115200;
        this.retryDelay = serial_config.retryDelay;
        this.port = serial_config.port;
        this.baudRate = serial_config.baudRate;
    }

    // setup(path, app){
    setup() {
        console.group('serial setup');

        console.log('retryDelay', this.retryDelay);
        console.log('port', this.port);
        console.log('baudRate', this.baudRate);

        console.log('create message');
        this.saveItem('message', '');
        console.log('create connected');
        this.saveItem('connected', this.connected);
        console.log('create error');
        this.saveItem('error', '');
        console.log('create port');
        this.createItem('port', this.port);
        console.log('create baudRate');
        this.createItem('baudRate', this.baudRate);
        console.log('create list');
        this.updateSerialDeviceList();

        this.connect();
        console.groupEnd();
    }

    // https://serialport.io/docs/guide-usage
    // https://stackoverflow.com/questions/18551293/node-js-serialport-events-stop-working-after-reconnecting-to-port#57433601
    connect() {
        return new Promise((resolve) => {
            this.serialPort = new SerialPort(this.port, {
                baudRate: this.baudRate,
                autoOpen: false
            });
            this.serialPort.flush();
            this.parser = this.serialPort.pipe(this.parser);

            this.serialPort.on('open', () => {
                this.connected = true;
                console.log('serial port opened.');
                this.saveItem('connected', this.connected);
                this.saveItem('error', '');
            });
            this.serialPort.on('close', () => {
                this.connected = false;
                console.log('serial port closed.');
                this.saveItem('connected', this.connected);
                setTimeout(this.reconnect.bind(this), this.retryDelay);
            });
            this.serialPort.on('error', (error) => {
                console.log('serial port:', error);
                // console.log('error.message', error.message);
                this.saveItem('error', error.message);
                setTimeout(this.reconnect.bind(this), this.retryDelay);
            });
            this.parser.on('error', (error) => {
                console.log('serial port parser error:', error);
                // console.log('error.message', error.message);
                this.saveItem('errorParser', error.message);
                setTimeout(this.reconnect.bind(this), this.retryDelay*2);
            });
            this.parser.on('data', (msg) => {
                msg = msg.trim();
                console.log(`handle_incoming '${msg}'`);
                this.saveItem('message', msg);
                // this.handle_incoming_message(msg)
            });

            this.serialPort.open();

            resolve(this.parser);
        });
    }

    reconnect() {
        if (this.connected) {
            // this.serialPort.close().then(() =>);
            this.serialPort.close();
        }
        if (!this.connected) {
            this.serialPort.open();
        }
    }

    createItem(id, value) {
        const data = { id:id, value: value };
        this.create(data, {}).catch((error) => {
            console.error('createItem - ' + error.message, error);
        });
    }

    saveItem(id, value) {
        const data = { id:id, value: value };
        // console.log('saveItem', id, data);
        this.save(id, data, {});
        // this.save(id, data, { data: data });
        // console.log('saveItem done.');
    }

    save(id, data, params) {
        // try to patch. if fails create new.
        // console.info('save-patch', id, data, params);
        this.patch(id, data, params).then(() => {
            // console.group('serial patched');
            // console.info('id', id);
            // console.info('data', data);
            // console.info('params', params);
            // console.groupEnd();
        }).catch((error) => {
            if (error.name === 'NotFound') {
                this.create(data, params).catch((error) => {
                    console.error('save - create - ' + error.message, error);
                });
            } else {
                console.error('save - patch - ' + error.message, error);
            }
        });
    }

    updateSerialDeviceList() {
        SerialPort.list().then((spList) => {
            spList = spList.filter(item => item.manufacturer);
            console.log('serial port list:',spList);
            // this.saveItem('list', JSON.stringify(spList));
            this.saveItem('list', spList);
        });
    }

};
