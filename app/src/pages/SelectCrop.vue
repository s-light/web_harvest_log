<template>
    <q-page class="">
        <section class="center">
            <p>TODO: implement load and view of Selection of Crops</p>
            <br>
            <p>
                selectedValue: {{ selectedValue }}
            </p>
            <br>
        </section>
        <btn-toggle-grid
            v-model="selectedValue"
            :options="btn_list"
            active-class="bg-orange"
            push
            rounded
            stack
            size="40mm"
        />
</q-page>
</template>

<script>
import BtnToggleGrid from 'components/BtnToggleGrid.vue'

export default {
    name: 'PageSelectCrop',
    data () {
        return {
            selectedValue: 'car',
            btn_list: [
                {
                    label: 'boat',
                    value: 'boat',
                    icon: 'directions_boat'
                },
                {
                    label: 'car',
                    value: 'car',
                    icon: 'directions_car'
                },
                {
                    label: 'railway',
                    value: 'railway',
                    icon: 'directions_railway'
                },
                {
                    label: 'world',
                    value: 'world',
                    icon: 'pets'
                },
                {
                    label: 'sun',
                    value: 'sun',
                    icon: 'wb_sunny'
                },
                {
                    label: 'rain',
                    value: 'rain',
                    icon: 'umbrella'
                },
                {
                    label: 'cloud',
                    value: 'cloud',
                    icon: 'cloud'
                },
                {
                    label: 'wind',
                    value: 'wind',
                    icon: 'toys'
                },
                {
                    label: 'railway',
                    value: 'railway',
                    icon: 'directions_railway'
                },
                {
                    label: 'world',
                    value: 'world',
                    icon: 'pets'
                },
                {
                    label: 'test',
                    value: 'test',
                    icon: 'directions_boat'
                },
                {
                    label: 'sun',
                    value: 'sun',
                    icon: 'wb_sunny'
                },
                {
                    label: 'water',
                    value: 'water',
                    icon: 'umbrella'
                },
                {
                    label: 'web',
                    value: 'web',
                    icon: 'cloud'
                },
                {
                    label: 'storm',
                    value: 'storm',
                    icon: 'toys'
                }
            ]
        }
    },
    filters: {
    },
    components: {
        BtnToggleGrid
    }
}

</script>
