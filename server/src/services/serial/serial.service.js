// Initializes the `serial` service on path `/serial`
const { Serial } = require('./serial.class');
const hooks = require('./serial.hooks');

module.exports = function (app) {
    const options = {
        paginate: app.get('paginate')
    };

    // Initialize our service with any options it requires
    app.use('/serial', new Serial(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('serial');

    service.hooks(hooks);
};
