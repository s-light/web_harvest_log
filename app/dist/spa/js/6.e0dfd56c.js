(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "1114":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/WizardLayout.vue?vue&type=template&id=b537d9fe&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-layout',{attrs:{"view":"lHh Lpr lFf"}},[_c('q-drawer',{attrs:{"show-if-above":"","bordered":"","elevated":"","width":300}},[_c('EssentialNavigation',{staticClass:"essential-navigation"}),_c('section',{staticClass:"my-btn-group column no-wrap justify-evenly item-stretch content-stretch"},[_c('BtnSelectedRoute',{attrs:{"item":_vm.crateSelected,"routeTarget":"select_crate","size":_vm.btnSize + 'mm',"space":_vm.btnSpace + 'mm',"placeholderIcon":"aspect_ratio","textPrepand":_vm.$t('crate')}}),_c('BtnSelectedRoute',{attrs:{"item":_vm.cropSelected,"routeTarget":"select_crop","size":_vm.btnSize + 'mm',"space":_vm.btnSpace + 'mm',"placeholderIcon":"local_florist","textPrepand":_vm.$t('crop')}}),_c('BtnSelectedRoute',{attrs:{"item":_vm.placeSelected,"routeTarget":"select_place","size":_vm.btnSize/4 + 'mm',"space":_vm.btnSpace + 'mm',"placeholderIcon":"place","textAppend":_vm.$t('place'),"fontSize":"5em"}}),_c('BtnSelectedRoute',{attrs:{"item":"{}","routeTarget":"save_harvest","size":_vm.btnSize/2 + 'mm',"space":_vm.btnSpace + 'mm',"placeholderIcon":"mdi-database-plus","textPrepand":_vm.$t('save')}})],1),(_vm.devMode)?_c('q-list',_vm._l((_vm.childrenDev),function(item){return _c('EssentialLink',_vm._b({key:item.title},'EssentialLink',item,false))}),1):_vm._e()],1),_c('q-page-container',[_c('router-view')],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/layouts/WizardLayout.vue?vue&type=template&id=b537d9fe&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./src/store/mapBind.js
var mapBind = __webpack_require__("8b93");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EssentialLink.vue?vue&type=template&id=9f57bf98&
var EssentialLinkvue_type_template_id_9f57bf98_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-item',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"clickable":"","to":_vm.path,"exact":""}},[_c('q-item-section',{attrs:{"avatar":""}},[_c('q-icon',{attrs:{"name":_vm.icon}})],1),(!_vm.hideText)?_c('q-item-section',[_c('q-item-label',[_vm._v(_vm._s(_vm.title))]),_c('q-item-label',{attrs:{"caption":""}},[_vm._v("\n            "+_vm._s(_vm.caption)+"\n        ")])],1):_vm._e()],1)}
var EssentialLinkvue_type_template_id_9f57bf98_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EssentialLink.vue?vue&type=template&id=9f57bf98&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EssentialLink.vue?vue&type=script&lang=js&
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
/* harmony default export */ var EssentialLinkvue_type_script_lang_js_ = ({
  name: 'EssentialLink',
  props: {
    hideText: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    },
    caption: {
      type: String,
      default: ''
    },
    path: {
      type: String,
      default: '#'
    },
    icon: {
      type: String,
      default: ''
    },
    target: {
      type: String,
      default: '_self'
    }
  }
});
// CONCATENATED MODULE: ./src/components/EssentialLink.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EssentialLinkvue_type_script_lang_js_ = (EssentialLinkvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js + 1 modules
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__("714f");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/EssentialLink.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_EssentialLinkvue_type_script_lang_js_,
  EssentialLinkvue_type_template_id_9f57bf98_render,
  EssentialLinkvue_type_template_id_9f57bf98_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EssentialLink = (component.exports);





