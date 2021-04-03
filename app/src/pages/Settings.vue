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
        <section class="text-center">
            <q-btn
                round
                :color="$q.dark.isActive ? 'blue' : 'black'"
                icon="mdi-lightbulb-on-outline"
                @click="$q.dark.toggle()"
                class="q-my-md"
                style="margin-right:0;"
            />
            <langSelect
                class="q-my-md"
                style="min-width:8em;"
            />
        </section>
        <section>
            <!-- <q-btn
                v-ripple
                :label="$t('sync_with_cloud')"
                icon="mdi-cloud-sync-outline"
                @click="serverSystemAction('sync_with_cloud')"
            /><br> -->
            <q-btn
                v-ripple
                :label="$t('database_harvest_export_csv')"
                icon="mdi-database-export"
                @click="serverExportToCSV('harvest', 'current_day')"
            /><br>
            <q-btn
                v-ripple
                :label="$t('copy_csv_to_usb')"
                icon="mdi-usb-flash-drive"
                @click="serverSystemAction('copyCSVtoUSB')"
            /><br>
            <q-toggle
                size="xl"
                v-model="databaseManagementOptionsShow"
                :label="$t('database_management_options_show')"
            /><br>
            <q-btn
                v-if="databaseManagementOptionsShow"
                v-ripple
                :label="$t('database_config_import_all')"
                icon="mdi-database-import"
                @click="importAll()"
            /><br>
            <q-btn
                v-if="databaseManagementOptionsShow"
                v-ripple
                :label="$t('database_config_clean')"
                icon="mdi-database-remove"
                @click="removeAll()"
            /><br>
            <q-btn
                v-if="databaseManagementOptionsShow"
                v-ripple
                :label="$t('copy_config_from_usb')"
                icon="mdi-usb-flash-drive"
                @click="serverSystemAction('copyConfigFromUSB')"
            /><br>

            <br>

            <q-btn
                v-ripple
                :label="$t('pull_updates')"
                icon="mdi-progress-download"
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

            <br>

            <router-link
                :to="childrenDebug[0].path"
                exact
                v-slot="{ href, route, navigate}"
            >
                <template>
                    <!--
                    :label="`${$t('shutdown')} ${$t('system')}`"
                    :label="$t('debug')"
                    -->
                    <q-btn
                        clickable
                        v-ripple
                        :label="`${$t('information')} ${$t('for')} ${$t('developer')}`"
                        :icon="childrenDebug[0].icon"
                        @click="navigate"
                    />
                </template>
            </router-link>
        </section>
        <section>

        </section>

    </q-page>
</template>

<script>
import { childrenDebug } from '../router/routes'
import {
    // useFind,
    // useGet,
    makeFindMixin
} from 'feathers-vuex'
import { mapBind } from '../store/mapBind.js'
import langSelect from 'components/langSelect'
import {
    importAll,
    removeAll,
    serverExportToCSV,
    serverSystemAction,
    gitPull
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
            childrenDebug,
            databaseManagementOptionsShow: false,
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
        serverSystemAction: serverSystemAction,
        gitPull: gitPull
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
        langSelect
    },
    name: 'PageSettings'
}
</script>
