<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <debugSection label="crateSelected" :obj="crateSelected"/>
        <debugSection label="cropSelected" :obj="cropSelected"/>
        <debugSection label="placeSelected" :obj="placeSelected"/>
        <section
            class="q-ma-md q-pa-sm"
        >
            <h1>{{ current_weight }}</h1>
        </section>

        <section
            class="q-mt-md"
            style="min-width: 50vw"
        >
            <q-input
                filled
                label="Send Message"
                v-model="messagaeToSend"
                @keyup.enter="messageSend()"
            >
                <template #append>
                    <q-icon
                        :style="{opacity: (messagaeToSend !== '' ? 'inherit' : '0.1')}"
                        name="close"
                        @click="messagaeToSend = ''"
                        class="cursor-pointer"
                    />
                </template>
                <template #after>
                    <q-btn
                        round
                        v-ripple
                        dense
                        flat
                        icon="send"
                        @click="messageSend()"
                    />
                </template>
            </q-input>
        </section>
    </q-page>
</template>

<script>
import { makeFindMixin } from 'feathers-vuex'
import { mapBind } from '../store/mapBind.js'
import DebugSection from 'components/debugSection'
// import BtnToggleGrid from 'components/BtnToggleGrid.vue'

export default {
    name: 'PageSaveHarvest',
    data () {
        return {
        }
    },
    filters: {
    },
    computed: {
        ...mapBind('localconfig', [
            'btnSize',
            'btnSpace',
            'crateSelected'
        ]),
        btnSizeUnit () {
            return this.btnSize + 'mm'
        },
        btnSpaceUnit () {
            return this.btnSpace + 'mm'
        },
        crateParams () {
            return { query: {} }
        }
    },
    mixins: [
        makeFindMixin({ service: 'crate' })
    ],
    components: {
        // BtnToggleGrid,
        DebugSection
    }
}
</script>
