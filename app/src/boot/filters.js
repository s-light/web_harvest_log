// src/boot/filters.js

import { date } from 'quasar'

export default ({ Vue }) => {
    Vue.filter('formatdate', function (value, format = 'HH:mm:ss DD.MM.YYYY') {
        // 'YYYY-MM-DDTHH:mm:ss.SSSZ'
        return date.formatDate(new Date(value), format)
    })

    Vue.filter('toLocal', function (value, lang = 'de') {
        return new Date(value).toLocaleString(lang)
    })

    Vue.filter('formatWeight', function (value, lang = 'de') {
        // console.log('value', value)
        // console.log('lang', lang)
        // return value.toLocaleString(
        const result = value.toLocaleString(
            lang,
            {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2
            }
        )
        // console.log('result', result)
        return result
    })

    Vue.filter('pretty', function (value) {
        let valueJson = value
        try {
            valueJson = JSON.parse(value)
        } catch (e) {
            // console.log(value, e)
        }
        return JSON.stringify(valueJson, null, 4)
    })
}
