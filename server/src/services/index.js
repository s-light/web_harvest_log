const crop = require('./crop/crop.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(crop);
};
