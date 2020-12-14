// https://vuex.feathersjs.com/getting-started.html#service-plugins
import feathersClient, {
    makeServicePlugin,
    BaseModel
} from '../../feathers-client'

class Serial extends BaseModel {
    // constructor(data, options) {
    //     super(data, options)
    // }

    // Required for $FeathersVuex plugin to work after production transpile.
    static modelName = 'Serial'

    // Define default properties here
    // static instanceDefaults(data, { store, models }) {
    static instanceDefaults () {
        return {
            id: '',
            value: ''
        }
    }

    // async update (id, data, params) {
    //     console.log('Serial', id, data, params)
    //     return super.update(id, data, params)
    // }
}
const servicePath = 'serial'
const servicePlugin = makeServicePlugin({
    Model: Serial,
    service: feathersClient.service(servicePath),
    servicePath,
    // https://vuex.feathersjs.com/service-plugin.html#custom-event-handlers
    handleEvents: {
        patched: (item, { model, models }) => {
            // console.log('models', models)
            // console.log('model.store.state', model.store.state)
            if (item.id === 'message' && model.store) {
                // console.log('model', model)
                // console.log('item', item)
                // model.handleMessage(model.store, item.value)
            }
            return true
        }
    },
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
