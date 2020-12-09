// Initializes the `crate` service on path `/crate`
const { Crate } = require('./crate.class');
const createModel = require('../../models/crate.model');
const hooks = require('./crate.hooks');

module.exports = function (app) {
  const options = {
    Model: createModel(app),
    paginate: app.get('paginate')
  };

  // Initialize our service with any options it requires
  app.use('/crate', new Crate(options, app));

  // Get our initialized service so that we can register hooks
  const service = app.service('crate');

  service.hooks(hooks);
};
