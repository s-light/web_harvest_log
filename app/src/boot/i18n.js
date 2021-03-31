import { LocalStorage } from 'quasar'
import Vue from 'vue'
import VueI18n from 'vue-i18n'
import messages from 'src/i18n'

Vue.use(VueI18n)

let i18n = null

export default ({ app, store }) => {
    // get language
    let locale = 'en-us'
    if (LocalStorage.has('language')) {
        try {
            locale = LocalStorage.getItem('language')
        } catch (e) {
            // data wasn't successfully read due to a Web Storage API error
            console.error(e)
        }
    }

    // initialize
    i18n = new VueI18n({
        locale: locale,
        fallbackLocale: 'en-us',
        messages
    })

    // Set i18n instance on app
    app.i18n = i18n
}

export { i18n }
