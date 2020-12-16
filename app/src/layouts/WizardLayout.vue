<template>
    <q-layout view="lHh Lpr lFf">
        <q-drawer
            v-model="leftDrawerOpen"
            show-if-above
            bordered
            :width="180"
        >
            <EssentialNavigation />
            <q-list>
                <EssentialLink
                    v-for="item in childrenWizard"
                    :key="item.title"
                    v-bind="item"
                />
                <EssentialLink
                    v-for="item in childrenDev"
                    :key="item.title"
                    v-bind="item"
                />
            </q-list>
        </q-drawer>
        <q-page-container>
            <router-view />
            <!-- <transition name="fade" :duration="5000">
                <router-view />
            </transition> -->
        </q-page-container>
    </q-layout>
</template>

<script>
import EssentialLink from 'components/EssentialLink.vue'
import EssentialNavigation from 'components/EssentialNavigation.vue'
import { childrenWizard, childrenDev } from '../router/routes'

export default {
    name: 'WizardLayout',
    components: { EssentialNavigation, EssentialLink },
    data () {
        return {
            leftDrawerOpen: false,
            childrenDev: childrenDev,
            childrenWizard: childrenWizard
        }
    },
    created () {
        // console.log('this', this)
    }
}
</script>
