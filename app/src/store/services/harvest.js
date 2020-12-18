// https://vuex.feathersjs.com/getting-started.html#service-plugins
import feathersClient, {
    makeServicePlugin,
    BaseModel
} from '../../feathers-client'
import setTimestamp from './hooks/set-timestamp'

class Harvest extends BaseModel {
    // constructor(data, options) {
    //     super(data, options)
    // }

    // Required for $FeathersVuex plugin to work after production transpile.
    static modelName = 'Harvest'

    // Define default properties here
    // static instanceDefaults(data, { store, models }) {
    static instanceDefaults () {
        return {
            crate: {},
            crop: {},
            place: {},
            crateTareWeight: 0,
            cropText: '',
            placeText: '',
            weight: 0,
            createdAt: null
            // comment: ''
        }
    }
}
const servicePath = 'harvest'
const servicePlugin = makeServicePlugin({
    Model: Harvest,
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
        create: [setTimestamp('createdAt')],
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
