<template>
    <q-page class="">
        <!-- <debugSection label="crateSelected" :obj="crateSelected"/> -->
        <btn-toggle-grid
            v-model="crateSelected"
            :options="crate"
            active-class="bg-orange"
            push
            rounded
            stack
            :size="btnSizeUnit"
            :space="btnSpaceUnit"
            to="/selecte_crop"
            exact
        />
</q-page>
</template>

<script>
import { makeFindMixin } from 'feathers-vuex'
import { mapBind } from '../store/mapBind.js'
// import DebugSection from 'components/debugSection'
import BtnToggleGrid from 'components/BtnToggleGrid.vue'

export default {
    name: 'PageSelectCrate',
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
            'crateSelected'
        ]),
        btnSizeUnit () {
            return this.btnSize + 'mm'
        },
        btnSpaceUnit () {
            return this.btnSpace + 'mm'
        },
        crateParams () {
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
        makeFindMixin({ service: 'crate' })
    ],
    components: {
        // DebugSection,
        BtnToggleGrid
    }
}

</script>
