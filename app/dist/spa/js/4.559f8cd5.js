(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "2399":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dev1.vue?vue&type=template&id=db72ff7a&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"fit column no-wrap justify-center items-center content-center"},[_c('h1',[_vm._v("Dev1")]),_c('debugSection',{attrs:{"label":"serial","obj":_vm.serial}}),_c('section',[_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"load from server","icon":"sync"},on:{"click":function($event){return _vm.globalConfigLoadFromServer()}}}),_c('br'),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"export harvest to csv on server","icon":"mdi-database-export"},on:{"click":function($event){return _vm.serverExportToCSVHarvest()}}}),_c('br'),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"start Scale Demo Generator ","icon":"mdi-clock-start"},on:{"click":function($event){return _vm.startScaleDemo()}}}),_c('br'),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"start Scale Demo Generator ","icon":"mdi-clock-end"},on:{"click":function($event){return _vm.stopScaleDemo()}}}),_c('br')],1),_c('debugSection',{attrs:{"label":"totalWeight","obj":_vm.totalWeight}}),_c('debugSection',{attrs:{"label":"scaleStable","obj":_vm.scaleStable}}),_c('debugSection',{attrs:{"label":"scaleUnit","obj":_vm.scaleUnit}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Dev1.vue?vue&type=template&id=db72ff7a&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/store/mapBind.js
var mapBind = __webpack_require__("8b93");

// EXTERNAL MODULE: ./src/components/debugSection.vue + 4 modules
var debugSection = __webpack_require__("91e5");

// EXTERNAL MODULE: ./node_modules/feathers-vuex/dist/index.js + 25 modules
var dist = __webpack_require__("9e62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dev1.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

 // import {
//     // mapState,
//     // mapGetters,
//     mapActions
// } from 'vuex'


/* harmony default export */ var Dev1vue_type_script_lang_js_ = ({
  data() {
    return {// serialDeviceInt: '/dev/ttyUSB42'
    };
  },

  components: {
    DebugSection: debugSection["a" /* default */]
  },
  mixins: [Object(dist["b" /* makeFindMixin */])({
    service: 'crop'
  }), Object(dist["b" /* makeFindMixin */])({
    service: 'serial'
  })],
  computed: objectSpread2_default()({
    serialParams() {
      return {
        query: {}
      };
    },

    cropParams() {
      return {
        query: {}
      };
    }

  }, Object(mapBind["a" /* mapBind */])('localconfig', [// 'btnSize',
  // 'btnSpace',
  // 'crateSelected',
  // 'cropSelected',
  // 'placeSelected',
  'totalWeight', 'scaleStable', 'scaleUnit'])),
  methods: {
    globalConfigLoadFromServer: function () {
      console.group('globalConfigLoadFromServer');
      this.$axios.get('/config/crops/crop.json').then(response => {
        // this.data = response.data
        console.log('response.data', response.data);
        this.$q.notify({
          color: 'info',
          message: 'Loaded config from server. Processing now.',
          icon: 'info'
        });
        this.$q.notify({
          color: 'positive',
          message: 'done.',
          icon: 'info'
        });
      }).catch(() => {
        this.$q.notify({
          color: 'negative',
          message: 'Loading failed',
          icon: 'report_problem'
        });
      });
      console.groupEnd();
    },
    serverExportToCSVHarvest: function () {
      console.group('serverExportToCSVHarvest'); // console.log('this', this)
      // console.log('this.$FeathersVuex', this.$FeathersVuex)
      // console.log('this.$FeathersVuex.api.Management', this.$FeathersVuex.api.Management)

      this.$FeathersVuex.api.Management.serverExportAsCSV('harvest', 'day').then(response => {
        console.log('response', response);
      }).catch(err => {
        console.error('err', err);
      });
      console.groupEnd();
    },
    serverImport: function (servicePath) {
      console.group('serverImport');
      this.$FeathersVuex.api.Management.serverImport(servicePath).then(response => {
        console.log('response', response);
      }).catch(err => {
        console.error('err', err);
      });
      console.groupEnd();
    },
    startScaleDemo: function () {
      this.$store.dispatch('localconfig/startScaleDemo').then(response => {
        console.log('startScaleDemo: ', response);
        this.$q.notify({
          color: 'positive',
          message: 'startScaleDemo done.',
          icon: 'info'
        });
      }).catch(error => {
        console.error('startScaleDemo:', error);
        this.$q.notify({
          color: 'negative',
          message: 'startScaleDemo failed.',
          icon: 'report_problem'
        });
      });
    },
    stopScaleDemo: function () {
      this.$store.dispatch('localconfig/stopScaleDemo').then(response => {
        console.log('stopScaleDemo: ', response);
        this.$q.notify({
          color: 'positive',
          message: 'stopScaleDemo done.',
          icon: 'info'
        });
      }).catch(error => {
        console.error('stopScaleDemo:', error);
        this.$q.notify({
          color: 'negative',
          message: 'stopScaleDemo failed.',
          icon: 'report_problem'
        });
      });
    }
  },
  // created () {
  //     // Find all appointments. We'll use the getters to separate them.
  //     // this.findGC({ query: {} })
  // },
  filters: {},
  name: 'PageDev1'
});
// CONCATENATED MODULE: ./src/pages/Dev1.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Dev1vue_type_script_lang_js_ = (Dev1vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 2 modules
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__("714f");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/Dev1.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Dev1vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Dev1 = __webpack_exports__["default"] = (component.exports);



runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QBtn: QBtn["a" /* default */]});runtime_auto_import_default()(component, 'directives', {Ripple: Ripple["a" /* default */]});


/***/ }),

