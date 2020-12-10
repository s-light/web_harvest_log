
const {actions, service} = require('./management.actions');

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
                this.handleAction(data.action, data.service, data.params);
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
            if (service) {
                // const services = this.app.services;
                // console.log('services', services);
                // console.log('keys(services)', Object.keys(services));
                const actionFnBound = actionFn.bind(this.app, service, params);
                return actionFnBound();
            } else {
                throw {
                    message: `Management: '${action}' - servicePath '${service}' not found.`
                };
            }
        } else {
            throw {
                message: `Management: action '${action}' not Implemented.`
            };
        }
    }

};
