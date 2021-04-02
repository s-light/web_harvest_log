(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "49c4":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_debugSection_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("c266");
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_debugSection_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_2_0_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_2_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_oneOf_2_2_node_modules_quasar_app_lib_webpack_loader_auto_import_client_js_kebab_node_modules_vue_loader_lib_index_js_vue_loader_options_debugSection_vue_vue_type_style_index_0_media_screen_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "644c":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return importAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return removeAll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return serverExportToCSV; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return serverImport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return removeDBFile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return removeDB; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return serverSystemAction; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return gitPull; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return startScaleDemo; });
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _store_mapBindIDItems_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("b489");


function importAll() {
  this.serverImport('crate');
  this.serverImport('crop');
  this.serverImport('crop-filter');
}
function removeAll() {
  // this.removeDBFile('crate')
  // this.removeDBFile('crop')
  // this.removeDBFile('crop-filter')
  this.removeDB('crate');
  this.removeDB('crop');
  this.removeDB('crop-filter');
}
function serverExportToCSV(servicePath, timeframe) {
  console.group('serverExportToCSV');
  this.$q.notify({
    color: 'info',
    message: `Export ${servicePath} as CSV on server. Processing now.`,
    icon: 'info'
  });
  this.$FeathersVuex.api.Management.serverExportAsCSV(servicePath, timeframe).then(response => {
    console.log('serverImport: ', response);
    this.$q.notify({
      color: 'positive',
      message: `${servicePath} done.`,
      icon: 'info'
    });
  }).catch(error => {
    console.error('serverImport:', error);
    this.$q.notify({
      color: 'negative',
      message: `${servicePath} loading failed.`,
      icon: 'report_problem'
    });
  });
  console.groupEnd();
}
function serverImport(servicePath) {
  console.group('serverImport');
  this.$q.notify({
    color: 'info',
    message: `Import ${servicePath} from server. Processing now.`,
    icon: 'info'
  });
  this.$FeathersVuex.api.Management.serverImport(servicePath).then(response => {
    console.log('serverImport: ', response);
    this.$q.notify({
      color: 'positive',
      message: `${servicePath} done.`,
      icon: 'info'
    });
  }).catch(error => {
    console.error('serverImport:', error);
    this.$q.notify({
      color: 'negative',
      message: `${servicePath} loading failed.`,
      icon: 'report_problem'
    });
  });
  console.groupEnd();
}
function removeDBFile(servicePath) {
  console.group('removeDBFile');
  this.$q.notify({
    color: 'info',
    message: `remove ${servicePath} db from server. Processing now.`,
    icon: 'info'
  });
  this.$FeathersVuex.api.Management.removeDBFile(servicePath).then(response => {
    console.log('removeDBFile: ', response);
    this.$q.notify({
      color: 'positive',
      message: `${servicePath} done.`,
      icon: 'info'
    });
  }).catch(error => {
    console.error('removeDBFile:', error);
    this.$q.notify({
      color: 'negative',
      message: `${servicePath} removing failed.`,
      icon: 'report_problem'
    });
  });
  console.groupEnd();
}
function removeDB(servicePath) {
  console.group('removeDB', servicePath);
  this.$q.notify({
    color: 'info',
    message: `remove all entries from ${servicePath}. Processing now.`,
    icon: 'info'
  });
  const servicePathName = Object(_store_mapBindIDItems_js__WEBPACK_IMPORTED_MODULE_1__[/* servicePath2servicePathName */ "b"])(servicePath);
  const serviceStore = this[servicePathName]; // console.log(this)

  console.log('serviceStore', serviceStore);

  for (var entry of serviceStore) {
    console.log(entry);
    entry.remove();
  }

  this.$q.notify({
    color: 'positive',
    message: `${servicePath} done.`,
    // timeout: 30500,
    icon: 'info'
  });
  console.groupEnd();
}
function serverSystemAction(action) {
  console.group('serverSystemAction', action);
  this.$q.notify({
    color: 'info',
    message: `initiated server system action '${action}'`,
    icon: 'info'
  });
  this.$FeathersVuex.api.Management.serverSystemAction(action).then(response => {
    console.log('serverSystemAction: ', response);
    this.$q.notify({
      color: 'positive',
      message: `server system action '${action}' running. \n '${response}'`,
      icon: 'info'
    });
  }).catch(error => {
    console.error('serverSystemAction:', error);
    this.$q.notify({
      color: 'negative',
      message: `'${action}' failed. '${error}'`,
      icon: 'report_problem'
    });
  });
  console.groupEnd();
}
function gitPull() {
  console.group('gitPull');
  this.$q.notify({
    color: 'info',
    message: 'pull software updates',
    icon: 'info'
  });
  this.$FeathersVuex.api.Management.gitPull().then(response => {
    console.log('gitPull: ', response);
    this.$q.notify({
      color: 'positive',
      message: `gitPull successful. '${response}'`,
      icon: 'info'
    });
  }).catch(error => {
    console.error('gitPull:', error);
    this.$q.notify({
      color: 'negative',
      message: `gitPull failed. '${error}'`,
      icon: 'report_problem'
    });
  });
  console.groupEnd();
}
function startScaleDemo() {
  // this.$FeathersVuex.api.Serial
  // if (!model.demoHandler) {
  //     model.demoHandler = new ScaleDemoGenerator(model.store)
  // }
  // model.demoHandler.start()
  // model.store.commit('localconfig/setScaleUnit', 'kg')
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
}

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

