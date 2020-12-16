<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <section
            class="q-mt-md"
            style="min-width: 50vw"
        >
            <q-input
                filled
                label="Weight"
                hint="Mask: #.##"
                v-model="currentWeight"
                @keyup.enter="save()"
            >
                <template #append>
                    {{ scaleUnit }}
                </template>
            </q-input>
        </section>
        <section>
            <q-btn
                round
                v-ripple
                dense
                flat
                icon="send"
                @click="save()"
            />
        </section>
        <section style="font-size:0.8em;">
            <debugSection label="crateSelected" :obj="crateSelected"/>
            <debugSection label="cropSelected" :obj="cropSelected"/>
            <debugSection label="placeSelected" :obj="placeSelected"/>
        </section>
    </q-page>
</template>

<script>
// import { makeFindMixin } from 'feathers-vuex'
import { mapBind } from '../store/mapBind.js'
import DebugSection from 'components/debugSection'
// import BtnToggleGrid from 'components/BtnToggleGrid.vue'

export default {
    name: 'PageSaveHarvest',
    data () {
        return {
            // totalWeight: '-'
        }
    },
    methods: {
        save: function () {
            console.group('save harvest log entry')
            console.log('crateSelected', this.crateSelected)
            console.log('cropSelected', this.cropSelected)
            console.log('placeSelected', this.placeSelected)
            console.log('totalWeight', this.totalWeight)
            console.log('scaleStable', this.scaleStable)
            console.log('scaleUnit', this.scaleUnit)
            console.groupEnd()
        }
    },
    computed: {
        currentWeight: function () {
            let result = this.totalWeight
            if (
                !isNaN(result) &&
                this.crateSelected &&
                this.crateSelected.tareWeight
            ) {
                result -= this.crateSelected.tareWeight
            }
            return result
        },
        ...mapBind('localconfig', [
            'btnSize',
            'btnSpace',
            'crateSelected',
            'cropSelected',
            'placeSelected',
            'totalWeight',
            'scaleStable',
            'scaleUnit'
        ])
        // ]),
        // crateParams () {
        //     return { query: {} }
        // }
    },
    mixins: [
        // makeFindMixin({ service: 'crate' })
    ],
    filters: {
    },
    components: {
        // BtnToggleGrid,
        DebugSection
    }
}
</script>
