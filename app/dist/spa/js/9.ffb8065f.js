(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "44dc":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dev2Layout.vue?vue&type=template&id=6b1db8f7&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{},[_c('q-btn-toggle',{attrs:{"no-caps":"","rounded":"","unelevated":"","toggle-color":"primary","color":"white","text-color":"primary","options":[
              {label: 'Vertical', value: true},
              {label: 'Horicontal', value: false}
            ]},model:{value:(_vm.btnVertical),callback:function ($$v) {_vm.btnVertical=$$v},expression:"btnVertical"}}),_c('btn-toggle-grid',{attrs:{"vertical":_vm.btnVertical,"options":_vm.cropFilter,"active-class":"bg-orange","push":"","rounded":"","stack":"","size":'30mm',"space":_vm.btnSpace + 'mm'},model:{value:(_vm.cropFilterSelected),callback:function ($$v) {_vm.cropFilterSelected=$$v},expression:"cropFilterSelected"}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Dev2Layout.vue?vue&type=template&id=6b1db8f7&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./node_modules/feathers-vuex/dist/index.js + 25 modules
var dist = __webpack_require__("9e62");

// EXTERNAL MODULE: ./src/store/mapBind.js
var mapBind = __webpack_require__("8b93");

// EXTERNAL MODULE: ./src/components/BtnToggleGrid.vue + 4 modules
var BtnToggleGrid = __webpack_require__("46fb");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dev2Layout.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
//     // mapActions
// } from 'vuex'

 // import DebugSection from 'components/debugSection'


/* harmony default export */ var Dev2Layoutvue_type_script_lang_js_ = ({
  name: 'PageDev2_Layout',

  data() {
    return {
      btnVertical: false
    };
  },

  computed: objectSpread2_default()(objectSpread2_default()({}, Object(mapBind["a" /* mapBind */])('localconfig', ['btnSize', 'btnSpace', 'cropSelected', 'cropFilterSelected'])), {}, {
    cropParams() {
      return {
        query: this.cropFilterSelected.queryFixed
      };
    },

    cropFilterParams() {
      return {
        query: {
          $sort: {
            _id: 1
          }
        }
      };
    }

  }),
  mixins: [Object(dist["b" /* makeFindMixin */])({
    service: 'crop'
  }), Object(dist["b" /* makeFindMixin */])({
    service: 'crop-filter'
  })],
  components: {
    // DebugSection,
    BtnToggleGrid: BtnToggleGrid["a" /* default */]
  }
});
// CONCATENATED MODULE: ./src/pages/Dev2Layout.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Dev2Layoutvue_type_script_lang_js_ = (Dev2Layoutvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn-toggle/QBtnToggle.js
var QBtnToggle = __webpack_require__("6a67");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/Dev2Layout.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Dev2Layoutvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Dev2Layout = __webpack_exports__["default"] = (component.exports);



runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QBtnToggle: QBtnToggle["a" /* default */]});


/***/ }),

/***/ "46fb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BtnToggleGrid.vue?vue&type=template&id=616110ac&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{class:_vm.containerClassObject},_vm._l((_vm.options),function(item){return _c('q-btn',{key:item._id,class:item._id === _vm.value._id ? _vm.activeClass : '',style:({ margin: _vm.space}),attrs:{"stack":"","title":item._id},on:{"click":function($event){_vm.$emit('input', item); _vm.$emit('click', $event)}}},[(item.icon)?_c('q-icon',{attrs:{"size":_vm.size,"name":item.icon}}):(item.image)?_c('q-img',{style:({width: _vm.size, height: _vm.size}),attrs:{"src":_vm.imageBaseURL + item.image,"contain":""}}):_vm._e(),_c('div',{style:({ 'font-size': _vm.fontSize, 'line-height':'100%' })},[_vm._v("\n            "+_vm._s(item.text)+"\n        ")])],1)}),1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/components/BtnToggleGrid.vue?vue&type=template&id=616110ac&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/BtnToggleGrid.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ var BtnToggleGridvue_type_script_lang_js_ = ({
  name: 'BtnToggleGrid',

  data() {
    return {};
  },

  methods: {//
  },
  computed: {
    containerClassObject: function () {
      return [{
        column: this.vertical
      }, {
        row: !this.vertical
      }, 'wrap', // 'justify-around',
      'content-start', 'items-center'];
    }
  },
  props: {
    value: {
      type: Object,
      required: false,
      default: () => {
        return undefined;
      }
    },
    options: {
      type: Array,
      required: false,
      default: () => {
        return [];
      }
    },
    // key: {
    //     this does not work :-(
    //     as iam not aible to use this in the template..
    //     type: String,
    //     required: '_id'
    // },
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
    vertical: {
      type: Boolean,
      required: false,
      default: false
    } // showImage: {
    //     type: Boolean,
    //     required: false,
    //     default: true
    // }

  }
});
// CONCATENATED MODULE: ./src/components/BtnToggleGrid.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_BtnToggleGridvue_type_script_lang_js_ = (BtnToggleGridvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 2 modules
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/img/QImg.js + 1 modules
var QImg = __webpack_require__("068f");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/BtnToggleGrid.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_BtnToggleGridvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var BtnToggleGrid = __webpack_exports__["a"] = (component.exports);




runtime_auto_import_default()(component, 'components', {QBtn: QBtn["a" /* default */],QIcon: QIcon["a" /* default */],QImg: QImg["a" /* default */]});


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

/***/ })

}]);
//# sourceMappingURL=9.ffb8065f.js.map