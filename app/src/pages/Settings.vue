<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <h1>Global Settings</h1>
        <section>
            <q-btn
                round
                :color="$q.dark.isActive ? 'blue' : 'black'"
                icon="mdi-lightbulb-on-outline"
                @click="$q.dark.toggle()"
            />
        </section>
        <section>
            <q-btn
                v-ripple
                label="export harvest to csv on server"
                icon="mdi-database-export"
                @click="serverExportToCSV('harvest', 'current_day')"
            /><br>
            <q-btn
                v-ripple
                label="import global-config from file"
                icon="mdi-database-export"
                @click="serverImport('global-config')"
            /><br>
            <q-btn
                v-ripple
                label="import crop from file"
                icon="mdi-database-export"
                @click="serverImport('crop')"
            /><br>
            <q-btn
                v-ripple
                label="import crate from file"
                icon="mdi-database-export"
                @click="serverImport('crate')"
            />
        </section>
        <section>
            <q-input
                filled
                label="serial device"
                v-model="serialDevice"
                debounce="500"
            >
                <template v-slot:append>
                    <q-icon
                        :style="{opacity: (serialDevice !== '' ? 'inherit' : '0.1')}"
                        name="close"
                        @click="serialDevice = '/dev/ttyUSB0'"
                        class="cursor-pointer"
                    />
                </template>
            </q-input>

            <q-input
                filled
                label="pos"
                type="number"
                v-model.number="pos"
                debounce="500"
            />
            <q-input
                filled
                label="button size (mm)"
                type="number"
                v-model.number="btnSize"
                debounce="500"
            />
            <q-input
                filled
                label="button spaceing (mm)"
                type="number"
                v-model.number="btnSpace"
                debounce="500"
            />
            <!-- <q-slider
                v-model="pos"
                :min="-20"
                :max="20"
                :step="2"
                debounce="1000"
                label
                label-always
                color="purple"
             /> -->
        </section>
        <debugSection label="globalConfig" :obj="globalConfig"/>
        <debugSection label="serialDevice" :obj="serialDevice"/>
        <debugSection label="btnSpace" :obj="btnSpace"/>
    </q-page>
</template>

<script>
import { mapBindIDItems } from '../store/mapBindIDItems.js'
import DebugSection from 'components/debugSection'

export default {
    data () {
        return {
            // testthing: {
            //     value: '/dev/ttyUSB42',
            //     message: 'Hello World'
            // }
        }
    },
    components: { DebugSection },
    computed: {
        ...mapBindIDItems('global-config', ['serialDevice', 'pos', 'btnSize', 'btnSpace'])
    },
    methods: {
        serverExportToCSV: function (servicePath, timeframe) {
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
        },
        serverImport: function (servicePath) {
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
    },
    created: function () {
        // return mapBindIDItems('global-config', ['serialDevice', 'pos', 'btnSize', 'btnSpace'])
    },
    name: 'PageSettings'
}
</script>
