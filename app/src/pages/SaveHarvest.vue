<template>
    <q-page class="fit">
        <section class="row no-wrap justify-evenly items-stretch content-stretch">
            <section class="column no-wrap justify-evenly items-stretch content-stretch">
                <div class="q-mt-md">
                    <!-- <div id="weight_display" class="">
                        total weight: {{ totalWeight | formatWeight(lang) }} {{ scaleUnit }}
                    </div> -->
                    <!--
                        '{{ lang }}'
                        hint="Mask: #.##"
                        input-style="height: 50px;"
                    -->
                    <q-input
                        v-model="currentWeight"
                        debounce="500"
                        @keyup.enter="save()"
                        class="weight_display"
                        input-class="text-right"
                        filled
                        hide-bottom-space
                        item-aligned
                        label-slot
                    >
                        <template v-slot:label>
                            <div
                                class="row justify-between items-start content-start"
                                style="font-size:2em; line-height:2em"
                            >
                                <div style="">
                                    {{ $t('weight') }}
                                </div>
                                <div style="font-size: 0.8em">
                                    {{ totalWeight | formatWeight(lang) }} {{ scaleUnit }} {{ $t('scale') }} -
                                    Tare: {{ crateSelected.tareWeight | formatWeight(lang) }} {{ scaleUnit }}
                                </div>
                            </div>
                        </template>
                        <template
                            #append
                            style="font-size:1em;"
                        >
                            {{ scaleUnit }}
                        </template>
                    </q-input>
                </div>

                <section
                    class="col-grow row no-wrap justify-evenly items-stretch content-stretch"
                >
                    <!--
                        :disable="!scaleStable"
                        style="width:90mm; height:90mm; flex: 0 1 auto; margin-right: 0.2em;"
                    -->
                    <q-btn
                        :label="$t('save')"
                        @click="save()"
                        icon="mdi-database-plus"
                        :ripple="{ early: true, color: 'orange'}"
                        stack
                        class="col"
                        style="min-width:50mm; min-height:50mm; margin: 0.2em;"
                        size="20mm"
                    />
                    <keypad
                        v-if="keypadVisible"
                        v-model="currentWeight"
                        class="col"
                        style="margin: 0.2em;"
                    />
                </section>
            </section>
            <!--
            -->
            <section
                class="row justify-between items-stretch content-stretch"
                style="min-width: 28em; overflowY: scroll; max-height: 100vh;"
            >
                <!-- <div style="flex: 1 1 auto; padding:1em;"> -->
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
                <!-- </div> -->
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
import { makeFindMixin } from 'feathers-vuex'
import { mapBind } from '../store/mapBind.js'
// import DebugSection from 'components/debugSection'
import keypad from 'components/keypad.vue'

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
            console.log('this.crateSelected._id', this.crateSelected._id)
            console.log('this.cropSelected._id', this.cropSelected._id)
            console.log('this.placeSelected._id', this.placeSelected._id)
            // check if all requirements are fine
            if (
                this.crateSelected._id &&
                this.cropSelected._id &&
                !isNaN(this.placeSelected._id)
                // this.placeSelected._id &&
                // this.scaleStable
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
        currentWeight: {
            // getter
            get: function () {
                let result = this.totalWeight
                if (result && !isNaN(result)) {
                    if (
                        this.crateSelected &&
                        this.crateSelected.tareWeight
                    ) {
                        result -= this.crateSelected.tareWeight
                        // result = result.toFixed(2)
                    }
                } else {
                    result = 0.0
                }
                // force float
                // result = result * 1.0
                // console.log('currentWeight.get result', result)
                result = this.$options.filters.formatWeight(result)
                // console.log('currentWeight.get result', result)
                return result
            },
            // setter
            set: function (newValue) {
                // console.log('currentWeight.set newValue', newValue)
                newValue = newValue.replace(',', '.')
                let result = parseFloat(newValue)
                // console.log('currentWeight.set result', result)
                if (
                    this.crateSelected &&
                    this.crateSelected.tareWeight
                ) {
                    result += this.crateSelected.tareWeight
                    result = result.toFixed(2)
                }
                // console.log('currentWeight.set result', result)
                this.totalWeight = result
            }
        },
        ...mapBind('localconfig', [
            'btnSize',
            'btnSpace',
            'keypadVisible',
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
                    $limit: 20,
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
    components: {
        keypad
        // DebugSection
    }
}
</script>

<style scoped>
.weight_display {
    font-size: 16em;
}
/* all other styles are in the global space - otherwise they do not work! */
</style>
