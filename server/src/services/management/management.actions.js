
const path = require('path');
const fs = require('fs');
const { parseAsync } = require('json2csv');

module.exports.actions = {
    'update-serial-device-list': updateSerialDeviceList,
    'export-cvs': exportCSV,
    'import-from-file': importFromFile,
    'remove-db-file': removeDBFile,
    'shutdown-server': serverShutdown,
    'git-pull': gitPull,
};

// eslint-disable-next-line no-unused-vars
async function updateSerialDeviceList (service, servicePath, params) {
    console.group('updateSerialDeviceList:');
    // console.log('service', service);
    // this == app context
    const result = await service.updateSerialDeviceList();
    console.log('result', result);
    console.groupEnd();
    return result;
}

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
    // const dbResult = await service.find({ query: {}});
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
    console.group('importFromFile', servicePath);
    // const service = this.app.services[servicePath];
    // console.log('service', service);
    // console.log('servicePath', servicePath);
    // console.log('params', params);
    // console.log('this', this);
    // console.log('config', config);
    // console.log('config[servicePath]', config[servicePath]);
    // const data = config[servicePath];
    // console.log('data', data);
    let config = {};
    try {
        delete require.cache['../../../../config/app_config.js'];
        config = await require('../../../../config/app_config.js');
        console.log('found config/app_config.js');
    } catch (e) {
        // console.log('require config/app.js: ', e);
        if (e.code === 'MODULE_NOT_FOUND') {
            try {
                delete require.cache['../../../../config/app_config_template.js'];
                // this means we need to fallback to the dev file
                config = require('../../../../config/app_config_template.js');
                console.log('found config/app_config_template.js');
            } catch (e) {
                console.log('require config/app_config_template.js: ', e);
            }
        }
    }
    const serviceEntries = config[servicePath];
    if (serviceEntries) {
        for (const entry of config[servicePath]) {
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
                    // service.patch(entry._id, entry).then((response) => {
                    service.patch(entry._id, entry).then(() => {
                        // console.log(response);
                    }).catch((error) => {
                        console.error(error);
                    });
                } else {
                    console.error(error);
                }
            });
        }
    } else {
        console.groupEnd();
        throw {
            message: 'importFromFile: service \'' + servicePath + '\' not found in config.'
        };
    }

    console.groupEnd();
}

// eslint-disable-next-line no-unused-vars
async function removeDBFile (service, servicePath, params) {
    console.group('removeDBFile', servicePath);
    // console.log('service', service);
    // console.log('servicePath', servicePath);
    // console.log('params', params);

    // const dbPath = app.get('nedb');
    const dbPath = 'data';
    let fileName = path.join(dbPath, servicePath + '.db');
    fileName = path.resolve(fileName);
    // console.log('fileName', fileName);
    fs.unlink(fileName, (err) => {
        if (err) {
            console.error(err);
            console.groupEnd();
            throw {
                message: 'removeDBFile: error removing file \'' + fileName + '\' .',
                error: err
            };
        } else {
            console.log('removeDBFile: file \'' + fileName + '\' removed.');
        }
    });
    console.groupEnd();
}

// eslint-disable-next-line no-unused-vars
async function serverShutdown (service, servicePath, params) {
    console.group('serverShutdown');
    // console.log('service', service);
    // console.log('servicePath', servicePath);
    // console.log('params', params);

    console.log('todo! ');

    console.groupEnd();
    throw 'Not Implemented in Server.';
}

// eslint-disable-next-line no-unused-vars
async function gitPull (service, servicePath, params) {
    console.group('gitPull');
    // console.log('service', service);
    // console.log('servicePath', servicePath);
    // console.log('params', params);

    console.log('todo! ');

    console.groupEnd();
    throw 'Not Implemented in Server.';
}
