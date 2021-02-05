// https://vuex.feathersjs.com/getting-started.html#service-plugins
import feathersClient, {
    makeServicePlugin,
    BaseModel
} from '../../feathers-client'

class Management extends BaseModel {
    // constructor(data, options) {
    //     super(data, options)
    // }

    // Required for $FeathersVuex plugin to work after production transpile.
    static modelName = 'Management'

    // Define default properties here
    // static instanceDefaults(data, { store, models }) {
    static instanceDefaults () {
        return {
            action: '',
            params: {}
        }
    }

    static sendAction (action, servicePath, params) {
        console.log('sendAction')
        const data = {
            action: action,
            service: servicePath,
            params: params
        }
        const instance = new Management(data)
        let result = null
        result = instance.create()
        // instance.create().then(
        //     (response) => { result = response }
        // ).catch(
        //     (error) => { result = error }
        // )
        return result
        // return new Management(data).create()
    }

    static updateSerialDeviceList () {
        console.log('updateSerialDeviceList')
        return this.sendAction(
            'update-serial-device-list',
            'serial',
            {}
        )
    }

    static serverExportAsCSV (servicePath, timeframe) {
        console.log('serverExportAsCSV')
        return this.sendAction(
            'export-cvs',
            servicePath,
            {
                // paginate: false,
                // https://docs.feathersjs.com/api/databases/querying.html#equality
                query: {
                    // timeframe: timeframe
                    $sort: {
                        createdAt: -1
                    },
                    $select: [
                        'createdAt',
                        'cropText',
                        'placeText',
                        'weight',
                        'crateTareWeight',
                        'scaleUnit'
                        // 'crate',
                        // 'crop',
                        // 'place',
                    ]
                }
            }
        )
    }

    static serverImport (servicePath) {
        console.log('serverImport')
        return this.sendAction(
            'import-from-file',
            servicePath,
            {}
        )
    }

    static removeDBFile (servicePath) {
        console.log('removeDBFile')
        return this.sendAction(
            'remove-db-file',
            servicePath,
            {}
        )
    }

    static serverSystemAction (action) {
        console.log('serverShutdown')
        return this.sendAction(
            'server-shutdown',
            'management',
            {
                action: action
            }
        )
    }

    static gitPull () {
        console.log('gitPull')
        return this.sendAction(
            'git-pull',
            'management',
            {}
        )
    }

    // static removeDB (servicePath) {
    //     console.log('removeDB')
    //     const service = this.app.services[servicePath]
    //     console.log('service', service)
    //     // return this.sendAction(
    //     //     'remove-db-file',
    //     //     servicePath,
    //     //     {}
    //     // )
    // }
}

const servicePath = 'management'
const servicePlugin = makeServicePlugin({
    Model: Management,
    service: feathersClient.service(servicePath),
    servicePath,
    debug: true
})

// Setup the client-side Feathers hooks.
feathersClient.service(servicePath).hooks({
    before: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    after: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    },
    error: {
        all: [],
        find: [],
        get: [],
        create: [],
        update: [],
        patch: [],
        remove: []
    }
})

export default servicePlugin
