<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <h1>List all db things</h1>
        <debugSection label="serial" :obj="serial"/>
        <q-btn
            v-ripple
            label="import crate from file"
            icon="mdi-database-export"
            @click="serverImport('crate')"
        />
        <debugSection label="crate" :obj="crate"/>
        <q-btn
            v-ripple
            label="import cropFilter from file"
            icon="mdi-database-export"
            @click="serverImport('crop-filter')"
        />
        <debugSection label="cropFilter" :obj="cropFilter"/>
        <q-btn
            v-ripple
            label="import crop from file"
            icon="mdi-database-export"
            @click="serverImport('crop')"
        />
        <debugSection label="crop" :obj="crop"/>
    </q-page>
</template>

<script>
import DebugSection from 'components/debugSection'
// import {
//     // mapState,
//     // mapGetters,
//     mapActions
// } from 'vuex'
import {
    // useFind,
    // useGet,
    makeFindMixin
} from 'feathers-vuex'

export default {
    data () {
        return {
        }
    },
    components: { DebugSection },
    mixins: [
        makeFindMixin({ service: 'crate' }),
        makeFindMixin({ service: 'crop' }),
        makeFindMixin({ service: 'crop-filter' }),
        makeFindMixin({ service: 'serial' })
    ],
    computed: {
        serialParams () {
            return { query: {} }
        },
        crateParams () {
            return { query: {} }
        },
        cropFilterParams () {
            return { query: {} }
        },
        cropParams () {
            return { query: {} }
        }
    },
    methods: {
        serverImport: function (servicePath) {
            console.group('serverImport')
            this.$FeathersVuex.api.Management.serverImport(servicePath)
                .then(response => {
                    console.log('response', response)
                }).catch(err => {
                    console.error('err', err)
                })
            console.groupEnd()
        }
    },
    name: 'PageDevList'
}
</script>
