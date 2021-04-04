(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"644c":function(e,t,o){"use strict";o.d(t,"b",(function(){return r})),o.d(t,"c",(function(){return s})),o.d(t,"f",(function(){return i})),o.d(t,"g",(function(){return a})),o.d(t,"e",(function(){return c})),o.d(t,"d",(function(){return l})),o.d(t,"h",(function(){return u})),o.d(t,"a",(function(){return m})),o.d(t,"i",(function(){return p}));o("ddb0");var n=o("b489");function r(){this.serverImport("crate"),this.serverImport("crop"),this.serverImport("crop-filter")}function s(){this.removeDB("crate"),this.removeDB("crop"),this.removeDB("crop-filter")}function i(e,t){console.group("serverExportToCSV"),this.$q.notify({color:"info",message:`Export ${e} as CSV on server. Processing now.`,html:!0}),this.$FeathersVuex.api.Management.serverExportAsCSV(e,t).then(t=>{console.log("serverImport: ",t),this.$q.notify({type:"positive",message:e+" done.",html:!0})}).catch(t=>{console.error("serverImport:",t),this.$q.notify({type:"negative",message:e+" loading failed.",html:!0})}),console.groupEnd()}function a(e){console.group("serverImport"),this.$q.notify({color:"info",message:`Import ${e} from server. Processing now.`,html:!0}),this.$FeathersVuex.api.Management.serverImport(e).then(t=>{console.log("serverImport: ",t),this.$q.notify({type:"positive",message:e+" done.",html:!0})}).catch(t=>{console.error("serverImport:",t),this.$q.notify({type:"negative",message:e+" loading failed.",html:!0})}),console.groupEnd()}function c(e){console.group("removeDBFile"),this.$q.notify({color:"info",message:`remove ${e} db from server. Processing now.`,html:!0}),this.$FeathersVuex.api.Management.removeDBFile(e).then(t=>{console.log("removeDBFile: ",t),this.$q.notify({type:"positive",message:e+" done.",html:!0})}).catch(t=>{console.error("removeDBFile:",t),this.$q.notify({type:"negative",message:e+" removing failed.",html:!0})}),console.groupEnd()}function l(e){console.group("removeDB",e),this.$q.notify({color:"info",message:`remove all entries from ${e}. Processing now.`,html:!0});const t=this[Object(n.b)(e)];for(var o of(console.log("serviceStore",t),t))console.log(o),o.remove();this.$q.notify({type:"positive",message:e+" done.",html:!0}),console.groupEnd()}function u(e){console.group("serverSystemAction",e),this.$q.notify({color:"info",message:`initiated server system action '${e}'`,html:!0}),this.$FeathersVuex.api.Management.serverSystemAction(e).then(t=>{console.log("serverSystemAction: ",t);let o="";if(t.result)if(Array.isArray(t.result))for(const e of t.result)o+="\n"+e.stdout;else o=t.result.stdout;console.log("resultMessage: ",o);let n=`server system action '${e}' done.`;o&&(n+=`\n<br> '${o}'`),this.$q.notify({type:"positive",message:n,html:!0})}).catch(t=>{console.error("serverSystemAction:\n",t),this.$q.notify({type:"negative",message:`'${e}' failed. \n<br> '${t}'`,html:!0})}),console.groupEnd()}function m(){console.group("gitPull"),this.$q.notify({color:"info",message:"pull software updates",html:!0}),this.$FeathersVuex.api.Management.gitPull().then(e=>{console.log("gitPull: ",e);let t="";if(e.result)if(Array.isArray(e.result))for(const o of e.result)for(const e of o.stdout)t+=e+"\n<br>";else t=e.result.stdout;console.log("resultMessage: ",t);let o="'gitPull' successful.";t&&(o+="\n<br> "+t),console.log("message: ",o),this.$q.notify({type:"positive",message:o,html:!0})}).catch(e=>{console.error("gitPull",": ",e),this.$q.notify({type:"negative",message:`'gitPull' failed. \n<br> '${e}'`,html:!0})}),console.groupEnd()}function p(){this.$store.dispatch("localconfig/startScaleDemo").then(e=>{console.log("startScaleDemo: ",e),this.$q.notify({type:"positive",message:"startScaleDemo done.",html:!0})}).catch(e=>{console.error("startScaleDemo:",e),this.$q.notify({type:"negative",message:"startScaleDemo failed.",html:!0})})}},"8b93":function(e,t,o){"use strict";o.d(t,"a",(function(){return r}));o("fb6a"),o("ddb0");var n=o("2f62");const r=function(e,t){const o=Object(n.b)(e,t),r={};for(const[t,n]of Object.entries(o))r[t]={get:n},r[t].set=function(o){const n="set"+((r=t).charAt(0).toUpperCase()+r.slice(1));var r;this.$store.commit(e+"/"+n,o)};return r}},b41f:function(e,t,o){"use strict";o.r(t);var n=o("ded3"),r=o.n(n),s=o("d046"),i=o("9e62"),a=o("8b93"),c=(o("e6cf"),o("18d6"));const l=o("a6d8").filter(e=>["de","en-us"].includes(e.isoName));var u={name:"langSelect",data(){return{lang:this.$q.lang.isoName,langI18n:this.$i18n.locale}},watch:{lang(e){o("302e")("./"+e).then(e=>{this.$q.lang.set(e.default)}),this.$i18n.locale=e;try{c.a.set("language",e)}catch(e){console.error(e)}}},created(){this.langOptions=l.map(e=>({label:e.nativeName,value:e.isoName}))}},m=o("2877"),p=o("ddd8"),d=o("eebe"),f=o.n(d),g=Object(m.a)(u,(function(){var e=this,t=e.$createElement;return(e._self._c||t)("q-select",{attrs:{rounded:"",outlined:"",label:"Quasar Language","emit-value":"",options:e.langOptions,"map-options":""},model:{value:e.lang,callback:function(t){e.lang=t},expression:"lang"}})}),[],!1,null,null,null),h=g.exports;f()(g,"components",{QSelect:p.a});var v=o("644c"),b={data:()=>({childrenDebug:s.b,databaseManagementOptionsShow:!1,testthing:"hello world"}),computed:r()(r()({},Object(a.a)("localconfig",["btnSize","btnSpace","devMode"])),{},{globalConfigParams:()=>({query:{}}),crateParams:()=>({query:{$sort:{_id:1}}}),cropParams:()=>({query:{$sort:{_id:1}}}),cropFilterParams:()=>({query:{$sort:{_id:1}}})}),methods:{importAll:v.b,removeAll:v.c,serverExportToCSV:v.f,serverSystemAction:v.h,gitPull:v.a},created:function(){},mixins:[Object(i.b)({service:"global-config"}),Object(i.b)({service:"crate"}),Object(i.b)({service:"crop"}),Object(i.b)({service:"crop-filter"})],components:{langSelect:h},name:"PageSettings"},y=o("9989"),$=o("9c40"),q=o("9564"),S=o("714f"),w=Object(m.a)(b,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"fit column no-wrap justify-center items-center content-center"},[o("h1",[e._v(e._s(e.$t("global"))+" "+e._s(e.$t("settings")))]),o("section",{staticClass:"text-center"},[o("q-btn",{staticClass:"q-my-md",staticStyle:{"margin-right":"0"},attrs:{round:"",color:e.$q.dark.isActive?"blue":"black",icon:"mdi-lightbulb-on-outline"},on:{click:function(t){return e.$q.dark.toggle()}}}),o("langSelect",{staticClass:"q-my-md",staticStyle:{"min-width":"8em"}})],1),o("section",[o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:e.$t("database_harvest_export_csv"),icon:"mdi-database-export"},on:{click:function(t){return e.serverExportToCSV("harvest","current_day")}}}),o("br"),o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:e.$t("copy_csv_to_usb"),icon:"mdi-usb-flash-drive"},on:{click:function(t){return e.serverSystemAction("copyCSVtoUSB")}}}),o("br"),o("q-toggle",{attrs:{size:"xl",label:e.$t("database_management_options_show")},model:{value:e.databaseManagementOptionsShow,callback:function(t){e.databaseManagementOptionsShow=t},expression:"databaseManagementOptionsShow"}}),o("br"),e.databaseManagementOptionsShow?o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:e.$t("copy_config_from_usb"),icon:"mdi-usb-flash-drive"},on:{click:function(t){return e.serverSystemAction("copyConfigFromUSB")}}}):e._e(),o("br"),e.databaseManagementOptionsShow?o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:e.$t("database_config_import_all"),icon:"mdi-database-import"},on:{click:function(t){return e.importAll()}}}):e._e(),o("br"),e.databaseManagementOptionsShow?o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:e.$t("database_config_clean"),icon:"mdi-database-remove"},on:{click:function(t){return e.removeAll()}}}):e._e(),o("br"),o("br"),o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:e.$t("pull_updates"),icon:"mdi-progress-download"},on:{click:function(t){return e.gitPull()}}}),o("br"),o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:e.$t("reboot_system"),icon:"mdi-restart"},on:{click:function(t){return e.serverSystemAction("reboot")}}}),o("br"),o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:e.$t("shutdown_system"),icon:"mdi-power"},on:{click:function(t){return e.serverSystemAction("shutdown")}}}),o("br"),o("br"),o("router-link",{attrs:{to:e.childrenDebug[0].path,exact:""},scopedSlots:e._u([{key:"default",fn:function(t){t.href,t.route;var n=t.navigate;return[[o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{clickable:"",label:e.$t("information")+" "+e.$t("for")+" "+e.$t("developer"),icon:e.childrenDebug[0].icon},on:{click:n}})]]}}])})],1),o("section")])}),[],!1,null,null,null);t.default=w.exports;f()(w,"components",{QPage:y.a,QBtn:$.a,QToggle:q.a}),f()(w,"directives",{Ripple:S.a})},b489:function(e,t,o){"use strict";o.d(t,"b",(function(){return c})),o.d(t,"a",(function(){return l}));o("fb6a"),o("e6cf"),o("ddb0");var n=o("2b0e"),r=o("9e62"),s=o("2e40");function i(e){return e.charAt(0).toLowerCase()+e.slice(1)}function a(e){let t=e.split("-");t=t.map(e=>{return(t=e).charAt(0).toUpperCase()+t.slice(1);var t});return t.join("")}function c(e){return i(a(e))}const l=function(e,t){const o={},c={},l=a(e),u=s.e.api[l],m=i(l),p={};n.default.set(p,"gcList",{}),o[m]={get:function(){return p.gcList}};for(const e of t)c[e]={get:function(){return null},set:function(e){}};u.find({query:{},paginate:!1}).then(e=>{for(const t of e.data)p.gcList[t.id]=t}).catch(e=>{console.error(e.type,e.message)});for(const o of t){let t=Object(r.d)({model:u,id:o,_id:o}).item.value;if(!t){const n={id:o,_id:o,value:null};t=new u(n),t.create().catch(t=>{console.error("mapBindIDItems: create - ",t.type,t.message),console.log("→ manually commit mutation *addItem*"),u.store.commit(e+"/addItem",n)})}const n=t.clone();c[o].get=function(){return n.value},c[o].set=function(e){n.value=e,n.commit(),t.patch({data:{value:e}})}}return Object.assign({},o,c)}}}]);
//# sourceMappingURL=8.3e7d95bd.js.map