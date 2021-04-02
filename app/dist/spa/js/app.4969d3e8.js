/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded CSS chunks
/******/ 	var installedCssChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		1: 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
/******/
/******/ 	// script path function
/******/ 	function jsonpScriptSrc(chunkId) {
/******/ 		return __webpack_require__.p + "js/" + ({}[chunkId]||chunkId) + "." + {"2":"e71a5f05","3":"a1774ea9","4":"0a067c3e","5":"dccfd034","6":"e0dfd56c","7":"e2529e17","8":"6837912a","9":"ffb8065f","10":"c16459a2","11":"0a286043","12":"5d883aad","13":"9d97efed","14":"1dc2f3d7","15":"195eba7b"}[chunkId] + ".js"
/******/ 	}
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// mini-css-extract-plugin CSS loading
/******/ 		var cssChunks = {"2":1,"3":1,"4":1,"5":1,"6":1,"7":1};
/******/ 		if(installedCssChunks[chunkId]) promises.push(installedCssChunks[chunkId]);
/******/ 		else if(installedCssChunks[chunkId] !== 0 && cssChunks[chunkId]) {
/******/ 			promises.push(installedCssChunks[chunkId] = new Promise(function(resolve, reject) {
/******/ 				var href = "css/" + ({}[chunkId]||chunkId) + "." + {"2":"5919b8fa","3":"5919b8fa","4":"5919b8fa","5":"5919b8fa","6":"793e61c1","7":"27887066","8":"31d6cfe0","9":"31d6cfe0","10":"31d6cfe0","11":"31d6cfe0","12":"31d6cfe0","13":"31d6cfe0","14":"31d6cfe0","15":"31d6cfe0"}[chunkId] + ".css";
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var existingLinkTags = document.getElementsByTagName("link");
/******/ 				for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 					var tag = existingLinkTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 					if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return resolve();
/******/ 				}
/******/ 				var existingStyleTags = document.getElementsByTagName("style");
/******/ 				for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 					var tag = existingStyleTags[i];
/******/ 					var dataHref = tag.getAttribute("data-href");
/******/ 					if(dataHref === href || dataHref === fullhref) return resolve();
/******/ 				}
/******/ 				var linkTag = document.createElement("link");
/******/ 				linkTag.rel = "stylesheet";
/******/ 				linkTag.type = "text/css";
/******/ 				linkTag.onload = resolve;
/******/ 				linkTag.onerror = function(event) {
/******/ 					var request = event && event.target && event.target.src || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + request + ")");
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.request = request;
/******/ 					delete installedCssChunks[chunkId]
/******/ 					linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				};
/******/ 				linkTag.href = fullhref;
/******/
/******/ 				var head = document.getElementsByTagName("head")[0];
/******/ 				head.appendChild(linkTag);
/******/ 			}).then(function() {
/******/ 				installedCssChunks[chunkId] = 0;
/******/ 			}));
/******/ 		}
/******/
/******/ 		// JSONP chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/
/******/ 			// a Promise means "currently loading".
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// setup Promise in chunk cache
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/
/******/ 				// start chunk loading
/******/ 				var script = document.createElement('script');
/******/ 				var onScriptComplete;
/******/
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.src = jsonpScriptSrc(chunkId);
/******/
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				onScriptComplete = function (event) {
/******/ 					// avoid mem leaks in IE.
/******/ 					script.onerror = script.onload = null;
/******/ 					clearTimeout(timeout);
/******/ 					var chunk = installedChunks[chunkId];
/******/ 					if(chunk !== 0) {
/******/ 						if(chunk) {
/******/ 							var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 							var realSrc = event && event.target && event.target.src;
/******/ 							error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 							error.name = 'ChunkLoadError';
/******/ 							error.type = errorType;
/******/ 							error.request = realSrc;
/******/ 							chunk[1](error);
/******/ 						}
/******/ 						installedChunks[chunkId] = undefined;
/******/ 					}
/******/ 				};
/******/ 				var timeout = setTimeout(function(){
/******/ 					onScriptComplete({ type: 'timeout', target: script });
/******/ 				}, 120000);
/******/ 				script.onerror = script.onload = onScriptComplete;
/******/ 				document.head.appendChild(script);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// on error function for async loading
/******/ 	__webpack_require__.oe = function(err) { console.error(err); throw err; };
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([0,0]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("2f39");


/***/ }),

/***/ "0765":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./crate.js": "dd4d",
	"./crop-filter.js": "0ff2",
	"./crop.js": "774b",
	"./global-config.js": "abf3",
	"./harvest.js": "71d9",
	"./management.js": "a04f",
	"./serial.js": "0eea"
};


function webpackContext(req) {
	var id = webpackContextResolve(req);
	return __webpack_require__(id);
}
function webpackContextResolve(req) {
	if(!__webpack_require__.o(map, req)) {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	}
	return map[req];
}
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = "0765";

/***/ }),

/***/ "0eea":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9523");
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_wrapRegExp__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("dc5c");
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_wrapRegExp__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_wrapRegExp__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _feathers_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2e40");


// https://vuex.feathersjs.com/getting-started.html#service-plugins
 // import { ScaleDemoGenerator } from '../scale_demo'
// import { store } from '../index'
// import { handleMessage } from '../../../serial.js'
// const { handleMessage } = require('../../../../serial.js')
// ^ this path does not work - maybe because its outside of the *root* folder?

function handleMessage(message) {
  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Groups_and_Ranges
  // regex
  // https://regex101.com/
  // test
  // 0.04
  // 33.04
  // 999.04
  // 0.55 kg
  // 33.55 kg
  // 999.55 kg
  // -      0.60
  // -     20.55
  // -    920.55
  // -      0.64 kg
  // -     33.64 kg
  // -    999.64 kg
  // result:
  // ^(-?\s*\d{0,3}\.\d\d)\s?(\w*)$
  const regex = /*#__PURE__*/_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_wrapRegExp__WEBPACK_IMPORTED_MODULE_1___default()(/^(\x2D?)[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]*([0-9]{0,3}\.[0-9][0-9])[\t-\r \xA0\u1680\u2000-\u200A\u2028\u2029\u202F\u205F\u3000\uFEFF]?([0-9A-Z_a-z]*)$/, {
    sign: 1,
    weight: 2,
    unit: 3
  });

  const result = {
    totalWeight: 0,
    scaleStable: false
  };
  const match = message.match(regex);

  if (match) {
    const weight = match.groups.weight;
    const sign = match.groups.sign;
    const unit = match.groups.unit;

    if (weight) {
      if (sign) {
        // do the sign handling in string space so we do not introduce math inaccuracy..
        result.totalWeight = Number(sign + weight);
      } else {
        result.totalWeight = Number(weight);
      }
    }

    if (unit) {
      result.scaleStable = true; // result.scaleUnit = 'kg'

      result.scaleUnit = unit;
    } else {
      result.scaleStable = false;
    }
  }

  return result;
}

