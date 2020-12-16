<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <section class="q-mt-md">
            <div id="weight_display" class="">
                total weight: {{ totalWeight | formatWeight }} {{ scaleUnit }}
                {{ currentWeight | formatWeight }} {{ scaleUnit }}
            </div>
            <q-input
                filled
                label="Weight"
                hint="Mask: #.##"
                v-model="currentWeight"
                @keyup.enter="save()"
                size="2em"
            >
                <template #append>
                    {{ scaleUnit }}
                </template>
            </q-input>
        </section>
        <section>
            <q-btn
                v-ripple
                :label="$t('save')"
                icon="mdi-database-plus"
                size="30mm"
                stack
                :disable="scaleStable"
                @click="save()"
            />
            <!-- icons:
            send
            mdi-content-save
            mdi-content-save-move
            mdi-database-check
            mdi-database-plus
            mdi-database-arrow-down
            mdi-check-bold
            -->

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
                result = result.toFixed(2)
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
        ]),
        // ]),
        // crateParams () {
        //     return { query: {} }
        // }
        lang: function () {
            // return this.$i18n.locale
            return this.$q.lang.isoName
        }
    },
    mixins: [
        // makeFindMixin({ service: 'crate' })
    ],
    filters: {
        formatWeight (value) {
            return value.toLocaleString(
                'de',
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            )
            // const weight = value.toLocaleString(
            //     'de',
            //     {
            //         minimumFractionDigits: 2,
            //         maximumFractionDigits: 2
            //     }
            // )
            // return `${weight} ${this.scaleUnit}`
        }
    },
    components: {
        // BtnToggleGrid,
        DebugSection
    }
}
</script>

<style scoped>
/* #weight_display {
    background-color:
} */
</style>
