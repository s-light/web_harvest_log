<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <h1>
            {{ $t('information') }}
            {{ $t('for') }}
            {{ $t('developer') }}
        </h1>
        <debugSection label="platform" :obj="this.$q.platform"/>
        <section>
            <q-btn
                round
                :color="$q.dark.isActive ? 'blue' : 'black'"
                icon="mdi-lightbulb-on-outline"
                @click="$q.dark.toggle()"
            />
            <br>
             <q-btn
                flat
                round
                @click="$q.dark.toggle()"
                :icon="$q.dark.isActive ? 'brightness_2' : 'brightness_5'"
            />
        </section>
        <section>
            <q-btn
                v-ripple
                :label="$t('database_harvest_export_csv')"
                icon="mdi-database-export"
                @click="serverExportToCSV('harvest', 'current_day')"
            /><br>
            <q-btn
                v-ripple
                :label="$t('database_config_import_all')"
                icon="mdi-database-import"
                @click="importAll()"
            /><br>
            <q-btn
                v-ripple
                label="import crop from file"
                icon="mdi-database-import"
                @click="serverImport('crop')"
            /><br>
            <q-btn
                v-ripple
                label="import cropFilter from file"
                icon="mdi-database-import"
                @click="serverImport('crop-filter')"
            /><br>
            <q-btn
                v-ripple
                label="import crate from file"
                icon="mdi-database-import"
                @click="serverImport('crate')"
            /><br>
            <q-btn
                v-ripple
                :label="$t('database_config_clean')"
                icon="mdi-database-remove"
                @click="removeAll()"
            /><br>

            <br>

            <q-btn
                v-ripple
                :label="$t('pull_updates')"
                icon="mdi-download"
                @click="gitPull()"
            /><br>
            <q-btn
                v-ripple
                :label="$t('reboot_system')"
                icon="mdi-restart"
                @click="serverSystemAction('reboot')"
            /><br>
            <q-btn
                v-ripple
                :label="$t('shutdown_system')"
                icon="mdi-power"
                @click="serverSystemAction('shutdown')"
            /><br>
        </section>
        <section>
            <q-toggle
                size="xl"
                v-model="keypadVisible"
                label="Experimental Keypad"
            /><br>
            <q-toggle
                size="xl"
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
                label="button filter size (mm)"
                type="number"
                v-model.number="btnSizeFilter"
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
            'btnSizeFilter',
            'btnSpace',
            'keypadVisible',
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
        settingsSerial
    },
    name: 'PageDebug'
}
</script>
