(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

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

/***/ "a4ed":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dev0.vue?vue&type=template&id=195390cc&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('q-page',{staticClass:"fit column no-wrap justify-center items-center content-center"},[_c('h1',[_vm._v("Global Settings")]),_c('section',[_c('q-btn',{attrs:{"round":"","color":_vm.$q.dark.isActive ? 'blue' : 'black',"icon":"mdi-lightbulb-on-outline"},on:{"click":function($event){return _vm.$q.dark.toggle()}}})],1),_c('debugSection',{attrs:{"label":"globalConfig","obj":_vm.globalConfig}}),_c('debugSection',{attrs:{"label":"serialDevice","obj":_vm.serialDevice}}),_c('section',[_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"load from server","icon":"sync"},on:{"click":function($event){return _vm.globalConfigLoadFromServer()}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"testDev pos"},on:{"click":function($event){return _vm.testDev('pos')}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"testDev rot"},on:{"click":function($event){return _vm.testDev('rot')}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcFindAll"},on:{"click":function($event){return _vm.gcFindAll()}}})],1),_c('section',[_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcFind pos"},on:{"click":function($event){return _vm.gcFind('pos')}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcFind rot"},on:{"click":function($event){return _vm.gcFind('rot')}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcGet pos"},on:{"click":function($event){return _vm.gcGet('pos')}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcGet rot"},on:{"click":function($event){return _vm.gcGet('rot')}}})],1),_c('section',[_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcGetter pos"},on:{"click":function($event){return _vm.gcGetter('pos')}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcGetter rot"},on:{"click":function($event){return _vm.gcGetter('rot')}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcSetter pos 22"},on:{"click":function($event){return _vm.gcSetter('pos', 22)}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcSetter pos 77"},on:{"click":function($event){return _vm.gcSetter('pos', 77)}}})],1),_c('section',[_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcUseFind pos"},on:{"click":function($event){return _vm.gcUseFind('pos')}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcUseFind rot"},on:{"click":function($event){return _vm.gcUseFind('rot')}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcUseGet pos"},on:{"click":function($event){return _vm.gcUseGet('pos')}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcUseGet rot"},on:{"click":function($event){return _vm.gcUseGet('rot')}}})],1),_c('section',[_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcSave 'pos':'99'"},on:{"click":function($event){return _vm.gcSave('pos', '99')}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcSave 'pos':'10'"},on:{"click":function($event){return _vm.gcSave('pos', '10')}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcSave 'rot':'0°'"},on:{"click":function($event){return _vm.gcSave('rot', '0°')}}}),_c('q-btn',{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{"label":"gcSave 'rot':'75°'"},on:{"click":function($event){return _vm.gcSave('rot', '75°')}}})],1),_c('section',[_c('q-input',{attrs:{"filled":"","label":"serial device"},scopedSlots:_vm._u([{key:"append",fn:function(){return [_c('q-icon',{staticClass:"cursor-pointer",style:({opacity: (_vm.serialDevice !== '' ? 'inherit' : '0.1')}),attrs:{"name":"close"},on:{"click":function($event){_vm.serialDevice = '/dev/ttyUSB0'}}})]},proxy:true}]),model:{value:(_vm.serialDevice),callback:function ($$v) {_vm.serialDevice=$$v},expression:"serialDevice"}})],1)],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/pages/Dev0.vue?vue&type=template&id=195390cc&

// EXTERNAL MODULE: ./src/components/debugSection.vue + 4 modules
var debugSection = __webpack_require__("91e5");

// EXTERNAL MODULE: ./node_modules/feathers-vuex/dist/index.js + 25 modules
var dist = __webpack_require__("9e62");

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/pages/Dev0.vue?vue&type=script&lang=js&
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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


