(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{"302e":function(e,t,n){var o={"./de":["215a",0],"./de.js":["215a",0],"./en-us":["1f91"],"./en-us.js":["1f91"]};function r(e){if(!n.o(o,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=o[e],r=t[0];return Promise.all(t.slice(1).map(n.e)).then((function(){return n(r)}))}r.keys=function(){return Object.keys(o)},r.id="302e",e.exports=r},"49c4":function(e,t,n){"use strict";n("c266")},"644c":function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"c",(function(){return i})),n.d(t,"f",(function(){return s})),n.d(t,"g",(function(){return c})),n.d(t,"e",(function(){return a})),n.d(t,"d",(function(){return l})),n.d(t,"h",(function(){return u})),n.d(t,"a",(function(){return d})),n.d(t,"i",(function(){return p}));n("ddb0");var o=n("b489");function r(){this.serverImport("crate"),this.serverImport("crop"),this.serverImport("crop-filter")}function i(){this.removeDB("crate"),this.removeDB("crop"),this.removeDB("crop-filter")}function s(e,t){console.group("serverExportToCSV"),this.$q.notify({color:"info",message:`Export ${e} as CSV on server. Processing now.`,icon:"info"}),this.$FeathersVuex.api.Management.serverExportAsCSV(e,t).then(t=>{console.log("serverImport: ",t),this.$q.notify({color:"positive",message:e+" done.",icon:"info"})}).catch(t=>{console.error("serverImport:",t),this.$q.notify({color:"negative",message:e+" loading failed.",icon:"report_problem"})}),console.groupEnd()}function c(e){console.group("serverImport"),this.$q.notify({color:"info",message:`Import ${e} from server. Processing now.`,icon:"info"}),this.$FeathersVuex.api.Management.serverImport(e).then(t=>{console.log("serverImport: ",t),this.$q.notify({color:"positive",message:e+" done.",icon:"info"})}).catch(t=>{console.error("serverImport:",t),this.$q.notify({color:"negative",message:e+" loading failed.",icon:"report_problem"})}),console.groupEnd()}function a(e){console.group("removeDBFile"),this.$q.notify({color:"info",message:`remove ${e} db from server. Processing now.`,icon:"info"}),this.$FeathersVuex.api.Management.removeDBFile(e).then(t=>{console.log("removeDBFile: ",t),this.$q.notify({color:"positive",message:e+" done.",icon:"info"})}).catch(t=>{console.error("removeDBFile:",t),this.$q.notify({color:"negative",message:e+" removing failed.",icon:"report_problem"})}),console.groupEnd()}function l(e){console.group("removeDB",e),this.$q.notify({color:"info",message:`remove all entries from ${e}. Processing now.`,icon:"info"});const t=this[Object(o.b)(e)];for(var n of(console.log("serviceStore",t),t))console.log(n),n.remove();this.$q.notify({color:"positive",message:e+" done.",icon:"info"}),console.groupEnd()}function u(e){console.group("serverSystemAction",e),this.$q.notify({color:"info",message:`initiated server system action '${e}'`,icon:"info"}),this.$FeathersVuex.api.Management.serverShutdown().then(t=>{console.log("serverSystemAction: ",t),this.$q.notify({color:"positive",message:`server system action '${e}' running. \n '${t}'`,icon:"info"})}).catch(t=>{console.error("serverShutdown:",t),this.$q.notify({color:"negative",message:`'${e}' failed. '${t}'`,icon:"report_problem"})}),console.groupEnd()}function d(){console.group("gitPull"),this.$q.notify({color:"info",message:"pull software updates",icon:"info"}),this.$FeathersVuex.api.Management.gitPull().then(e=>{console.log("gitPull: ",e),this.$q.notify({color:"positive",message:`gitPull successful. '${e}'`,icon:"info"})}).catch(e=>{console.error("gitPull:",e),this.$q.notify({color:"negative",message:`gitPull failed. '${e}'`,icon:"report_problem"})}),console.groupEnd()}function p(){this.$store.dispatch("localconfig/startScaleDemo").then(e=>{console.log("startScaleDemo: ",e),this.$q.notify({color:"positive",message:"startScaleDemo done.",icon:"info"})}).catch(e=>{console.error("startScaleDemo:",e),this.$q.notify({color:"negative",message:"startScaleDemo failed.",icon:"report_problem"})})}},"8b93":function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));n("fb6a"),n("ddb0");var o=n("2f62");const r=function(e,t){const n=Object(o.b)(e,t),r={};for(const[t,o]of Object.entries(n))r[t]={get:o},r[t].set=function(n){const o="set"+((r=t).charAt(0).toUpperCase()+r.slice(1));var r;this.$store.commit(e+"/"+o,n)};return r}},"91e5":function(e,t,n){"use strict";var o={props:{obj:{default:function(){return{}}},label:{type:String,default:""}},data:()=>({}),filters:{pretty:function(e){let t=e;try{t=JSON.parse(e)}catch(e){}return JSON.stringify(t,null,4)}}},r=(n("49c4"),n("2877")),i=Object(r.a)(o,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"debug"},[t("label",[this._v(this._s(this.label))]),t("pre",[this._v(this._s(this._f("pretty")(this.obj)))])])}),[],!1,null,null,null);t.a=i.exports},b41f:function(e,t,n){"use strict";n.r(t);var o=n("ded3"),r=n.n(o),i=n("9e62"),s=n("8b93"),c=n("91e5");n("e6cf");const a=n("a6d8").filter(e=>["de","en-us"].includes(e.isoName));var l={name:"langSelect",data(){return{lang:this.$q.lang.isoName,langI18n:this.$i18n.locale}},watch:{lang(e){n("302e")("./"+e).then(e=>{this.$q.lang.set(e.default)}),this.$i18n.locale=e}},created(){this.langOptions=a.map(e=>({label:e.nativeName,value:e.isoName}))}},u=n("2877"),d=n("ddd8"),p=n("eebe"),m=n.n(p),f=Object(u.a)(l,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("q-select",{staticClass:"q-mr-md",attrs:{rounded:"",outlined:"",label:"Quasar Language","emit-value":"",options:e.langOptions,"map-options":""},model:{value:e.lang,callback:function(t){e.lang=t},expression:"lang"}})}),[],!1,null,null,null),v=f.exports;m()(f,"components",{QSelect:d.a});var b=n("b489");const g={vendorId:-1,productId:-1,comName:"/dummyResponder/0",pnpId:-1,locationId:-1,serialNumber:"42",manufacturer:"s-light.eu",product:"dummyResponder",release:void 0,interface:void 0,usagePage:void 0,usage:void 0};var h={data:()=>({deviceSelected:{},deviceList:[g]}),components:{DebugSection:c.a},mixins:[Object(i.b)({service:"serial"})],computed:r()({serialParams:()=>({query:{}})},Object(b.a)("serial",["list","port","baudRate","connected"])),methods:{updateSerialDeviceList:function(){console.group("serverExportToCSV");this.$q.notify({color:"info",message:"update serial device list. Processing now.",icon:"info"}),this.$FeathersVuex.api.Management.updateSerialDeviceList().then(e=>{console.log("updateSerialDeviceList: ",e),this.$q.notify({color:"positive",message:"serial done.",icon:"info"})}).catch(e=>{console.error("updateSerialDeviceList:",e),this.$q.notify({color:"negative",message:"serial update failed.",icon:"report_problem"})}),console.groupEnd()},connect:function(){console.log("deviceSelected",this.deviceSelected)}},mounted:function(){this.deviceSelected=this.deviceList[0]},name:"SettingsSerial"},S=n("9989"),q=n("66e5"),y=n("4074"),$=n("0170"),_=n("9c40"),x=n("9569"),k=n("cf57"),w=n("0016"),D=Object(u.a)(h,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"fit column no-wrap justify-center items-center content-center"},[n("section",[n("h2",[e._v("Serial Settings")]),n("q-select",{staticClass:"q-mr-md",attrs:{rounded:"",outlined:"",label:"Device","option-label":function(e){return e.comName},"option-value":function(e){return e},options:e.deviceList},scopedSlots:e._u([{key:"option",fn:function(t){return[n("q-item",e._g(e._b({},"q-item",t.itemProps,!1),t.itemEvents),[n("q-item-section",[n("q-item-label",[e._v("\n                            "+e._s(t.opt.comName)+"\n                        ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n                            "+e._s(t.opt.pnpId)+"\n                        ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n                            "+e._s(t.opt.manufacturer)+"\n                        ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n                            vendorId:"+e._s(t.opt.vendorId)+"\n                        ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n                            productId:"+e._s(t.opt.productId)+"\n                        ")]),n("q-item-label",{attrs:{caption:""}},[e._v("\n                            serialNumber:"+e._s(t.opt.serialNumber)+"\n                        ")])],1)],1)]}},{key:"no-option",fn:function(){return[n("q-item",[n("q-item-section",[e._v("\n                        No Devices\n                    ")])],1)]},proxy:!0},{key:"append",fn:function(){return[n("q-btn",{attrs:{flat:"",round:"",dense:"",hint:"search devices",icon:"refresh"},on:{click:function(t){return e.updateSerialDeviceList()}},scopedSlots:e._u([{key:"loading",fn:function(){return[n("q-spinner-radio")]},proxy:!0}])})]},proxy:!0}]),model:{value:e.deviceSelected,callback:function(t){e.deviceSelected=t},expression:"deviceSelected"}}),n("q-btn",{style:{opacity:e.deviceSelected?"inherit":"0.05"},attrs:{rounded:"",icon:e.connected?"phonelink_off":"phonelink",label:e.connected?"disconnect":"connect",disable:!e.deviceSelected},on:{click:function(t){return e.connect()}},scopedSlots:e._u([{key:"loading",fn:function(){return[n("q-spinner-gears")]},proxy:!0},{key:"after",fn:function(){return[n("q-icon",{attrs:{name:"close"}})]},proxy:!0}])}),n("debugSection",{attrs:{label:"list",obj:e.list}}),n("debugSection",{attrs:{label:"port",obj:e.port}}),n("debugSection",{attrs:{label:"baudRate",obj:e.baudRate}}),n("debugSection",{attrs:{label:"serial",obj:e.serial}})],1)])}),[],!1,null,null,null),I=D.exports;m()(D,"components",{QPage:S.a,QSelect:d.a,QItem:q.a,QItemSection:y.a,QItemLabel:$.a,QBtn:_.a,QSpinnerRadio:x.a,QSpinnerGears:k.a,QIcon:w.a});var j=n("644c"),P={data:()=>({testthing:"hello world"}),computed:r()(r()({},Object(s.a)("localconfig",["btnSize","btnSpace","devMode"])),{},{globalConfigParams:()=>({query:{}}),crateParams:()=>({query:{$sort:{_id:1}}}),cropParams:()=>({query:{$sort:{_id:1}}}),cropFilterParams:()=>({query:{$sort:{_id:1}}})}),methods:{importAll:j.b,removeAll:j.c,serverExportToCSV:j.f,serverImport:j.g,removeDBFile:j.e,removeDB:j.d,serverSystemAction:j.h,gitPull:j.a,startScaleDemo:j.i},created:function(){},mixins:[Object(i.b)({service:"global-config"}),Object(i.b)({service:"crate"}),Object(i.b)({service:"crop"}),Object(i.b)({service:"crop-filter"})],components:{debugSection:c.a,langSelect:v,settingsSerial:I},name:"PageSettings"},O=n("9564"),N=n("27f9"),E=n("714f"),C=Object(u.a)(P,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("q-page",{staticClass:"fit column no-wrap justify-center items-center content-center"},[n("h1",[e._v(e._s(e.$t("global"))+" "+e._s(e.$t("settings")))]),n("section",[n("q-btn",{attrs:{round:"",color:e.$q.dark.isActive?"blue":"black",icon:"mdi-lightbulb-on-outline"},on:{click:function(t){return e.$q.dark.toggle()}}}),n("q-btn",{attrs:{flat:"",round:"",icon:e.$q.dark.isActive?"brightness_2":"brightness_5"},on:{click:function(t){return e.$q.dark.toggle()}}}),n("langSelect")],1),n("section",[n("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:"export harvest to csv on server",icon:"mdi-database-export"},on:{click:function(t){return e.serverExportToCSV("harvest","current_day")}}}),n("br"),n("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:"import config from files",icon:"mdi-database-export"},on:{click:function(t){return e.importAll()}}}),n("br"),n("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:"remove config database entries",icon:"mdi-database-export"},on:{click:function(t){return e.removeAll()}}}),n("br"),n("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:"shutdown server",icon:"mdi-database-export"},on:{click:function(t){return e.serverSystemAction("shutdown")}}}),n("br"),n("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:"reboot server",icon:"mdi-database-export"},on:{click:function(t){return e.serverSystemAction("reboot")}}}),n("br"),n("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:"pull software updates",icon:"mdi-database-export"},on:{click:function(t){return e.gitPull()}}}),n("br"),n("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:"start Scale Demo Generator ",icon:"mdi-database-export"},on:{click:function(t){return e.startScaleDemo()}}}),n("br")],1),n("section",[n("q-toggle",{attrs:{size:"lg",label:"Dev Mode"},model:{value:e.devMode,callback:function(t){e.devMode=t},expression:"devMode"}})],1),n("section",[n("q-input",{attrs:{filled:"",label:"button size (mm)",type:"number",debounce:"500"},model:{value:e.btnSize,callback:function(t){e.btnSize=e._n(t)},expression:"btnSize"}}),n("q-input",{attrs:{filled:"",label:"button spaceing (mm)",type:"number",debounce:"500"},model:{value:e.btnSpace,callback:function(t){e.btnSpace=e._n(t)},expression:"btnSpace"}})],1),n("settingsSerial"),n("debugSection",{attrs:{label:"testthing",obj:e.testthing}})],1)}),[],!1,null,null,null);t.default=C.exports;m()(C,"components",{QPage:S.a,QBtn:_.a,QToggle:O.a,QInput:N.a}),m()(C,"directives",{Ripple:E.a})},b489:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l}));n("fb6a"),n("e6cf"),n("ddb0");var o=n("2b0e"),r=n("9e62"),i=n("2e40");function s(e){return e.charAt(0).toLowerCase()+e.slice(1)}function c(e){let t=e.split("-");t=t.map(e=>{return(t=e).charAt(0).toUpperCase()+t.slice(1);var t});return t.join("")}function a(e){return s(c(e))}const l=function(e,t){const n={},a={},l=c(e),u=i.e.api[l],d=s(l),p={};o.default.set(p,"gcList",{}),n[d]={get:function(){return p.gcList}};for(const e of t)a[e]={get:function(){return null},set:function(e){}};u.find({query:{},paginate:!1}).then(e=>{for(const t of e.data)p.gcList[t.id]=t}).catch(e=>{console.error(e.type,e.message)});for(const n of t){let t=Object(r.d)({model:u,id:n,_id:n}).item.value;if(!t){const o={id:n,_id:n,value:null};t=new u(o),t.create().catch(t=>{console.error("mapBindIDItems: create - ",t.type,t.message),console.log("→ manually commit mutation *addItem*"),u.store.commit(e+"/addItem",o)})}const o=t.clone();a[n].get=function(){return o.value},a[n].set=function(e){o.value=e,o.commit(),t.patch({data:{value:e}})}}return Object.assign({},n,a)}},c266:function(e,t,n){}}]);
//# sourceMappingURL=2.1bfc9a84.js.map