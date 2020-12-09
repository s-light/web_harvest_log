<template>
    <q-layout view="lHh Lpr lFf">
        <q-btn
            flat
            dense
            round
            icon="menu"
            aria-label="Menu"
            @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            bordered
        >
            <EssentialNavigation />
            <q-list>
                <EssentialLink
                    v-for="link in childrenWizard"
                    :key="link.title"
                    v-bind="link"
                />
                <EssentialLink
                    v-for="link in childrenDev"
                    :key="link.title"
                    v-bind="link"
                />
            </q-list>
        </q-drawer>
        <q-page-container>
            <router-view />
        </q-page-container>
    </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import EssentialNavigation from 'components/EssentialNavigation.vue'
import { childrenWizard, childrenDev } from '../router/routes'

export default {
    name: 'MainLayout',
    components: { EssentialNavigation, EssentialLink },
    data () {
        return {
            leftDrawerOpen: false,
            childrenWizard: childrenWizard,
            childrenDev: childrenDev
        }
    }
}
</script>
