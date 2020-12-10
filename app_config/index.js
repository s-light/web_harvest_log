
// // automagically import all ./service/* files
// const requireModule = require.context(
//     // The path where the service modules live
//     './',
//     // Whether to look in subfolders
//     true,
//     // Only include .js files (prevents duplicate imports`)
//     /\.js$/
// )
// module.exports.app_config = requireModule
//     .keys()
//     .map(modulePath => requireModule(modulePath).default)

const crop1 = require(__dirname + '/crops/crops_1.js');
const crop2 = require(__dirname + '/crops/crops_2.js');
const crop3 = require(__dirname + '/crops/crops_3.js');

module.exports.app_config = {
    crop: [
        // ...crop1,
        // ...crop2,
        ...crop3,
    ]
}
