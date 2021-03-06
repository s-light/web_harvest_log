
const {actions} = require('./management.actions');

/* eslint-disable no-unused-vars */
exports.Management = class Management {
    constructor (options) {
        this.options = options || {};
        // this.service = [
        //     'server',
        //     'harvest'
        // ];
        // this.actions = {
        //     'export-cvs': this.exportCSV,
        //     'import-from-file': this.importFromFile,
        // };
        // if (this.options.service) {
        //
        // }
    }

    setup(app) {
        // console.log('setup called.', app);
        this.app = app;
    }

    async create (data, params) {
        // console.group('Management create');
        // console.log('data', data);
        // // console.log('params', params);
        // console.groupEnd();
        if (Array.isArray(data)) {
            return Promise.all(data.map(current => this.create(current, params)));
        } else {
            if (data.action && data.service && data.params) {
                const result = await this.handleAction(data.action, data.service, data.params);
                // console.log('create action result', result);
                data.result = result;
                // this.handleAction(data.action, data.service, data.params).catch((error) => {
                //     throw {
                //         message: 'Management: handleAction failed.',
                //         error: error
                //     };
                //     // return error;
                // });
            } else {
                throw {
                    message: 'Management: Message malformed.',
                    data: data
                };
            }
        }
        return data;
    }

    async handleAction(action, servicePath, params) {
        // console.group('Management: handleAction');
        // console.log('action', action);
        // console.log('servicePath', servicePath);
        // console.log('params', params);
        // // console.log('this', this);
        // console.groupEnd();
        const actionFn = actions[action];
        if (actionFn) {
            const service = this.app.services[servicePath];
            // console.log('service', service);
            // const services = this.app.services;
            // console.log('services', services);
            // console.log('keys(services)', Object.keys(services));
            // const service_available = Object.keys(this.app.services).includes(servicePath);
            // console.log('service_available', service_available);
            // if (service_available) {
            // if (Object.keys(this.app.services).includes(servicePath)) {
            if (service) {
                const actionFnBound = actionFn.bind(this.app, service, servicePath, params);
                let actionResult = await actionFnBound();
                console.log('actionResult', actionResult);
                // if (typeof actionResult !== 'string' || !(actionResult instanceof String)) {
                //     console.log('JSON.stringify...');
                //     try {
                //         actionResult = JSON.stringify(actionResult);
                //     } catch (e) {
                //         console.error(e);
                //     }
                // }
                // console.log('actionResult', actionResult);
                return actionResult;
                // return actionFnBound();
            } else {
                throw {
                    message: `Management: '${action}' - servicePath '${servicePath}' not found.`
                };
            }
        } else {
            throw {
                message: `Management: action '${action}' not Implemented.`
            };
        }
    }

};