/***/ "49c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_debugSection_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c266");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_debugSection_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_debugSection_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "8b93":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapBind; });
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fb6a");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2f62");


// ------------------------------------------
// usage:
// import { mapBind } from 'store/mapBind.js'
//
// export default {
//     name: 'ComponentName',
//     computed: {
//         ...mapBind('appconfig', ['globalMessage', 'someOtherThing'])
//     },
// }
// inspired by https://stackoverflow.com/a/48447361/574981
 // export const mapBind = (base, params = {}) => (
// export const mapBind = (base, params) => (

const mapBind = function (base, params) {
  // helper function for vuex
  // create setter and getter functions for given store and properties
  function capitalizeFirstLetter(string) {
    // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const map = Object(vuex__WEBPACK_IMPORTED_MODULE_2__[/* mapState */ "b"])(base, params);
  const result = {}; // console.log(map)

  for (const [key, value] of Object.entries(map)) {
    // console.log('key', key)
    // console.log('value', value)
    result[key] = {
      get: value
    };

    result[key].set = function (val) {
      // this.$store.commit('appconfig/setGlobalMessage', val)
      const mutationName = 'set' + capitalizeFirstLetter(key);
      this.$store.commit(base + '/' + mutationName, val);
    };
  } // console.log(result)


  return result; // )
};

/***/ }),

/***/ "91e5":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/debugSection.vue?vue&type=template&id=b2731162&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('section',{staticClass:"debug"},[_c('label',[_vm._v(_vm._s(_vm.label))]),_c('pre',[_vm._v(_vm._s(_vm._f("pretty")(_vm.obj)))])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/debugSection.vue?vue&type=template&id=b2731162&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/debugSection.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var debugSectionvue_type_script_lang_js_ = ({
  // name: 'debugSection',
  props: {
    obj: {
      // type: [Object, Array, String, Num    ],
      default: function () {
        return {};
      }
    },
    label: {
      type: String,
      default: ''
    }
  },

  data() {
    return {};
  },

  filters: {
    pretty: function (value) {
      let valueJson = value;

      try {
        valueJson = JSON.parse(value);
      } catch (e) {// console.log(value, e)
      }

      return JSON.stringify(valueJson, null, 4);
    }
  }
});
// CONCATENATED MODULE: ./src/components/debugSection.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_debugSectionvue_type_script_lang_js_ = (debugSectionvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/debugSection.vue?vue&type=style&index=0&media=screen&lang=css&
var debugSectionvue_type_style_index_0_media_screen_lang_css_ = __webpack_require__("49c4");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/debugSection.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_debugSectionvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var debugSection = __webpack_exports__["a"] = (component.exports);

/***/ }),

/***/ "c266":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=4.559f8cd5.js.map