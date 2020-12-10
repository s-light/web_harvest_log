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

    static serverExportAsCSV (servicePath, timeframe) {
        console.log('serverExportAsCSV')
        return this.sendAction(
            'export-cvs',
            servicePath,
            {
                // paginate: false,
                // https://docs.feathersjs.com/api/databases/querying.html#equality
                query: {
                    timeframe: timeframe
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
