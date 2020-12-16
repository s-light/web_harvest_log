// inspired by mapBind.js
// https://vuex.feathersjs.com/feathers-vuex-forms.html#feathersvuexinputwrapper

// ------------------------------------------
// usage:
// import { mapBindIDItems } from 'store/mapBindIDItems.js'
//
// export default {
//     name: 'ComponentName',
//     computed: {
//         ...mapBindIDItems('global-config', ['serialDevice', 'someOtherThing'])
//     },
// }

import Vue from 'vue'
import {
    // useFind,
    useGet
} from 'feathers-vuex'
import {
// import feathersClient, {
    models
} from '../feathers-client'

export function capitalizeFirstLetter (string) {
    // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
    return string.charAt(0).toUpperCase() + string.slice(1)
}
export function decapitalizeFirstLetter (string) {
    return string.charAt(0).toLowerCase() + string.slice(1)
}

export function servicePath2modelClassName (servicePath) {
    let modelParts = servicePath.split('-')
    modelParts = modelParts.map(item => { return capitalizeFirstLetter(item) })
    // console.log('modelParts', modelParts)
    const modelClassName = modelParts.join('')
    return modelClassName
}

export const findList = async function (servicePath) {
    const modelClassName = servicePath2modelClassName(servicePath)
    const ModelClass = models.api[modelClassName]
    const params = {
        query: {},
        paginate: false
    }
    const resultFind = await ModelClass.find(params)
    const gcList = resultFind.data
    return gcList
}

export const mapBindIDItems = function (servicePath, entryNames) {
    // helper function for vuex
    // create setter and getter functions for given store and properties

    // ------------------------------------------
    // global
    const resultServicePath = {}
    const resultEntries = {}

    // console.log('models.api', models.api)
    // const ModelClass = this.$FeathersVuex.api[servicePath2modelClassName(servicePath)]
    const modelClassName = servicePath2modelClassName(servicePath)
    // console.log('modelClassName', modelClassName)
    const ModelClass = models.api[modelClassName]
    // console.log('ModelClass', ModelClass)
    const servicePathName = decapitalizeFirstLetter(modelClassName)

    // ------------------------------------------
    // prepare empty base
    const reactiveBase = {}
    Vue.set(reactiveBase, 'gcList', {})
    resultServicePath[servicePathName] = {
        get: function () {
            return reactiveBase.gcList
        }
    }

    for (const entryName of entryNames) {
        resultEntries[entryName] = {
            get: function () {
                return null
            },
            set: function (val) {
            }
        }
    }

    // ------------------------------------------
    // servicePath setup
    const params = {
        query: {},
        paginate: false
    }
    ModelClass.find(params).then((resultFind) => {
        for (const item of resultFind.data) {
            reactiveBase.gcList[item.id] = item
        }
    }).catch((error) => {
        // console.error(error.message, error)
        console.error(error.type, error.message)
    })

    // ------------------------------------------
    // entryNames setup
    for (const entryName of entryNames) {
        // get from server and store
        const resultUseGet = useGet({
            model: ModelClass,
            id: entryName,
            _id: entryName
        })
        let gcItem = resultUseGet.item.value
        // check if item exists
        if (!gcItem) {
            // create new item
            const data = {
                id: entryName,
                _id: entryName,
                value: null
            }
            gcItem = new ModelClass(data)
            // gcItem.create().catch((error) => {
            //     console.log('mapBindIDItems: create - ' + error.message, error)
            // })
            gcItem.create().catch((error) => {
                console.error('mapBindIDItems: create - ', error.type, error.message)
                // console.log('gcItem', gcItem)
                // console.log('ModelClass', ModelClass)
                // console.log('ModelClass.store.commit', ModelClass.store.commit)
                // console.log(`ModelClass.store.commit '${ModelClass.store.commit}'`)
                console.log('→ manually commit mutation *addItem*')
                ModelClass.store.commit(servicePath + '/addItem', data)
            })
        }
        const gcItemClone = gcItem.clone()
        resultEntries[entryName].get = function () {
            return gcItemClone.value
        }
        resultEntries[entryName].set = function (val) {
            gcItemClone.value = val
            gcItemClone.commit()
            gcItem.patch({ data: { value: val } })
        }
    }
    const result = Object.assign({}, resultServicePath, resultEntries)
    return result
}
