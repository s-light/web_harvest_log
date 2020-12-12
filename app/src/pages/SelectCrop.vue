<template>
    <q-page class="fit">
        <!-- <debugSection label="crop_selected" :obj="cropSelected"/> -->
        <!-- <debugSection label="crop" :obj="crop"/> -->
        <!-- <debugSection label="btnSizeUnit" :obj="btnSizeUnit"/> -->
        <section class="row no-wrap fit">
            <btn-toggle-grid
                style="flex:column"
                vertical
                v-model="cropFilterSelected"
                :options="cropFilter"
                active-class="bg-orange"
                push
                rounded
                stack
                :size="btnSize/2 + 'mm'"
                fontSize="2em"
                :space="btnSpace/2 + 'mm'"
            />
            <btn-toggle-grid
                class="col-grow"
                style="flex-shrink:1;"
                v-model="cropSelected"
                :options="crop"
                active-class="bg-orange"
                push
                rounded
                stack
                :size="btnSize + 'mm'"
                fontSize="2em"
                :space="btnSpace + 'mm'"
                @click="next"
            />
        </section>
</q-page>
</template>

<script>
// import {
//     // mapState,
//     // mapGetters,
//     // mapActions
// } from 'vuex'
import {
    // useFind,
    // useGet,
    makeFindMixin
} from 'feathers-vuex'
import { mapBind } from '../store/mapBind.js'
// import DebugSection from 'components/debugSection'
import BtnToggleGrid from 'components/BtnToggleGrid.vue'

export default {
    name: 'PageSelectCrop',
    data () {
        return {
            test: 'car'
        }
    },
    filters: {
    },
    methods: {
        next: function () {
            if (this.cropSelected && this.cropSelected.placesCount() > 1) {
                this.$router.push('select_place')
            } else {
                this.$router.push('save_harvest')
            }
        }
    },
    computed: {
        ...mapBind('localconfig', [
            'btnSize',
            'btnSpace',
            'cropSelected',
            'cropFilterSelected'
        ]),
        btnSizeUnit () {
            return this.btnSize + 'mm'
        },
        btnSpaceUnit () {
            return this.btnSpace + 'mm'
        },
        cropParams () {
            return { query: this.cropFilterSelected.queryFixed }
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
    mixins: [
        makeFindMixin({ service: 'crop' }),
        makeFindMixin({ service: 'crop-filter' })
    ],
    components: {
        // DebugSection,
        BtnToggleGrid
    }
}

</script>
