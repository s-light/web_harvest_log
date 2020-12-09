
// automagically import all ./service/* files
const requireModule = require.context(
    // The path where the service modules live
    './services',
    // Whether to look in subfolders
    false,
    // Only include .js files (prevents duplicate imports`)
    /\.js$/
)
export default const app_config = requireModule
    .keys()
    .map(modulePath => requireModule(modulePath).default)