class Serial extends _feathers_client__WEBPACK_IMPORTED_MODULE_2__[/* BaseModel */ "a"] {
  // constructor (data, options) {
  //     super(data, options)
  //     console.log('Serial Class this', this)
  //     this.demoHandler = ScaleDemoGenerator(this.store)
  // }
  // Required for $FeathersVuex plugin to work after production transpile.
  // Define default properties here
  // static instanceDefaults(data, { store, models }) {
  static instanceDefaults() {
    return {
      id: '',
      value: ''
    };
  } // async update (id, data, params) {
  //     console.log('Serial', id, data, params)
  //     return super.update(id, data, params)
  // }


}

_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(Serial, "modelName", 'Serial');

const servicePath = 'serial';
const servicePlugin = Object(_feathers_client__WEBPACK_IMPORTED_MODULE_2__[/* makeServicePlugin */ "d"])({
  Model: Serial,
  service: _feathers_client__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].service(servicePath),
  servicePath,
  // https://vuex.feathersjs.com/service-plugin.html#custom-event-handlers
  handleEvents: {
    patched: (item, {
      model,
      models
    }) => {
      // console.log('models', models)
      // console.log('model.store.state', model.store.state)
      // if (item.id === 'message') {
      if (item.id === 'message' && model.store) {
        // console.log('model', model)
        // console.log('item', item)
        // console.log('store', store)
        const result = handleMessage(item.value); // console.log('result', result)

        model.store.commit('localconfig/setTotalWeight', result.totalWeight);
        model.store.commit('localconfig/setScaleStable', result.scaleStable);

        if (result.scaleUnit) {
          model.store.commit('localconfig/setScaleUnit', result.scaleUnit);
        }
      } else if (item.id === 'connected' && model.store) {
        console.log('model', model); // console.log('item', item)
        // console.log('store', store)

        console.log('this', undefined);
        console.log('item.value', item.value);

        if (item.value) {
          console.log('connected!');
        } else {
          console.log('disconnected!');
          undefined.$store.dispatch('localconfig/startScaleDemo').then(response => {
            console.log('startScaleDemo: ', response);
            undefined.$q.notify({
              color: 'positive',
              message: 'startScaleDemo done.',
              icon: 'info'
            });
          }).catch(error => {
            console.error('startScaleDemo:', error);
            undefined.$q.notify({
              color: 'negative',
              message: 'startScaleDemo failed.',
              icon: 'report_problem'
            });
          });
        }
      }

      return true;
    }
  },
  // extend ({ store, module }) {
  //     // Listen to other parts of the store
  //     // store.watch(/* truncated */)
  //     console.log('store', store)
  //     console.log('module', module)
  //     return {
  //         state: {},
  //         getters: {},
  //         mutations: {},
  //         actions: {}
  //     }
  // },
  debug: true
}); // Setup the client-side Feathers hooks.

_feathers_client__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
});
/* harmony default export */ __webpack_exports__["default"] = (servicePlugin);

/***/ }),

/***/ "0ff2":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("5319");
/* harmony import */ var core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_string_replace__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("9523");
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _feathers_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("2e40");



// https://vuex.feathersjs.com/getting-started.html#service-plugins


class CropFilter extends _feathers_client__WEBPACK_IMPORTED_MODULE_3__[/* BaseModel */ "a"] {
  // constructor (data, options) {
  //     super(data, options)
  // }
  // Required for $FeathersVuex plugin to work after production transpile.
  // Define default properties here
  // static instanceDefaults(data, { store, models }) {
  static instanceDefaults() {
    return {
      _id: '',
      text: '',
      query: {},
      queryFixed: {},
      icon: '',
      image: '',
      description: ''
    };
  }

  static fixFieldNames(objIn) {
    // console.group('fixFieldNames')
    const objResult = {}; // console.log(`fixFieldNames objIn: '${objIn}' objResult: '${objResult}'`)
    // console.log('objIn', objIn)
    // recusive!

    for (const [key, value] of Object.entries(objIn)) {
      // console.log('for loop -----')
      // console.log('key', key)
      // console.log('value', value)
      const keyFixed = key.replace('_$', '$'); // console.log('keyFixed', keyFixed)

      if (!Array.isArray(value) && typeof value === 'object') {
        // console.log('is object and not array - so recusive call:')
        objResult[keyFixed] = this.fixFieldNames(value);
      } else {
        // console.log('normal value - just add it to the result')
        objResult[keyFixed] = value;
      }
    } // console.log('objResult', objResult)
    // console.groupEnd()


    return objResult;
  }

  getQueryFixed() {
    return CropFilter.fixFieldNames(this.query, {});
  } // setQueryFixed (query) {
  //     const fixed = CropFilter.fixFieldNames(query, {})
  //     this.service.FeathersVuexModel.store.commit('setQueryFixed', fixed)
  //     console.log('fixed', fixed)
  // }


}

_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_2___default()(CropFilter, "modelName", 'CropFilter');

const servicePath = 'crop-filter';
const servicePlugin = Object(_feathers_client__WEBPACK_IMPORTED_MODULE_3__[/* makeServicePlugin */ "d"])({
  Model: CropFilter,
  service: _feathers_client__WEBPACK_IMPORTED_MODULE_3__[/* default */ "c"].service(servicePath),
  servicePath,
  mutations: {// setQueryFixed (state, queryFixed) {
    //     state.queryFixed = queryFixed
    // }
  },
  // handleEvents: {
  //     created: (item, { model, models }) => {
  //         console.log('item', item)
  //     },
  //     patched: (item, { model, models }) => {
  //         console.log('item', item)
  //         // console.log('models', models)
  //         // console.log('model.store.state', model.store.state)
  //         if (item.query) {
  //             // console.log('result', result)
  //             const fixed = model.fixFieldNames(item.query, {})
  //             model.store.commit('crop-filter/setQueryFixed', fixed)
  //             console.log('fixed', fixed)
  //         }
  //         return true
  //     }
  // },
  debug: true
}); // Setup the client-side Feathers hooks.

