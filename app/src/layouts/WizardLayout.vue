<template>
    <!-- <q-layout view="lHh Lpr lFf" class="fit row no-wrap item-stretch content-stretch"> -->
    <q-layout view="lHh Lpr lFf">
        <q-drawer
            show-if-above
            bordered
            elevated
            :width="220"
        >
        <!-- :width="btnSpace * 50" -->
        <!-- <nav
            class="col-auto column no-wrap justify-start item-stretch content-stretch "
            :style="{'overflow-y':'auto', 'max-height':'100vh', 'border-right': 'solid', 'max-width':btnSize*1.5 + 'mm'}"
        > -->
            <EssentialNavigation class="essential-navigation"/>
            <section class="my-btn-group column no-wrap justify-evenly item-stretch content-stretch">
                <BtnSelectedRoute
                    :item="crateSelected"
                    routeTarget="select_crate"
                    :size="btnSize + 'mm'"
                    :space="btnSpace + 'mm'"
                    placeholderIcon="aspect_ratio"
                    :textPrepand="$t('crate') "
                />
                <BtnSelectedRoute
                    :item="cropSelected"
                    routeTarget="select_crop"
                    :size="btnSize + 'mm'"
                    :space="btnSpace + 'mm'"
                    placeholderIcon="local_florist"
                    :textPrepand="$t('crop') "
                />
                <BtnSelectedRoute
                    :item="placeSelected"
                    routeTarget="select_place"
                    :size="btnSize/2 + 'mm'"
                    :space="btnSpace + 'mm'"
                    placeholderIcon="place"
                    :textPrepand="$t('place') "
                />
                <BtnSelectedRoute
                    item="{}"
                    routeTarget="save_harvest"
                    :size="btnSize/2 + 'mm'"
                    :space="btnSpace + 'mm'"
                    placeholderIcon="mdi-database-plus"
                    :textPrepand="$t('save')"
                />
            </section>
            <q-list v-if="devMode">
                <!-- <EssentialLink
                    v-for="item in childrenWizard"
                    :key="item.title"
                    v-bind="item"
                /> -->
                <EssentialLink
                    v-for="item in childrenDev"
                    :key="item.title"
                    v-bind="item"
                />
            </q-list>
        <!-- </nav> -->
        </q-drawer>
        <!-- <q-page-container style="overflow-y:auto; max-height:100vh; flex: 1 1 auto;"> -->
        <q-page-container>
            <router-view />
            <!-- <transition name="fade" :duration="5000">
                <router-view />
            </transition> -->
        </q-page-container>
    </q-layout>
</template>

<script>
import { mapBind } from '../store/mapBind.js'
import EssentialLink from 'components/EssentialLink.vue'
import EssentialNavigation from 'components/EssentialNavigation.vue'
import BtnSelectedRoute from 'components/BtnSelectedRoute.vue'
import { childrenWizard, childrenDev } from '../router/routes'

export default {
    name: 'WizardLayout',
    components: {
        EssentialNavigation,
        EssentialLink,
        BtnSelectedRoute
    },
    data () {
        return {
            leftDrawerOpen: false,
            childrenDev: childrenDev,
            childrenWizard: childrenWizard
        }
    },
    computed: {
        saveHarvest: function () {
            return {
                text: 'Sun',
                icon: 'mdi-white-balance-sunny',
                image: ''
            }
        },
        ...mapBind('localconfig', [
            'btnSize',
            'btnSpace',
            'crateSelected',
            'cropSelected',
            'placeSelected',
            'devMode'
        ])
    },
    created () {
        // console.log('this', this)
    }
}
</script>

<style >
.q-drawer__content.fit.scroll {
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: flex-start;
    align-content: stretch;
    align-items: stretch;
}

.q-drawer__content.fit.scroll .essential-navigation{
    /* nothing special */
}

.q-drawer__content.fit.scroll .my-btn-group{
    /* fill available space */
    flex: 1 1 auto;
}
</style>
