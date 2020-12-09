<template>
    <q-item
        clickable
        v-ripple
        :to="path"
        exact
    >
        <q-item-section avatar>
            <q-icon :name="icon" />
        </q-item-section>
        <q-item-section v-if="!hideText">
            <q-item-label>{{ title }}</q-item-label>
            <q-item-label caption>
                {{ caption }}
            </q-item-label>
        </q-item-section>
    </q-item>
    <!-- <q-item
        clickable
        tag="a"
        :target="target"
        :href="link"
    >
    </q-item> -->
</template>

<script>
export default {
    name: 'EssentialLink',
    props: {
        hideText: {
            type: Boolean,
            default: false
        },
        title: {
            type: String,
            default: ''
        },
        caption: {
            type: String,
            default: ''
        },
        path: {
            type: String,
            default: '#'
        },
        icon: {
            type: String,
            default: ''
        },
        target: {
            type: String,
            default: '_self'
        }
    }
}
</script>