_feathers_client__WEBPACK_IMPORTED_MODULE_3__[/* default */ "c"].service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [// context => {
      //     const { service, result } = context
      //     if (result.query) {
      //         service.setQueryFixed(result.query)
      //     }
      // }
    ],
    update: [// context => {
      //     const { service, result } = context
      //     if (result.query) {
      //         service.setQueryFixed(result.query)
      //     }
      // }
    ],
    patch: [// context => {
      //     const { service, result } = context
      //     if (result.query) {
      //         service.setQueryFixed(result.query)
      //     }
      // }
    ],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
});
/* harmony default export */ __webpack_exports__["default"] = (servicePlugin);

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "2e40":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export makeAuthPlugin */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return makeServicePlugin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseModel; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return models; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return FeathersVuex; });
/* harmony import */ var _feathersjs_feathers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("b462");
/* harmony import */ var _feathersjs_feathers__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_feathersjs_feathers__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("4059");
/* harmony import */ var _feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("8055");
/* harmony import */ var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var feathers_hooks_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("6bd9");
/* harmony import */ var feathers_hooks_common__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(feathers_hooks_common__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var feathers_vuex__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__("9e62");
// https://vuex.feathersjs.com/getting-started.html#feathers-client-feathers-vuex
// src/feathers-client.js

 // import auth from '@feathersjs/authentication-client'




const socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2___default()('http://localhost:3030', {
  transports: ['websocket']
});
const feathersClient = _feathersjs_feathers__WEBPACK_IMPORTED_MODULE_0___default()().configure(_feathersjs_socketio_client__WEBPACK_IMPORTED_MODULE_1___default()(socket)) // .configure(auth({ storage: window.localStorage }))
.hooks({
  before: {
    all: [Object(feathers_hooks_common__WEBPACK_IMPORTED_MODULE_3__["iff"])(context => ['create', 'update', 'patch'].includes(context.method), Object(feathers_hooks_common__WEBPACK_IMPORTED_MODULE_3__["discard"])('__id', '__isTemp'))]
  }
});
/* harmony default export */ __webpack_exports__["c"] = (feathersClient); // Setting up feathers-vuex

const {
  makeServicePlugin,
  makeAuthPlugin,
  BaseModel,
  models,
  FeathersVuex
} = Object(feathers_vuex__WEBPACK_IMPORTED_MODULE_4__[/* default */ "a"])(feathersClient, {
  serverAlias: 'api',
  // optional for working with multiple APIs (this is the default value)
  idField: '_id',
  // Must match the id field in your database table/collection
  whitelist: ['$regex', '$options']
});


/***/ }),

/***/ "2f39":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// NAMESPACE OBJECT: ./src/store/localconfig/getters.js
var getters_namespaceObject = {};
__webpack_require__.r(getters_namespaceObject);
__webpack_require__.d(getters_namespaceObject, "someGetter", function() { return someGetter; });

// NAMESPACE OBJECT: ./src/store/localconfig/mutations.js
var mutations_namespaceObject = {};
__webpack_require__.r(mutations_namespaceObject);
__webpack_require__.d(mutations_namespaceObject, "someMutation", function() { return someMutation; });
__webpack_require__.d(mutations_namespaceObject, "setBtnSize", function() { return setBtnSize; });
__webpack_require__.d(mutations_namespaceObject, "setBtnSpace", function() { return setBtnSpace; });
__webpack_require__.d(mutations_namespaceObject, "setCropSelected", function() { return setCropSelected; });
__webpack_require__.d(mutations_namespaceObject, "setCropFilterSelected", function() { return setCropFilterSelected; });
__webpack_require__.d(mutations_namespaceObject, "setCrateSelected", function() { return setCrateSelected; });
__webpack_require__.d(mutations_namespaceObject, "setPlaceSelected", function() { return setPlaceSelected; });
__webpack_require__.d(mutations_namespaceObject, "setTotalWeight", function() { return setTotalWeight; });
__webpack_require__.d(mutations_namespaceObject, "setScaleStable", function() { return setScaleStable; });
__webpack_require__.d(mutations_namespaceObject, "setScaleUnit", function() { return setScaleUnit; });
__webpack_require__.d(mutations_namespaceObject, "setDevMode", function() { return setDevMode; });

// NAMESPACE OBJECT: ./src/store/localconfig/actions.js
var actions_namespaceObject = {};
__webpack_require__.r(actions_namespaceObject);
__webpack_require__.d(actions_namespaceObject, "startScaleDemo", function() { return startScaleDemo; });
__webpack_require__.d(actions_namespaceObject, "stopScaleDemo", function() { return stopScaleDemo; });

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.promise.js
var es_promise = __webpack_require__("e6cf");

// EXTERNAL MODULE: ./node_modules/core-js/modules/es.string.replace.js
var es_string_replace = __webpack_require__("5319");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/mdi-v5/mdi-v5.css
var mdi_v5 = __webpack_require__("9f29");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/roboto-font/roboto-font.css
var roboto_font = __webpack_require__("7d6e");

// EXTERNAL MODULE: ./node_modules/@quasar/extras/material-icons/material-icons.css
var material_icons = __webpack_require__("e54f");

// EXTERNAL MODULE: ./node_modules/quasar/dist/quasar.styl
var quasar = __webpack_require__("62f2");

// EXTERNAL MODULE: ./src/css/app.css
var css_app = __webpack_require__("5b0d");

// EXTERNAL MODULE: ./node_modules/vue/dist/vue.runtime.esm.js
var vue_runtime_esm = __webpack_require__("2b0e");

// EXTERNAL MODULE: ./node_modules/quasar/lang/en-us.js
var en_us = __webpack_require__("1f91");

// EXTERNAL MODULE: ./node_modules/quasar/icon-set/material-icons.js
var icon_set_material_icons = __webpack_require__("42d2");

