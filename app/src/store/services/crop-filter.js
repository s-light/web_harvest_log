// https://vuex.feathersjs.com/getting-started.html#service-plugins
import feathersClient, {
    makeServicePlugin,
    BaseModel
} from '../../feathers-client'

class CropFilter extends BaseModel {
    constructor (data, options) {
        super(data, options)
        this.queryFixed = {}
    }

    // Required for $FeathersVuex plugin to work after production transpile.
    static modelName = 'CropFilter'

    // Define default properties here
    // static instanceDefaults(data, { store, models }) {
    static instanceDefaults () {
        return {
            _id: '',
            text: '',
            query: {},
            icon: '',
            image: '',
            description: ''
        }
    }

    fixFieldNames (objIn, objResult) {
        // recusive!
        for (const [key, value] of Object.entries(objIn)) {
            console.log(`${key}: ${value}`)
            const keyFixed = key.replace('_$', '$')
            if (!Array.isArray(value) && typeof value === 'object') {
                objResult[keyFixed] = this.fixFieldNames(value, objResult)
            } else {
                objResult[keyFixed] = value
            }
        }
        return objResult
    }

    setQueryFixed (query) {
        this.queryFixed = this.fixFieldNames(query, {})
    }
}
const servicePath = 'crop-filter'
const servicePlugin = makeServicePlugin({
    Model: CropFilter,
    service: feathersClient.service(servicePath),
    servicePath,
    // mutations: {
    //     setQueryFixed (state, queryFixed) {
    //         state.queryFixed = queryFixed
    //     }
    // },
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
        create: [
            context => {
                const { service, result } = context
                if (result.query) {
                    service.setQueryFixed(result.query)
                }
            }
        ],
        update: [
            context => {
                const { service, result } = context
                if (result.query) {
                    service.setQueryFixed(result.query)
                }
            }
        ],
        patch: [
            context => {
                const { service, result } = context
                if (result.query) {
                    service.setQueryFixed(result.query)
                }
            }
        ],
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
