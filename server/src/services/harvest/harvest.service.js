// Initializes the `harvest` service on path `/harvest`
const { Harvest } = require('./harvest.class');
const createModel = require('../../models/harvest.model');
const hooks = require('./harvest.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/harvest', new Harvest(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('harvest');

  service.hooks(hooks);
};