/* harmony default export */ var Dev0vue_type_script_lang_js_ = ({
  data() {
    return {// serialDeviceInt: '/dev/ttyUSB42'
    };
  },

  components: {
    DebugSection: debugSection["a" /* default */]
  },
  mixins: [Object(dist["b" /* makeFindMixin */])({
    service: 'global-config'
  })],
  computed: {
    globalConfigParams() {
      return {
        query: {}
      };
    },

    serialDevice: {
      get() {
        // return this.$store.state.appconfig.globalMessage
        // console.log(this)
        // const modelClassName = 'GlobalConfig'
        const modelName = 'global-config';
        const configName = 'serialDevice'; // const ModelClass = this.$FeathersVuex.api[modelClassName]
        // // const gcEntry = ModelClass.getFromStore(configName)
        // const { item: gcEntry } = useGet({
        //     model: ModelClass,
        //     id: configName
        // })
        // console.log('serialDevice get:', gcEntry.value.value)
        // return gcEntry.value.value
        // const configName = 'serialDevice'
        // const modelClassName = 'GlobalConfig'
        // const ModelClass = this.$FeathersVuex.api[modelClassName]
        // const gcEntry = ModelClass.getFromStore(configName)
        // console.log('serialDevice get', gcEntry)
        // let resultValue = null
        // if (gcEntry) {
        //     resultValue = gcEntry.value
        // }
        // console.log('this.$store.state', this.$store.state)

        let resultValue = null;
        const gcItem = this.$store.state[modelName].keyedById[configName];

        if (gcItem) {
          resultValue = gcItem.value;
        }

        return resultValue;
      },

      set(val) {
        // do something
        console.group('serialDevice set');
        console.log('val', val); // this.serialDeviceInt = val
        // console.log('this.$store', this.$store)
        // console.log('this.$FeathersVuex', this.$FeathersVuex)
        // console.log('this.$store', this.$store)

        const configName = 'serialDevice';
        const modelClassName = 'GlobalConfig';
        const ModelClass = this.$FeathersVuex.api[modelClassName];
        const gcEntryNew = new ModelClass({
          id: configName,
          name: configName,
          value: val
        });
        gcEntryNew.save().then(() => {
          console.log('gcSave save: done.');
        }).catch(error => {
          console.error('gcSave save: ' + error.message, error);

          if (error.name === 'NotFound') {
            gcEntryNew.create();
          } else {
            console.error('gcSave save: ' + error.message, error);
          }
        });
        console.groupEnd();
      }

    }
  },
  methods: {
    globalConfigLoadFromServer: function () {
      console.log('TODO: implement load from server');
      this.$axios.get('/config/global-config.json').then(response => {
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
    },
    testDev: function (val) {
      console.group('testDev'); // const modelClassName = 'GlobalConfig'
      // const ModelClass = this.$FeathersVuex.api[modelClassName]
      // // const configName = 'pos'
      // const configName = val

      console.log('this', this);
      console.log('val', val); // const gcEntry = ModelClass.getFromStore(configName)
      // console.log('gcEntry', gcEntry)
      // console.log('gcEntry.value', gcEntry.value)
      // console.log('new ModelClass')
      // const gcEntryNew = new ModelClass({
      //     id: configName,
      //     name: configName,
      //     value: this.serialDeviceInt,
      //     description: 'testDev - ' + val + ' - new entry'
      // })
      // gcEntryNew.save().then(() => {
      //     console.log('gcEntryNew save: done.')
      // }).catch((error) => {
      //     console.error('gcEntryNew save: ' + error.message, error)
      // })
      // console.log('gcEntryNew', gcEntryNew)
      // console.log('gcEntryNew.value', gcEntryNew.value)
      // gcEntry.value.patch({
      //     value: 'HelloWorld Sun'
      // }).then(() => {
      //     console.log('patch done.')
      // })
      // gcEntry.value.save().then(() => {
      //     console.log('save done.')
      // })
      // console.log('gcEntry.value.value', gcEntry.value.value)
      // this.$store.dispatch(
      //     'global-config/patch', [configName, {
      //         name: configName,
      //         value: 'HelloWorld'
      //     }, {}]
      // ).then(() => {
      //     console.log('patch done.')
      // }).catch((error) => {
      //     console.error(error.message, error)
      // })

      console.groupEnd();
    },
    gcSetter: function (configName, val) {
      console.group('gcSetter'); // this only mutates the value in the store. no interaction with the backend.

      const modelName = 'global-config';
      const gcItem = this.$store.state[modelName].keyedById[configName]; // console.log('gcItem', gcItem)

      if (gcItem) {
        const gcItemNew = {
          id: gcItem.id,
          name: configName,
          value: val
        };
        this.$store.commit(modelName + '/updateItem', gcItemNew); // this is not allowed:
        // gcItem.value = val
        // this.$store.commit(modelName + '/updateItem', gcItem)
      }

      console.groupEnd();
    },
    gcGetter: function (configName) {
      console.group('gcGetter'); // this only reads the value from the store. no interaction with the backend.

      const modelName = 'global-config';
      const gcItem = this.$store.state[modelName].keyedById[configName];
      console.log('gcItem', gcItem);

      if (gcItem) {
        if (gcItem.value) {
          console.log('gcItem.value', gcItem.value);
          console.log('gcItem.name', gcItem.name);
          console.log('gcItem._id', gcItem._id);
        }
      }

      console.groupEnd();
    },
    gcFindAll: function () {
      console.group('gcFindAll');
      const modelClassName = 'GlobalConfig';
      const ModelClass = this.$FeathersVuex.api[modelClassName];
      const params = {
        query: {},
        paginate: false
      };
      ModelClass.find(params).then(resultFind => {
        console.group('gcFindAll.then');
        console.log('resultFind', resultFind);
        const gcList = resultFind.data;
        console.log('gcList', gcList);

        if (gcList) {
          console.log('gcList[0]', gcList[0]);
          const gcItem = gcList[0];

          if (gcItem) {
            console.log('gcItem.value', gcItem.value);
            console.log('gcItem._id', gcItem._id);
          }
        }

        console.groupEnd();
      }).catch(error => {
        console.error(error.message, error);
      });
      console.groupEnd();
    },
    gcFind: function (configName) {
      console.group('gcFind');
      const modelClassName = 'GlobalConfig';
      const ModelClass = this.$FeathersVuex.api[modelClassName];
      const params = {
        query: {
          // id: configName,
          name: configName
        },
        paginate: false
      };
      ModelClass.find(params).then(result => {
        console.group('gcFind.then');
        console.log('result', result);
        const gcList = result.data;
        console.log('gcList', gcList);

        if (gcList) {
          console.log('gcList[0]', gcList[0]);
          const gcItem = gcList[0];

          if (gcItem) {
            console.log('gcItem.value', gcItem.value);
            console.log('gcItem._id', gcItem._id);
          }
        }

        console.groupEnd();
      }).catch(error => {
        console.error(error.message, error);
      });
      console.groupEnd();
    },
    gcGet: function (configName) {
      console.group('gcGet');
      const modelClassName = 'GlobalConfig';
      const ModelClass = this.$FeathersVuex.api[modelClassName];
      ModelClass.get(configName).then(gcItem => {
        console.log('gcItem', gcItem);

        if (gcItem.value) {
          console.log('gcItem.value', gcItem.value);
          console.log('gcItem.name', gcItem.name);
          console.log('gcItem._id', gcItem._id);
        }
      }).catch(error => {
        if (error.name === 'NotFound') {
          console.log('gcGet - ' + error.name + ': ', error.message);
        } else {
          console.error('gcGet: ' + error.message, error);
        }
      });
      console.groupEnd();
    },
    gcUseFind: function (configName) {
      console.group('gcUseFind'); // the result from useFind is reactive!!
      // it also watches the id and params obj.

      const modelClassName = 'GlobalConfig';
      const ModelClass = this.$FeathersVuex.api[modelClassName];
      const params = {
        query: {
          // id: configName,
          name: configName
        }
      };
      const gcList = Object(dist["c" /* useFind */])({
        model: ModelClass,
        params: params
      });
      console.log('gcList', gcList);

      if (gcList.items) {
        console.log('gcList.items.value', gcList.items.value);
        console.log('gcList.items.value[0]', gcList.items.value[0]);
        const gcItem = gcList.items.value[0];

        if (gcItem) {
          console.log('gcItem.value', gcItem.value);
          console.log('gcItem._id', gcItem._id);
        }
      }

      console.groupEnd();
    },
    gcUseGet: function (configName) {
      console.group('gcUseGet'); // the result from useGet is reactive!!
      // it also watches the id and params obj.

      const modelClassName = 'GlobalConfig';
      const ModelClass = this.$FeathersVuex.api[modelClassName]; // const params = {
      //     query: {
      //         // id: configName,
      //         name: configName
      //     }
      // }

      console.log('useGet'); // const { item: gcItem } = useGet({

      const result = Object(dist["d" /* useGet */])({
        model: ModelClass,
        // params: params,
        id: configName
      });
      console.log('result', result);
      const gcItem = result.item.value;
      console.log('gcItem', gcItem);

      if (gcItem) {
        console.log('gcItem.value', gcItem.value);
        console.log('gcItem.name', gcItem.name);
        console.log('gcItem.id', gcItem.id);
      }

      console.groupEnd();
    },
    gcSave: function (configName, val) {
      console.group('gcSave');
      const modelClassName = 'GlobalConfig';
      const ModelClass = this.$FeathersVuex.api[modelClassName];
      console.log('this', this);
      console.log('configName', configName);
      console.log('val', val); // ------------------------------------------
      // get item

      const {
        item: resultUseGet
      } = Object(dist["d" /* useGet */])({
        model: ModelClass,
        id: configName
      });
      let gcItem = resultUseGet.value;
      console.log('gcItem', gcItem); // ------------------------------------------
      // patch or create

      console.log('patch or create');

      if (!gcItem) {
        console.log('new ModelClass');
        gcItem = new ModelClass({
          id: configName,
          _id: configName,
          name: configName,
          value: val // description: 'testDev - ' + val + ' - new entry'

        });
      } // gcItem.save().then(() => {


      gcItem.patch({
        data: {
          value: val
        }
      }).then(() => {
        console.log('gcSave patch: done.');
      }).catch(error => {
        if (error.name === 'NotFound') {
          console.log('gcSave - ' + error.name + ': ', error.message);
          gcItem.create().then(() => {
            console.log('gcSave create: done.');
          }).catch(error => {
            console.error('gcSave: create - ' + error.message, error);
          });
        } else {
          console.error('gcSave: patch - ' + error.message, error);
        }
      });
      console.log('gcItem', gcItem);
      console.log('gcItem.value', gcItem.value); // gcEntry.value.patch({
      //     value: 'HelloWorld Sun'
      // }).then(() => {
      //     console.log('patch done.')
      // })
      // gcEntry.value.save().then(() => {
      //     console.log('save done.')
      // })
      // console.log('gcEntry.value.value', gcEntry.value.value)
      // this.$store.dispatch(
      //     'global-config/patch', [configName, {
      //         name: configName,
      //         value: 'HelloWorld'
      //     }, {}]
      // ).then(() => {
      //     console.log('patch done.')
      // }).catch((error) => {
      //     console.error(error.message, error)
      // })

      console.groupEnd();
    } // ...mapActions('global-config', { findGC: 'find' })

  },
  // created () {
  //     // Find all appointments. We'll use the getters to separate them.
  //     // this.findGC({ query: {} })
  // },
  filters: {
    pretty: function (value) {
      let valueJson = value;

      try {
        valueJson = JSON.parse(value);
      } catch (e) {// console.log(value, e)
      }

      return JSON.stringify(valueJson, null, 4);
    }
  },
  name: 'PageSettings'
});
// CONCATENATED MODULE: ./src/pages/Dev0.vue?vue&type=script&lang=js&
 /* harmony default export */ var pages_Dev0vue_type_script_lang_js_ = (Dev0vue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/page/QPage.js
var QPage = __webpack_require__("9989");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/btn/QBtn.js + 2 modules
var QBtn = __webpack_require__("9c40");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/input/QInput.js + 2 modules
var QInput = __webpack_require__("27f9");

// EXTERNAL MODULE: ./node_modules/quasar/src/components/icon/QIcon.js
var QIcon = __webpack_require__("0016");

// EXTERNAL MODULE: ./node_modules/quasar/src/directives/Ripple.js + 1 modules
var Ripple = __webpack_require__("714f");

// EXTERNAL MODULE: ./node_modules/@quasar/app/lib/webpack/runtime.auto-import.js
var runtime_auto_import = __webpack_require__("eebe");
var runtime_auto_import_default = /*#__PURE__*/__webpack_require__.n(runtime_auto_import);

// CONCATENATED MODULE: ./src/pages/Dev0.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pages_Dev0vue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var Dev0 = __webpack_exports__["default"] = (component.exports);





runtime_auto_import_default()(component, 'components', {QPage: QPage["a" /* default */],QBtn: QBtn["a" /* default */],QInput: QInput["a" /* default */],QIcon: QIcon["a" /* default */]});runtime_auto_import_default()(component, 'directives', {Ripple: Ripple["a" /* default */]});


/***/ }),

/***/ "c266":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

}]);
//# sourceMappingURL=5.357ecc6a.js.map