const shell = require('shelljs');

const path = require('path');
const fs = require('fs');
const { parseAsync } = require('json2csv');

const db_export_Path = '../db_export/';
const config_Path = '../config/';

module.exports.actions = {
    'update-serial-device-list': updateSerialDeviceList,
    'export-cvs': exportCSV,
    'import-from-file': importFromFile,
    'remove-db-file': removeDBFile,
    'server-system-action': serverSystemAction,
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
            let filePath = db_export_Path;
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
async function serverSystemAction (service, servicePath, params) {
    console.group('serverSystemAction');
    // console.log('service', service);
    // console.log('servicePath', servicePath);
    console.log('params', params);
    let result = '---';
    try {
        switch (params.action) {
        case 'shutdown':
            result = shell.exec('sudo shutdown -h now');
            break;
        case 'reboot':
            result = shell.exec('sudo reboot');
            break;
        case 'copyCSVtoUSB':
            result = copyCSVtoUSB();
            break;
        case 'copyConfigFromUSB':
            result = copyConfigFromUSB();
            break;
        default:
            throw {
                message: `action '${params.action}' not found.`
            };
        }
    } finally {
        console.groupEnd();
    }
    return result;
}

// eslint-disable-next-line no-unused-vars
async function gitPull (service, servicePath, params) {
    console.group('gitPull');
    // console.log('service', service);
    // console.log('servicePath', servicePath);
    // console.log('params', params);

    // console.log('todo! ');
    // const result = shell.exec('git log -1');
    const result = [];
    let shellResult = shell.exec('git pull');
    result.push({
        stdout:shellResult.stdout.split('\n'),
        stderr:shellResult.stderr,
        code:shellResult.code
    });

    // result.push(shell.cd('./server'));
    shellResult = shell.exec('yarn');
    // console.log('shellResult', shellResult);
    console.dir('shellResult ...', ...shellResult);
    result.push({
        stdout:shellResult.stdout.split('\n'),
        stderr:shellResult.stderr,
        code:shellResult.code
    });
    // console.log('result', result);
    console.groupEnd();
    return result;
}


function findFirstUSBDisc () {
    let destinationPath = '/media/';
    // const user = shell.echo('$USER');
    // the slice operation at the end removes the newline
    const user = shell.exec('echo $USER', {silent:true}).stdout.slice(0, -1);
    console.log(`user: '${user}'`);
    destinationPath = path.join(destinationPath,  user);
    // console.log('destinationPath', destinationPath);
    // console.log('shell ls destinationPath', shell.ls(destinationPath));
    // destinationPath = path.join(destinationPath,  '*');
    // console.log('destinationPath', destinationPath);
    // console.log('shell ls -d destinationPath', shell.ls('-d', destinationPath));
    const lsResult = shell.ls(destinationPath);
    if (lsResult.length >= 1) {
        const firstDiscName = lsResult[0];
        // console.log('firstDiscName', firstDiscName);
        destinationPath = path.join(destinationPath,  firstDiscName);
        // console.log('destinationPath', destinationPath);
    } else {
        destinationPath = undefined;
        const error = {
            message: 'no USB disc found',
            error: 'no_usb_disc_found'
        };
        console.log(error);
        throw error;
    }
    return destinationPath;
}

function getSubPath (basePath, subPath) {
    const resultPath = path.join(basePath,  subPath);
    // http://documentup.com/shelljs/shelljs#testexpression
    //  '-d', 'path': true if path is a directory
    // '-e', 'path': true if path exists
    let pathExists = shell.test('-ed', resultPath);
    console.log('pathExists', pathExists);
    if (!pathExists) {
        const error = {
            error: 'test_failed',
            message: `path '${resultPath}' does not exist`,
        };
        console.log(error);
        throw error;
    }
    // console.log('resultPath', resultPath);
    return resultPath;
}

function createSubPath (basePath, subPath) {
    const resultPath = path.join(basePath,  subPath);
    let shellResult = shell.mkdir('-p', resultPath);
    if (shellResult.code != 0) {
        const error = {
            error: 'mkdir_failed',
            message: `creating '${subPath}' failed.\nerror:${shellResult.stderr}`,
            stdout:shellResult.stdout,
            stderr:shellResult.stderr,
            code:shellResult.code
        };
        console.log(error);
        throw error;
    }
    // console.log('resultPath', resultPath);
    return resultPath;
}

async function copyCSVtoUSB () {
    console.group('copyCSVtoUSB');

    let sourcePath = db_export_Path;
    sourcePath = path.join(sourcePath,  '*');
    sourcePath = path.resolve(sourcePath);
    console.log('sourcePath', sourcePath);

    let destinationPath = undefined;
    try {
        destinationPath = findFirstUSBDisc();
        destinationPath = createSubPath(destinationPath, 'web_harvest_log');
        destinationPath = createSubPath(destinationPath, 'db_export');
    } finally {
        console.groupEnd();
    }
    console.log('destinationPath', destinationPath);

    // http://documentup.com/shelljs/shelljs#cpoptions-source--source--dest
    let shellResult = shell.cp(
        // recusive
        '-R',
        sourcePath,
        destinationPath
    );
    const result = {
        stdout:shellResult.stdout,
        stderr:shellResult.stderr,
        code:shellResult.code
    };
    // console.log('shell.cp: ', result);
    console.groupEnd();
    if (result.code != 0) {
        throw {
            error: 'copy_failed',
            message: result.stderr,
            result: result
        };
    }
    return result;
}

async function copyConfigFromUSB () {
    console.group('copyConfigFromUSB');

    let sourcePath = undefined;
    try {
        sourcePath = findFirstUSBDisc();
        sourcePath = getSubPath(sourcePath, 'web_harvest_log');
        sourcePath = getSubPath(sourcePath, 'config');
    } finally {
        console.groupEnd();
    }
    console.log('sourcePath', sourcePath);

    let targetPath = config_Path;
    // targetPath = path.join(targetPath,  '*');
    targetPath = path.resolve(targetPath);
    console.log('targetPath', targetPath);

    // http://documentup.com/shelljs/shelljs#cpoptions-source--source--dest
    let shellResult = shell.cp(
        // recusive
        '-R',
        sourcePath,
        targetPath
    );
    const result = {
        stdout:shellResult.stdout.split('\n'),
        stderr:shellResult.stderr,
        code:shellResult.code
    };
    console.log('shell.cp: ', result);
    console.groupEnd();
    if (result.code != 0) {
        throw {
            error: 'copy_failed',
            message: result.stderr,
            result: result
        };
    }
    return result;
}
