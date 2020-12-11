<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <section>
            <h2>Serial Settings</h2>
            <!-- :disable="connected" -->
            <q-select
                rounded
                outlined
                class="q-mr-md"
                style="min-width:12em; background: transparent"
                label="Device"
                v-model="deviceSelected"
                :option-label="(item) => item.comName"
                :option-value="(item) => item"
                :options="deviceList"
            >
                <template v-slot:option="scope">
                    <q-item
                        v-bind="scope.itemProps"
                        v-on="scope.itemEvents"
                    >
                        <q-item-section>
                            <q-item-label>
                                {{ scope.opt.comName }}
                            </q-item-label>
                            <q-item-label caption>
                                {{ scope.opt.pnpId }}
                            </q-item-label>
                            <q-item-label caption>
                                {{ scope.opt.manufacturer }}
                            </q-item-label>
                            <q-item-label caption>
                                vendorId:{{ scope.opt.vendorId }}
                            </q-item-label>
                            <q-item-label caption>
                                productId:{{ scope.opt.productId }}
                            </q-item-label>
                            <q-item-label caption>
                                serialNumber:{{ scope.opt.serialNumber }}
                            </q-item-label>
                        </q-item-section>
                    </q-item>
                </template>
                <template v-slot:no-option>
                    <q-item>
                        <q-item-section>
                            No Devices
                        </q-item-section>
                    </q-item>
                </template>
                <template v-slot:append>
                    <!-- :disable="connected"
                    :loading="deviceSearching" -->
                    <q-btn
                        flat
                        round
                        dense
                        hint="search devices"
                        icon="refresh"
                        @click="updateSerialDeviceList()"
                    >
                        <template v-slot:loading>
                            <q-spinner-radio />
                        </template>
                    </q-btn>
                </template>
            </q-select>

            <!-- :loading="deviceConnecting" -->
            <q-btn
                rounded
                :icon="connected ? 'phonelink_off' : 'phonelink'"
                :style="{opacity: (deviceSelected ? 'inherit' : '0.05')}"
                @click="connect()"
                :label="connected ? 'disconnect' : 'connect'"
                :disable="!deviceSelected"
            >
                <template v-slot:loading>
                    <q-spinner-gears />
                </template>
                <template v-slot:after>
                    <q-icon
                        name="close"
                    />
                </template>
            </q-btn>
            <debugSection label="list" :obj="list"/>
            <debugSection label="port" :obj="port"/>
            <debugSection label="baudRate" :obj="baudRate"/>
            <debugSection label="serial" :obj="serial"/>
        </section>
    </q-page>
</template>

<script>
import {
    // useFind,
    // useGet,
    makeFindMixin
} from 'feathers-vuex'
import { mapBindIDItems } from '../store/mapBindIDItems.js'
import DebugSection from 'components/debugSection'

const dummyResponder = {
    vendorId: -1,
    productId: -1,
    comName: '/dummyResponder/0',
    pnpId: -1,
    locationId: -1,
    serialNumber: '42',
    manufacturer: 's-light.eu',
    product: 'dummyResponder',
    release: undefined,
    interface: undefined,
    usagePage: undefined,
    usage: undefined
}

export default {
    data () {
        return {
            deviceSelected: {},
            deviceList: [dummyResponder]
        }
    },
    components: { DebugSection },
    mixins: [
        makeFindMixin({ service: 'serial' })
    ],
    computed: {
        serialParams () {
            return { query: {} }
        },
        ...mapBindIDItems('serial', ['list', 'port', 'baudRate', 'connected'])
    },
    methods: {
        updateSerialDeviceList: function () {
            console.group('serverExportToCSV')
            const servicePath = 'serial'
            this.$q.notify({
                color: 'info',
                message: `update ${servicePath} device list. Processing now.`,
                icon: 'info'
            })
            this.$FeathersVuex.api.Management.updateSerialDeviceList()
                .then(response => {
                    console.log('updateSerialDeviceList: ', response)
                    this.$q.notify({
                        color: 'positive',
                        message: `${servicePath} done.`,
                        icon: 'info'
                    })
                }).catch(error => {
                    console.error('updateSerialDeviceList:', error)
                    this.$q.notify({
                        color: 'negative',
                        message: `${servicePath} update failed.`,
                        icon: 'report_problem'
                    })
                })
            console.groupEnd()
        },
        connect: function () {
            console.log('deviceSelected', this.deviceSelected)
        }
    },
    mounted: function () {
        // console.group('mounted..')
        this.deviceSelected = this.deviceList[0]
        // console.groupEnd()
    },
    name: 'SettingsSerial'
}
</script>
