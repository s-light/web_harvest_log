<template>
    <q-page class="fit">
        <section class="fit column no-wrap justify-between items-stretch content-stretch">
            <div class="q-mt-md">
                <!-- <div id="weight_display" class="">
                    total weight: {{ totalWeight | formatWeight(lang) }} {{ scaleUnit }}
                </div> -->
                <!-- '{{ lang }}' -->
                <!-- hint="Mask: #.##" -->
                <!-- input-style="height: 50px;" -->
                <q-input
                    v-model="currentWeight"
                    @keyup.enter="save()"
                    class="weight_display"
                    input-class="text-right"
                    filled
                    hide-bottom-space
                    item-aligned
                    label-slot
                >
                <!-- debounce="500" -->
                    <template v-slot:label>
                        <div class="row justify-between items-start content-start" style="font-size:2em; line-height:2em">
                            <div style="">
                                {{ $t('weight') }}
                            </div>
                            <div style="font-size: 0.8em">
                                {{ totalWeight | formatWeight(lang) }} {{ scaleUnit }} {{ $t('scale') }} -
                                Tare: {{ crateSelected.tareWeight | formatWeight(lang) }} {{ scaleUnit }}
                            </div>
                        </div>
                    </template>
                    <template #append>
                        {{ scaleUnit }}
                    </template>
                </q-input>
            </div>
            <section class="row justify-between items-stretch content-stretch">
                <div style="flex: 1 1 auto; padding:1em;">
                    <q-list>
                        <q-item
                            v-for="item in harvest"
                            :key="item._id"
                        >
                            <q-item-section avatar>
                                <q-avatar rounded>
                                    <img :src="imageBaseURL + item.crop.image">
                                </q-avatar>
                            </q-item-section>
                            <q-item-section>
                                {{ item.crop.text }} <br>
                                {{ item.place.text }} |
                                {{item.weight}} {{item.scaleUnit}}
                                <!-- {{ item.createdAt | formatdate() }} -->
                                {{ item.createdAt | toLocal(lang) }}
                            </q-item-section>
                        </q-item>
                    </q-list>
                    <!-- <debugSection label="harvest" :obj="harvest"/> -->
                </div>
                <q-btn
                    :label="$t('save')"
                    :disable="!scaleStable"
                    @click="save()"
                    icon="mdi-database-plus"
                    :ripple="{ early: true, color: 'orange'}"
                    stack
                    class=""
                    style="width:80mm; height:80mm; flex: 0 1 auto; margin-right: 0.2em;"
                    size="20mm"
                />
                <!-- :style="btnStyle" -->
                <!-- size="30mm" -->
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
        </section>
        <!-- <section style="font-size:0.8em;">
            <debugSection label="crateSelected" :obj="crateSelected"/>
            <debugSection label="cropSelected" :obj="cropSelected"/>
            <debugSection label="placeSelected" :obj="placeSelected"/>
        </section> -->
    </q-page>
</template>

<script>
import { date } from 'quasar'
import { makeFindMixin } from 'feathers-vuex'
import { mapBind } from '../store/mapBind.js'
// import DebugSection from 'components/debugSection'
// import BtnToggleGrid from 'components/BtnToggleGrid.vue'

export default {
    name: 'PageSaveHarvest',
    data () {
        return {
            imageBaseURL: 'http://localhost:3030/api/'
        }
    },
    methods: {
        save: function () {
            console.group('save harvest log entry')
            // console.log('crateSelected', this.crateSelected)
            // console.log('cropSelected', this.cropSelected)
            // console.log('placeSelected', this.placeSelected)
            // console.log('totalWeight', this.totalWeight)
            // console.log('currentWeight', this.currentWeight)
            // console.log('scaleStable', this.scaleStable)
            // console.log('scaleUnit', this.scaleUnit)
            // check if all requirements are fine
            if (
                this.crateSelected._id &&
                this.cropSelected._id &&
                this.placeSelected._id &&
                this.scaleStable
            ) {
                const Harvest = this.$FeathersVuex.api.Harvest
                const entry = new Harvest({
                    crate: this.crateSelected,
                    crop: this.cropSelected,
                    place: this.placeSelected,
                    crateTareWeight: this.crateSelected.tareWeight,
                    cropText: this.cropSelected.text,
                    placeText: this.placeSelected.text,
                    weight: this.currentWeight,
                    scaleUnit: this.scaleUnit,
                    createdAt: new Date()
                })
                entry.save()
            } else {
                this.$q.notify({
                    color: 'negative',
                    message: 'Please Check that all requirements are filled.',
                    icon: 'report_problem'
                })
            }

            console.groupEnd()
        }
    },
    computed: {
        currentWeight: function () {
            let result = this.totalWeight
            if (result && !isNaN(result)) {
                if (
                    this.crateSelected &&
                    this.crateSelected.tareWeight
                ) {
                    result -= this.crateSelected.tareWeight
                    result = result.toFixed(2)
                }
            } else {
                result = 0
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
        harvestParams () {
            return {
                query: {
                    $limit: 5,
                    $sort: {
                        createdAt: -1
                    }
                }
            }
        },
        // btnStyle: function () {
        //     return {
        //         width: '100%',
        //         height: '100%'
        //     }
        // },
        lang: function () {
            // return this.$i18n.locale
            let result = this.$q.lang.isoName
            if (!result) {
                result = 'de'
            }
            return result
        }
    },
    mixins: [
        makeFindMixin({ service: 'harvest' })
    ],
    filters: {
        formatWeight (value, lang = 'de') {
            // console.log('value', value)
            // console.log('lang', lang)
            // return value.toLocaleString(
            const result = value.toLocaleString(
                lang,
                {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2
                }
            )
            // console.log('result', result)
            return result
        },
        formatdate (value, format = 'HH:mm:ss DD.MM.YYYY') {
            // 'YYYY-MM-DDTHH:mm:ss.SSSZ'
            return date.formatDate(new Date(value), format)
        },
        toLocal (value, lang = 'de') {
            return new Date(value).toLocaleString(lang)
        }
    },
    components: {
        // BtnToggleGrid,
        // DebugSection
    }
}
</script>

<style scoped>
.weight_display {
    font-size: 12em;
}
/* all other styles are in the global space - otherwise they do not work! */
</style>