/***/ "9bd8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Debug.vue?vue&type=template&id=387aa791&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"fit column no-wrap justify-center items-center content-center"},[_c('h1',[_vm._v(_vm._s(_vm.$t('debug')))]),_c('debugSection',{attrs:{"label":"platform","obj":this.$q.platform}}),_c('section'),_c('section',[_c('q-toggle',{attrs:{"size":"lg","label":"Dev Mode"},model:{value:(_vm.devMode),callback:function ($$v) {_vm.devMode=$$v},expression:"devMode"}})],1),_c('section',[_c('q-input',{attrs:{"filled":"","label":"button size (mm)","type":"number","debounce":"500"},model:{value:(_vm.btnSize),callback:function ($$v) {_vm.btnSize=_vm._n($$v)},expression:"btnSize"}}),_c('q-input',{attrs:{"filled":"","label":"button spaceing (mm)","type":"number","debounce":"500"},model:{value:(_vm.btnSpace),callback:function ($$v) {_vm.btnSpace=_vm._n($$v)},expression:"btnSpace"}})],1),_c('settingsSerial'),_c('debugSection',{attrs:{"label":"testthing","obj":_vm.testthing}})],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Debug.vue?vue&type=template&id=387aa791&

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/objectSpread2.js
var objectSpread2 = __webpack_require__("ded3");
var objectSpread2_default = /*#__PURE__*/__webpack_require__.n(objectSpread2);

// EXTERNAL MODULE: ./node_modules/feathers-vuex/dist/index.js + 25 modules
var dist = __webpack_require__("9e62");

// EXTERNAL MODULE: ./src/store/mapBind.js
var mapBind = __webpack_require__("8b93");

// EXTERNAL MODULE: ./src/components/debugSection.vue + 4 modules
var debugSection = __webpack_require__("91e5");

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/settingsSerial.vue?vue&type=template&id=c4e13048&
var settingsSerialvue_type_template_id_c4e13048_render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"fit column no-wrap justify-center items-center content-center"},[_c('section',[_c('h2',[_vm._v("Serial Settings")]),_c('q-select',{staticClass:"q-mr-md",attrs:{"rounded":"","outlined":"","label":"Device","option-label":function (item) { return item.comName; },"option-value":function (item) { return item; },"options":_vm.deviceList},scopedSlots:_vm._u([{key:"option",fn:function(scope){return [_c('q-item',_vm._g(_vm._b({},'q-item',scope.itemProps,false),scope.itemEvents),[_c('q-item-section',[_c('q-item-label',[_vm._v("\n                            "+_vm._s(scope.opt.comName)+"\n                        ")]),_c('q-item-label',{attrs:{"caption":""}},[_vm._v("\n                            "+_vm._s(scope.opt.pnpId)+"\n                        ")]),_c('q-item-label',{attrs:{"caption":""}},[_vm._v("\n                            "+_vm._s(scope.opt.manufacturer)+"\n                        ")]),_c('q-item-label',{attrs:{"caption":""}},[_vm._v("\n                            vendorId:"+_vm._s(scope.opt.vendorId)+"\n                        ")]),_c('q-item-label',{attrs:{"caption":""}},[_vm._v("\n                            productId:"+_vm._s(scope.opt.productId)+"\n                        ")]),_c('q-item-label',{attrs:{"caption":""}},[_vm._v("\n                            serialNumber:"+_vm._s(scope.opt.serialNumber)+"\n                        ")])],1)],1)]}},{key:"no-option",fn:function(){return [_c('q-item',[_c('q-item-section',[_vm._v("\n                        No Devices\n                    ")])],1)]},proxy:true},{key:"append",fn:function(){return [_c('q-btn',{attrs:{"flat":"","round":"","dense":"","hint":"search devices","icon":"refresh"},on:{"click":function($event){return _vm.updateSerialDeviceList()}},scopedSlots:_vm._u([{key:"loading",fn:function(){return [_c('q-spinner-radio')]},proxy:true}])})]},proxy:true}]),model:{value:(_vm.deviceSelected),callback:function ($$v) {_vm.deviceSelected=$$v},expression:"deviceSelected"}}),_c('q-btn',{style:({opacity: (_vm.deviceSelected ? 'inherit' : '0.05')}),attrs:{"rounded":"","icon":_vm.connected ? 'phonelink_off' : 'phonelink',"label":_vm.connected ? 'disconnect' : 'connect',"disable":!_vm.deviceSelected},on:{"click":function($event){return _vm.connect()}},scopedSlots:_vm._u([{key:"loading",fn:function(){return [_c('q-spinner-gears')]},proxy:true},{key:"after",fn:function(){return [_c('q-icon',{attrs:{"name":"close"}})]},proxy:true}])}),_c('debugSection',{attrs:{"label":"list","obj":_vm.list}}),_c('debugSection',{attrs:{"label":"port","obj":_vm.port}}),_c('debugSection',{attrs:{"label":"baudRate","obj":_vm.baudRate}}),_c('debugSection',{attrs:{"label":"serial","obj":_vm.serial}})],1)])}
var settingsSerialvue_type_template_id_c4e13048_staticRenderFns = []


