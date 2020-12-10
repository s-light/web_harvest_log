
const path = require('path')
const fs = require('fs');
const { parseAsync } = require('json2csv');

module.exports.actions = {
    'export-cvs': exportCSV,
    'import-from-file': importFromFile,
};


async function exportCSV (service, servicePath, params) {
    console.group('exportCSV:');
    // const service = this.app.services[servicePath];
    // console.log('service', service);
    // console.log('this', this);
    // this = app context
    // const { parseAsync } = require('json2csv');
    const timeframe = params.timeframe || '';
    console.log('timeframe', timeframe);

    const dbResult = await service.find(params);
    console.log('dbResult', dbResult);
    let dbData = dbResult;
    // if result is paginated we get a object with the entries in 'data'
    if (dbResult.data) {
        console.warn('paginated dbResult...');
        dbData = dbResult.data;
    }
    // if (dbEntries.data) {
    //
    // } else {
    //     throw {
    //         message: 'Query Correct? find request did not work.'
    //     };
    // }
    parseAsync(dbData)
        .then(csv => {
            // console.log('__dirname', __dirname);
            console.log('csv\n', csv);
            let filePath = '../db_export/';
            const fileName = servicePath + (timeframe? '_': '') + timeframe + '.csv';
            filePath = path.join(filePath,  fileName);
            filePath = path.resolve(filePath);
            console.log('filePath', filePath);
            // https://nodejs.dev/learn/writing-files-with-nodejs#append-to-a-file
            fs.appendFile(filePath, csv, err => {
                if (err) {
                    console.error(err);
                    return;
                }
            });
        })
        .catch(err => console.error(err));
    console.groupEnd();
}

async function importFromFile (service, servicePath, params) {
    console.group('importFromFile');
    // const service = this.app.services[servicePath];
    console.log('service', service);
    console.log('params', params);
    console.log('this', this);
    //
    console.groupEnd();
}
