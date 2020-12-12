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
                :style="{width: size, height: size}"
                contain
            />
            <div
                :style="{ 'font-size': fontSize }"
            >
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
                'justify-around',
                'content-start',
                'items-center'
            ]
        }
    },
    props: {
        value: {
            type: Object,
            required: false
        },
        options: {
            type: Array,
            required: true
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
    }
}
</script>
