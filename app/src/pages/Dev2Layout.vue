<template>
    <q-page class="">
        <q-btn-toggle
            v-model="btnVertical"
            no-caps
            rounded
            unelevated
            toggle-color="primary"
            color="white"
            text-color="primary"
            :options="[
              {label: 'Vertical', value: true},
              {label: 'Horicontal', value: false}
            ]"
        />
        <btn-toggle-grid
            :vertical="btnVertical"
            v-model="cropFilterSelected"
            :options="cropFilter"
            active-class="bg-orange"
            push
            rounded
            stack
            :size="'30mm'"
            :space="btnSpace + 'mm'"
        />
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
    name: 'PageDev2_Layout',
    data () {
        return {
            btnVertical: false
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
