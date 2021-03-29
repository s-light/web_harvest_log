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
        <section>
            {{ time | formatdate("HH:mm:ss") }}<br>
            {{ time | formatdate("DD.MM.YYYY") }}
        </section>
    </q-page>
</template>

<script>
import { date } from 'quasar'
import {
    serverSystemAction
} from '../management_func.js'

export default {
    data () {
        return {
            url: 'https://github.com/s-light/quasar_with_featherjs/',
            windowObjectReference: null,
            time: new Date()
        }
    },
    methods: {
        serverSystemAction: serverSystemAction,
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
        updateTime () {
            this.time = new Date()
        }
    },
    filters: {
        formatdate (value, format = 'HH:mm:ss DD.MM.YYYY') {
            // 'YYYY-MM-DDTHH:mm:ss.SSSZ'
            return date.formatDate(new Date(value), format)
        },
        toLocal (value, lang = 'de') {
            return new Date(value).toLocaleString(lang)
        }
    },
    mounted () {
        setInterval(this.updateTime, 1000)
    },
    name: 'PageIndex'
}
</script>
