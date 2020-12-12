// Initializes the `cropFilter` service on path `/crop-filter`
const { CropFilter } = require('./crop-filter.class');
const createModel = require('../../models/crop-filter.model');
const hooks = require('./crop-filter.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/crop-filter', new CropFilter(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('crop-filter');

  service.hooks(hooks);
};
