
const crop_dev1 = require(__dirname + '/crop/crop_dev1.js');
const crop_dev2 = require(__dirname + '/crop/crop_dev2.js');
const crop_template = require(__dirname + '/crop/crop_template.js');
const crop_filter = require(__dirname + '/crop/crop_filter_template.js');
const crate = require(__dirname + '/crate/crate_template.js');

module.exports = {
    crop: [
        ...crop_dev1,
        ...crop_dev2,
    ],
    crate: [
        ...crate,
    ],
    'crop-filter': [
        ...crop_filter,
    ],
}
