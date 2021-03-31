// https://quasar.dev/options/quasar-language-packs#dynamical-non-ssr-
import { LocalStorage, Quasar } from 'quasar'
//
export default async ({ app, store }) => {
    // console.log('Quasar', Quasar)
    // console.log('app', app)

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
        console.error(err)
    }
}
