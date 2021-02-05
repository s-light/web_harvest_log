
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
        icon: 'info'
    })
    this.$FeathersVuex.api.Management.serverExportAsCSV(servicePath, timeframe)
        .then(response => {
            console.log('serverImport: ', response)
            this.$q.notify({
                color: 'positive',
                message: `${servicePath} done.`,
                icon: 'info'
            })
        }).catch(error => {
            console.error('serverImport:', error)
            this.$q.notify({
                color: 'negative',
                message: `${servicePath} loading failed.`,
                icon: 'report_problem'
            })
        })
    console.groupEnd()
}

export function serverImport (servicePath) {
    console.group('serverImport')
    this.$q.notify({
        color: 'info',
        message: `Import ${servicePath} from server. Processing now.`,
        icon: 'info'
    })
    this.$FeathersVuex.api.Management.serverImport(servicePath)
        .then(response => {
            console.log('serverImport: ', response)
            this.$q.notify({
                color: 'positive',
                message: `${servicePath} done.`,
                icon: 'info'
            })
        }).catch(error => {
            console.error('serverImport:', error)
            this.$q.notify({
                color: 'negative',
                message: `${servicePath} loading failed.`,
                icon: 'report_problem'
            })
        })
    console.groupEnd()
}

export function removeDBFile (servicePath) {
    console.group('removeDBFile')
    this.$q.notify({
        color: 'info',
        message: `remove ${servicePath} db from server. Processing now.`,
        icon: 'info'
    })
    this.$FeathersVuex.api.Management.removeDBFile(servicePath)
        .then(response => {
            console.log('removeDBFile: ', response)
            this.$q.notify({
                color: 'positive',
                message: `${servicePath} done.`,
                icon: 'info'
            })
        }).catch(error => {
            console.error('removeDBFile:', error)
            this.$q.notify({
                color: 'negative',
                message: `${servicePath} removing failed.`,
                icon: 'report_problem'
            })
        })
    console.groupEnd()
}

export function removeDB (servicePath) {
    console.group('removeDB', servicePath)
    this.$q.notify({
        color: 'info',
        message: `remove all entries from ${servicePath}. Processing now.`,
        icon: 'info'
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
        color: 'positive',
        message: `${servicePath} done.`,
        // timeout: 30500,
        icon: 'info'
    })
    console.groupEnd()
}

export function serverSystemAction (action) {
    console.group('serverSystemAction', action)
    this.$q.notify({
        color: 'info',
        message: `initiated server system action '${action}'`,
        icon: 'info'
    })
    this.$FeathersVuex.api.Management.serverShutdown()
        .then(response => {
            console.log('serverSystemAction: ', response)
            this.$q.notify({
                color: 'positive',
                message: `server system action '${action}' running. \n '${response}'`,
                icon: 'info'
            })
        }).catch(error => {
            console.error('serverShutdown:', error)
            this.$q.notify({
                color: 'negative',
                message: `'${action}' failed. '${error}'`,
                icon: 'report_problem'
            })
        })
    console.groupEnd()
}

export function gitPull () {
    console.group('gitPull')
    this.$q.notify({
        color: 'info',
        message: 'pull software updates',
        icon: 'info'
    })
    this.$FeathersVuex.api.Management.gitPull()
        .then(response => {
            console.log('gitPull: ', response)
            this.$q.notify({
                color: 'positive',
                message: `gitPull successful. '${response}'`,
                icon: 'info'
            })
        }).catch(error => {
            console.error('gitPull:', error)
            this.$q.notify({
                color: 'negative',
                message: `gitPull failed. '${error}'`,
                icon: 'report_problem'
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
