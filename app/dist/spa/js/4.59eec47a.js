(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{2399:function(e,t,o){"use strict";o.r(t);var r=o("ded3"),n=o.n(r),s=o("8b93"),a=o("91e5"),c=o("9e62"),i={data:()=>({}),components:{DebugSection:a.a},mixins:[Object(c.b)({service:"crop"}),Object(c.b)({service:"serial"})],computed:n()({serialParams:()=>({query:{}}),cropParams:()=>({query:{}})},Object(s.a)("localconfig",["totalWeight","scaleStable","scaleUnit"])),methods:{globalConfigLoadFromServer:function(){console.group("globalConfigLoadFromServer"),this.$axios.get("/config/crops/crop.json").then(e=>{console.log("response.data",e.data),this.$q.notify({color:"info",message:"Loaded config from server. Processing now.",icon:"info"}),this.$q.notify({color:"positive",message:"done.",icon:"info"})}).catch(()=>{this.$q.notify({color:"negative",message:"Loading failed",icon:"report_problem"})}),console.groupEnd()},serverExportToCSVHarvest:function(){console.group("serverExportToCSVHarvest"),this.$FeathersVuex.api.Management.serverExportAsCSV("harvest","day").then(e=>{console.log("response",e)}).catch(e=>{console.error("err",e)}),console.groupEnd()},serverImport:function(e){console.group("serverImport"),this.$FeathersVuex.api.Management.serverImport(e).then(e=>{console.log("response",e)}).catch(e=>{console.error("err",e)}),console.groupEnd()},startScaleDemo:function(){this.$store.dispatch("localconfig/startScaleDemo").then(e=>{console.log("startScaleDemo: ",e),this.$q.notify({color:"positive",message:"startScaleDemo done.",icon:"info"})}).catch(e=>{console.error("startScaleDemo:",e),this.$q.notify({color:"negative",message:"startScaleDemo failed.",icon:"report_problem"})})},stopScaleDemo:function(){this.$store.dispatch("localconfig/stopScaleDemo").then(e=>{console.log("stopScaleDemo: ",e),this.$q.notify({color:"positive",message:"stopScaleDemo done.",icon:"info"})}).catch(e=>{console.error("stopScaleDemo:",e),this.$q.notify({color:"negative",message:"stopScaleDemo failed.",icon:"report_problem"})})}},filters:{},name:"PageDev1"},l=o("2877"),p=o("9989"),u=o("9c40"),f=o("714f"),m=o("eebe"),b=o.n(m),g=Object(l.a)(i,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("q-page",{staticClass:"fit column no-wrap justify-center items-center content-center"},[o("h1",[e._v("Dev1")]),o("debugSection",{attrs:{label:"serial",obj:e.serial}}),o("section",[o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:"load from server",icon:"sync"},on:{click:function(t){return e.globalConfigLoadFromServer()}}}),o("br"),o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:"export harvest to csv on server",icon:"mdi-database-export"},on:{click:function(t){return e.serverExportToCSVHarvest()}}}),o("br"),o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:"start Scale Demo Generator ",icon:"mdi-clock-start"},on:{click:function(t){return e.startScaleDemo()}}}),o("br"),o("q-btn",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{label:"start Scale Demo Generator ",icon:"mdi-clock-end"},on:{click:function(t){return e.stopScaleDemo()}}}),o("br")],1),o("debugSection",{attrs:{label:"totalWeight",obj:e.totalWeight}}),o("debugSection",{attrs:{label:"scaleStable",obj:e.scaleStable}}),o("debugSection",{attrs:{label:"scaleUnit",obj:e.scaleUnit}})],1)}),[],!1,null,null,null);t.default=g.exports;b()(g,"components",{QPage:p.a,QBtn:u.a}),b()(g,"directives",{Ripple:f.a})},"49c4":function(e,t,o){"use strict";o("c266")},"8b93":function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));o("fb6a"),o("ddb0");var r=o("2f62");const n=function(e,t){const o=Object(r.b)(e,t),n={};for(const[t,r]of Object.entries(o))n[t]={get:r},n[t].set=function(o){const r="set"+((n=t).charAt(0).toUpperCase()+n.slice(1));var n;this.$store.commit(e+"/"+r,o)};return n}},"91e5":function(e,t,o){"use strict";var r={props:{obj:{default:function(){return{}}},label:{type:String,default:""}},data:()=>({}),filters:{pretty:function(e){let t=e;try{t=JSON.parse(e)}catch(e){}return JSON.stringify(t,null,4)}}},n=(o("49c4"),o("2877")),s=Object(n.a)(r,(function(){var e=this.$createElement,t=this._self._c||e;return t("section",{staticClass:"debug"},[t("label",[this._v(this._s(this.label))]),t("pre",[this._v(this._s(this._f("pretty")(this.obj)))])])}),[],!1,null,null,null);t.a=s.exports},c266:function(e,t,o){}}]);
//# sourceMappingURL=4.59eec47a.js.map