// CONCATENATED MODULE: ./src/components/settingsSerial.vue?vue&type=template&id=c4e13048&

// EXTERNAL MODULE: ./src/store/mapBindIDItems.js
var mapBindIDItems = __webpack_require__("b489");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/components/settingsSerial.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const dummyResponder = {
  vendorId: -1,
  productId: -1,
  comName: '/dummyResponder/0',
  pnpId: -1,
  locationId: -1,
  serialNumber: '42',
  manufacturer: 's-light.eu',
  product: 'dummyResponder',
  release: undefined,
  interface: undefined,
  usagePage: undefined,
  usage: undefined
};
/* harmony default export */ var settingsSerialvue_type_script_lang_js_ = ({
  data() {
    return {
      deviceSelected: {},
      deviceList: [dummyResponder]
    };
  },

  components: {
    DebugSection: debugSection["a" /* default */]
  },
  mixins: [Object(dist["b" /* makeFindMixin */])({
    service: 'serial'
  })],
  computed: objectSpread2_default()({
    serialParams() {
      return {
        query: {}
      };
    }

  }, Object(mapBindIDItems["a" /* mapBindIDItems */])('serial', ['list', 'port', 'baudRate', 'connected'])),
  methods: {
    updateSerialDeviceList: function () {
      console.group('serverExportToCSV');
      const servicePath = 'serial';
      this.$q.notify({
        color: 'info',
        message: `update ${servicePath} device list. Processing now.`,
        icon: 'info'
      });
      this.$FeathersVuex.api.Management.updateSerialDeviceList().then(response => {
        console.log('updateSerialDeviceList: ', response);
        this.$q.notify({
          color: 'positive',
          message: `${servicePath} done.`,
          icon: 'info'
        });
      }).catch(error => {
        console.error('updateSerialDeviceList:', error);
        this.$q.notify({
          color: 'negative',
          message: `${servicePath} update failed.`,
          icon: 'report_problem'
        });
      });
      console.groupEnd();
    },
    connect: function () {
      console.log('deviceSelected', this.deviceSelected);
    }
  },
  mounted: function () {
    // console.group('mounted..')
    this.deviceSelected = this.deviceList[0]; // console.groupEnd()
  },
  name: 'SettingsSerial'
});
// CONCATENATED MODULE: ./src/components/settingsSerial.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_settingsSerialvue_type_script_lang_js_ = (settingsSerialvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/select/QSelect.js + 11 modules
var QSelect = __webpack_require__("ddd8");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItem.js + 1 modules
var QItem = __webpack_require__("66e5");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemSection.js
var QItemSection = __webpack_require__("4074");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/item/QItemLabel.js
var QItemLabel = __webpack_require__("0170");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 2 modules
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerRadio.js
var QSpinnerRadio = __webpack_require__("9569");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/spinner/QSpinnerGears.js
var QSpinnerGears = __webpack_require__("cf57");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/components/settingsSerial.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_settingsSerialvue_type_script_lang_js_,
  settingsSerialvue_type_template_id_c4e13048_render,
  settingsSerialvue_type_template_id_c4e13048_staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var settingsSerial = (component.exports);










runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QSelect: QSelect["a" /* default */],QItem: QItem["a" /* default */],QItemSection: QItemSection["a" /* default */],QItemLabel: QItemLabel["a" /* default */],QBtn: QBtn["a" /* default */],QSpinnerRadio: QSpinnerRadio["a" /* default */],QSpinnerGears: QSpinnerGears["a" /* default */],QIcon: QIcon["a" /* default */]});

// EXTERNAL MODULE: ./src/management_func.js
var management_func = __webpack_require__("644c");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Debug.vue?vue&type=script&lang=js&

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




 // Detecting Locale
// https://quasar.dev/options/quasar-language-packs#Detecting-Locale
// https://quasar.dev/options/app-internationalization#Detecting-Locale
// get browser lang:
// this.$q.lang.getLocale()
// get selected lang
// this.$q.lang.isoName
// or
// this.$i18n.locale

/* harmony default export */ var Debugvue_type_script_lang_js_ = ({
  data() {
    return {
      testthing: 'hello world'
    };
  },

  computed: objectSpread2_default()(objectSpread2_default()({}, Object(mapBind["a" /* mapBind */])('localconfig', ['btnSize', 'btnSpace', 'devMode'])), {}, {
    globalConfigParams() {
      return {
        query: {}
      };
    },

    crateParams() {
      return {
        query: {
          $sort: {
            _id: 1
          }
        }
      };
    },

    cropParams() {
      return {
        query: {
          $sort: {
            _id: 1
          }
        }
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
  methods: {
    importAll: management_func["b" /* importAll */],
    removeAll: management_func["c" /* removeAll */],
    serverExportToCSV: management_func["f" /* serverExportToCSV */],
    serverImport: management_func["g" /* serverImport */],
    removeDBFile: management_func["e" /* removeDBFile */],
    removeDB: management_func["d" /* removeDB */],
    serverSystemAction: management_func["h" /* serverSystemAction */],
    gitPull: management_func["a" /* gitPull */],
    startScaleDemo: management_func["i" /* startScaleDemo */]
  },
  created: function () {// return mapBindIDItems('global-config', ['serialDevice', 'pos', 'btnSize', 'btnSpace'])
  },
  mixins: [Object(dist["b" /* makeFindMixin */])({
    service: 'global-config'
  }), Object(dist["b" /* makeFindMixin */])({
    service: 'crate'
  }), Object(dist["b" /* makeFindMixin */])({
    service: 'crop'
  }), Object(dist["b" /* makeFindMixin */])({
    service: 'crop-filter'
  })],
  components: {
    debugSection: debugSection["a" /* default */],
    settingsSerial: settingsSerial
  },
  name: 'PageDebug'
});
// CONCATENATED MODULE: ./src/pages/Debug.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Debugvue_type_script_lang_js_ = (Debugvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/quasar/src/components/toggle/QToggle.js + 3 modules
var QToggle = __webpack_require__("9564");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// CONCATENATED MODULE: ./src/pages/Debug.vue





/* normalize component */

var Debug_component = Object(componentNormalizer["a" /* default */])(
  pages_Debugvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Debug = __webpack_exports__["default"] = (Debug_component.exports);




runtime_auto_import_default()(Debug_component, 'components', {QPage: QPage["a" /* default */],QToggle: QToggle["a" /* default */],QInput: QInput["a" /* default */]});


/***/ }),

/***/ "b489":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export capitalizeFirstLetter */
/* unused harmony export decapitalizeFirstLetter */
/* unused harmony export servicePath2modelClassName */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return servicePath2servicePathName; });
/* unused harmony export findList */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return mapBindIDItems; });
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("fb6a");
/* harmony import */ var core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_array_slice__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("e6cf");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2b0e");
/* harmony import */ var feathers_vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9e62");
/* harmony import */ var _feathers_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__("2e40");



// inspired by mapBind.js
// https://vuex.feathersjs.com/feathers-vuex-forms.html#feathersvuexinputwrapper
// ------------------------------------------
// usage:
// import { mapBindIDItems } from 'store/mapBindIDItems.js'
//
// export default {
//     name: 'ComponentName',
//     computed: {
//         ...mapBindIDItems('global-config', ['serialDevice', 'someOtherThing'])
//     },
// }



