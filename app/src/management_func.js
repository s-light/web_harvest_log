
import { servicePath2servicePathName } from './store/mapBindIDItems.js'

export function importAll () {
    this.serverImport('crate')
    this.serverImport('crop')
    this.serverImport('crop-filter')
}

export function removeAll () {
    // this.removeDBFile('crate')
    // this.removeDBFile('crop')
    // this.removeDBFile('crop-filter')
    this.removeDB('crate')
    this.removeDB('crop')
    this.removeDB('crop-filter')
}

export function serverExportToCSV (servicePath, timeframe) {
    console.group('serverExportToCSV')
    this.$q.notify({
        color: 'info',
        message: `Export ${servicePath} as CSV on server. Processing now.`,
        html: true
    })
    this.$FeathersVuex.api.Management.serverExportAsCSV(servicePath, timeframe)
        .then(response => {
            console.log('serverImport: ', response)
            this.$q.notify({
                type: 'positive',
                message: `${servicePath} done.`,
                html: true
            })
        }).catch(error => {
            console.error('serverImport:', error)
            this.$q.notify({
                type: 'negative',
                message: `${servicePath} loading failed.`,
                html: true
            })
        })
    console.groupEnd()
}

export function serverImport (servicePath) {
    console.group('serverImport')
    this.$q.notify({
        color: 'info',
        message: `Import ${servicePath} from server. Processing now.`,
        html: true
    })
    this.$FeathersVuex.api.Management.serverImport(servicePath)
        .then(response => {
            console.log('serverImport: ', response)
            this.$q.notify({
                type: 'positive',
                message: `${servicePath} done.`,
                html: true
            })
        }).catch(error => {
            console.error('serverImport:', error)
            this.$q.notify({
                type: 'negative',
                message: `${servicePath} loading failed.`,
                html: true
            })
        })
    console.groupEnd()
}

export function removeDBFile (servicePath) {
    console.group('removeDBFile')
    this.$q.notify({
        color: 'info',
        message: `remove ${servicePath} db from server. Processing now.`,
        html: true
    })
    this.$FeathersVuex.api.Management.removeDBFile(servicePath)
        .then(response => {
            console.log('removeDBFile: ', response)
            this.$q.notify({
                type: 'positive',
                message: `${servicePath} done.`,
                html: true
            })
        }).catch(error => {
            console.error('removeDBFile:', error)
            this.$q.notify({
                type: 'negative',
                message: `${servicePath} removing failed.`,
                html: true
            })
        })
    console.groupEnd()
}

export function removeDB (servicePath) {
    console.group('removeDB', servicePath)
    this.$q.notify({
        color: 'info',
        message: `remove all entries from ${servicePath}. Processing now.`,
        html: true
    })
    const servicePathName = servicePath2servicePathName(servicePath)
    const serviceStore = this.[servicePathName]
    // console.log(this)
    console.log('serviceStore', serviceStore)
    for (var entry of serviceStore) {
        console.log(entry)
        entry.remove()
    }
    this.$q.notify({
        type: 'positive',
        message: `${servicePath} done.`,
        // timeout: 30500,
        html: true
    })
    console.groupEnd()
}

export function serverSystemAction (action) {
    console.group('serverSystemAction', action)
    this.$q.notify({
        color: 'info',
        message: `initiated server system action '${action}'`,
        html: true
    })
    this.$FeathersVuex.api.Management.serverSystemAction(action)
        .then(response => {
            console.log('serverSystemAction: ', response)
            let resultMessage = ''
            if (response.result) {
                if (Array.isArray(response.result)) {
                    for (const resp of response.result) {
                        resultMessage += '\n' + resp.stdout
                    }
                } else {
                    resultMessage = response.result.stdout
                }
            }
            console.log('resultMessage: ', resultMessage)
            let message = `server system action '${action}' done.`
            if (resultMessage) {
                message += `\n<br> '${resultMessage}'`
            }
            this.$q.notify({
                type: 'positive',
                message,
                html: true
            })
        }).catch((error) => {
            console.error('serverSystemAction:\n', error)
            // console.log(error.message)
            this.$q.notify({
                type: 'negative',
                message: `'${action}' failed. \n<br> '${error}'`,
                html: true
            })
        })
    console.groupEnd()
}

export function gitPull () {
    console.group('gitPull')
    this.$q.notify({
        color: 'info',
        message: 'pull software updates',
        html: true
    })
    this.$FeathersVuex.api.Management.gitPull()
        .then(response => {
            console.log('gitPull: ', response)
            this.$q.notify({
                type: 'positive',
                message: `gitPull successful. \n<br> '${response}'`,
                html: true
            })
        }).catch(error => {
            console.error('gitPull:', error)
            this.$q.notify({
                type: 'negative',
                message: `gitPull failed.\n<br>  '${error}'`,
                html: true
            })
        })
    console.groupEnd()
}

export function startScaleDemo () {
    // this.$FeathersVuex.api.Serial
    // if (!model.demoHandler) {
    //     model.demoHandler = new ScaleDemoGenerator(model.store)
    // }
    // model.demoHandler.start()
    // model.store.commit('localconfig/setScaleUnit', 'kg')
    this.$store.dispatch('localconfig/startScaleDemo').then(response => {
        console.log('startScaleDemo: ', response)
        this.$q.notify({
            type: 'positive',
            message: 'startScaleDemo done.',
            html: true
        })
    }).catch(error => {
        console.error('startScaleDemo:', error)
        this.$q.notify({
            type: 'negative',
            message: 'startScaleDemo failed.',
            html: true
        })
    })
}
