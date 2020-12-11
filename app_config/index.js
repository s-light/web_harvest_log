
const crop1 = require(__dirname + '/crops/crops_1.js');
const crop2 = require(__dirname + '/crops/crops_2.js');
const crop3 = require(__dirname + '/crops/crops_3.js');
const crate = require(__dirname + '/crate/crate.js');

module.exports.app_config = {
    crop: [
        ...crop1,
        ...crop2,
        ...crop3,
    ],
    crate: [
        ...crate,
    ],
}