function capitalizeFirstLetter(string) {
  // https://stackoverflow.com/questions/1026069/how-do-i-make-the-first-letter-of-a-string-uppercase-in-javascript
  return string.charAt(0).toUpperCase() + string.slice(1);
}
function decapitalizeFirstLetter(string) {
  return string.charAt(0).toLowerCase() + string.slice(1);
}
function servicePath2modelClassName(servicePath) {
  let modelParts = servicePath.split('-');
  modelParts = modelParts.map(item => {
    return capitalizeFirstLetter(item);
  }); // console.log('modelParts', modelParts)

  const modelClassName = modelParts.join('');
  return modelClassName;
}
function servicePath2servicePathName(servicePath) {
  const modelClassName = servicePath2modelClassName(servicePath);
  const servicePathName = decapitalizeFirstLetter(modelClassName);
  return servicePathName;
}
const findList = async function (servicePath) {
  const modelClassName = servicePath2modelClassName(servicePath);
  const ModelClass = _feathers_client__WEBPACK_IMPORTED_MODULE_5__[/* models */ "e"].api[modelClassName];
  const params = {
    query: {},
    paginate: false
  };
  const resultFind = await ModelClass.find(params);
  const gcList = resultFind.data;
  return gcList;
};
const mapBindIDItems = function (servicePath, entryNames) {
  // helper function for vuex
  // create setter and getter functions for given store and properties
  // ------------------------------------------
  // global
  const resultServicePath = {};
  const resultEntries = {}; // console.log('models.api', models.api)
  // const ModelClass = this.$FeathersVuex.api[servicePath2modelClassName(servicePath)]

  const modelClassName = servicePath2modelClassName(servicePath); // console.log('modelClassName', modelClassName)

  const ModelClass = _feathers_client__WEBPACK_IMPORTED_MODULE_5__[/* models */ "e"].api[modelClassName]; // console.log('ModelClass', ModelClass)

  const servicePathName = decapitalizeFirstLetter(modelClassName); // ------------------------------------------
  // prepare empty base

  const reactiveBase = {};
  vue__WEBPACK_IMPORTED_MODULE_3__["default"].set(reactiveBase, 'gcList', {});
  resultServicePath[servicePathName] = {
    get: function () {
      return reactiveBase.gcList;
    }
  };

  for (const entryName of entryNames) {
    resultEntries[entryName] = {
      get: function () {
        return null;
      },
      set: function (val) {}
    };
  } // ------------------------------------------
  // servicePath setup


  const params = {
    query: {},
    paginate: false
  };
  ModelClass.find(params).then(resultFind => {
    for (const item of resultFind.data) {
      reactiveBase.gcList[item.id] = item;
    }
  }).catch(error => {
    // console.error(error.message, error)
    console.error(error.type, error.message);
  }); // ------------------------------------------
  // entryNames setup

  for (const entryName of entryNames) {
    // get from server and store
    const resultUseGet = Object(feathers_vuex__WEBPACK_IMPORTED_MODULE_4__[/* useGet */ "d"])({
      model: ModelClass,
      id: entryName,
      _id: entryName
    });
    let gcItem = resultUseGet.item.value; // check if item exists

    if (!gcItem) {
      // create new item
      const data = {
        id: entryName,
        _id: entryName,
        value: null
      };
      gcItem = new ModelClass(data); // gcItem.create().catch((error) => {
      //     console.log('mapBindIDItems: create - ' + error.message, error)
      // })

      gcItem.create().catch(error => {
        console.error('mapBindIDItems: create - ', error.type, error.message); // console.log('gcItem', gcItem)
        // console.log('ModelClass', ModelClass)
        // console.log('ModelClass.store.commit', ModelClass.store.commit)
        // console.log(`ModelClass.store.commit '${ModelClass.store.commit}'`)

        console.log('→ manually commit mutation *addItem*');
        ModelClass.store.commit(servicePath + '/addItem', data);
      });
    }

    const gcItemClone = gcItem.clone();

    resultEntries[entryName].get = function () {
      return gcItemClone.value;
    };

    resultEntries[entryName].set = function (val) {
      gcItemClone.value = val;
      gcItemClone.commit();
      gcItem.patch({
        data: {
          value: val
        }
      });
    };
  }

  const result = Object.assign({}, resultServicePath, resultEntries);
  return result;
};

/***/ }),

/***/ "c266":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=2.e71a5f05.js.map