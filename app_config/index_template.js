
const crop_root = require(__dirname + '/crop/crop_root.js');
const crop_onion = require(__dirname + '/crop/crop_onion.js');
const crop_fruit = require(__dirname + '/crop/crop_fruit.js');
const crop_cabbage = require(__dirname + '/crop/crop_cabbage.js');
const crop_herb = require(__dirname + '/crop/crop_herb.js');
const crop_flower = require(__dirname + '/crop/crop_flower.js');

const cropFilter = require(__dirname + '/crop/crop_filter.js');
const crate = require(__dirname + '/crate/crate.js');

module.exports.app_config = {
    crop: [
        ...crop_root,
        ...crop_onion,
        ...crop_fruit,
        ...crop_cabbage,
        ...crop_herb,
        ...crop_flower,
    ],
    crate: [
        ...crate,
    ],
    'crop-filter': [
        ...cropFilter,
    ],
}
