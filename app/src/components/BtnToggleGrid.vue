<template>
    <div :class="containerClassObject">
        <!-- style="
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: flex-start;
            align-content: stretch;
            align-items: center;
            " -->
        <!-- <div class="shadow-10">
            _id {{ _id }} <br>
            options {{ options }} <br>
            activeClass {{ activeClass }} <br>
        </div> -->
        <!--
            :title="$t(item._id)"
        -->
        <q-btn
            v-for="item in options"
            :key="item._id"
            @click="$emit('input', item); $emit('click', $event)"
            :class="item._id === value._id ? activeClass : ''"
            stack
            :title="item._id"
            :style="{ margin: space}"
        >
            <q-icon
                v-if="item.icon"
                :size="size"
                :name="item.icon"
            />
            <q-img
                v-else-if="item.image"
                :src="imageBaseURL + item.image"
                :style="{width: size, height: size, margin: '0.2em 0'}"
                contain
            />
            <div
                :style="{ 'font-size': fontSize, 'line-height':'100%' }"
            >
                <!-- {{ $t(item.text) }} -->
                {{ item.text }}
            </div>
        </q-btn>
    </div>
</template>

<script>
export default {
    name: 'BtnToggleGrid',
    data () {
        return {
        }
    },
    methods: {
        //
    },
    computed: {
        containerClassObject: function () {
            return [
                { column: this.vertical },
                { row: !this.vertical },
                'wrap',
                'justify-evenly',
                'content-start',
                'items-stretch'
            ]
        }
    },
    props: {
        value: {
            type: Object,
            required: false,
            default: () => { return undefined }
        },
        options: {
            type: Array,
            required: false,
            default: () => { return [] }
        },
        // key: {
        //     this does not work :-(
        //     as iam not aible to use this in the template..
        //     type: String,
        //     required: '_id'
        // },
        imageBaseURL: {
            type: String,
            required: false,
            default: 'http://localhost:3030/api/'
        },
        size: {
            type: String,
            required: false,
            default: '30mm'
        },
        space: {
            type: String,
            required: false,
            default: '5mm'
        },
        fontSize: {
            type: String,
            required: false,
            default: '1em'
        },
        activeClass: {
            type: String,
            required: false,
            default: 'text-orange'
        },
        vertical: {
            type: Boolean,
            required: false,
            default: false
        }
        // showImage: {
        //     type: Boolean,
        //     required: false,
        //     default: true
        // }
    }
}
</script>
