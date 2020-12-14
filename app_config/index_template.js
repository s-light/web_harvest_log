
const crop_template = require(__dirname + '/crop/crop_template.js');
// const crop_fruit = require(__dirname + '/crop/crop_fruit.js');


const cropFilter = require(__dirname + '/crop/crop_filter.js');
const crate = require(__dirname + '/crate/crate.js');

module.exports= {
    crop: [
        ...crop_template,
        // ...crop_fruit,
    ],
    crate: [
        ...crate,
    ],
    'crop-filter': [
        ...cropFilter,
    ],
}