// EXTERNAL MODULE: ./node_modules/quasar/src/vue-plugin.js + 1 modules
var vue_plugin = __webpack_require__("b05d");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/Notify.js
var Notify = __webpack_require__("2a19");

// EXTERNAL MODULE: ./node_modules/quasar/src/plugins/LocalStorage.js + 1 modules
var LocalStorage = __webpack_require__("18d6");

// CONCATENATED MODULE: ./.quasar/import-quasar.js
/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/



;
vue_runtime_esm["default"].use(vue_plugin["a" /* default */], {
  config: {
    "notify": {
      "position": "top"
    },
    "dark": "auto"
  },
  lang: en_us["default"],
  iconSet: icon_set_material_icons["a" /* default */],
  plugins: {
    Notify: Notify["a" /* default */],
    LocalStorage: LocalStorage["a" /* default */]
  }
});
// CONCATENATED MODULE: ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=template&id=760012a3&
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"q-app"}},[_c('router-view')],1)}
var staticRenderFns = []


// CONCATENATED MODULE: ./src/App.vue?vue&type=template&id=760012a3&

// CONCATENATED MODULE: ./node_modules/@quasar/app/lib/webpack/loader.transform-quasar-imports.js!./node_modules/babel-loader/lib??ref--2-0!./node_modules/@quasar/app/lib/webpack/loader.auto-import-client.js?kebab!./node_modules/vue-loader/lib??vue-loader-options!./src/App.vue?vue&type=script&lang=js&
//
//
//
//
//
/* harmony default export */ var Appvue_type_script_lang_js_ = ({
  name: 'App'
});
// CONCATENATED MODULE: ./src/App.vue?vue&type=script&lang=js&
 /* harmony default export */ var src_Appvue_type_script_lang_js_ = (Appvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__("2877");

// CONCATENATED MODULE: ./src/App.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  src_Appvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  null
  
)

/* harmony default export */ var App = (component.exports);
// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom-collections.iterator.js
var web_dom_collections_iterator = __webpack_require__("ddb0");

// EXTERNAL MODULE: ./node_modules/vuex/dist/vuex.esm.js
var vuex_esm = __webpack_require__("2f62");

// EXTERNAL MODULE: ./src/feathers-client.js
var feathers_client = __webpack_require__("2e40");

// CONCATENATED MODULE: ./src/store/localconfig/state.js
// import { ScaleDemoGenerator } from '../scale_demo'
/* harmony default export */ var state = (function () {
  return {
    cropSelected: {},
    cropFilterSelected: {},
    crateSelected: {},
    placeSelected: {},
    totalWeight: '0',
    scaleStable: false,
    scaleUnit: 'kg',
    // scaleDemoHandler: new ScaleDemoGenerator()
    btnSize: 42,
    btnSpace: 3,
    devMode: false
  };
});
// CONCATENATED MODULE: ./src/store/localconfig/getters.js
function someGetter()
/* state */
{}
// CONCATENATED MODULE: ./src/store/localconfig/mutations.js
function someMutation()
/* state */
{}
function setBtnSize(state, value) {
  state.btnSize = value;
}
function setBtnSpace(state, value) {
  state.btnSpace = value;
}
function setCropSelected(state, value) {
  state.cropSelected = value;
}
function setCropFilterSelected(state, value) {
  state.cropFilterSelected = value;
}
function setCrateSelected(state, value) {
  state.crateSelected = value;
}
function setPlaceSelected(state, value) {
  state.placeSelected = value;
}
function setTotalWeight(state, value) {
  state.totalWeight = value;
}
function setScaleStable(state, value) {
  state.scaleStable = value;
}
function setScaleUnit(state, value) {
  state.scaleUnit = value;
}
function setDevMode(state, value) {
  state.devMode = value;
}
// CONCATENATED MODULE: ./src/store/scale_demo.js
const TWEEN = __webpack_require__("22b5");

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
class ScaleDemoGenerator {
  constructor(store, interval = 200) {
    this.store = store;
    this.interval = interval;
    this.intervalID = null;
    this.tweenValueObj = {
      weight: 0
    };
    this.setup();
  }

  setup() {
    console.log('ScaleDemoGenerator setup');
    this.tweenA = this.setupTween();
    this.tweenB = this.setupTween();
    this.tweenA.chain(this.tweenB);
    this.tweenB.chain(this.tweenA);
  }

  setupTween() {
    const tweenInstance = new TWEEN.Tween(this.tweenValueObj);
    const duration = getRandomArbitrary(2000, 8000);
    const durationDelay = getRandomArbitrary(500, 2000);
    const targetWeight = getRandomArbitrary(-0.5, 42.42);
    tweenInstance.to({
      weight: targetWeight
    }, duration);
    tweenInstance.delay(durationDelay);
    tweenInstance.easing(TWEEN.Easing.Quadratic.InOut);
    tweenInstance.onStart(() => {
      console.log('tween.onStart');
      this.store.commit('setScaleStable', false);
    });
    tweenInstance.onComplete(() => {
      console.log('ScaleDemoGenerator tween completed');
      this.store.commit('setScaleStable', true); // prepare next iteration

      const duration = getRandomArbitrary(3000, 15000);
      const durationDelay = getRandomArbitrary(5000, 5000);
      const targetWeight = getRandomArbitrary(-0.5, 42.42);
      tweenInstance.to({
        weight: targetWeight
      }, duration);
      tweenInstance.delay(durationDelay);
    });
    tweenInstance.onUpdate(tweenObj => {
      // console.log('tweenObj', tweenObj)
      if (tweenObj.weight) {
        this.store.commit('setTotalWeight', tweenObj.weight.toFixed(2));
      } // return tweenObj.weight.toFixed(2)

    });
    return tweenInstance;
  }

  start() {
    console.log('ScaleDemoGenerator start');

    if (this.intervalID) {
      this.stop();
    }

    this.intervalID = setInterval(() => {
      // console.log('ScaleDemoGenerator tween update')
      TWEEN.update();
    }, this.interval);
    this.tweenA.start();
  }

