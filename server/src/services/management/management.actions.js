
const { parseAsync } = require('json2csv');

module.exports.service = [
    'server',
    'harvest'
];

module.exports.actions = {
    'export-cvs': exportCSV,
    'import-from-file': importFromFile,
};


async function exportCSV (service, params) {
    console.group('exportCSV:');
    // console.log('service', service);
    // console.log('this', this);
    // this = app context
    // const { parseAsync } = require('json2csv');
    // const timeframe = params.timeframe || 'current_day';
    // console.log('timeframe', timeframe);

    const dbEntries = await service.find(params);
    console.log('dbEntries', dbEntries);
    console.groupEnd();

    if (dbEntries.data) {
        parseAsync(dbEntries.data)
            .then(csv => {
                console.log('csv\n', csv);
            })
            .catch(err => console.error(err));
    } else {
        throw {
            message: 'Query Correct? find request did not work.'
        };
    }
}

async function importFromFile (service, params) {
    console.group('importFromFile');
    console.log('service', service);
    console.log('params', params);
    console.log('this', this);
    //
    console.groupEnd();
}
