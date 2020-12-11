<template>
    <q-page class="">
        <!-- <debugSection label="cropSelected" :obj="cropSelected"/> -->
        <debugSection label="placeSelected" :obj="placeSelected"/>
        <!-- <debugSection label="place" :obj="place"/> -->
        <btn-toggle-grid
            v-model="placeSelected"
            :options="place"
            active-class="bg-orange"
            push
            rounded
            stack
            :size="btnSizeUnit"
            :space="btnSpaceUnit"
        />
</q-page>
</template>

<script>
// import { makeFindMixin } from 'feathers-vuex'
import { mapBind } from '../store/mapBind.js'
import DebugSection from 'components/debugSection'
import BtnToggleGrid from 'components/BtnToggleGrid.vue'

export default {
    name: 'PageSelectPlace',
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
            console.log('crop', crop)
            console.log('crop.places', crop.places)
            if (crop) {
                result = crop.placesList()
            }
            return result
        }
    },
    components: {
        BtnToggleGrid,
        DebugSection
    }
}

</script>
