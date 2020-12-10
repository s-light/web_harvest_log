// Initializes the `crop` service on path `/crop`
const { Crop } = require('./crop.class');
const createModel = require('../../models/crop.model');
const hooks = require('./crop.hooks');

module.exports = function (app) {
    const options = {
        Model: createModel(app),
        paginate: app.get('paginate')
    };

    // Initialize our service with any options it requires
    app.use('/crop', new Crop(options, app));

    // Get our initialized service so that we can register hooks
    const service = app.service('crop');

    service.hooks(hooks);
};
