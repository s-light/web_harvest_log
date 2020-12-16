<template>
    <q-page class="">
        <!-- <debugSection label="cropSelected" :obj="cropSelected"/> -->
        <!-- <debugSection label="placeSelected" :obj="placeSelected"/> -->
        <!-- <debugSection label="place" :obj="place"/> -->
        <btn-toggle-grid
            v-model="placeSelected"
            :options="place"
            active-class="bg-orange"
            push
            rounded
            stack
            :size="btnSize/8 + 'mm'"
            fontSize="12em"
            :space="2 + 'mm'"
            @click="next"
        />
        <!-- :space="btnSpace + 'mm'" -->
</q-page>
</template>

<script>
// import { makeFindMixin } from 'feathers-vuex'
import { mapBind } from '../store/mapBind.js'
// import DebugSection from 'components/debugSection'
import BtnToggleGrid from 'components/BtnToggleGrid.vue'

export default {
    name: 'PageSelectPlace',
    data () {
        return {
        }
    },
    methods: {
        next: function () {
            setTimeout(() => {
                this.$router.push('save_harvest')
            }, 200)
        }
    },
    filters: {
    },
    computed: {
        ...mapBind('localconfig', [
            'btnSize',
            'btnSpace',
            'cropSelected',
            'placeSelected'
        ]),
        btnSizeUnit () {
            return this.btnSize + 'mm'
        },
        btnSpaceUnit () {
            return this.btnSpace + 'mm'
        },
        place () {
            let result = []
            const crop = this.cropSelected
            // console.log('crop', crop)
            if (crop && crop.places) {
                // console.log('crop.places', crop.places)
                result = crop.placesList()
            }
            return result
        }
    },
    components: {
        // DebugSection,
        BtnToggleGrid
    }
}

</script>
