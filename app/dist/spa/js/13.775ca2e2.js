(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

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
  this.$FeathersVuex.api.Management.serverShutdown().then(response => {
    console.log('serverSystemAction: ', response);
    this.$q.notify({
      color: 'positive',
      message: `server system action '${action}' running. \n '${response}'`,
      icon: 'info'
    });
  }).catch(error => {
    console.error('serverShutdown:', error);
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

/***/ "8b24":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=template&id=79e477bf&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"fit column no-wrap justify-center items-center content-center"},[_c('section',{staticClass:"q-pa-md row justify-center"},[_c('h1',[_vm._v("Web Harvest Log")])]),_c('section',{staticClass:"text-center"},[_c('h1',[_vm._v("\n            "+_vm._s(_vm._f("formatdate")(_vm.time,"HH:mm:ss"))+"\n        ")]),_c('h1',[_vm._v("\n            "+_vm._s(_vm._f("formatdate")(_vm.time,"DD.MM.YYYY"))+"\n        ")])]),_c('section',[_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":_vm.$t('shutdown_system'),"icon":"mdi-dock-window"},on:{"click":function($event){return _vm.serverSystemAction('shutdown')}}})],1)])}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=template&id=79e477bf&

// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js + 1 modules
var date = __webpack_require__("bd4c");

// EXTERNAL MODULE: ./src/management_func.js
var management_func = __webpack_require__("644c");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Index.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
;

/* harmony default export */ var Indexvue_type_script_lang_js_ = ({
  data() {
    return {
      url: 'https://github.com/s-light/quasar_with_featherjs/',
      windowObjectReference: null,
      time: new Date()
    };
  },

  methods: {
    serverSystemAction: management_func["h" /* serverSystemAction */],

    // openInNewWindow () {
    //     // https://developer.mozilla.org/en-US/docs/Web/API/Window/open
    //     if (this.windowObjectReference == null || this.windowObjectReference.closed) {
    //         this.windowObjectReference = window.open(
    //             window.location,
    //             'Harvest Log',
    //             `
    //                 resizable=yes,
    //                 scrollbars=yes,
    //                 menubar=no,
    //                 toolbar=no,
    //                 locationr=no,
    //                 status=no
    //             `)
    //     } else {
    //         this.windowObjectReference.focus()
    //     };
    // }
    updateTime() {
      this.time = new Date();
    }

  },
  filters: {
    formatdate(value, format = 'HH:mm:ss DD.MM.YYYY') {
      // 'YYYY-MM-DDTHH:mm:ss.SSSZ'
      return date["a" /* default */].formatDate(new Date(value), format);
    },

    toLocal(value, lang = 'de') {
      return new Date(value).toLocaleString(lang);
    }

  },

  mounted() {
    setInterval(this.updateTime, 1000);
  },

  name: 'PageIndex'
});
// CONCATENATED MODULE: ./src/pages/Index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Indexvue_type_script_lang_js_ = (Indexvue_type_script_lang_js_); 
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

// CONCATENATED MODULE: ./src/pages/Index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Indexvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Index = __webpack_exports__["default"] = (component.exports);



runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QBtn: QBtn["a" /* default */]});runtime_auto_import_default()(component, 'directives', {Ripple: Ripple["a" /* default */]});


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

/***/ })

}]);
//# sourceMappingURL=13.775ca2e2.js.map