  stop() {
    console.log('ScaleDemoGenerator stop');
    this.tweenA.stop();
    this.tweenB.stop();
    clearInterval(this.intervalID);
    this.intervalID = null;
  }

}
/* harmony default export */ var scale_demo = (ScaleDemoGenerator);
// CONCATENATED MODULE: ./src/store/localconfig/actions.js

function startScaleDemo(context) {
  console.log('action startScaleDemo');

  if (!context.state.demoHandler) {
    context.state.demoHandler = new ScaleDemoGenerator(context);
  }

  context.state.demoHandler.start();
  context.commit('setScaleUnit', 'kg');
  console.log('context.state.demoHandler', context.state.demoHandler);
  return context.state.demoHandler;
}
function stopScaleDemo(context) {
  console.log('action stopScaleDemo');
  context.state.demoHandler.stop();
}
// CONCATENATED MODULE: ./src/store/localconfig/index.js




/* harmony default export */ var localconfig = ({
  namespaced: true,
  getters: getters_namespaceObject,
  mutations: mutations_namespaceObject,
  actions: actions_namespaceObject,
  state: state
});
// CONCATENATED MODULE: ./src/store/index.js



 // import example from './module-example'

 // this will be automagically imported
// import messagesService from './services/messages'

vue_runtime_esm["default"].use(vuex_esm["a" /* default */]);
vue_runtime_esm["default"].use(feathers_client["b" /* FeathersVuex */]); // automagically import all ./service/* files

const requireModule = __webpack_require__("0765");

const servicePlugins = requireModule.keys().map(modulePath => requireModule(modulePath).default); // ------------------------------------------
// init
// ------------------------------------------
// Use a new variable and export values to change default behavior.

let store_store = null;
/*
* If not building with SSR mode, you can
* directly export the Store instantiation;
*
* The function below can be async too; either use
* async/await or return a Promise which resolves
* with the Store instance.
*/

/* harmony default export */ var src_store = (function ()
/* { ssrContext } */
{
  const Store = new vuex_esm["a" /* default */].Store({
    modules: {
      // add store reference here
      localconfig: localconfig
    },
    plugins: [...servicePlugins],
    // plugins: [messagesService],
    // enable strict mode (adds overhead!)
    // for dev mode and --debug builds only
    strict: true
  }); // live / hot reload magic

  if (false) {} // add this so that we export store


  store_store = Store;
  return Store;
}); // add this line to access store wherever you need


// EXTERNAL MODULE: ./node_modules/vue-router/dist/vue-router.esm.js
var vue_router_esm = __webpack_require__("8c4f");

// EXTERNAL MODULE: ./src/router/routes.js
var routes = __webpack_require__("d046");

// CONCATENATED MODULE: ./src/router/index.js



vue_runtime_esm["default"].use(vue_router_esm["a" /* default */]);
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */
// export default function (/* { store, ssrContext } */) {

/* harmony default export */ var src_router = (function ({
  store
}) {
  const Router = new vue_router_esm["a" /* default */]({
    scrollBehavior: () => ({
      x: 0,
      y: 0
    }),
    routes: Object(routes["e" /* default */])({
      store
    }),
    // Leave these as they are and change in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    mode: "hash",
    base: ""
  });
  return Router;
});
// CONCATENATED MODULE: ./.quasar/app.js


/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/





/* harmony default export */ var _quasar_app = (async function () {
  // create store and router instances
  const store = typeof src_store === 'function' ? await src_store({
    Vue: vue_runtime_esm["default"]
  }) : src_store;
  const router = typeof src_router === 'function' ? await src_router({
    Vue: vue_runtime_esm["default"],
    store
  }) : src_router; // make router instance available in store

  store.$router = router; // Create the app instantiation Object.
  // Here we inject the router, store to all child components,
  // making them available everywhere as `this.$router` and `this.$store`.

  const app = {
    router,
    store,
    render: h => h(App)
  };
  app.el = '#q-app'; // expose the app, the router and the store.
  // note we are not mounting the app here, since bootstrapping will be
  // different depending on whether we are in a browser or on the server.

  return {
    app,
    store,
    router
  };
});
// EXTERNAL MODULE: ./node_modules/quasar/src/utils/date.js + 1 modules
var date = __webpack_require__("bd4c");

// CONCATENATED MODULE: ./src/boot/filters.js
// src/boot/filters.js
;
/* harmony default export */ var filters = (({
  Vue
}) => {
  Vue.filter('formatdate', function (value, format = 'HH:mm:ss DD.MM.YYYY') {
    // 'YYYY-MM-DDTHH:mm:ss.SSSZ'
    return date["a" /* default */].formatDate(new Date(value), format);
  });
  Vue.filter('toLocal', function (value, lang = 'de') {
    return new Date(value).toLocaleString(lang);
  });
  Vue.filter('formatWeight', function (value, lang = 'de') {
    // console.log('value', value)
    // console.log('lang', lang)
    if (isNaN(value)) {
      value = 0.0;
    } // convert to float


    value = value * 1.0;
    const result = value.toLocaleString(lang, {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }); // console.log('formatWeight result', result)

    return result;
  });
  Vue.filter('pretty', function (value) {
    let valueJson = value;

    try {
      valueJson = JSON.parse(value);
    } catch (e) {// console.log(value, e)
    }

    return JSON.stringify(valueJson, null, 4);
  });
});
// EXTERNAL MODULE: ./node_modules/axios/index.js
var axios = __webpack_require__("bc3a");
var axios_default = /*#__PURE__*/__webpack_require__.n(axios);

// CONCATENATED MODULE: ./src/boot/axios.js


vue_runtime_esm["default"].prototype.$axios = axios_default.a;
// CONCATENATED MODULE: ./src/boot/vuex.js

// import { models } from '../feathers-client'
// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
// export default async ({ app, router, Vue, store}) => {
/* harmony default export */ var vuex = (async ({
  app
}) => {// preload global settings
  // console.log('app', app)
  // const params = {
  //     query: {},
  //     paginate: false
  // }
  // const resultFind = await models.GlobalConfig.find(params)
  // console.log('resultFind', resultFind)
});
// EXTERNAL MODULE: ./node_modules/vue-i18n/dist/vue-i18n.esm.js
var vue_i18n_esm = __webpack_require__("a925");

