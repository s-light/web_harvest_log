// https://vuex.feathersjs.com/getting-started.html#service-plugins
import feathersClient, {
    makeServicePlugin,
    BaseModel
} from '../../feathers-client'

class CropFilter extends BaseModel {
    // constructor (data, options) {
    //     super(data, options)
    // }

    // Required for $FeathersVuex plugin to work after production transpile.
    static modelName = 'CropFilter'

    // Define default properties here
    // static instanceDefaults(data, { store, models }) {
    static instanceDefaults () {
        return {
            _id: '',
            text: '',
            query: {},
            queryFixed: {},
            icon: '',
            image: '',
            description: ''
        }
    }

    static fixFieldNames (objIn) {
        console.group('fixFieldNames')
        const objResult = {}
        // console.log(`fixFieldNames objIn: '${objIn}' objResult: '${objResult}'`)
        console.log('objIn', objIn)
        // recusive!
        for (const [key, value] of Object.entries(objIn)) {
            console.log('for loop -----')
            console.log('key', key)
            console.log('value', value)
            const keyFixed = key.replace('_$', '$')
            console.log('keyFixed', keyFixed)
            if (!Array.isArray(value) && typeof value === 'object') {
                console.log('is object and not array - so recusive call:')
                objResult[keyFixed] = this.fixFieldNames(value)
            } else {
                console.log('normal value - just add it to the result')
                objResult[keyFixed] = value
            }
        }
        console.log('objResult', objResult)
        console.groupEnd()
        return objResult
    }

    getQueryFixed () {
        return CropFilter.fixFieldNames(this.query, {})
    }

    // setQueryFixed (query) {
    //     const fixed = CropFilter.fixFieldNames(query, {})
    //     this.service.FeathersVuexModel.store.commit('setQueryFixed', fixed)
    //     console.log('fixed', fixed)
    // }
}
const servicePath = 'crop-filter'
const servicePlugin = makeServicePlugin({
    Model: CropFilter,
    service: feathersClient.service(servicePath),
    servicePath,
    mutations: {
        // setQueryFixed (state, queryFixed) {
        //     state.queryFixed = queryFixed
        // }
    },
    // handleEvents: {
    //     created: (item, { model, models }) => {
    //         console.log('item', item)
    //     },
    //     patched: (item, { model, models }) => {
    //         console.log('item', item)
    //         // console.log('models', models)
    //         // console.log('model.store.state', model.store.state)
    //         if (item.query) {
    //             // console.log('result', result)
    //             const fixed = model.fixFieldNames(item.query, {})
    //             model.store.commit('crop-filter/setQueryFixed', fixed)
    //             console.log('fixed', fixed)
    //         }
    //         return true
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
            // context => {
            //     const { service, result } = context
            //     if (result.query) {
            //         service.setQueryFixed(result.query)
            //     }
            // }
        ],
        update: [
            // context => {
            //     const { service, result } = context
            //     if (result.query) {
            //         service.setQueryFixed(result.query)
            //     }
            // }
        ],
        patch: [
            // context => {
            //     const { service, result } = context
            //     if (result.query) {
            //         service.setQueryFixed(result.query)
            //     }
            // }
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
