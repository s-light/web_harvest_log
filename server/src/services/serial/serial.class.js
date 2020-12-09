const { Service } = require('feathers-memory');
const SerialPort = require('serialport');
const Readline = require('@serialport/parser-readline');

exports.Serial = class Serial extends Service {
    constructor(app, configKey){
        super(app, configKey);
        this.serialPort = null;
        this.parser = new Readline({ delimiter: '\r\n' });
        this.connected = false;
        this.retryDelay = 10000;
        this.port = '/dev/ttyUSB0';
        this.baudRate = 19200;

        this.connect();
    }

    // setup(path, app){
    //     super.setup(path, app);
    //
    // }

    // https://serialport.io/docs/guide-usage
    // https://stackoverflow.com/questions/18551293/node-js-serialport-events-stop-working-after-reconnecting-to-port#57433601
    connect() {
        return new Promise((resolve) => {
            this.serialPort = new SerialPort(this.port, {
                baudRate: this.baudRate,
                autoOpen: false
            });
            this.parser = this.serialPort.pipe(this.parser);

            this.serialPort.on('open', () => {
                this.connected = true;
                console.log('serial port opened.');
                this.saveItem('connected', this.connected);
            });
            this.serialPort.on('close', () => {
                this.connected = false;
                console.log('serial port closed.');
                this.saveItem('connected', this.connected);
                setTimeout(this.reconnect.bind(this), this.retryDelay);
            });
            this.serialPort.on('error', (error) => {
                console.log('serial port error:', error);
                this.saveItem('error', error);
                setTimeout(this.reconnect.bind(this), this.retryDelay);
            });
            this.parser.on('data', this.handle_incoming);

            this.serialPort.open();

            resolve(this.parser);
        });
    }

    reconnect() {
        if (!this.connected) { this.serialPort.open(); }
    }

    handle_incoming (msg) {
        msg = msg.trim();
        console.log('handle_incoming', msg);
        console.log('this', this);
        this.saveItem('message', 'hello world');
        // if (!gcItem) {
        //     // create new item
        //     gcItem = new ModelClass({
        //         id: entryName,
        //         _id: entryName,
        //         value: null
        //     })
        //     gcItem.create().catch((error) => {
        //     })'
        //' }
    }

    saveItem(id, value) {
        const data = { id:id, value: value };
        this.save(id, data, {});
    }

    save(id, data, params) {
        // try to patch. if fails create new.
        this.patch(id, data, params).then(() => {
            // console.info('serial patched.', 'id', id, 'data', data, 'params', params);
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
};