// CONCATENATED MODULE: ./src/i18n/en-us/index.js
/* harmony default export */ var i18n_en_us = ({
  // action
  failed: 'Action failed',
  success: 'Action was successful',
  // common words
  recent: 'recent',
  custom: 'custom',
  nothing: 'nothing',
  Box: 'Box',
  // main
  crate: 'crate',
  crop: 'crop',
  place: 'place',
  global: 'Global',
  save: 'Save',
  scale: 'scale',
  weight: 'weight',
  setting: 'Setting',
  settings: 'Settings',
  //
  debug: 'Debug',
  developer: 'developer',
  information: 'information',
  for: 'for',
  system: 'System',
  // updates
  pull_updates: 'pull software updates',
  // management
  shutdown_system: 'shutdown system',
  reboot_system: 'reboot system',
  //
  the_end: 'Das Ende'
});
// CONCATENATED MODULE: ./src/i18n/de/index.js
/* harmony default export */ var de = ({
  // action
  failed: 'Aktion fehlgeschlagen',
  success: 'Aktion erfolgreich',
  // common words
  recent: 'kürzlich',
  custom: 'benutzerdefiniert',
  nothing: 'nichts',
  Box: 'Kiste',
  // main
  crate: 'Kiste',
  crop: 'Gemüse',
  place: 'Satz',
  global: 'Globale',
  save: 'Speichern',
  scale: 'Waage',
  weight: 'Gewicht',
  setting: 'Einstellung',
  settings: 'Einstellungen',
  //
  debug: 'Fehler suchen',
  developer: 'Entwickler',
  information: 'Informationen',
  for: 'für',
  system: 'System',
  // updates
  pull_updates: 'Hole Software Aktualisierungen',
  // management
  shutdown_system: 'System herunterfahren',
  reboot_system: 'System neu starten',
  //
  the_end: 'Das Ende'
});
// CONCATENATED MODULE: ./src/i18n/index.js

 // https://quasar.dev/options/app-internationalization#Add-new-language

/* harmony default export */ var i18n = ({
  'en-us': i18n_en_us,
  de: de
});
// CONCATENATED MODULE: ./src/boot/i18n.js
;



vue_runtime_esm["default"].use(vue_i18n_esm["a" /* default */]);
let i18n_i18n = null;
/* harmony default export */ var boot_i18n = (({
  app,
  store
}) => {
  // get language
  let locale = 'en-us';

  if (LocalStorage["a" /* default */].has('language')) {
    try {
      locale = LocalStorage["a" /* default */].getItem('language');
    } catch (e) {
      // data wasn't successfully read due to a Web Storage API error
      console.error(e);
    }
  } // initialize


  i18n_i18n = new vue_i18n_esm["a" /* default */]({
    locale: locale,
    fallbackLocale: 'en-us',
    messages: i18n
  }); // Set i18n instance on app

  app.i18n = i18n_i18n;
});

// CONCATENATED MODULE: ./src/boot/quasar-lang-pack.js

// https://quasar.dev/options/quasar-language-packs#dynamical-non-ssr-
; //

/* harmony default export */ var quasar_lang_pack = (async ({
  app,
  store
}) => {
  // console.log('Quasar', Quasar)
  // console.log('app', app)
  // get language
  let locale = 'en-us';

  if (LocalStorage["a" /* default */].has('language')) {
    try {
      locale = LocalStorage["a" /* default */].getItem('language');
    } catch (e) {
      // data wasn't successfully read due to a Web Storage API error
      console.error(e);
    }
  }

  try {
    await __webpack_require__("302e")("./" + locale).then(lang => {
      vue_plugin["a" /* default */].lang.set(lang.default);
    });
  } catch (err) {
    // Requested Quasar Language Pack does not exist,
    // let's not break the app, so catching error
    console.error(err);
  }
});
// EXTERNAL MODULE: ./node_modules/@vue/composition-api/dist/vue-composition-api.umd.js
var vue_composition_api_umd = __webpack_require__("e4fd");
var vue_composition_api_umd_default = /*#__PURE__*/__webpack_require__.n(vue_composition_api_umd);

// CONCATENATED MODULE: ./src/boot/VueCompositionApi.js
// /boot/VueCompositionApi.js


vue_runtime_esm["default"].use(vue_composition_api_umd_default.a);
// CONCATENATED MODULE: ./.quasar/client-entry.js



/**
 * THIS FILE IS GENERATED AUTOMATICALLY.
 * DO NOT EDIT.
 *
 * You are probably looking on adding startup/initialization code.
 * Use "quasar new boot <name>" and add it there.
 * One boot file per concern. Then reference the file(s) in quasar.conf.js > boot:
 * boot: ['file', ...] // do not add ".js" extension to it.
 *
 * Boot files are your "main.js"
 **/


 // We load Quasar stylesheet file











vue_runtime_esm["default"].config.devtools = true;
vue_runtime_esm["default"].config.productionTip = false;
const publicPath = ``;

async function start() {
  const {
    app,
    store,
    router
  } = await _quasar_app();
  let hasRedirected = false;

  const redirect = url => {
    hasRedirected = true;
    const normalized = Object(url) === url ? router.resolve(url).route.fullPath : url;
    window.location.href = normalized;
  };

  const urlPath = window.location.href.replace(window.location.origin, '');
  const bootFiles = [filters, /* Cannot get final name for export "default" in "./src/boot/axios.js" (known exports: , known reexports: ) */ undefined, vuex, boot_i18n, quasar_lang_pack, /* Cannot get final name for export "default" in "./src/boot/VueCompositionApi.js" (known exports: , known reexports: ) */ undefined];

  for (let i = 0; hasRedirected === false && i < bootFiles.length; i++) {
    if (typeof bootFiles[i] !== 'function') {
      continue;
    }

    try {
      await bootFiles[i]({
        app,
        router,
        store,
        Vue: vue_runtime_esm["default"],
        ssrContext: null,
        redirect,
        urlPath,
        publicPath
      });
    } catch (err) {
      if (err && err.url) {
        window.location.href = err.url;
        return;
      }

      console.error('[Quasar] boot error:', err);
      return;
    }
  }

  if (hasRedirected === true) {
    return;
  }

  new vue_runtime_esm["default"](app);
}

start();

/***/ }),

