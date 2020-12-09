<template>
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <h1>Dev1</h1>
        <debugSection label="crop" :obj="crop"/>
        <!-- <debugSection label="serialDevice" :obj="serialDevice"/> -->
        <section>
            <q-btn
                v-ripple
                label="load from server"
                icon="sync"
                @click="globalConfigLoadFromServer()"
            />
        </section>
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
            // serialDeviceInt: '/dev/ttyUSB42'
        }
    },
    components: { DebugSection },
    mixins: [
        makeFindMixin({ service: 'crop' })
    ],
    computed: {
        cropParams () {
            return { query: {} }
        }
    },
    methods: {
        globalConfigLoadFromServer: function () {
            console.log('TODO: implement load from server')
            this.$axios.get('/app_config/crops/crop.json')
                .then((response) => {
                    // this.data = response.data
                    console.log('response.data', response.data)
                    this.$q.notify({
                        color: 'info',
                        message: 'Loaded config from server. Processing now.',
                        icon: 'info'
                    })

                    this.$q.notify({
                        color: 'positive',
                        message: 'done.',
                        icon: 'info'
                    })
                })
                .catch(() => {
                    this.$q.notify({
                        color: 'negative',
                        message: 'Loading failed',
                        icon: 'report_problem'
                    })
                })
        }
    },
    // created () {
    //     // Find all appointments. We'll use the getters to separate them.
    //     // this.findGC({ query: {} })
    // },
    filters: {
    },
    name: 'PageDev1'
}
</script>
