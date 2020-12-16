<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <h1>{{ $t('global') }} {{ $t('settings') }}</h1>
        <!--
        how to use quasar-language-pack build ins in own components:
        {{ $q.lang.label.close }}
        https://github.com/quasarframework/quasar/blob/dev/ui/lang/de.js

        App Internationalization (I18n) How To Use:
        {{ $t('mykey1') }}
        https://quasar.dev/options/app-internationalization#How-to-use
        -->
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
            <!-- <q-btn
                v-ripple
                label="import global-config from file"
                icon="mdi-database-export"
                @click="serverImport('global-config')"
            /><br> -->
            <q-btn
                v-ripple
                label="import app_config from files"
                icon="mdi-database-export"
                @click="importAll()"
            /><br>
            <!-- <q-btn
                v-ripple
                label="import crop from file"
                icon="mdi-database-export"
                @click="serverImport('crop')"
            /><br>
            <q-btn
                v-ripple
                label="import cropFilter from file"
                icon="mdi-database-export"
                @click="serverImport('crop-filter')"
            /><br>
            <q-btn
                v-ripple
                label="import crate from file"
                icon="mdi-database-export"
                @click="serverImport('crate')"
            /> -->
            <q-btn
                v-ripple
                label="remove database files"
                icon="mdi-database-export"
                @click="removeAll()"
            /><br>
            <q-btn
                v-ripple
                label="start Scale Demo Generator "
                icon="mdi-database-export"
                @click="startScaleDemo()"
            /><br>
        </section>
        <section>
            <langSelect />
        </section>
        <settingsSerial />
        <!-- <section>
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
        </section> -->
        <!-- <debugSection label="globalConfig" :obj="globalConfig"/> -->
        <!-- <debugSection label="serialDevice" :obj="serialDevice"/> -->
        <!-- <debugSection label="btnSpace" :obj="btnSpace"/> -->
        <debugSection label="testthing" :obj="testthing"/>
    </q-page>
</template>

<script>
import {
    // useFind,
    // useGet,
    makeFindMixin
} from 'feathers-vuex'
// import { mapBindIDItems } from '../store/mapBindIDItems.js'
import debugSection from 'components/debugSection'
import langSelect from 'components/langSelect'
import settingsSerial from 'components/settingsSerial'

// Detecting Locale
// https://quasar.dev/options/quasar-language-packs#Detecting-Locale
// https://quasar.dev/options/app-internationalization#Detecting-Locale
// get browser lang:
// this.$q.lang.getLocale()
// get selected lang
// this.$q.lang.isoName
// or
// this.$i18n.locale

export default {
    data () {
        return {
            testthing: 'hello world'
        }
    },
    computed: {
        // ...mapBindIDItems('global-config', ['serialDevice', 'pos', 'btnSize', 'btnSpace']),
        globalConfigParams () {
            return { query: {} }
        }
    },
    methods: {
        importAll: function () {
            this.serverImport('crate')
            this.serverImport('crop')
            this.serverImport('crop-filter')
        },
        removeAll: function () {
            this.removeDBFile('crate')
            this.removeDBFile('crop')
            this.removeDBFile('crop-filter')
        },
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
        },
        removeDBFile: function (servicePath) {
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
        },
        startScaleDemo: function () {
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
    },
    created: function () {
        // return mapBindIDItems('global-config', ['serialDevice', 'pos', 'btnSize', 'btnSpace'])
    },
    mixins: [
        makeFindMixin({ service: 'global-config' })
    ],
    components: {
        debugSection,
        langSelect,
        settingsSerial
    },
    name: 'PageSettings'
}
</script>
