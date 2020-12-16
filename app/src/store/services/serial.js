// https://vuex.feathersjs.com/getting-started.html#service-plugins
import feathersClient, {
    makeServicePlugin,
    BaseModel
} from '../../feathers-client'

// import { ScaleDemoGenerator } from '../scale_demo'

// import { store } from '../index'

// import { handleMessage } from '../../../serial.js'
// const { handleMessage } = require('../../../../serial.js')
// ^ this path does not work - maybe because its outside of the *root* folder?

function handleMessage (message) {
    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
    // regex
    // https://regex101.com/
    // test
    // 0.04
    // 33.04
    // 999.04
    // 0.55 kg
    // 33.55 kg
    // 999.55 kg
    // -      0.60
    // -     20.55
    // -    920.55
    // -      0.64 kg
    // -     33.64 kg
    // -    999.64 kg
    // result:
    // ^(-?\s*\d{0,3}\.\d\d)\s?(\w*)$
    const regex = /^(?<sign>-?)\s*(?<weight>\d{0,3}\.\d\d)\s?(?<unit>\w*)$/
    const result = {
        totalWeight: 0,
        scaleStable: false
    }
    const match = message.match(regex)
    if (match) {
        const weight = match.groups.weight
        const sign = match.groups.sign
        const unit = match.groups.unit
        if (weight) {
            if (sign) {
                // do the sign handling in string space so we do not introduce math inaccuracy..
                result.totalWeight = Number(sign + weight)
            } else {
                result.totalWeight = Number(weight)
            }
        }
        if (unit) {
            result.scaleStable = true
            // result.scaleUnit = 'kg'
            result.scaleUnit = unit
        } else {
            result.scaleStable = false
        }
    }
    return result
}

class Serial extends BaseModel {
    // constructor (data, options) {
    //     super(data, options)
    //     console.log('Serial Class this', this)
    //     this.demoHandler = ScaleDemoGenerator(this.store)
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
            // if (item.id === 'message') {
            if (item.id === 'message' && model.store) {
                // console.log('model', model)
                // console.log('item', item)
                // console.log('store', store)
                const result = handleMessage(item.value)
                // console.log('result', result)
                model.store.commit('localconfig/setTotalWeight', result.totalWeight)
                model.store.commit('localconfig/setScaleStable', result.scaleStable)
                if (result.scaleUnit) {
                    model.store.commit('localconfig/setScaleUnit', result.scaleUnit)
                }
            } else if (item.id === 'connected' && model.store) {
                console.log('model', model)
                // console.log('item', item)
                // console.log('store', store)
                console.log('this', this)
                console.log('item.value', item.value)
                if (item.value) {
                    console.log('connected!')
                } else {
                    console.log('disconnected!')
                    this.$store.dispatch('localconfig/startScaleDemo').then(response => {
                        console.log('startScaleDemo: ', response)
                        this.$q.notify({
                            color: 'positive',
                            message: 'startScaleDemo done.',
                            icon: 'info'
                        })
                    }).catch(error => {
                        console.error('startScaleDemo:', error)
                        this.$q.notify({
                            color: 'negative',
                            message: 'startScaleDemo failed.',
                            icon: 'report_problem'
                        })
                    })
                }
            }
            return true
        }
    },
    // extend ({ store, module }) {
    //     // Listen to other parts of the store
    //     // store.watch(/* truncated */)
    //     console.log('store', store)
    //     console.log('module', module)
    //     return {
    //         state: {},
    //         getters: {},
    //         mutations: {},
    //         actions: {}
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
