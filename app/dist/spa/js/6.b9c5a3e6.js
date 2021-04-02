(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "49c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_debugSection_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c266");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_debugSection_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_debugSection_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


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

/***/ "9287":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/DevList.vue?vue&type=template&id=0c76a661&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"fit column no-wrap justify-center items-center content-center"},[_c('h1',[_vm._v("List all db things")]),_c('debugSection',{attrs:{"label":"serial","obj":_vm.serial}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"import crate from file","icon":"mdi-database-export"},on:{"click":function($event){return _vm.serverImport('crate')}}}),_c('debugSection',{attrs:{"label":"crate","obj":_vm.crate}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"import cropFilter from file","icon":"mdi-database-export"},on:{"click":function($event){return _vm.serverImport('crop-filter')}}}),_c('debugSection',{attrs:{"label":"cropFilter","obj":_vm.cropFilter}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"import crop from file","icon":"mdi-database-export"},on:{"click":function($event){return _vm.serverImport('crop')}}}),_c('debugSection',{attrs:{"label":"crop","obj":_vm.crop}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/DevList.vue?vue&type=template&id=0c76a661&

// EXTERNAL MODULE: ./src/components/debugSection.vue + 4 modules
var debugSection = __webpack_require__("91e5");

// EXTERNAL MODULE: ./node_modules/feathers-vuex/dist/index.js + 25 modules
var dist = __webpack_require__("9e62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/DevList.vue?vue&type=script&lang=js&
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


/* harmony default export */ var DevListvue_type_script_lang_js_ = ({
  data() {
    return {};
  },

  components: {
    DebugSection: debugSection["a" /* default */]
  },
  mixins: [Object(dist["b" /* makeFindMixin */])({
    service: 'crate'
  }), Object(dist["b" /* makeFindMixin */])({
    service: 'crop'
  }), Object(dist["b" /* makeFindMixin */])({
    service: 'crop-filter'
  }), Object(dist["b" /* makeFindMixin */])({
    service: 'serial'
  })],
  computed: {
    serialParams() {
      return {
        query: {}
      };
    },

    crateParams() {
      return {
        query: {}
      };
    },

    cropFilterParams() {
      return {
        query: {}
      };
    },

    cropParams() {
      return {
        query: {}
      };
    }

  },
  methods: {
    serverImport: function (servicePath) {
      console.group('serverImport');
      this.$FeathersVuex.api.Management.serverImport(servicePath).then(response => {
        console.log('response', response);
      }).catch(err => {
        console.error('err', err);
      });
      console.groupEnd();
    }
  },
  name: 'PageDevList'
});
// CONCATENATED MODULE: ./src/pages/DevList.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_DevListvue_type_script_lang_js_ = (DevListvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./src/pages/DevList.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_DevListvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var DevList = __webpack_exports__["default"] = (component.exports);



runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QBtn: QBtn["a" /* default */]});runtime_auto_import_default()(component, 'directives', {Ripple: Ripple["a" /* default */]});


/***/ }),

/***/ "c266":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=6.b9c5a3e6.js.map