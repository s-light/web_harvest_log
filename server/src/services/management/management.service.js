// Initializes the `management` service on path `/management`
const { Management } = require('./management.class');
const hooks = require('./management.hooks');

module.exports = function (app) {
    const options = {
        paginate: app.get('paginate')
    };

    // Initialize our service with any options it requires
    app.use('/management', new Management(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('management');

    service.hooks(hooks);
};
