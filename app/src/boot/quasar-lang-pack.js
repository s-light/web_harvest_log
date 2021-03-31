// https://quasar.dev/options/quasar-language-packs#Dynamical-(non-SSR)
import Quasar from 'quasar'

export default async ({ store }) => {
    // get language
    let locale = 'en-us'
    if (Quasar.LocalStorage.has('language')) {
        try {
            locale = Quasar.LocalStorage.getItem('language')
        } catch (e) {
            // data wasn't successfully read due to a Web Storage API error
            console.error(e)
        }
    }

    try {
        await import(
            /* webpackInclude: /(de|en-us)\.js$/ */
            'quasar/lang/' + locale
        )
            .then(lang => {
                Quasar.lang.set(lang.default)
            })
    } catch (err) {
        // Requested Quasar Language Pack does not exist,
        // let's not break the app, so catching error
    }
}