/***/ "302e":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./de": [
		"215a",
		0
	],
	"./de.js": [
		"215a",
		0
	],
	"./en-us": [
		"1f91"
	],
	"./en-us.js": [
		"1f91"
	]
};
function webpackAsyncContext(req) {
	if(!__webpack_require__.o(map, req)) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}

	var ids = map[req], id = ids[0];
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "302e";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "5b0d":
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "71d9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9523");
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _feathers_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2e40");
/* harmony import */ var _hooks_set_timestamp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("93be");

// https://vuex.feathersjs.com/getting-started.html#service-plugins



class Harvest extends _feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* BaseModel */ "a"] {
  // constructor(data, options) {
  //     super(data, options)
  // }
  // Required for $FeathersVuex plugin to work after production transpile.
  // Define default properties here
  // static instanceDefaults(data, { store, models }) {
  static instanceDefaults() {
    return {
      crate: {},
      crop: {},
      place: {},
      crateTareWeight: 0,
      cropText: '',
      placeText: '',
      weight: 0,
      createdAt: null // comment: ''

    };
  }

}

_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(Harvest, "modelName", 'Harvest');

const servicePath = 'harvest';
const servicePlugin = Object(_feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* makeServicePlugin */ "d"])({
  Model: Harvest,
  service: _feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"].service(servicePath),
  servicePath,
  debug: true
}); // Setup the client-side Feathers hooks.

_feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"].service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [Object(_hooks_set_timestamp__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])('createdAt')],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
});
/* harmony default export */ __webpack_exports__["default"] = (servicePlugin);

/***/ }),

/***/ "774b":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("9523");
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _feathers_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__("2e40");
/* harmony import */ var _hooks_set_timestamp__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__("93be");


// https://vuex.feathersjs.com/getting-started.html#service-plugins



class Crop extends _feathers_client__WEBPACK_IMPORTED_MODULE_2__[/* BaseModel */ "a"] {
  // constructor(data, options) {
  //     super(data, options)
  // }
  // Required for $FeathersVuex plugin to work after production transpile.
  // Define default properties here
  // static instanceDefaults(data, { store, models }) {
  static instanceDefaults() {
    return {
      _id: '',
      text: '',
      icon: '',
      image: '',
      description: ''
    };
  }

  placesList() {
    // console.log('PING')
    const result = [];

    if (this.places) {
      let places = [];

      if (typeof this.places === 'number') {
        for (let i = 1; i <= this.places; i++) {
          places.push(i);
        }
      } else if (Array.isArray(this.places)) {
        places = this.places;
      }

      for (const item of places) {
        result.push({
          _id: item,
          text: item,
          icon: 'mdi-map-marker'
        });
      }
    } else {
      result.push({
        _id: 0,
        text: '0',
        icon: 'mdi-map-marker'
      });
    }

    return result;
  }

  placesCount() {
    let result = -1;

    if (this.places) {
      if (typeof this.places === 'number') {
        result = this.places;
      } else if (Array.isArray(this.places)) {
        result = this.places.length;
      }
    }

    return result;
  }

}

_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1___default()(Crop, "modelName", 'Crop');

const servicePath = 'crop';
const servicePlugin = Object(_feathers_client__WEBPACK_IMPORTED_MODULE_2__[/* makeServicePlugin */ "d"])({
  Model: Crop,
  service: _feathers_client__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].service(servicePath),
  servicePath,
  debug: true
}); // Setup the client-side Feathers hooks.

_feathers_client__WEBPACK_IMPORTED_MODULE_2__[/* default */ "c"].service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [Object(_hooks_set_timestamp__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])('lastUsed')],
    update: [Object(_hooks_set_timestamp__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])('lastUsed')],
    patch: [Object(_hooks_set_timestamp__WEBPACK_IMPORTED_MODULE_3__[/* default */ "a"])('lastUsed')],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
});
/* harmony default export */ __webpack_exports__["default"] = (servicePlugin);

/***/ }),

/***/ "93be":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e6cf");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);

// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/api/hooks.html
// eslint-disable-next-line no-unused-vars
/* harmony default export */ __webpack_exports__["a"] = (name => {
  return async context => {
    // https://docs.feathersjs.com/guides/basics/hooks.html#hook-functions
    context.data[name] = new Date(); // if (!context.data[name]) {
    // }

    return context;
  };
});

/***/ }),

/***/ "a04f":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9523");
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _feathers_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2e40");

// https://vuex.feathersjs.com/getting-started.html#service-plugins


class Management extends _feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* BaseModel */ "a"] {
  // constructor(data, options) {
  //     super(data, options)
  // }
  // Required for $FeathersVuex plugin to work after production transpile.
  // Define default properties here
  // static instanceDefaults(data, { store, models }) {
  static instanceDefaults() {
    return {
      action: '',
      params: {}
    };
  }

  static sendAction(action, servicePath, params) {
    console.log('sendAction');
    const data = {
      action: action,
      service: servicePath,
      params: params
    };
    const instance = new Management(data);
    let result = null;
    result = instance.create(); // instance.create().then(
    //     (response) => { result = response }
    // ).catch(
    //     (error) => { result = error }
    // )

    return result; // return new Management(data).create()
  }

  static updateSerialDeviceList() {
    console.log('updateSerialDeviceList');
    return this.sendAction('update-serial-device-list', 'serial', {});
  }

  static serverExportAsCSV(servicePath, timeframe) {
    console.log('serverExportAsCSV');
    return this.sendAction('export-cvs', servicePath, {
      // paginate: false,
      // https://docs.feathersjs.com/api/databases/querying.html#equality
      query: {
        // timeframe: timeframe
        $sort: {
          createdAt: -1
        },
        $select: ['createdAt', 'cropText', 'placeText', 'weight', 'crateTareWeight', 'scaleUnit' // 'crate',
        // 'crop',
        // 'place',
        ]
      }
    });
  }

  static serverImport(servicePath) {
    console.log('serverImport');
    return this.sendAction('import-from-file', servicePath, {});
  }

  static removeDBFile(servicePath) {
    console.log('removeDBFile');
    return this.sendAction('remove-db-file', servicePath, {});
  }

  static serverSystemAction(action) {
    console.log('serverSystemAction');
    return this.sendAction('server-system-action', 'management', {
      action: action
    });
  }

