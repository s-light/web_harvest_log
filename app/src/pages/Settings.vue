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
             <q-btn
                flat
                round
                @click="$q.dark.toggle()"
                :icon="$q.dark.isActive ? 'brightness_2' : 'brightness_5'"
            />
            <langSelect />
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
                label="import config from files"
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
                label="remove config database entries"
                icon="mdi-database-export"
                @click="removeAll()"
            /><br>
            <q-btn
                v-ripple
                label="shutdown server"
                icon="mdi-database-export"
                @click="serverSystemAction('shutdown')"
            /><br>
            <q-btn
                v-ripple
                label="reboot server"
                icon="mdi-database-export"
                @click="serverSystemAction('reboot')"
            /><br>
            <q-btn
                v-ripple
                label="pull software updates"
                icon="mdi-database-export"
                @click="gitPull()"
            /><br>
            <q-btn
                v-ripple
                label="start Scale Demo Generator "
                icon="mdi-database-export"
                @click="startScaleDemo()"
            /><br>
        </section>
        <section>
            <q-toggle
                size="lg"
                v-model="devMode"
                label="Dev Mode"
            />
        </section>
        <section>
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
        </section>
        <settingsSerial />
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
import { mapBind } from '../store/mapBind.js'
import debugSection from 'components/debugSection'
import langSelect from 'components/langSelect'
import settingsSerial from 'components/settingsSerial'
import {
    importAll,
    removeAll,
    serverExportToCSV,
    serverImport,
    removeDBFile,
    removeDB,
    serverSystemAction,
    gitPull,
    startScaleDemo
} from '../management_func.js'

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
        ...mapBind('localconfig', [
            'btnSize',
            'btnSpace',
            'devMode'
        ]),
        globalConfigParams () {
            return { query: {} }
        },
        crateParams () {
            return {
                query: {
                    $sort: {
                        _id: 1
                    }
                }
            }
        },
        cropParams () {
            return {
                query: {
                    $sort: {
                        _id: 1
                    }
                }
            }
        },
        cropFilterParams () {
            return {
                query: {
                    $sort: {
                        _id: 1
                    }
                }
            }
        }
    },
    methods: {
        importAll: importAll,
        removeAll: removeAll,
        serverExportToCSV: serverExportToCSV,
        serverImport: serverImport,
        removeDBFile: removeDBFile,
        removeDB: removeDB,
        serverSystemAction: serverSystemAction,
        gitPull: gitPull,
        startScaleDemo: startScaleDemo
    },
    created: function () {
        // return mapBindIDItems('global-config', ['serialDevice', 'pos', 'btnSize', 'btnSpace'])
    },
    mixins: [
        makeFindMixin({ service: 'global-config' }),
        makeFindMixin({ service: 'crate' }),
        makeFindMixin({ service: 'crop' }),
        makeFindMixin({ service: 'crop-filter' })
    ],
    components: {
        debugSection,
        langSelect,
        settingsSerial
    },
    name: 'PageSettings'
}
</script>
