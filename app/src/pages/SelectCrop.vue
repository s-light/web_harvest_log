<template>
    <q-page class="">
        <!-- <debugSection label="crop_selected" :obj="cropSelected"/> -->
        <!-- <debugSection label="crop" :obj="crop"/> -->
        <!-- <debugSection label="btnSizeUnit" :obj="btnSizeUnit"/> -->
        <btn-toggle-grid
            v-model="cropSelected"
            :options="crop"
            active-class="bg-orange"
            push
            rounded
            stack
            :size="btnSizeUnit"
            fontSize="2em"
            :space="btnSpaceUnit"
            @click="next"
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
            'cropSelected'
        ]),
        btnSizeUnit () {
            return this.btnSize + 'mm'
        },
        btnSpaceUnit () {
            return this.btnSpace + 'mm'
        },
        cropParams () {
            return { query: {} }
        }
    },
    mixins: [
        makeFindMixin({ service: 'crop' })
    ],
    components: {
        // DebugSection,
        BtnToggleGrid
    }
}

</script>
