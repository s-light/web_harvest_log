<template>
    <q-page class="fit">
        <!-- <debugSection label="crop" :obj="crop"/> -->
        <!-- <debugSection label="btnSizeUnit" :obj="btnSizeUnit"/> -->
        <section
            class="row no-wrap"
            :style="{
                maxHeight:'100vh',
            }"
        >
            <!-- <section>
                <debugSection label="cropFilterSelected" :obj="cropFilterSelected"/>
                <debugSection label="cropParams" :obj="cropParams"/>
                <debugSection label="xXcropParams" :obj="xXcropParams"/>
                <debugSection label="crop" :obj="crop" style="font-size:0.5em"/>
            </section> -->
            <btn-toggle-grid
                :style="{
                    flex:'column',
                    overflowY:'auto',
                    height:'100vh',
                    boxShadow:`
                        0 0 5px -6px hsla(0, 0%, 0%, 1.0),
                        0 0 10px 2px hsla(0, 0%, 0%, 0.5),
                        0 0 15px 6px hsla(0, 0%, 0%, 0.5)
                    `,
                    'background-color':'hsla(0, 0%, 100%, 0.1)',
                }"
                class="justify-start no-wrap col-auto"
                vertical
                v-model="cropFilterSelected"
                :options="cropFilter"
                active-class="bg-orange"
                push
                rounded
                stack
                :size="btnSize/2 + 'mm'"
                fontSize="1.2em"
                :space="0 + 'mm'"
            />
            <btn-toggle-grid
                class="col-grow justify-around"
                :style="{
                    flex:'column',
                    flexShrink:1,
                    overflowY:'auto',
                    maxHeight:'100vh',
                }"
                v-model="cropSelected"
                :options="crop"
                active-class="bg-orange"
                push
                rounded
                stack
                :size="btnSize + 'mm'"
                fontSize="1.5em"
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
        cropParams () {
            // default query = list all
            const result = {
                query: {
                    $sort: {
                        _id: 1
                    }
                }
            }
            const filter = this.cropFilterSelected
            if (filter && filter.getQueryFixed) {
                result.query = filter.getQueryFixed()
            }
            return result
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
