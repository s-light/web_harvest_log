<template>
    <q-btn-group spread>
        <!-- tag="q-btn" -->
        <!-- v-slot="{ href, route, navigate, isActive, isExactActive }" -->
        <!-- activeClass="q-item,q-router-link- -active" -->
        <router-link
            v-for="item in childrenCommon"
            :key="item.title"
            :to="item.path"
            exact
            v-slot="{ href, route, navigate, isExactActive}"
        >
            <template>
                <q-btn
                    clickable
                    v-ripple
                    :icon="item.icon"
                    @click="navigate"
                    :class="isExactActive ? 'q-item q-router-link--active' : 'q-item'"
                />
            </template>
        </router-link>
    </q-btn-group>
</template>

<script>
import { childrenCommon } from '../router/routes'

export default {
    name: 'EssentialNavigation',
    data () {
        return {
            childrenCommon: childrenCommon
        }
    }
}
</script>
