<template>
    <!-- <q-page class="flex flex-center"> -->
    <q-page class="fit column no-wrap justify-center items-center content-center">
        <section class="q-pa-md row justify-center">
            <h1>Web Harvest Log</h1>
        </section>
        <section>
            <!-- <q-btn
                v-ripple
                label="open this in a new minimal window"
                icon="mdi-dock-window"
                @click="openInNewWindow()"
            /> -->
            <q-btn
                v-ripple
                label="shutdown system"
                icon="mdi-dock-window"
                @click="serverSystemAction('shutdown')"
            />
        </section>
    </q-page>
</template>

<script>
import {
    serverSystemAction
} from '../management_func.js'

export default {
    data () {
        return {
            url: 'https://github.com/s-light/quasar_with_featherjs/',
            windowObjectReference: null
        }
    },
    methods: {
        serverSystemAction: serverSystemAction
        // openInNewWindow () {
        //     // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
        //     if (this.windowObjectReference == null || this.windowObjectReference.closed) {
        //         this.windowObjectReference = window.open(
        //             window.location,
        //             'Harvest Log',
        //             `
        //                 resizable=yes,
        //                 scrollbars=yes,
        //                 menubar=no,
        //                 toolbar=no,
        //                 locationr=no,
        //                 status=no
        //             `)
        //     } else {
        //         this.windowObjectReference.focus()
        //     };
        // }
    },
    name: 'PageIndex'
}
</script>