  static gitPull() {
    console.log('gitPull');
    return this.sendAction('git-pull', 'management', {});
  } // static removeDB (servicePath) {
  //     console.log('removeDB')
  //     const service = this.app.services[servicePath]
  //     console.log('service', service)
  //     // return this.sendAction(
  //     //     'remove-db-file',
  //     //     servicePath,
  //     //     {}
  //     // )
  // }


}

_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(Management, "modelName", 'Management');

const servicePath = 'management';
const servicePlugin = Object(_feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* makeServicePlugin */ "d"])({
  Model: Management,
  service: _feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"].service(servicePath),
  servicePath,
  debug: true
}); // Setup the client-side Feathers hooks.

_feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"].service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
});
/* harmony default export */ __webpack_exports__["default"] = (servicePlugin);

/***/ }),

/***/ "abf3":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9523");
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _feathers_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2e40");

// https://vuex.feathersjs.com/getting-started.html#service-plugins


class GlobalConfig extends _feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* BaseModel */ "a"] {
  // constructor(data, options) {
  //     super(data, options)
  // }
  // Required for $FeathersVuex plugin to work after production transpile.
  // Define default properties here
  static instanceDefaults() {
    return {
      // name: 'Hello',
      value: null // description: 'Summer!'

    };
  }

}

_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(GlobalConfig, "modelName", 'GlobalConfig');

const servicePath = 'global-config';
const servicePlugin = Object(_feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* makeServicePlugin */ "d"])({
  Model: GlobalConfig,
  service: _feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"].service(servicePath),
  servicePath,
  // https://vuex.feathersjs.com/service-plugin.html#configuration
  // idField: 'name',
  // tempIdField: '__name',
  debug: true
}); // Setup the client-side Feathers hooks.

_feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"].service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
});
/* harmony default export */ __webpack_exports__["default"] = (servicePlugin);

/***/ }),

/***/ "d046":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return childrenCommon; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return childrenDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return childrenWizard; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return childrenDev; });
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("e6cf");
/* harmony import */ var core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es_promise__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("ddb0");
/* harmony import */ var core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_collections_iterator__WEBPACK_IMPORTED_MODULE_1__);


const childrenCommon = [{
  title: 'Welcome',
  icon: 'home',
  path: '/',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(13)]).then(__webpack_require__.bind(null, "8b24"))
}, {
  title: 'About',
  icon: 'mdi-information-variant',
  path: 'about',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(14)]).then(__webpack_require__.bind(null, "a1d1"))
}, {
  title: 'Settings',
  icon: 'settings',
  path: 'settings',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(8)]).then(__webpack_require__.bind(null, "b41f"))
}];
const childrenDebug = [{
  title: 'Debug',
  icon: 'mdi-bug',
  path: 'debug',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(2)]).then(__webpack_require__.bind(null, "9bd8"))
}];
const childrenWizard = [{
  title: 'Select Crate',
  icon: 'aspect_ratio',
  path: 'select_crate',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(10)]).then(__webpack_require__.bind(null, "0008"))
}, {
  title: 'Select Crop',
  icon: 'local_florist',
  path: 'select_crop',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(11)]).then(__webpack_require__.bind(null, "632c"))
}, {
  title: 'Select Place',
  icon: 'place',
  path: 'select_place',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(12)]).then(__webpack_require__.bind(null, "3cc9"))
}, {
  title: 'Save Harvest',
  icon: 'save_alt',
  path: 'save_harvest',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(7)]).then(__webpack_require__.bind(null, "dff9"))
}];
const childrenDev = [{
  title: 'Dev0',
  icon: 'code',
  path: 'dev0',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(4)]).then(__webpack_require__.bind(null, "a4ed"))
}, {
  title: 'Dev1',
  icon: 'code',
  path: 'dev1',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(3)]).then(__webpack_require__.bind(null, "2399"))
}, {
  title: 'Dev2Layout',
  icon: 'code',
  path: 'dev2_Layout',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(9)]).then(__webpack_require__.bind(null, "44dc"))
}, {
  title: 'DevList',
  icon: 'code',
  path: 'dev_list',
  component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(5)]).then(__webpack_require__.bind(null, "9287"))
}];

const routes = function ({
  store
}) {
  return [// {
  //     path: '/dev/',
  //     name: 'develop',
  //     component: () => import('layouts/DevLayout.vue'),
  //     children: [
  //         ...childrenCommon,
  //         ...childrenWizard,
  //         ...childrenDev
  //     ]
  // },
  {
    path: '/',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(6)]).then(__webpack_require__.bind(null, "1114")),
    children: [...childrenCommon, ...childrenDebug, ...childrenWizard, ...childrenDev]
  }, // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => Promise.all(/* import() */[__webpack_require__.e(0), __webpack_require__.e(15)]).then(__webpack_require__.bind(null, "e51e"))
  }];
};

/* harmony default export */ __webpack_exports__["e"] = (routes);

/***/ }),

/***/ "dd4d":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__("9523");
/* harmony import */ var _home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _feathers_client__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__("2e40");

// https://vuex.feathersjs.com/getting-started.html#service-plugins


class Crate extends _feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* BaseModel */ "a"] {
  // constructor(data, options) {
  //     super(data, options)
  // }
  // Required for $FeathersVuex plugin to work after production transpile.
  // Define default properties here
  // static instanceDefaults(data, { store, models }) {
  static instanceDefaults() {
    return {
      tareWeight: 0,
      _id: '',
      name: '',
      icon: '',
      image: '',
      description: ''
    };
  }

}

_home_stefan_mydata_github_quasar_web_harvest_log_app_node_modules_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(Crate, "modelName", 'Crate');

const servicePath = 'crate';
const servicePlugin = Object(_feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* makeServicePlugin */ "d"])({
  Model: Crate,
  service: _feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"].service(servicePath),
  servicePath,
  debug: true
}); // Setup the client-side Feathers hooks.

_feathers_client__WEBPACK_IMPORTED_MODULE_1__[/* default */ "c"].service(servicePath).hooks({
  before: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },
  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
});
/* harmony default export */ __webpack_exports__["default"] = (servicePlugin);

/***/ })

/******/ });
//# sourceMappingURL=app.4969d3e8.js.map