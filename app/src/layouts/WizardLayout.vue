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
                    v-for="item in childrenWizard"
                    :key="item.title"
                    v-bind="item"
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
import { childrenCommon, childrenWizard } from '../router/routes'

export default {
    name: 'MainLayout',
    components: { EssentialNavigation, EssentialLink },
    data () {
        return {
            leftDrawerOpen: false,
            childrenCommon: childrenCommon,
            childrenWizard: childrenWizard
        }
    },
    created () {
        // console.log('this', this)
    }
}
</script>
