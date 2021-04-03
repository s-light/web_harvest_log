<template>
    <!-- @click="handleClick($event)" -->
    <!-- '{{ $route.path }} - {{ routeTarget }}' -->
    <q-btn
        stack
        :class="$route.path.includes(routeTarget) ? activeClass : ''"
        :title="item._id"
        :style="btnStyle"
        :to="routeTarget"
        exact
    >
        <!--
            :style="{width: '100%', height: '100%'}"
            :style="{width: size, height: size, margin: '1em 0'}"
        -->
        <q-img
            v-if="item.image"
            :src="imageBaseURL + item.image"
            contain
            :ratio="1"
            :size="size"
            :style="{margin: '1em 0'}"
        />
        <q-icon
            v-else-if="item.icon || placeholderIcon"
            :size="size"
            :name="item.icon ? item.icon : placeholderIcon"
        />
        <div class="">
            <div
                :style="{ 'font-size': fontSize, 'line-height':'100%' }"
            >
                {{ textPrepand }} {{ item.text }}
            </div>
            <div>
                {{ textAppend }}
            </div>
        </div>
    </q-btn>
</template>

<script>
export default {
    name: 'BtnSelectedRoute',
    data () {
        return {
        }
    },
    methods: {
        // handleClick: function (event) {
        //     // if (this.routeTarget) {
        //     //     this.$router.push(this.routeTarget)
        //     // }
        //     this.$emit('click', event)
        // }
    },
    computed: {
        btnStyle: function () {
            return {
                // margin: this.space,
                // 'min-width': this.size,
                // 'min-height': this.size
                width: '100%',
                height: '100%'
                // overflow: 'hidden'
            }
        }
    },
    props: {
        item: {
            // type: Object,
            required: false,
            default: () => { return undefined }
        },
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
        routeTarget: {
            type: String,
            required: false,
            default: null
        },
        // square: {
        //     type: Boolean,
        //     required: false,
        //     default: true
        // },
        placeholderIcon: {
            type: String,
            required: false,
            default: 'aspect_ratio'
        },
        textPrepand: {
            type: String,
            required: false,
            default: ''
        },
        textAppend: {
            type: String,
            required: false,
            default: ''
        }
    }
}
</script>
