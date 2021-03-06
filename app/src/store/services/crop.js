// https://vuex.feathersjs.com/getting-started.html#service-plugins
import feathersClient, {
    makeServicePlugin,
    BaseModel
} from '../../feathers-client'
import setTimestamp from './hooks/set-timestamp'

class Crop extends BaseModel {
    // constructor(data, options) {
    //     super(data, options)
    // }

    // Required for $FeathersVuex plugin to work after production transpile.
    static modelName = 'Crop'

    // Define default properties here
    // static instanceDefaults(data, { store, models }) {
    static instanceDefaults () {
        return {
            _id: '',
            text: '',
            icon: '',
            image: '',
            description: ''
        }
    }

    placesList () {
        // console.log('PING')
        const result = []
        if (this.places) {
            let places = []
            if (typeof this.places === 'number') {
                for (let i = 1; i <= this.places; i++) {
                    places.push(i)
                }
            } else if (Array.isArray(this.places)) {
                places = this.places
            }
            for (const item of places) {
                result.push({
                    _id: item,
                    text: item,
                    icon: 'mdi-map-marker'
                })
            }
        } else {
            result.push({
                _id: 0,
                text: '0',
                icon: 'mdi-map-marker'
            })
        }
        return result
    }

    placesCount () {
        let result = -1
        if (this.places) {
            if (typeof this.places === 'number') {
                result = this.places
            } else if (Array.isArray(this.places)) {
                result = this.places.length
            }
        }
        return result
    }
}
const servicePath = 'crop'
const servicePlugin = makeServicePlugin({
    Model: Crop,
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
        create: [setTimestamp('lastUsed')],
        update: [setTimestamp('lastUsed')],
        patch: [setTimestamp('lastUsed')],
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
