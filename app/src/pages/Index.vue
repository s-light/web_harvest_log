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
                @click="shutdown()"
            />
        </section>
    </q-page>
</template>

<script>
export default {
    data () {
        return {
            url: 'https://github.com/s-light/quasar_with_featherjs/',
            windowObjectReference: null
        }
    },
    methods: {
        openInNewWindow () {
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
            if (this.windowObjectReference == null || this.windowObjectReference.closed) {
                this.windowObjectReference = window.open(
                    window.location,
                    'Harvest Log',
                    `
                        resizable=yes,
                        scrollbars=yes,
                        menubar=no,
                        toolbar=no,
                        locationr=no,
                        status=no
                    `)
            } else {
                this.windowObjectReference.focus()
            };
        },
        shutdown: function () {
            console.group('serverShutdown')
            this.$q.notify({
                color: 'info',
                message: 'shutting down server. Processing now.',
                icon: 'info'
            })
            this.$FeathersVuex.api.Management.serverShutdown('Management')
                .then(response => {
                    console.log('serverShutdown: ', response)
                    this.$q.notify({
                        color: 'positive',
                        message: 'shutdown initiated.',
                        icon: 'info'
                    })
                }).catch(error => {
                    console.error('serverShutdown:', error)
                    this.$q.notify({
                        color: 'negative',
                        message: 'shutdown failed.',
                        icon: 'report_problem'
                    })
                })
            console.groupEnd()
        }
    },
    name: 'PageIndex'
}
</script>
