<template>
    <div class="keypad">
        <q-btn
            v-for="key in keys"
            :key="key"
            :label="key"
            @click="push(key)"
            :ripple="{ early: true, color: 'orange'}"
        />
        <!--
        :label="$t(key)"
        stack
        -->
    </div>
</template>

<script>

export default {
    name: 'keypad',
    model: {
        prop: 'value',
        event: 'change'
    },
    data () {
        return {
            keys: [
                7, 8, 9,
                4, 5, 6,
                1, 2, 3,
                0, ',', 'del'
            ],
            lastKeyDecimal: false
        }
    },
    props: {
        value: {
            type: [String],
            required: true
        }
    },
    methods: {
        push: function (key) {
            console.log('key', key)
            console.log('this.value', this.value)
            let result = ''
            let valueStr = this.value.toString()
            valueStr = valueStr.replace(',', '.')
            console.log('valueStr', valueStr)
            valueStr = valueStr.replace('.00', '')
            // here we need some regex magic to trimm leading and trailing 0 ?!
            if (this.lastKeyDecimal) {
                this.lastKeyDecimal = false
                valueStr = valueStr + '.'
            }
            console.log('valueStr', valueStr)
            switch (key) {
            case 0:
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
            case 6:
            case 7:
            case 8:
            case 9:
                result = valueStr + key.toString()
                break
            case ',' :
                // result = valueStr + '.0'
                result = valueStr
                this.lastKeyDecimal = true
                break
            case 'del':
                // remove last char
                // result = valueStr.slice(0, -1)
                result = '0'
                break
            }
            console.log('result', result)
            this.$emit('change', result)
        }
    }

}
</script>

<style lang="stylus">
.keypad
    /* background-color: hsla(100, 90%, 45%, 0.8) */
    min-width: 2em
    min-height: 2em

    display: grid;
    grid-template-columns: 1fr 1fr 1fr
    grid-gap: 20px

</style>
