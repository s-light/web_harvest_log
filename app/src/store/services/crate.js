// https://vuex.feathersjs.com/getting-started.html#service-plugins
import feathersClient, {
    makeServicePlugin,
    BaseModel
} from '../../feathers-client'

class Crate extends BaseModel {
    // constructor(data, options) {
    //     super(data, options)
    // }

    // Required for $FeathersVuex plugin to work after production transpile.
    static modelName = 'Crate'

    // Define default properties here
    // static instanceDefaults(data, { store, models }) {
    static instanceDefaults () {
        return {
            tareWeight: 0,
            _id: '',
            name: '',
            icon: '',
            image: '',
            description: ''
        }
    }
}
const servicePath = 'crate'
const servicePlugin = makeServicePlugin({
    Model: Crate,
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
