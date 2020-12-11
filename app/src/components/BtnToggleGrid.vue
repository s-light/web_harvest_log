<template>
    <div class="fit row wrap justify-around items-center content-center">
        <!-- <div class="shadow-10">
            _id {{ _id }} <br>
            options {{ options }} <br>
            activeClass {{ activeClass }} <br>
        </div> -->
        <q-btn
            v-for="item in options"
            :key="item._id"
            @click="$emit('input', item)"
            :class="item._id === value._id ? activeClass : ''"
            stack
            :title="item._id"
            :size="size"
        >
            <q-icon
                v-if="item.icon"
                :size="size"
                :name="item.icon"
            />
            <q-img
                v-else-if="item.image"
                :src="item.image"
                :style="img_style"
            />
            <div>
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
            // things
        }
    },
    methods: {
        //
    },
    computed: {
        img_style: function () {
            // `this` points to the vm instance
            return 'width:' + this.size + '; height:' + this.size + ';'
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
        size: {
            type: String,
            required: false,
            default: 'text-orange'
        },
        activeClass: {
            type: String,
            required: false,
            default: 'text-orange'
        }
    }
}
</script>
