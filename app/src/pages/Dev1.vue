<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <h1>Dev1</h1>
        <debugSection label="serial" :obj="serial"/>
        <section>
            <q-btn
                v-ripple
                label="load from server"
                icon="sync"
                @click="globalConfigLoadFromServer()"
            /><br>
            <q-btn
                v-ripple
                label="export harvest to csv on server"
                icon="mdi-database-export"
                @click="serverExportToCSVHarvest()"
            /><br>
            <q-btn
                v-ripple
                label="start Scale Demo Generator "
                icon="mdi-clock-start"
                @click="startScaleDemo()"
            /><br>
            <q-btn
                v-ripple
                label="start Scale Demo Generator "
                icon="mdi-clock-end"
                @click="stopScaleDemo()"
            /><br>
        </section>
        <debugSection label="totalWeight" :obj="totalWeight"/>
        <debugSection label="scaleStable" :obj="scaleStable"/>
        <debugSection label="scaleUnit" :obj="scaleUnit"/>
    </q-page>
</template>

<script>
import { mapBind } from '../store/mapBind.js'
import DebugSection from 'components/debugSection'
// import {
//     // mapState,
//     // mapGetters,
//     mapActions
// } from 'vuex'
import {
    // useFind,
    // useGet,
    makeFindMixin
} from 'feathers-vuex'

export default {
    data () {
        return {
            // serialDeviceInt: '/dev/ttyUSB42'
        }
    },
    components: { DebugSection },
    mixins: [
        makeFindMixin({ service: 'crop' }),
        makeFindMixin({ service: 'serial' })
    ],
    computed: {
        serialParams () {
            return { query: {} }
        },
        cropParams () {
            return { query: {} }
        },
        ...mapBind('localconfig', [
            // 'btnSize',
            // 'btnSpace',
            // 'crateSelected',
            // 'cropSelected',
            // 'placeSelected',
            'totalWeight',
            'scaleStable',
            'scaleUnit'
        ])
    },
    methods: {
        globalConfigLoadFromServer: function () {
            console.group('globalConfigLoadFromServer')
            this.$axios.get('/config/crops/crop.json')
                .then((response) => {
                    // this.data = response.data
                    console.log('response.data', response.data)
                    this.$q.notify({
                        color: 'info',
                        message: 'Loaded config from server. Processing now.',
                        icon: 'info'
                    })

                    this.$q.notify({
                        color: 'positive',
                        message: 'done.',
                        icon: 'info'
                    })
                })
                .catch(() => {
                    this.$q.notify({
                        color: 'negative',
                        message: 'Loading failed',
                        icon: 'report_problem'
                    })
                })
            console.groupEnd()
        },
        serverExportToCSVHarvest: function () {
            console.group('serverExportToCSVHarvest')
            // console.log('this', this)
            // console.log('this.$FeathersVuex', this.$FeathersVuex)
            // console.log('this.$FeathersVuex.api.Management', this.$FeathersVuex.api.Management)
            this.$FeathersVuex.api.Management.serverExportAsCSV('harvest', 'day')
                .then(response => {
                    console.log('response', response)
                }).catch(err => {
                    console.error('err', err)
                })
            console.groupEnd()
        },
        serverImport: function (servicePath) {
            console.group('serverImport')
            this.$FeathersVuex.api.Management.serverImport(servicePath)
                .then(response => {
                    console.log('response', response)
                }).catch(err => {
                    console.error('err', err)
                })
            console.groupEnd()
        },
        startScaleDemo: function () {
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
        },
        stopScaleDemo: function () {
            this.$store.dispatch('localconfig/stopScaleDemo').then(response => {
                console.log('stopScaleDemo: ', response)
                this.$q.notify({
                    color: 'positive',
                    message: 'stopScaleDemo done.',
                    icon: 'info'
                })
            }).catch(error => {
                console.error('stopScaleDemo:', error)
                this.$q.notify({
                    color: 'negative',
                    message: 'stopScaleDemo failed.',
                    icon: 'report_problem'
                })
            })
        }
    },
    // created () {
    //     // Find all appointments. We'll use the getters to separate them.
    //     // this.findGC({ query: {} })
    // },
    filters: {
    },
    name: 'PageDev1'
}
</script>
