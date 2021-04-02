(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "5b12":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveHarvest_vue_vue_type_style_index_0_id_721220cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("8e8d");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveHarvest_vue_vue_type_style_index_0_id_721220cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_SaveHarvest_vue_vue_type_style_index_0_id_721220cb_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
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

/***/ "8e8d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "b5ee":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "dd36":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_2_2_node_modules_stylus_loader_index_js_ref_7_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_stylus_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_keypad_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b5ee");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_2_2_node_modules_stylus_loader_index_js_ref_7_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_stylus_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_keypad_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_7_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_oneOf_2_2_node_modules_stylus_loader_index_js_ref_7_oneOf_2_3_node_modules_quasar_app_lib_webpack_loader_quasar_stylus_variables_js_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_keypad_vue_vue_type_style_index_0_lang_stylus___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "dff9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/SaveHarvest.vue?vue&type=template&id=721220cb&scoped=true&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"fit"},[_c('section',{staticClass:"row no-wrap justify-evenly items-stretch content-stretch"},[_c('section',{staticClass:"column no-wrap justify-evenly items-stretch content-stretch"},[_c('div',{staticClass:"q-mt-md"},[_c('q-input',{staticClass:"weight_display",attrs:{"debounce":"500","input-class":"text-right","filled":"","hide-bottom-space":"","item-aligned":"","label-slot":""},on:{"keyup":function($event){if(!$event.type.indexOf('key')&&_vm._k($event.keyCode,"enter",13,$event.key,"Enter")){ return null; }return _vm.save()}},scopedSlots:_vm._u([{key:"label",fn:function(){return [_c('div',{staticClass:"row justify-between items-start content-start",staticStyle:{"font-size":"2em","line-height":"2em"}},[_c('div',{},[_vm._v("\n                                "+_vm._s(_vm.$t('weight'))+"\n                            ")]),_c('div',{staticStyle:{"font-size":"0.8em"}},[_vm._v("\n                                "+_vm._s(_vm._f("formatWeight")(_vm.totalWeight,_vm.lang))+" "+_vm._s(_vm.scaleUnit)+" "+_vm._s(_vm.$t('scale'))+" -\n                                Tare: "+_vm._s(_vm._f("formatWeight")(_vm.crateSelected.tareWeight,_vm.lang))+" "+_vm._s(_vm.scaleUnit)+"\n                            ")])])]},proxy:true},{key:"append",fn:function(){return [_vm._v("\n                        "+_vm._s(_vm.scaleUnit)+"\n                    ")]},proxy:true}]),model:{value:(_vm.currentWeight),callback:function ($$v) {_vm.currentWeight=$$v},expression:"currentWeight"}})],1),_c('section',{staticClass:"col-grow row no-wrap justify-evenly items-stretch content-stretch"},[_c('q-btn',{staticClass:"col",staticStyle:{"min-width":"50mm","min-height":"50mm","margin":"0.2em"},attrs:{"label":_vm.$t('save'),"icon":"mdi-database-plus","ripple":{ early: true, color: 'orange'},"stack":"","size":"20mm"},on:{"click":function($event){return _vm.save()}}}),_c('keypad',{staticClass:"col",staticStyle:{"min-width":"50mm","min-height":"50mm","margin":"0.2em"}})],1)]),_c('section',{staticClass:"row justify-between items-stretch content-stretch",staticStyle:{"min-width":"28em","overflowY":"scroll","max-height":"100vh"}},[_c('q-list',_vm._l((_vm.harvest),function(item){return _c('q-item',{key:item._id},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-avatar',{attrs:{"rounded":""}},[_c('img',{attrs:{"src":_vm.imageBaseURL + item.crop.image}})])],1),_c('q-item-section',[_vm._v("\n                            "+_vm._s(item.crop.text)+" "),_c('br'),_vm._v("\n                            "+_vm._s(item.place.text)+" |\n                            "+_vm._s(item.weight)+" "+_vm._s(item.scaleUnit)+"\n                            "),_vm._v("\n                            "+_vm._s(_vm._f("toLocal")(item.createdAt,_vm.lang))+"\n                        ")])],1)}),1)],1)])])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/SaveHarvest.vue?vue&type=template&id=721220cb&scoped=true&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./node_modules/feathers-vuex/dist/index.js + 25 modules
var dist = __webpack_require__("9e62");

// EXTERNAL MODULE: ./src/store/mapBind.js
var mapBind = __webpack_require__("8b93");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/keypad.vue?vue&type=template&id=0c1242de&
var keypadvue_type_template_id_0c1242de_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"keypad"})}
var keypadvue_type_template_id_0c1242de_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/keypad.vue?vue&type=template&id=0c1242de&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/keypad.vue?vue&type=script&lang=js&
//
//
//
//
//
//
/* harmony default export */ var keypadvue_type_script_lang_js_ = ({
  name: 'keypad',

  data() {
    return {};
  }

});
// CONCATENATED MODULE: ./src/components/keypad.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_keypadvue_type_script_lang_js_ = (keypadvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/components/keypad.vue?vue&type=style&index=0&lang=stylus&
var keypadvue_type_style_index_0_lang_stylus_ = __webpack_require__("dd36");

// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/components/keypad.vue






/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_keypadvue_type_script_lang_js_,
  keypadvue_type_template_id_0c1242de_render,
  keypadvue_type_template_id_0c1242de_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var keypad = (component.exports);
// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/SaveHarvest.vue?vue&type=script&lang=js&

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

 // import DebugSection from 'components/debugSection'


/* harmony default export */ var SaveHarvestvue_type_script_lang_js_ = ({
  name: 'PageSaveHarvest',

  data() {
    return {
      imageBaseURL: 'http://localhost:3030/api/'
    };
  },

  methods: {
    save: function () {
      console.group('save harvest log entry'); // console.log('crateSelected', this.crateSelected)
      // console.log('cropSelected', this.cropSelected)
      // console.log('placeSelected', this.placeSelected)
      // console.log('totalWeight', this.totalWeight)
      // console.log('currentWeight', this.currentWeight)
      // console.log('scaleStable', this.scaleStable)
      // console.log('scaleUnit', this.scaleUnit)

      console.log('this.crateSelected._id', this.crateSelected._id);
      console.log('this.cropSelected._id', this.cropSelected._id);
      console.log('this.placeSelected._id', this.placeSelected._id); // check if all requirements are fine

      if (this.crateSelected._id && this.cropSelected._id && !isNaN(this.placeSelected._id) // this.placeSelected._id &&
      // this.scaleStable
      ) {
          const Harvest = this.$FeathersVuex.api.Harvest;
          const entry = new Harvest({
            crate: this.crateSelected,
            crop: this.cropSelected,
            place: this.placeSelected,
            crateTareWeight: this.crateSelected.tareWeight,
            cropText: this.cropSelected.text,
            placeText: this.placeSelected.text,
            weight: this.currentWeight,
            scaleUnit: this.scaleUnit,
            createdAt: new Date()
          });
          entry.save();
        } else {
        this.$q.notify({
          color: 'negative',
          message: 'Please Check that all requirements are filled.',
          icon: 'report_problem'
        });
      }

      console.groupEnd();
    }
  },
  computed: objectSpread2_default()(objectSpread2_default()({
    currentWeight: {
      // getter
      get: function () {
        let result = this.totalWeight;

        if (result && !isNaN(result)) {
          if (this.crateSelected && this.crateSelected.tareWeight) {
            result -= this.crateSelected.tareWeight;
            result = result.toFixed(2);
          }
        } else {
          result = 0.0;
        } // force float
        // result = result * 1.0


        return result;
      },
      // setter
      set: function (newValue) {
        // console.log('newValue', newValue)
        let result = parseFloat(newValue);

        if (this.crateSelected && this.crateSelected.tareWeight) {
          result += this.crateSelected.tareWeight;
          result = result.toFixed(2);
        }

        this.totalWeight = result;
      }
    }
  }, Object(mapBind["a" /* mapBind */])('localconfig', ['btnSize', 'btnSpace', 'crateSelected', 'cropSelected', 'placeSelected', 'totalWeight', 'scaleStable', 'scaleUnit'])), {}, {
    // ]),
    harvestParams() {
      return {
        query: {
          $limit: 20,
          $sort: {
            createdAt: -1
          }
        }
      };
    },

    // btnStyle: function () {
    //     return {
    //         width: '100%',
    //         height: '100%'
    //     }
    // },
    lang: function () {
      // return this.$i18n.locale
      let result = this.$q.lang.isoName;

      if (!result) {
        result = 'de';
      }

      return result;
    }
  }),
  mixins: [Object(dist["b" /* makeFindMixin */])({
    service: 'harvest'
  })],
  components: {
    keypad: keypad // DebugSection

  }
});
// CONCATENATED MODULE: ./src/pages/SaveHarvest.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_SaveHarvestvue_type_script_lang_js_ = (SaveHarvestvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/pages/SaveHarvest.vue?vue&type=style&index=0&id=721220cb&scoped=true&lang=css&
var SaveHarvestvue_type_style_index_0_id_721220cb_scoped_true_lang_css_ = __webpack_require__("5b12");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 2 modules
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js + 1 modules
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/avatar/QAvatar.js
var QAvatar = __webpack_require__("cb32");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/SaveHarvest.vue






/* normalize component */

var SaveHarvest_component = Object(componentNormalizer["a" /* default */])(
  pages_SaveHarvestvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  "721220cb",
  null
  
)

/* harmony default export */ var SaveHarvest = __webpack_exports__["default"] = (SaveHarvest_component.exports);








runtime_auto_import_default()(SaveHarvest_component, 'components', {QPage: QPage["a" /* default */],QInput: QInput["a" /* default */],QBtn: QBtn["a" /* default */],QList: QList["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QAvatar: QAvatar["a" /* default */]});


/***/ })

}]);
//# sourceMappingURL=3.adc6afd1.js.map