runtime_auto_import_default()(component, 'components', {QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QIcon: QIcon["a" /* default */],QItemLabel: QItemLabel["a" /* default */]});runtime_auto_import_default()(component, 'directives', {Ripple: Ripple["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EssentialNavigation.vue?vue&type=template&id=6d86c6ef&
var EssentialNavigationvue_type_template_id_6d86c6ef_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-btn-group',{attrs:{"spread":""}},_vm._l((_vm.childrenCommon),function(item){return _c('router-link',{key:item.title,attrs:{"to":item.path,"exact":""},scopedSlots:_vm._u([{key:"default",fn:function(ref){
var href = ref.href;
var route = ref.route;
var navigate = ref.navigate;
var isExactActive = ref.isExactActive;
return [[_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],class:isExactActive ? 'q-item q-router-link--active' : 'q-item',attrs:{"clickable":"","icon":item.icon},on:{"click":navigate}})]]}}],null,true)})}),1)}
var EssentialNavigationvue_type_template_id_6d86c6ef_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/EssentialNavigation.vue?vue&type=template&id=6d86c6ef&

// EXTERNAL MODULE: ./src/router/routes.js
var routes = __webpack_require__("d046");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/EssentialNavigation.vue?vue&type=script&lang=js&
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

/* harmony default export */ var EssentialNavigationvue_type_script_lang_js_ = ({
  name: 'EssentialNavigation',

  data() {
    return {
      childrenCommon: routes["a" /* childrenCommon */]
    };
  }

});
// CONCATENATED MODULE: ./src/components/EssentialNavigation.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_EssentialNavigationvue_type_script_lang_js_ = (EssentialNavigationvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn-group/QBtnGroup.js
var QBtnGroup = __webpack_require__("e7a9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 2 modules
var QBtn = __webpack_require__("9c40");

// CONCATENATED MODULE: ./src/components/EssentialNavigation.vue





/* normalize component */

var EssentialNavigation_component = Object(componentNormalizer["a" /* default */])(
  components_EssentialNavigationvue_type_script_lang_js_,
  EssentialNavigationvue_type_template_id_6d86c6ef_render,
  EssentialNavigationvue_type_template_id_6d86c6ef_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var EssentialNavigation = (EssentialNavigation_component.exports);




runtime_auto_import_default()(EssentialNavigation_component, 'components', {QBtnGroup: QBtnGroup["a" /* default */],QBtn: QBtn["a" /* default */],QItem: QItem["a" /* default */]});runtime_auto_import_default()(EssentialNavigation_component, 'directives', {Ripple: Ripple["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BtnSelectedRoute.vue?vue&type=template&id=75abec61&
var BtnSelectedRoutevue_type_template_id_75abec61_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-btn',{class:_vm.$route.path.includes(_vm.routeTarget) ? _vm.activeClass : '',style:(_vm.btnStyle),attrs:{"stack":"","title":_vm.item._id,"to":_vm.routeTarget,"exact":""}},[(_vm.item.image)?_c('q-img',{attrs:{"src":_vm.imageBaseURL + _vm.item.image,"contain":"","ratio":1,"size":_vm.size}}):(_vm.item.icon || _vm.placeholderIcon)?_c('q-icon',{attrs:{"size":_vm.size,"name":_vm.item.icon ? _vm.item.icon : _vm.placeholderIcon}}):_vm._e(),_c('div',{},[_c('div',{style:({ 'font-size': _vm.fontSize, 'line-height':'100%' })},[_vm._v("\n            "+_vm._s(_vm.textPrepand)+" "+_vm._s(_vm.item.text)+"\n        ")]),_c('div',[_vm._v("\n            "+_vm._s(_vm.textAppend)+"\n        ")])])],1)}
var BtnSelectedRoutevue_type_template_id_75abec61_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BtnSelectedRoute.vue?vue&type=template&id=75abec61&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BtnSelectedRoute.vue?vue&type=script&lang=js&
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
/* harmony default export */ var BtnSelectedRoutevue_type_script_lang_js_ = ({
  name: 'BtnSelectedRoute',

  data() {
    return {};
  },

  methods: {// handleClick: function (event) {
    //     // if (this.routeTarget) {
    //     //     this.$router.push(this.routeTarget)
    //     // }
    //     this.$emit('click', event)
    // }
  },
  computed: {
    btnStyle: function () {
      return {
        // margin: this.space,
        // 'min-width': this.size,
        // 'min-height': this.size
        width: '100%',
        height: '100%' // overflow: 'hidden'

      };
    }
  },
  props: {
    item: {
      // type: Object,
      required: false,
      default: () => {
        return undefined;
      }
    },
    imageBaseURL: {
      type: String,
      required: false,
      default: 'http://localhost:3030/api/'
    },
    size: {
      type: String,
      required: false,
      default: '30mm'
    },
    space: {
      type: String,
      required: false,
      default: '5mm'
    },
    fontSize: {
      type: String,
      required: false,
      default: '1em'
    },
    activeClass: {
      type: String,
      required: false,
      default: 'text-orange'
    },
    routeTarget: {
      type: String,
      required: false,
      default: null
    },
    // square: {
    //     type: Boolean,
    //     required: false,
    //     default: true
    // },
    placeholderIcon: {
      type: String,
      required: false,
      default: 'aspect_ratio'
    },
    textPrepand: {
      type: String,
      required: false,
      default: ''
    },
    textAppend: {
      type: String,
      required: false,
      default: ''
    }
  }
});
// CONCATENATED MODULE: ./src/components/BtnSelectedRoute.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BtnSelectedRoutevue_type_script_lang_js_ = (BtnSelectedRoutevue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__("068f");

// CONCATENATED MODULE: ./src/components/BtnSelectedRoute.vue





/* normalize component */

var BtnSelectedRoute_component = Object(componentNormalizer["a" /* default */])(
  components_BtnSelectedRoutevue_type_script_lang_js_,
  BtnSelectedRoutevue_type_template_id_75abec61_render,
  BtnSelectedRoutevue_type_template_id_75abec61_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BtnSelectedRoute = (BtnSelectedRoute_component.exports);




runtime_auto_import_default()(BtnSelectedRoute_component, 'components', {QBtn: QBtn["a" /* default */],QImg: QImg["a" /* default */],QIcon: QIcon["a" /* default */]});

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/layouts/WizardLayout.vue?vue&type=script&lang=js&

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





/* harmony default export */ var WizardLayoutvue_type_script_lang_js_ = ({
  name: 'WizardLayout',
  components: {
    EssentialNavigation: EssentialNavigation,
    EssentialLink: EssentialLink,
    BtnSelectedRoute: BtnSelectedRoute
  },

  data() {
    return {
      leftDrawerOpen: false,
      childrenDev: routes["c" /* childrenDev */],
      childrenWizard: routes["d" /* childrenWizard */]
    };
  },

  computed: objectSpread2_default()({
    saveHarvest: function () {
      return {
        text: 'Sun',
        icon: 'mdi-white-balance-sunny',
        image: ''
      };
    }
  }, Object(mapBind["a" /* mapBind */])('localconfig', ['btnSize', 'btnSpace', 'crateSelected', 'cropSelected', 'placeSelected', 'devMode'])),

  created() {// console.log('this', this)
  }

});
// CONCATENATED MODULE: ./src/layouts/WizardLayout.vue?vue&type=script&lang=js&
 /* harmony default export */ var layouts_WizardLayoutvue_type_script_lang_js_ = (WizardLayoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./src/layouts/WizardLayout.vue?vue&type=style&index=0&lang=css&
var WizardLayoutvue_type_style_index_0_lang_css_ = __webpack_require__("a940");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/layout/QLayout.js + 3 modules
var QLayout = __webpack_require__("4d5a");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/drawer/QDrawer.js + 1 modules
var QDrawer = __webpack_require__("9404");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QList.js
var QList = __webpack_require__("1c1c");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPageContainer.js
var QPageContainer = __webpack_require__("09e3");

// CONCATENATED MODULE: ./src/layouts/WizardLayout.vue






/* normalize component */

var WizardLayout_component = Object(componentNormalizer["a" /* default */])(
  layouts_WizardLayoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var WizardLayout = __webpack_exports__["default"] = (WizardLayout_component.exports);





runtime_auto_import_default()(WizardLayout_component, 'components', {QLayout: QLayout["a" /* default */],QDrawer: QDrawer["a" /* default */],QList: QList["a" /* default */],QPageContainer: QPageContainer["a" /* default */]});


/***/ }),

/***/ "270b":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

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

/***/ "a940":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("270b");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_WizardLayout_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ })

}]);
//# sourceMappingURL=6.e0dfd56c.js.map