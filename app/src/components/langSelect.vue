<!--
Change Quasar Language Pack at Runtime
https://quasar.dev/options/quasar-language-packs#Change-Quasar-Language-Pack-at-Runtime
App Internationalization (I18n)
Create language switcher
https://quasar.dev/options/app-internationalization#Create-language-switcher
-->
<template>
    <q-select
        rounded
        outlined
        class="q-mr-md"
        label="Quasar Language"
        v-model="lang"
        emit-value
        :options="langOptions"
        map-options
    />
</template>

<script>
import languages from 'quasar/lang/index.json'
const appLanguages = languages.filter(lang =>
    ['de', 'en-us'].includes(lang.isoName)
)

export default {
    name: 'langSelect',
    data () {
        return {
            lang: this.$q.lang.isoName,
            langI18n: this.$i18n.locale
        }
    },
    watch: {
        lang (lang) {
            // dynamic import, so loading on demand only
            import(
                /* webpackInclude: /(de|en-us)\.js$/ */
                'quasar/lang/' + lang
            ).then(lang => {
                this.$q.lang.set(lang.default)
            })
            this.$i18n.locale = lang
        }
    },
    created () {
        this.langOptions = appLanguages.map(lang => ({
            label: lang.nativeName, value: lang.isoName
        }))
    }
}
</script>
