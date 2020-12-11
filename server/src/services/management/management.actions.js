
const path = require('path');
const fs = require('fs');
const { parseAsync } = require('json2csv');

module.exports.actions = {
    'export-cvs': exportCSV,
    'import-from-file': importFromFile,
};

// eslint-disable-next-line no-unused-vars
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

// eslint-disable-next-line no-unused-vars
async function importFromFile (service, servicePath, params) {
    console.group('importFromFile');
    // const service = this.app.services[servicePath];
    // console.log('service', service);
    // console.log('servicePath', servicePath);
    // console.log('params', params);
    // console.log('this', this);
    // console.log('app_config', app_config);
    // console.log('app_config[servicePath]', app_config[servicePath]);
    // const data = app_config[servicePath];
    // console.log('data', data);
    const { app_config } = require('../../../../app_config');
    const serviceEntries = app_config[servicePath];
    if (serviceEntries) {
        for (const entry of app_config[servicePath]) {
            console.log(entry._id);
            // console.log(entry);
            // if (!entry.id) {
            //     entry.id = entry.name;
            // }
            // if (!entry._id) {
            //     entry._id = entry.name;
            // }

            // eslint-disable-next-line no-unused-vars
            service.create(entry).then((response) => {
                // console.log(response);
            }).catch((error) => {
                if (error.errorType == 'uniqueViolated') {
                    service.patch(entry._id, entry).then((response) => {
                        console.log(response);
                    }).catch((error) => {
                        console.error(error); }
                    );
                } else {
                    console.error(error);
                }
            });
        }
    } else {
        console.groupEnd();
        throw {
            message: 'importFromFile: service \'' + servicePath + '\' not found in app_config.'
        };
    }

    console.groupEnd();
}
