const crop = require('./crop/crop.service.js');
const crate = require('./crate/crate.service.js');
const harvest = require('./harvest/harvest.service.js');
const serial = require('./serial/serial.service.js');
// eslint-disable-next-line no-unused-vars
module.exports = function (app) {
  app.configure(crop);
  app.configure(crate);
  app.configure(harvest);
  app.configure(serial);
};
