/*
 * This file runs in a Node context (it's NOT transpiled by Babel), so use only
 * the ES6 features that are supported by your Node version. https://node.green/
 */

// Configuration for your app
// https://quasar.dev/quasar-cli/quasar-conf-js
/* eslint-env node */

// const path = require('path')
// console.log('path', path.join(__dirname, '../app_config/'))

module.exports = function (/* ctx */) {
    return {
    // https://quasar.dev/quasar-cli/supporting-ts
        supportTS: false,

        // https://quasar.dev/quasar-cli/prefetch-feature
        // preFetch: true,

        // app boot file (/src/boot)
        // --> boot files are part of "main.js"
        // https://quasar.dev/quasar-cli/boot-files
        boot: [
            'axios',
            'vuex',
            'i18n',
            'VueCompositionApi'
        ],

        // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-css
        css: [
            'app.css'
        ],

        // https://github.com/quasarframework/quasar/tree/dev/extras
        extras: [
            // 'ionicons-v4',
            'mdi-v5',
            // 'fontawesome-v5',
            // 'eva-icons',
            // 'themify',
            // 'line-awesome',
            // 'roboto-font-latin-ext', // this or either 'roboto-font', NEVER both!

            'roboto-font', // optional, you are not bound to it
            'material-icons' // optional, you are not bound to it
        ],

        // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-build
        build: {
            vueRouterMode: 'hash', // available values: 'hash', 'history'

            // transpile: false,

            // Add dependencies for transpiling with Babel (Array of string/regex)
            // (from node_modules, which are by default not transpiled).
            // Applies only if "transpile" is set to true.
            // transpileDependencies: [],

            // rtl: false, // https://quasar.dev/options/rtl-support
            // preloadChunks: true,
            showProgress: true,
            // gzip: true,
            // analyze: true,
            uglifyOptions: 'source-map',
            sourceMap: true,
            minify: false,

            // Options below are automatically set depending on the env, set them if you want to override
            // extractCSS: false,

            // https://quasar.dev/quasar-cli/handling-webpack
            extendWebpack (cfg) {
                cfg.module.rules.push({
                    enforce: 'pre',
                    test: /\.(js|vue)$/,
                    loader: 'eslint-loader',
                    exclude: /node_modules/
                })
            }
        },

        // Full list of options: https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-devServer
        devServer: {
            open: false, // opens browser window automatically
            port: 8080,
            https: false
            // contentBase: path.join(__dirname, '../app_config/'),
            // contentBasePublicPath: '/api/'
            // https://webpack.js.org/configuration/dev-server/#devserverproxy
            // proxy: {
            //     // '/api': {
            //     //     target: 'https://localhost:3030',
            //     //     pathRewrite: { '^/api': '' },
            //     //     secure: false,
            //     //     changeOrigin: true
            //     // }
            //     '/api': {
            //         target: 'https://localhost:3030',
            //         pathRewrite: { '^/api': '' },
            //         secure: false,
            //         changeOrigin: true
            //     }
            // }
        },

        // https://quasar.dev/quasar-cli/quasar-conf-js#Property%3A-framework
        framework: {
            iconSet: 'material-icons', // Quasar icon set
            lang: 'en-us', // Quasar language pack
            config: {
                notify: {
                    position: 'top'
                },
                // https://quasar.dev/quasar-plugins/dark#Through-quasar.conf.js
                dark: 'auto' // or Boolean true/false
            },

            // Possible values for "importStrategy":
            // * 'auto' - (DEFAULT) Auto-import needed Quasar components & directives
            // * 'all'  - Manually specify what to import
            importStrategy: 'auto',

            // For special cases outside of where "auto" importStrategy can have an impact
            // (like functional components as one of the examples),
            // you can manually specify Quasar components/directives to be available everywhere:
            //
            // components: [],
            // directives: [],

            // Quasar plugins
            plugins: [
                'Notify'
            ]
        },

        // animations: 'all', // --- includes all animations
        // https://quasar.dev/options/animations
        animations: [],

        // https://quasar.dev/quasar-cli/developing-ssr/configuring-ssr
        ssr: {
            pwa: false
        },

        // https://quasar.dev/quasar-cli/developing-pwa/configuring-pwa
        pwa: {
            workboxPluginMode: 'GenerateSW', // 'GenerateSW' or 'InjectManifest'
            workboxOptions: {}, // only for GenerateSW
            manifest: {
                name: 'Harvest Log',
                short_name: 'Harvest Log',
                description: 'a simple logging web app to track your harvest details',
                display: 'standalone',
                orientation: 'portrait',
                background_color: '#fff0e0',
                theme_color: '#027be3',
                icons: [
                    {
                        src: 'icons/icon-128x128.png',
                        sizes: '128x128',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-192x192.png',
                        sizes: '192x192',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-256x256.png',
                        sizes: '256x256',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-384x384.png',
                        sizes: '384x384',
                        type: 'image/png'
                    },
                    {
                        src: 'icons/icon-512x512.png',
                        sizes: '512x512',
                        type: 'image/png'
                    }
                ]
            }
        },

        // Full list of options: https://quasar.dev/quasar-cli/developing-cordova-apps/configuring-cordova
        cordova: {
            // noIosLegacyBuildFlag: true, // uncomment only if you know what you are doing
        },

        // Full list of options: https://quasar.dev/quasar-cli/developing-capacitor-apps/configuring-capacitor
        capacitor: {
            hideSplashscreen: true
        },

        // Full list of options: https://quasar.dev/quasar-cli/developing-electron-apps/configuring-electron
        electron: {
            bundler: 'packager', // 'packager' or 'builder'

            packager: {
                // https://github.com/electron-userland/electron-packager/blob/master/docs/api.md#options

                // OS X / Mac App Store
                // appBundleId: '',
                // appCategoryType: '',
                // osxSign: '',
                // protocol: 'myapp://path',

                // Windows only
                // win32metadata: { ... }
            },

            builder: {
                // https://www.electron.build/configuration/configuration

                appId: 'web_harvest_log'
            },

            // More info: https://quasar.dev/quasar-cli/developing-electron-apps/node-integration
            nodeIntegration: true,

            extendWebpack (/* cfg */) {
                // do something with Electron main process Webpack cfg
                // chainWebpack also available besides this extendWebpack
            }
        }
    }
}
